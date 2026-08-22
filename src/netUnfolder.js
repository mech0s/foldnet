import * as THREE from 'three';

/**
 * Dual Graph Builder & Grid Unfolder Engine
 * 
 * ============================================================================
 * THEORY: GRID UNFOLDING OF ORTHOGONAL POLYHEDRA (Demaine et al.)
 * ============================================================================
 * 
 * The problem of unfolding an orthogonal polyhedron (where all faces and edges 
 * meet at 90-degree angles) into a single, non-overlapping planar net is a 
 * fundamental challenge in computational geometry. 
 * 
 * Standard "Edge Unfolding" (cutting only along existing edges of the polyhedron) 
 * is known to be strongly NP-complete for general orthogonal polyhedra. It is 
 * not always possible to find an edge unfolding that does not self-intersect.
 * 
 * To guarantee a non-overlapping unfolding, Erik Demaine, Mirela Damian, and 
 * Robin Flatland introduced "Grid Unfolding":
 * Slicing the orthogonal polyhedron with coordinate planes passing through every 
 * vertex subdivides faces into 2D convex rectangular grid cells.
 * 
 * Unfolding Algorithm Steps:
 * 1. Precondition: All faces are 2D convex rectangles aligned to principal axes (handled in CADParser).
 * 2. Dual Graph Construction: Identify face-to-face adjacency across shared grid edges, computing surface normals and dihedral fold angles (+90° valley, -90° mountain, 0° flat).
 * 3. Constrained Spanning Tree: Build a spanning tree over the dual graph (e.g. randomized Kruskal MST).
 * 4. 2D Coordinate Unrolling: Recursively place faces in 2D by rotating rigidly across parent hinge lines.
 * 5. Overlap Collision Check: Verify no 2D polygon overlaps exist; retry with alternative spanning trees if collisions occur.
 * 6. FOLD Spec JSON Export: Translate 2D unrolled coordinates, face vertex loops, and spanning tree hinge fold angles into FOLD 1.1 JSON format.
 */
