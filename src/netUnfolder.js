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

    const dualGraph = this.buildDualGraph(vertices3D, facesVerts);

    let bestResult = null;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      // Assign uniform random weights to dual edges
      const weightedEdges = dualGraph.edges.map(e => ({
        ...e,
        weight: Math.random()
      }));

      // Compute Minimum Spanning Tree via Kruskal's algorithm
      const treeEdges = this.computeKruskalMST(dualGraph.numFaces, weightedEdges);
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

          // Parent centroid in 2D
          const pCentroid = this.computeCentroid2D(pCoords2D);

          // Compute 2D rigid transform matching child hinge edge outward from parent
          const cGlobal2D = this.alignFaceHinge2D(cLocal2D, cV1Local, cV2Local, pV1Pos, pV2Pos, pCentroid);
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

    // Check centroid containment
    const cA = this.computeCentroid2D(faceA);
    const cB = this.computeCentroid2D(faceB);

    if (this.isPointInsidePolygon2D(cA[0], cA[1], faceB, tol) || this.isPointInsidePolygon2D(cB[0], cB[1], faceA, tol)) {
      return true;
    }

    return false;
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
    let inside = false;
    const len = poly.length;
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

    const get2DVertIdx = (x, y, tol = 1e-3) => {
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
