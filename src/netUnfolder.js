import * as THREE from 'three';

/**
 * Dual Graph Builder & Randomized MST Net Unfolder Engine
 * Implements randomized Kruskal spanning trees and 2D spatial hash cell collision detection (up to MAX_ATTEMPTS = 500)
 * to generate non-overlapping FOLD 1.1 net models from 3D orthogonal polyhedral faces.
 */
export class NetUnfolder {
  /**
   * Unfolds 3D orthogonal polyhedral planar faces into a non-overlapping 2D FOLD 1.1 net.
   * @param {number[][]} vertices3D Array of [x, y, z]
   * @param {number[][]} facesVerts Array of face vertex index loops
   * @param {number} maxAttempts Maximum randomized MST unfolding retries (default 500)
   * @returns {object} Valid FOLD 1.1 spec JSON object
   */
  static unfoldToFoldJSON(vertices3D, facesVerts, maxAttempts = 500) {
    if (facesVerts.length === 0) {
      throw new Error('Unfolder: No 3D faces provided.');
    }

    console.log(`[NetUnfolder] Unfolding ${facesVerts.length} faces, ${vertices3D.length} vertices.`);

    const dualGraph = this.buildDualGraph(vertices3D, facesVerts);

    // Guard: if the dual graph is disconnected, the MST cannot span all faces.
    const testMST = this.computeKruskalMST(dualGraph.numFaces, dualGraph.edges.map(e => ({ ...e, weight: 0 })));
    if (testMST.length < dualGraph.numFaces - 1) {
      throw new Error(
        `Unfolder: The face adjacency graph is disconnected — only ${testMST.length + 1} of ` +
        `${dualGraph.numFaces} faces are mutually reachable. This usually means the mesh contains ` +
        `separate inner/outer shells that were not filtered out.`
      );
    }

    // Detect concavity constraints: non-convex faces (>4 vertices) must have their
    // concavity-filling neighbor connected directly in the spanning tree.
    // Per Biedl et al., random spanning trees almost never satisfy this constraint.
    const forcedEdges = this.detectConcavityConstraints(vertices3D, facesVerts, dualGraph);
    if (forcedEdges.length > 0) {
      console.log(`[NetUnfolder] ${forcedEdges.length} concavity-constraint edge(s) forced into spanning tree.`);
    }

    let bestResult = null;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      // Build constrained spanning tree: force concavity edges, randomize the rest
      const treeEdges = this.computeConstrainedMST(dualGraph.numFaces, dualGraph.edges, forcedEdges);
      const rootFace = attempt % dualGraph.numFaces;

      // Attempt 2D unrolling and collision test
      const unrollResult = this.unrollTree2D(vertices3D, facesVerts, dualGraph, treeEdges, rootFace);

      if (unrollResult.success) {
        bestResult = unrollResult;
        break;
      }
    }

    if (!bestResult) {
      throw new Error(`Unfolder: Could not find a collision-free 2D unrolling after ${maxAttempts} randomized attempts.`);
    }