export class NetUnfolder {
  /**
   * Mulberry32 Seeded Pseudo-Random Number Generator
   * Produces a deterministic sequence of random floats in [0, 1) for a given integer seed.
   */
  static createPRNG(seed) {
    let s = (seed >>> 0) || 1;
    return function() {
      s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Unfolds 3D orthogonal polyhedral planar faces into a non-overlapping 2D FOLD 1.1 net.
   * @param {number[][]} vertices3D Array of [x, y, z]
   * @param {number[][]} facesVerts Array of face vertex index loops
   * @param {number|Function} seed PRNG seed integer (default 1) or custom RNG function
   * @param {number} maxAttempts Maximum randomized MST unfolding retries (default 500)
   * @returns {object} Valid FOLD 1.1 spec JSON object
   */
  static unfoldToFoldJSON(vertices3D, facesVerts, seed = 1, maxAttempts = 500) {
    if (facesVerts.length === 0) {
      throw new Error('Unfolder: No 3D faces provided.');
    }

    const rng = typeof seed === 'function' ? seed : this.createPRNG(seed);
    console.log(`[NetUnfolder] Unfolding ${facesVerts.length} faces, ${vertices3D.length} vertices with seed ${typeof seed === 'number' ? seed : 'custom'}.`);

    // Build the dual graph for the orthogonal polyhedron
    const dualGraph = this.buildDualGraph(vertices3D, facesVerts);
    console.log(`[NetUnfolder] Dual graph built: ${dualGraph.edges.length} edges between ${dualGraph.numFaces} faces.`);

    let bestResult = null;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      // Compute randomized Kruskal MST using deterministic PRNG
      const treeEdges = this.computeSpanningTree(dualGraph.numFaces, dualGraph.edges, rng);
      const rootFace = attempt % dualGraph.numFaces;
      
      // Attempt 2D unrolling and collision test
      const unrollResult = this.unrollTree2D(vertices3D, facesVerts, dualGraph, treeEdges, rootFace);

      if (unrollResult.success) {
        bestResult = unrollResult;
        console.log(`[NetUnfolder] Success on attempt ${attempt + 1}. Root face: ${rootFace}`);
        break;
      }
    }

    if (!bestResult) {
      throw new Error(`Unfolder: Could not find a collision-free 2D unrolling after ${maxAttempts} randomized attempts.`);
    }

    return this.buildFoldSpecJSON(vertices3D, facesVerts, dualGraph, bestResult);
  }

  /**
   * Constructs the final FOLD 1.1 JSON object from the successful 2D unrolling.
   */
  static buildFoldSpecJSON(vertices3D, facesVerts, dualGraph, bestResult) {
    const { facePositions2D, treeEdges } = bestResult;

    // Collect unique 2D vertices with snap tolerance
    const vertices_coords = [];
    const vert2DMap = new Map();

    const get2DVertIdx = (x, y, tol = 1e-5) => {
      const rx = Math.round(x / tol) * tol;
      const ry = Math.round(y / tol) * tol;
      const key = `${rx.toFixed(5)},${ry.toFixed(5)}`;

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

    // Map 3D spanning tree edges to 2D edge keys
    const treeEdge2DMap = new Map();
    treeEdges.forEach(te => {
      const f0Verts3D = facesVerts[te.f0];
      const f0Verts2D = newFacesVerts[te.f0];
      const i1 = f0Verts3D.indexOf(te.v1);
      const i2 = f0Verts3D.indexOf(te.v2);
      if (i1 >= 0 && i2 >= 0) {
        const v2D_1 = f0Verts2D[i1];
        const v2D_2 = f0Verts2D[i2];
        const key2D = `${Math.min(v2D_1, v2D_2)}-${Math.max(v2D_1, v2D_2)}`;
        treeEdge2DMap.set(key2D, te);
      }
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

    const edges_assignment = [];
    const edges_foldAngle = [];

    edges_vertices.forEach(edge => {
      const key = `${edge[0]}-${edge[1]}`;
      const count = edgeMap.get(key).count;

      if (count === 1) {
        // Outer boundary of the 2D net
        edges_assignment.push('B');
        edges_foldAngle.push(0);
      } else {
        // Internal shared edge in 2D net (hinge crease)
        const treeEdge = treeEdge2DMap.get(key);
        if (treeEdge) {
          const foldAngle = treeEdge.foldAngleDeg;
          let directive = 'F';
          if (foldAngle < 0) directive = 'M';
          else if (foldAngle > 0) directive = 'V';
          edges_assignment.push(directive);
          edges_foldAngle.push(foldAngle);
        } else {
          // If two faces meet along a shared boundary in 2D but wasn't in tree
          edges_assignment.push('C'); // Cut
          edges_foldAngle.push(0);
        }
      }
    });

    return {
      file_spec: 1.1,
      file_title: 'Unfolded Box Net',
      file_creator: 'FOLDNet CAD Unfolder',
      vertices_coords,
      faces_vertices: newFacesVerts,
      edges_vertices,
      edges_assignment,
      edges_foldAngle
    };
  }

  /**
   * Step 1: Dual Graph Construction
   * 
   * Identifies adjacency between faces by finding shared edges.
   * Calculates face normals and the dihedral fold angle across each shared edge.
   */
  static buildDualGraph(vertices3D, facesVerts) {
    const numFaces = facesVerts.length;
    const edgeToFaces = new Map();

    // Compute surface normal for each face (assuming faces are 2D convex & orthogonal)
    const faceNormals = facesVerts.map(fv => {
      const p0 = new THREE.Vector3(...vertices3D[fv[0]]);
      const p1 = new THREE.Vector3(...vertices3D[fv[1]]);
      const p2 = new THREE.Vector3(...vertices3D[fv[2]]);
      const e1 = new THREE.Vector3().subVectors(p1, p0);
      const e2 = new THREE.Vector3().subVectors(p2, p0);
      return new THREE.Vector3().crossVectors(e1, e2).normalize();
    });

    // Find shared edges
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

        const n0 = faceNormals[f0.faceIndex];
        const n1 = faceNormals[f1.faceIndex];

        // Determine dihedral fold angle
        const pA = new THREE.Vector3(...vertices3D[f0.v1]);
        const pB = new THREE.Vector3(...vertices3D[f0.v2]);
        const edgeVec = new THREE.Vector3().subVectors(pB, pA).normalize();

        // Inward vector in f0 plane, perpendicular to edge
        const inVec = new THREE.Vector3().crossVectors(n0, edgeVec).normalize();
        
        const dot = inVec.dot(n1);
        let foldAngleDeg = 0;
        if (dot < -1e-4) foldAngleDeg = 90;
        else if (dot > 1e-4) foldAngleDeg = -90;

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

  /**
   * Step 2: Spanning Tree Generation (Kruskal's Algorithm)
   */
  static computeSpanningTree(numFaces, edges, rng = Math.random) {
    const randomFunc = rng || Math.random;
    const weightedEdges = edges.map(e => ({ ...e, weight: randomFunc() }));
    weightedEdges.sort((a, b) => a.weight - b.weight);

    const parent = Array.from({ length: numFaces }, (_, i) => i);
    const find = (i) => {
      if (parent[i] === i) return i;
      parent[i] = find(parent[i]);
      return parent[i];
    };

    const treeEdges = [];
    for (const e of weightedEdges) {
      const root0 = find(e.f0);
      const root1 = find(e.f1);
      
      if (root0 !== root1) {
        parent[root0] = root1;
        treeEdges.push(e);
        if (treeEdges.length === numFaces - 1) break;
      }
    }

    return treeEdges;
  }

  /**
   * Step 3: 2D Unrolling
   * Traverse the spanning tree and place faces in a 2D coordinate system.
   */
  static unrollTree2D(vertices3D, facesVerts, dualGraph, treeEdges, rootFace = 0) {
    const numFaces = dualGraph.numFaces;
    const treeAdj = Array.from({ length: numFaces }, () => []);

    treeEdges.forEach(e => {
      treeAdj[e.f0].push({ neighbor: e.f1, edge: e });
      treeAdj[e.f1].push({ neighbor: e.f0, edge: e });
    });

    const facePositions2D = Array.from({ length: numFaces }, () => null);

    // Project root face to 2D
    const rootVerts3D = facesVerts[rootFace].map(vIdx => vertices3D[vIdx]);
    facePositions2D[rootFace] = this.projectFaceToLocal2D(rootVerts3D, dualGraph.faceNormals[rootFace]);

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

          const pV1Pos = pCoords2D[pFaceVerts.indexOf(edge.v1)];
          const pV2Pos = pCoords2D[pFaceVerts.indexOf(edge.v2)];

          if (!pV1Pos || !pV2Pos) return { success: false };

          // Project child face to local 2D
          const cVerts3D = cFaceVerts.map(vIdx => vertices3D[vIdx]);
          const cLocal2D = this.projectFaceToLocal2D(cVerts3D, dualGraph.faceNormals[cIdx]);

          const cV1Local = cLocal2D[cFaceVerts.indexOf(edge.v1)];
          const cV2Local = cLocal2D[cFaceVerts.indexOf(edge.v2)];

          if (!cV1Local || !cV2Local) return { success: false };

          // Determine reference point on parent side
          const hDx = pV2Pos[0] - pV1Pos[0];
          const hDy = pV2Pos[1] - pV1Pos[1];
          let pRefPoint = null;
          let maxHingeDist = -Infinity;
          for (let i = 0; i < pCoords2D.length; i++) {
            const vi = pFaceVerts[i];
            if (vi === edge.v1 || vi === edge.v2) continue;
            const pt = pCoords2D[i];
            const d = Math.abs(hDx * (pt[1] - pV1Pos[1]) - hDy * (pt[0] - pV1Pos[0]));
            if (d > maxHingeDist) { maxHingeDist = d; pRefPoint = pt; }
          }
          if (!pRefPoint) {
            let cx = 0, cy = 0;
            pCoords2D.forEach(p => { cx += p[0]; cy += p[1]; });
            pRefPoint = [cx / pCoords2D.length, cy / pCoords2D.length];
          }

          // Align child hinge to parent hinge
          const cGlobal2D = this.alignFaceHinge2D(cLocal2D, cV1Local, cV2Local, pV1Pos, pV2Pos, pRefPoint);
          facePositions2D[cIdx] = cGlobal2D;

          // Check overlap
          for (let prevIdx = 0; prevIdx < numFaces; prevIdx++) {
            if (visited[prevIdx] && prevIdx !== cIdx && facePositions2D[prevIdx]) {
              if (this.doFacesOverlap2D(cGlobal2D, facePositions2D[prevIdx])) {
                return { success: false }; 
              }
            }
          }

          queue.push(cIdx);
        }
      }
    }

    return { success: true, facePositions2D, treeEdges };
  }

  static projectFaceToLocal2D(verts3D, faceNormal) {
    const p0 = new THREE.Vector3(...verts3D[0]);
    const p1 = new THREE.Vector3(...verts3D[1]);
    const uAxis = new THREE.Vector3().subVectors(p1, p0).normalize();
    const vAxis = new THREE.Vector3().crossVectors(faceNormal, uAxis).normalize();

    return verts3D.map(v => {
      const p = new THREE.Vector3(...v);
      const rel = new THREE.Vector3().subVectors(p, p0);
      return [rel.dot(uAxis), rel.dot(vAxis)];
    });
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

  static alignFaceHinge2D(cLocal2D, cV1, cV2, pV1, pV2, pRefPoint) {
    const cGlobal = this.transformPoints2D(cLocal2D, cV1, cV2, pV1, pV2);
    
    let cx = 0, cy = 0;
    cGlobal.forEach(p => { cx += p[0]; cy += p[1]; });
    const cCentroid = [cx / cGlobal.length, cy / cGlobal.length];

    const hDx = pV2[0] - pV1[0];
    const hDy = pV2[1] - pV1[1];

    const pSide = hDx * (pRefPoint[1] - pV1[1]) - hDy * (pRefPoint[0] - pV1[0]);
    const cSide = hDx * (cCentroid[1] - pV1[1]) - hDy * (cCentroid[0] - pV1[0]);

    if (Math.sign(pSide) !== 0 && Math.sign(cSide) === Math.sign(pSide)) {
      const len = Math.hypot(hDx, hDy);
      const ux = hDx / len, uy = hDy / len;
      return cGlobal.map(pt => {
        const rx = pt[0] - pV1[0], ry = pt[1] - pV1[1];
        const dot = rx * ux + ry * uy;
        const px = rx - dot * ux, py = ry - dot * uy;
        return [pV1[0] + dot * ux - px, pV1[1] + dot * uy - py];
      });
    }
    return cGlobal;
  }

  static doFacesOverlap2D(faceA, faceB, tol = 1e-3) {
    const lenA = faceA.length;
    const lenB = faceB.length;

    // Edge intersection
    for (let i = 0; i < lenA; i++) {
      const a1 = faceA[i], a2 = faceA[(i + 1) % lenA];
      for (let j = 0; j < lenB; j++) {
        const b1 = faceB[j], b2 = faceB[(j + 1) % lenB];
        
        if ((Math.hypot(a1[0]-b1[0], a1[1]-b1[1]) < tol) || (Math.hypot(a1[0]-b2[0], a1[1]-b2[1]) < tol) ||
            (Math.hypot(a2[0]-b1[0], a2[1]-b1[1]) < tol) || (Math.hypot(a2[0]-b2[0], a2[1]-b2[1]) < tol)) {
          continue;
        }

        const denom = (b2[1] - b1[1]) * (a2[0] - a1[0]) - (b2[0] - b1[0]) * (a2[1] - a1[1]);
        if (Math.abs(denom) > 1e-9) {
          const ua = ((b2[0] - b1[0]) * (a1[1] - b1[1]) - (b2[1] - b1[1]) * (a1[0] - b1[0])) / denom;
          const ub = ((a2[0] - a1[0]) * (a1[1] - b1[1]) - (a2[1] - a1[1]) * (a1[0] - b1[0])) / denom;
          if (ua > tol && ua < 1 - tol && ub > tol && ub < 1 - tol) return true;
        }
      }
    }

    const isInside = (px, py, poly) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
        if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi + 1e-9) + xi)) inside = !inside;
      }
      return inside;
    };

    // Vertex containment
    for (let i = 0; i < lenA; i++) {
      let isShared = false;
      for (let j = 0; j < lenB; j++) if (Math.hypot(faceA[i][0]-faceB[j][0], faceA[i][1]-faceB[j][1]) < tol) isShared = true;
      if (!isShared && isInside(faceA[i][0], faceA[i][1], faceB)) return true;
    }
    for (let j = 0; j < lenB; j++) {
      let isShared = false;
      for (let i = 0; i < lenA; i++) if (Math.hypot(faceB[j][0]-faceA[i][0], faceB[j][1]-faceA[i][1]) < tol) isShared = true;
      if (!isShared && isInside(faceB[j][0], faceB[j][1], faceA)) return true;
    }

    return false;
  }
}
