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
   * @param {object} [options] Metadata options (e.g. componentId, bbox, center)
   * @returns {object} Valid FOLD 1.1 spec JSON object
   */
  static unfoldToFoldJSON(vertices3D, facesVerts, seed = 1, maxAttempts = 500, options = {}) {
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
        bestResult = { ...unrollResult, rootFace };
        console.log(`[NetUnfolder] Success on attempt ${attempt + 1}. Root face: ${rootFace}`);
        break;
      }
    }

    if (!bestResult) {
      throw new Error(`Unfolder: Could not find a collision-free 2D unrolling after ${maxAttempts} randomized attempts.`);
    }

    return this.buildFoldSpecJSON(vertices3D, facesVerts, dualGraph, bestResult, options);
  }

  /**
   * Unfolds an entire multi-component CAD assembly into self-contained part nets.
   * @param {Array<{id: string, name: string, vertices: number[][], facesVertices: number[][], bbox: object, center: number[]}>} components
   * @param {number|Function} seed Base seed
   * @param {number} maxAttempts Retries per component
   * @returns {{isAssembly: boolean, title: string, parts: Array<{id: string, name: string, foldData: object, bbox: object, center: number[]}>}}
   */
  static unfoldAssemblyToFold(components, seed = 1, maxAttempts = 500) {
    const parts = [];

    components.forEach((comp, idx) => {
      const partSeed = typeof seed === 'number' ? seed + idx * 7919 : seed;
      const partFold = this.unfoldToFoldJSON(comp.vertices, comp.facesVertices, partSeed, maxAttempts, {
        componentId: comp.id,
        name: comp.name,
        bbox: comp.bbox,
        center: comp.center,
        area: comp.area
      });
      partFold.file_title = comp.name;

      parts.push({
        id: comp.id,
        name: comp.name,
        foldData: partFold,
        bbox: comp.bbox,
        center: comp.center
      });
    });

    return {
      isAssembly: parts.length > 1,
      title: 'Multi-Part CAD Assembly',
      parts
    };
  }

  /**
   * Constructs the final FOLD 1.1 JSON object from the successful 2D unrolling.
   */
  static buildFoldSpecJSON(vertices3D, facesVerts, dualGraph, bestResult, options = {}) {
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

    const rootFaceIdx = bestResult.rootFace !== undefined ? bestResult.rootFace : 0;
    const rootFace3D = (facesVerts[rootFaceIdx] || []).map(vi => vertices3D[vi]);

    return {
      file_spec: 1.1,
      file_title: options.name || 'Unfolded Box Net',
      file_creator: 'FOLDNet CAD Unfolder',
      vertices_coords,
      faces_vertices: newFacesVerts,
      edges_vertices,
      edges_assignment,
      edges_foldAngle,
      _assembly: {
        componentId: options.componentId || 'part_0',
        name: options.name || 'Component',
        rootFaceIndex: rootFaceIdx,
        target3DOrigin: options.center || [0, 0, 0],
        target3DBBox: options.bbox || null,
        rootFace3DVertices: rootFace3D
      }
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

    // Compute surface normal for each face via Newell's method to guarantee outward normal orientation
    const faceNormals = facesVerts.map(fv => {
      let nx = 0, ny = 0, nz = 0;
      const n = fv.length;
      for (let i = 0; i < n; i++) {
        const curr = vertices3D[fv[i]];
        const next = vertices3D[fv[(i + 1) % n]];
        nx += (curr[1] - next[1]) * (curr[2] + next[2]);
        ny += (curr[2] - next[2]) * (curr[0] + next[0]);
        nz += (curr[0] - next[0]) * (curr[1] + next[1]);
      }
      const len = Math.hypot(nx, ny, nz);
      return len > 1e-6 ? new THREE.Vector3(nx / len, ny / len, nz / len) : new THREE.Vector3(0, 0, 1);
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
    // Prefer flat coplanar edges (foldAngleDeg === 0) so subdivided face cells remain connected
    const weightedEdges = edges.map(e => {
      const isFlat = Math.abs(e.foldAngleDeg) < 1e-4;
      const weight = isFlat ? (randomFunc() * 0.01) : (0.1 + randomFunc() * 0.9);
      return { ...e, weight };
    });
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

          // Align child hinge to parent hinge using rigid 2D transformation (preserving counter-clockwise outward normal)
          const cGlobal2D = this.transformPoints2D(cLocal2D, cV1Local, cV2Local, pV1Pos, pV2Pos);
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

  static doFacesOverlap2D(polyA, polyB, tol = 1e-3) {
    // Check if polygons have identical centroids (completely overlapping)
    let cAx = 0, cAy = 0, cBx = 0, cBy = 0;
    polyA.forEach(p => { cAx += p[0]; cAy += p[1]; });
    polyB.forEach(p => { cBx += p[0]; cBy += p[1]; });
    if (Math.hypot(cAx / polyA.length - cBx / polyB.length, cAy / polyA.length - cBy / polyB.length) < tol) {
      return true; // Overlapping
    }

    // Separating Axis Theorem (SAT) for 2D convex polygons
    const polygons = [polyA, polyB];
    for (let p = 0; p < 2; p++) {
      const poly = polygons[p];
      const len = poly.length;
      for (let i = 0; i < len; i++) {
        const p1 = poly[i];
        const p2 = poly[(i + 1) % len];
        const edge = [p2[0] - p1[0], p2[1] - p1[1]];
        const normal = [-edge[1], edge[0]]; // Perpendicular normal
        const nLen = Math.hypot(normal[0], normal[1]);
        if (nLen < 1e-9) continue;
        const nx = normal[0] / nLen;
        const ny = normal[1] / nLen;

        // Project polyA onto normal axis
        let minA = Infinity, maxA = -Infinity;
        polyA.forEach(pt => {
          const proj = pt[0] * nx + pt[1] * ny;
          if (proj < minA) minA = proj;
          if (proj > maxA) maxA = proj;
        });

        // Project polyB onto normal axis
        let minB = Infinity, maxB = -Infinity;
        polyB.forEach(pt => {
          const proj = pt[0] * nx + pt[1] * ny;
          if (proj < minB) minB = proj;
          if (proj > maxB) maxB = proj;
        });

        // If projections do not overlap, separating axis exists (no interior overlap)
        if (maxA <= minB + tol || maxB <= minA + tol) {
          return false; // Separating axis found
        }
      }
    }

    // No separating axis found -> Polygons overlap
    return true;
  }
}