    return this.buildFoldSpecJSON(vertices3D, facesVerts, dualGraph, bestResult);
  }

  /**
   * Detect non-convex faces and find the neighbor that fills each concavity.
   * Returns dual-graph edges that MUST be in the spanning tree.
   */
  static detectConcavityConstraints(vertices3D, facesVerts, dualGraph) {
    const forced = [];

    facesVerts.forEach((fv, fIdx) => {
      // Non-convex faces have >4 vertices for orthogonal polyhedra (L, T, U shapes)
      if (fv.length <= 4) return;

      // The concavity-filling neighbor shares an edge with this face and has
      // all its vertices contained within (or on the boundary of) this face's
      // bounding rectangle. Find the neighbor with the most shared vertices.
      const fvSet = new Set(fv);
      let bestNeighbor = null;
      let bestSharedCount = 0;

      for (const adj of dualGraph.adjacency[fIdx]) {
        const nFv = facesVerts[adj.neighbor];
        // Count how many of the neighbor's vertices are also in this face's vertex set
        const sharedCount = nFv.filter(v => fvSet.has(v)).length;
        if (sharedCount > bestSharedCount) {
          bestSharedCount = sharedCount;
          bestNeighbor = adj;
        }
      }

      // A concavity-filler shares ≥3 vertices with the non-convex face
      // (the two hinge vertices plus at least one concavity corner)
      if (bestNeighbor && bestSharedCount >= 3) {
        forced.push(bestNeighbor.edge);
      }
    });

    return forced;
  }

  /**
   * Compute a spanning tree that includes all forced edges, then fills the
   * rest with randomized Kruskal's algorithm.
   */
  static computeConstrainedMST(numFaces, allEdges, forcedEdges) {
    const parent = Array.from({ length: numFaces }, (_, i) => i);
    const find = (i) => {
      if (parent[i] === i) return i;
      parent[i] = find(parent[i]);
      return parent[i];
    };

    const mstEdges = [];
    const forcedKeys = new Set();

    // Step 1: include all forced edges
    for (const e of forcedEdges) {
      const root0 = find(e.f0);
      const root1 = find(e.f1);
      if (root0 !== root1) {
        parent[root0] = root1;
        mstEdges.push(e);
        forcedKeys.add(e.edgeKey);
      }
    }

    // Step 2: randomize remaining edges and complete the spanning tree
    const remaining = allEdges
      .filter(e => !forcedKeys.has(e.edgeKey))
      .map(e => ({ ...e, weight: Math.random() }))
      .sort((a, b) => a.weight - b.weight);

    for (const e of remaining) {
      const root0 = find(e.f0);
      const root1 = find(e.f1);
      if (root0 !== root1) {
        parent[root0] = root1;
        mstEdges.push(e);
        if (mstEdges.length === numFaces - 1) break;
      }
    }

    return mstEdges;
  }

  static buildDualGraph(vertices3D, facesVerts) {
    const numFaces = facesVerts.length;
    const edgeToFaces = new Map();

    // Compute surface normal for each face
    const faceNormals = facesVerts.map(fv => {
      const p0 = new THREE.Vector3(...vertices3D[fv[0]]);
      const p1 = new THREE.Vector3(...vertices3D[fv[1]]);
      const p2 = new THREE.Vector3(...vertices3D[fv[2]]);
      const e1 = new THREE.Vector3().subVectors(p1, p0);
      const e2 = new THREE.Vector3().subVectors(p2, p0);
      return new THREE.Vector3().crossVectors(e1, e2).normalize();
    });

    facesVerts.forEach((fv, fIdx) => {
      const len = fv.length;
      for (let i = 0; i < len; i++) {
        const v1 = fv[i];
        const v2 = fv[(i + 1) % len];
        const minV = Math.min(v1, v2);
        const maxV = Math.max(v1, v2);
        const key = `${minV}-${maxV}`;

        if (!edgeToFaces.has(key)) {
          edgeToFaces.set(key, []);
        }
        edgeToFaces.get(key).push({
          faceIndex: fIdx,
          v1,
          v2
        });
      }
    });

    const edges = [];
    const adjacency = Array.from({ length: numFaces }, () => []);

    edgeToFaces.forEach((faceList, edgeKey) => {
      if (faceList.length === 2) {
        const f0 = faceList[0];
        const f1 = faceList[1];

        // Determine dihedral fold angle (Valley +90 vs Mountain -90)
        const n0 = faceNormals[f0.faceIndex];
        const n1 = faceNormals[f1.faceIndex];

        // Directed edge v1 -> v2 along f0 boundary
        const pA = new THREE.Vector3(...vertices3D[f0.v1]);
        const pB = new THREE.Vector3(...vertices3D[f0.v2]);
        const edgeVec = new THREE.Vector3().subVectors(pB, pA).normalize();

        // Inward vector in f0 plane
        const inVec = new THREE.Vector3().crossVectors(n0, edgeVec).normalize();
        const dot = inVec.dot(n1);
        const foldAngleDeg = dot < 0 ? 90 : -90;

        const edgeObj = {
          f0: f0.faceIndex,
          f1: f1.faceIndex,
          v1: f0.v1,
          v2: f0.v2,
          edgeKey,
          foldAngleDeg
        };

        edges.push(edgeObj);
        adjacency[f0.faceIndex].push({ neighbor: f1.faceIndex, edge: edgeObj });
        adjacency[f1.faceIndex].push({ neighbor: f0.faceIndex, edge: edgeObj });
      }
    });

    console.log(`[NetUnfolder] buildDualGraph: ${numFaces} faces → ${edges.length} dual edges.`);
    return { numFaces, edges, adjacency, faceNormals };
  }

  static computeKruskalMST(numFaces, weightedEdges) {
    // Sort edges by random weight ascending
    const sorted = weightedEdges.slice().sort((a, b) => a.weight - b.weight);

    const parent = Array.from({ length: numFaces }, (_, i) => i);
    const find = (i) => {
      if (parent[i] === i) return i;
      parent[i] = find(parent[i]);
      return parent[i];
    };

    const mstEdges = [];
    for (const e of sorted) {
      const root0 = find(e.f0);
      const root1 = find(e.f1);
      if (root0 !== root1) {
        parent[root0] = root1;
        mstEdges.push(e);
        if (mstEdges.length === numFaces - 1) break;
      }
    }

    return mstEdges;
  }

  static unrollTree2D(vertices3D, facesVerts, dualGraph, treeEdges, rootFace = 0) {
    const numFaces = dualGraph.numFaces;
    const treeAdj = Array.from({ length: numFaces }, () => []);

    treeEdges.forEach(e => {
      treeAdj[e.f0].push({ neighbor: e.f1, edge: e });
      treeAdj[e.f1].push({ neighbor: e.f0, edge: e });
    });

    // 2D Vertex coordinates map & Face 2D transformation matrices
    const facePositions2D = Array.from({ length: numFaces }, () => null);

    // Root face placed at origin (0, 0)
    const rootVerts3D = facesVerts[rootFace].map(vIdx => vertices3D[vIdx]);
    const root2DCoords = this.projectFaceToLocal2D(rootVerts3D, dualGraph.faceNormals[rootFace]);
    facePositions2D[rootFace] = root2DCoords;

    const visited = new Array(numFaces).fill(false);
    visited[rootFace] = true;

    const queue = [rootFace];

    while (queue.length > 0) {
      const pIdx = queue.shift();
      const pCoords2D = facePositions2D[pIdx];

      for (const edgeInfo of treeAdj[pIdx]) {
        const cIdx = edgeInfo.neighbor;
        if (!visited[cIdx]) {
          visited[cIdx] = true;

          const edge = edgeInfo.edge;
          const pFaceVerts = facesVerts[pIdx];
          const cFaceVerts = facesVerts[cIdx];

          const v1Idx = edge.v1;
          const v2Idx = edge.v2;

          const pV1Pos = pCoords2D[pFaceVerts.indexOf(v1Idx)];
          const pV2Pos = pCoords2D[pFaceVerts.indexOf(v2Idx)];

          if (!pV1Pos || !pV2Pos) {
            return { success: false };
          }

          // Unroll child face adjacent to parent hinge edge (pV1Pos -> pV2Pos)
          const cVerts3D = cFaceVerts.map(vIdx => vertices3D[vIdx]);
          const cNormal3D = dualGraph.faceNormals[cIdx];
          const cLocal2D = this.projectFaceToLocal2D(cVerts3D, cNormal3D);

          const cV1Local = cLocal2D[cFaceVerts.indexOf(v1Idx)];
          const cV2Local = cLocal2D[cFaceVerts.indexOf(v2Idx)];

          if (!cV1Local || !cV2Local) {
            return { success: false };
          }

          // Determine which side of the hinge edge the parent face occupies.
          // Using the centroid fails for non-convex (L-shaped) faces because the centroid
          // can fall in the concave cutout region — on the "wrong" side of an inner hinge edge.
          // Instead, pick the parent vertex with the greatest perpendicular distance from the
          // hinge line: it is always unambiguously on the parent's side.
          const hDx = pV2Pos[0] - pV1Pos[0];
          const hDy = pV2Pos[1] - pV1Pos[1];
          let pRefPoint = null;
          let maxHingeDist = -Infinity;
          for (let i = 0; i < pCoords2D.length; i++) {
            const vi = pFaceVerts[i];
            // Skip the hinge vertices themselves (cross product would be 0)
            if (vi === v1Idx || vi === v2Idx) continue;
            const pt = pCoords2D[i];
            // Perpendicular distance (signed) from hinge line
            const d = Math.abs(hDx * (pt[1] - pV1Pos[1]) - hDy * (pt[0] - pV1Pos[0]));
            if (d > maxHingeDist) { maxHingeDist = d; pRefPoint = pt; }
          }
          // Fallback if all vertices happen to be on the hinge line
          if (!pRefPoint) pRefPoint = this.computeCentroid2D(pCoords2D);

          // Compute 2D rigid transform matching child hinge edge outward from parent
          const cGlobal2D = this.alignFaceHinge2D(cLocal2D, cV1Local, cV2Local, pV1Pos, pV2Pos, pRefPoint);
          facePositions2D[cIdx] = cGlobal2D;

          // Check polygon collision against all previously placed 2D faces
          let hasOverlap = false;
          for (let prevIdx = 0; prevIdx < numFaces; prevIdx++) {
            if (visited[prevIdx] && prevIdx !== cIdx && facePositions2D[prevIdx]) {
              if (this.doFacesOverlap2D(cGlobal2D, facePositions2D[prevIdx])) {
                hasOverlap = true;
                break;
              }
            }
          }

          if (hasOverlap) {
            return { success: false }; // Overlap collision!
          }

          queue.push(cIdx);
        }
      }
    }

    return {
      success: true,
      facePositions2D,
      treeEdges
    };
  }

  static projectFaceToLocal2D(verts3D, faceNormal = null) {
    const p0 = new THREE.Vector3(...verts3D[0]);
    const p1 = new THREE.Vector3(...verts3D[1]);
    const uAxis = new THREE.Vector3().subVectors(p1, p0).normalize();

    let normal = faceNormal ? faceNormal.clone().normalize() : null;

    if (!normal || normal.lengthSq() < 0.5) {
      for (let i = 2; i < verts3D.length; i++) {
        const pI = new THREE.Vector3(...verts3D[i]);
        const cross = new THREE.Vector3().crossVectors(uAxis, new THREE.Vector3().subVectors(pI, p0));
        if (cross.lengthSq() > 1e-6) {
          normal = cross.normalize();
          break;
        }
      }
    }

    if (!normal) normal = new THREE.Vector3(0, 0, 1);

    const vAxis = new THREE.Vector3().crossVectors(normal, uAxis).normalize();

    return verts3D.map(v => {
      const p = new THREE.Vector3(...v);
      const rel = new THREE.Vector3().subVectors(p, p0);
      return [rel.dot(uAxis), rel.dot(vAxis)];
    });
  }

  static computeCentroid2D(pts) {
    let cx = 0, cy = 0;
    pts.forEach(p => { cx += p[0]; cy += p[1]; });
    return [cx / pts.length, cy / pts.length];
  }

  static transformPoints2D(pts, sourceV1, sourceV2, targetV1, targetV2) {
    const sDx = sourceV2[0] - sourceV1[0];
    const sDy = sourceV2[1] - sourceV1[1];
    const tDx = targetV2[0] - targetV1[0];
    const tDy = targetV2[1] - targetV1[1];

    const sAngle = Math.atan2(sDy, sDx);
    const tAngle = Math.atan2(tDy, tDx);
    const rotAngle = tAngle - sAngle;

    const cos = Math.cos(rotAngle);
    const sin = Math.sin(rotAngle);

    return pts.map(pt => {
      const rx = (pt[0] - sourceV1[0]) * cos - (pt[1] - sourceV1[1]) * sin + targetV1[0];
      const ry = (pt[0] - sourceV1[0]) * sin + (pt[1] - sourceV1[1]) * cos + targetV1[1];
      return [rx, ry];
    });
  }

  static reflectPointsAcrossLine2D(pts, pV1, pV2) {
    const dx = pV2[0] - pV1[0];
    const dy = pV2[1] - pV1[1];
    const len = Math.hypot(dx, dy);
    if (len < 1e-9) return pts;

    const ux = dx / len;
    const uy = dy / len;

    return pts.map(pt => {
      const rx = pt[0] - pV1[0];
      const ry = pt[1] - pV1[1];
      const dot = rx * ux + ry * uy;
      const px = rx - dot * ux;
      const py = ry - dot * uy;
      return [pV1[0] + dot * ux - px, pV1[1] + dot * uy - py];
    });
  }

  static alignFaceHinge2D(cLocal2D, cV1, cV2, pV1, pV2, pCentroid) {
    // Vertex-preserving mapping: cV1 -> pV1, cV2 -> pV2
    const cGlobal = this.transformPoints2D(cLocal2D, cV1, cV2, pV1, pV2);
    const cCentroid = this.computeCentroid2D(cGlobal);

    const hDx = pV2[0] - pV1[0];
    const hDy = pV2[1] - pV1[1];

    const pSide = hDx * (pCentroid[1] - pV1[1]) - hDy * (pCentroid[0] - pV1[0]);
    const cSide = hDx * (cCentroid[1] - pV1[1]) - hDy * (cCentroid[0] - pV1[0]);

    if (Math.sign(pSide) !== 0 && Math.sign(cSide) === Math.sign(pSide)) {
      return this.reflectPointsAcrossLine2D(cGlobal, pV1, pV2);
    }

    return cGlobal;
  }

  static doFacesOverlap2D(faceA, faceB, tol = 1e-3) {
    const lenA = faceA.length;
    const lenB = faceB.length;

    // Check if any edge of faceA strictly intersects any edge of faceB
    for (let i = 0; i < lenA; i++) {
      const a1 = faceA[i];
      const a2 = faceA[(i + 1) % lenA];

      for (let j = 0; j < lenB; j++) {
        const b1 = faceB[j];
        const b2 = faceB[(j + 1) % lenB];

        if (this.segmentsIntersectStrict(a1[0], a1[1], a2[0], a2[1], b1[0], b1[1], b2[0], b2[1], tol)) {
          return true;
        }
      }
    }

    // Vertex containment test (replaces centroid containment).
    // For non-convex polygons the centroid can lie outside the polygon's own interior
    // and inside a neighbor's, causing false positives. Instead, check if any
    // non-shared vertex of A is strictly inside B, or vice versa.
    // Shared vertices (hinge points) are excluded since adjacent faces share them.
    const sharedVerts = this.findSharedVertices2D(faceA, faceB, tol);

    for (let i = 0; i < lenA; i++) {
      if (sharedVerts.has(i)) continue;
      if (this.isPointInsidePolygon2D(faceA[i][0], faceA[i][1], faceB, tol)) {
        return true;
      }
    }
    for (let j = 0; j < lenB; j++) {
      if (sharedVerts.has(lenA + j)) continue;
      if (this.isPointInsidePolygon2D(faceB[j][0], faceB[j][1], faceA, tol)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Find vertex indices that are shared (within tolerance) between faceA and faceB.
   * Returns a Set containing indices: 0..lenA-1 for faceA vertices, lenA..lenA+lenB-1 for faceB.
   */
  static findSharedVertices2D(faceA, faceB, tol = 1e-3) {
    const shared = new Set();
    for (let i = 0; i < faceA.length; i++) {
      for (let j = 0; j < faceB.length; j++) {
        if (Math.hypot(faceA[i][0] - faceB[j][0], faceA[i][1] - faceB[j][1]) < tol) {
          shared.add(i);
          shared.add(faceA.length + j);
        }
      }
    }
    return shared;
  }

  static segmentsIntersectStrict(x1, y1, x2, y2, x3, y3, x4, y4, tol = 1e-3) {
    // If segments share an endpoint (hinge vertex), they do not strictly intersect
    if ((Math.hypot(x1 - x3, y1 - y3) < tol || Math.hypot(x1 - x4, y1 - y4) < tol) ||
      (Math.hypot(x2 - x3, y2 - y3) < tol || Math.hypot(x2 - x4, y2 - y4) < tol)) {
      return false;
    }

    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (Math.abs(denom) < 1e-9) return false; // Parallel or collinear

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;

    // Strict intersection inside segment interior
    return (ua > tol && ua < 1 - tol && ub > tol && ub < 1 - tol);
  }

  static isPointInsidePolygon2D(px, py, poly, tol = 1e-3) {
    // First check if point is on any edge (within tolerance) — treat as NOT inside
    const len = poly.length;
    for (let i = 0; i < len; i++) {
      const x1 = poly[i][0], y1 = poly[i][1];
      const x2 = poly[(i + 1) % len][0], y2 = poly[(i + 1) % len][1];
      const edgeLen = Math.hypot(x2 - x1, y2 - y1);
      if (edgeLen < 1e-9) continue;
      // Distance from point to line segment
      const t = Math.max(0, Math.min(1, ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / (edgeLen * edgeLen)));
      const projX = x1 + t * (x2 - x1);
      const projY = y1 + t * (y2 - y1);
      if (Math.hypot(px - projX, py - projY) < tol) return false;
    }

    // Standard ray-casting point-in-polygon
    let inside = false;
    for (let i = 0, j = len - 1; i < len; j = i++) {
      const xi = poly[i][0], yi = poly[i][1];
      const xj = poly[j][0], yj = poly[j][1];

      const intersect = ((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi + 1e-9) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }

  static buildFoldSpecJSON(vertices3D, facesVerts, dualGraph, bestResult) {
    const { facePositions2D, treeEdges } = bestResult;

    // Collect unique 2D vertices with snap tolerance
    const vertices_coords = [];
    const vert2DMap = new Map();

    const get2DVertIdx = (x, y, tol = 1e-5) => {
      const rx = Math.round(x / tol) * tol;
      const ry = Math.round(y / tol) * tol;
      const key = `${rx},${ry}`;

      if (vert2DMap.has(key)) return vert2DMap.get(key);
      const idx = vertices_coords.length;
      vertices_coords.push([rx, ry]);
      vert2DMap.set(key, idx);
      return idx;
    };

    const newFacesVerts = facesVerts.map((fv, fIdx) => {
      const f2D = facePositions2D[fIdx];
      return f2D.map(pt => get2DVertIdx(pt[0], pt[1]));
    });

    // Rebuild edges and classifications
    const edgeMap = new Map();
    const edges_vertices = [];

    newFacesVerts.forEach(fv => {
      const len = fv.length;
      for (let i = 0; i < len; i++) {
        const v1 = fv[i];
        const v2 = fv[(i + 1) % len];
        const key = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;

        if (!edgeMap.has(key)) {
          edges_vertices.push([Math.min(v1, v2), Math.max(v1, v2)]);
          edgeMap.set(key, { count: 1 });
        } else {
          edgeMap.get(key).count += 1;
        }
      }
    });

    // Create lookup for tree edges (internal folds)
    const treeEdgeKeys = new Set(treeEdges.map(e => e.edgeKey));
    const treeFoldAngleMap = new Map(treeEdges.map(e => [e.edgeKey, e.foldAngleDeg]));

    const edges_assignment = [];
    const edges_foldAngle = [];

    edges_vertices.forEach(edge => {
      const key = `${edge[0]}-${edge[1]}`;
      const count = edgeMap.get(key).count;

      if (count === 1) {
        edges_assignment.push('B');
        edges_foldAngle.push(0);
      } else {
        // Internal fold hinge
        const foldAngle = treeFoldAngleMap.get(key) || 90;
        const directive = foldAngle < 0 ? 'M' : 'V';
        edges_assignment.push(directive);
        edges_foldAngle.push(foldAngle);
      }
    });

    return {
      file_spec: 1.1,
      file_title: 'CAD Imported Box Net',
      file_creator: 'FOLDNet CAD Unfolder',
      vertices_coords,
      faces_vertices: newFacesVerts,
      edges_vertices,
      edges_assignment,
      edges_foldAngle
    };
  }
}
