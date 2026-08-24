import * as THREE from 'three';

/**
 * Cross-Seam Mapper
 * 
 * Computes 3D face adjacency (for both CAD models and FOLD JSON files),
 * lays out local 3D-neighbor clusters around a focus face, and provides
 * coordinate transforms between Cluster Space, Global 2D Net Space, and Face UV Space.
 */
export class CrossSeamMapper {
  /**
   * Builds full 3D face adjacency data.
   * Works for both CAD models (via dualGraph) and FOLD JSON models (via 3D folded kinematics).
   */
  static build3DAdjacency(foldData, kinematics = null, cadDualGraph = null) {
    const numFaces = foldData.facesVertices.length;
    const faceAdjacency3D = Array.from({ length: numFaces }, () => []);

    // Evaluate 3D positions at t = 1.0 (100% folded)
    const transforms = kinematics ? kinematics.evaluateTransforms(1.0) : null;
    const origCoords = foldData.vertices;

    // Compute 3D world coordinates for all face vertices
    const faceWorldVerts3D = foldData.facesVertices.map((fv, fIdx) => {
      const mat = transforms ? transforms[fIdx] : new THREE.Matrix4();
      return fv.map(vIdx => {
        const c = origCoords[vIdx];
        const v = new THREE.Vector3(c[0], c[1], c[2] || 0);
        v.applyMatrix4(mat);
        return v;
      });
    });

    // Compute unit normal for each face in 3D folded space
    const faceNormals3D = faceWorldVerts3D.map(verts => {
      if (verts.length < 3) return new THREE.Vector3(0, 0, 1);
      const v0 = verts[0], v1 = verts[1], v2 = verts[2];
      const cb = new THREE.Vector3().subVectors(v2, v1);
      const ab = new THREE.Vector3().subVectors(v0, v1);
      cb.cross(ab);
      if (cb.lengthSq() > 1e-6) cb.normalize();
      else cb.set(0, 0, 1);
      return cb;
    });

    // Collect all directed 3D edge segments across all faces
    const edgeSegments = [];
    faceWorldVerts3D.forEach((verts, fIdx) => {
      const len = verts.length;
      for (let i = 0; i < len; i++) {
        const p1 = verts[i];
        const p2 = verts[(i + 1) % len];
        const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
        const segLen = p1.distanceTo(p2);

        edgeSegments.push({
          faceIndex: fIdx,
          edgeIndexInFace: i,
          p1,
          p2,
          mid,
          segLen,
          v1_2D: foldData.facesVertices[fIdx][i],
          v2_2D: foldData.facesVertices[fIdx][(i + 1) % len]
        });
      }
    });

    const tol = 1e-2;
    const numSegs = edgeSegments.length;

    // Pair up matching edge segments in 3D
    for (let i = 0; i < numSegs; i++) {
      const e0 = edgeSegments[i];
      for (let j = i + 1; j < numSegs; j++) {
        const e1 = edgeSegments[j];
        if (e0.faceIndex === e1.faceIndex) continue;

        // Check if midpoints and segment lengths match in 3D
        if (e0.mid.distanceTo(e1.mid) < tol && Math.abs(e0.segLen - e1.segLen) < tol) {
          // Check orientation: opposite endpoints vs same endpoints
          const dOpp = e0.p1.distanceTo(e1.p2) + e0.p2.distanceTo(e1.p1);
          const dSame = e0.p1.distanceTo(e1.p1) + e0.p2.distanceTo(e1.p2);

          if (dOpp < tol * 2 || dSame < tol * 2) {
            const isOpposite = dOpp <= dSame;

            // Check if faces are co-planar in 3D folded space (dot product of 3D normals ≈ 1.0)
            const n0 = faceNormals3D[e0.faceIndex];
            const n1 = faceNormals3D[e1.faceIndex];
            const isCoPlanar = n0.dot(n1) > 0.98;

            faceAdjacency3D[e0.faceIndex].push({
              neighborFace: e1.faceIndex,
              edgeIndexInFace: e0.edgeIndexInFace,
              v1_2D: e0.v1_2D,
              v2_2D: e0.v2_2D,
              neighborEdgeIndex: e1.edgeIndexInFace,
              isOpposite,
              isCoPlanar
            });

            faceAdjacency3D[e1.faceIndex].push({
              neighborFace: e0.faceIndex,
              edgeIndexInFace: e1.edgeIndexInFace,
              v1_2D: e1.v1_2D,
              v2_2D: e1.v2_2D,
              neighborEdgeIndex: e0.edgeIndexInFace,
              isOpposite,
              isCoPlanar
            });
          }
        }
      }
    }

    return faceAdjacency3D;
  }

  /**
   * Builds the local 2D cluster layout for a given focus face F0.
   * Focus face F0 is placed centered at (0, 0).
   * 
   * [CO-PLANAR ISLAND + CARDINAL RAYS UNPACKING]:
   * 1. Tier 1 (Co-Planar Island): Expands in ALL directions across connected 3D co-planar
   *    adjacent faces (fold angle = 0°, normal dot product ≈ 1.0) without distortion or false adjacency.
   * 2. Tier 2 (Cardinal Rays): From the perimeter edges of the co-planar island, straight cardinal
   *    rays expand "onwards and upwards" across 3D hinges up to `maxDepth`.
   * 3. Prevents lateral overlap/ambiguity while showing full flat segmented face assemblies.
   */
  static buildNeighborCluster(focusFaceIdx, foldData, faceAdjacency3D, maxDepth = 4) {
    const origCoords = foldData.vertices;
    const focusFaceVerts2D = foldData.facesVertices[focusFaceIdx];

    // Compute centroid of F0 to center at (0,0)
    const f0Coords2D = focusFaceVerts2D.map(vIdx => origCoords[vIdx]);
    let cx = 0, cy = 0;
    f0Coords2D.forEach(p => { cx += p[0]; cy += p[1]; });
    cx /= f0Coords2D.length;
    cy /= f0Coords2D.length;

    // Centered F0 local coordinates
    const localF0 = f0Coords2D.map(p => [p[0] - cx, p[1] - cy]);

    const clusterFaces = [];
    const clusterEdges = [];

    // Visited map: faceIndex -> { branchId, depth, isCoPlanarWithFocus }
    const visitedFaces = new Map();
    const queue = [];
    let branchCounter = 0;

    visitedFaces.set(focusFaceIdx, { branchId: -1, depth: 0, isCoPlanarWithFocus: true });

    clusterFaces.push({
      faceIndex: focusFaceIdx,
      isFocus: true,
      polygon: localF0,
      origPolygon2D: f0Coords2D,
      branchId: -1,
      depth: 0,
      isCoPlanarWithFocus: true,
      transformToNet: { tx: cx, ty: cy, rot: 0, scale: 1 },
      clusterToNet: { a: 1, b: 0, c: 0, d: 1, e: cx, f: cy },
      netToCluster: { a: 1, b: 0, c: 0, d: 1, e: -cx, f: -cy }
    });

    // Seed the BFS queue with all edges of focus face F0 (initiating Cardinal Branches 0..N-1)
    const f0Verts2D = foldData.facesVertices[focusFaceIdx];
    const f0Len = f0Verts2D.length;
    const f0Neighbors = faceAdjacency3D[focusFaceIdx] || [];

    for (let i = 0; i < f0Len; i++) {
      const neighborEntry = f0Neighbors.find(n => n.edgeIndexInFace === i);
      const p1Local = localF0[i];
      const p2Local = localF0[(i + 1) % f0Len];
      const v1 = f0Verts2D[i];
      const v2 = f0Verts2D[(i + 1) % f0Len];

      const key2D = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;
      const edgeIdx2D = foldData.edgeLookup ? foldData.edgeLookup.get(key2D) : -1;
      const assign = edgeIdx2D >= 0 ? (foldData.edgesAssignment[edgeIdx2D] || 'C') : 'C';
      const isFoldHinge = (assign === 'V' || assign === 'M' || assign === 'F');

      if (neighborEntry) {
        const nFaceIdx = neighborEntry.neighborFace;

        clusterEdges.push({
          edgeIndex: i,
          v1,
          v2,
          p1: p1Local,
          p2: p2Local,
          isFoldHinge,
          assignment: assign,
          hasNeighbor: true,
          neighborFace: nFaceIdx
        });

        if (!visitedFaces.has(nFaceIdx) && maxDepth >= 1) {
          const nFaceVerts2D = foldData.facesVertices[nFaceIdx];
          const nOrigCoords = nFaceVerts2D.map(vIdx => origCoords[vIdx]);
          const isOpposite = neighborEntry.isOpposite !== undefined ? neighborEntry.isOpposite : true;

          const nLocalPolygon = this.alignNeighborFaceToEdge(
            nOrigCoords,
            neighborEntry.neighborEdgeIndex,
            p1Local,
            p2Local,
            isOpposite
          );

          if (CrossSeamMapper.checkPolygonOverlap(nLocalPolygon, clusterFaces)) {
            continue;
          }

          const branchId = branchCounter++;
          visitedFaces.set(nFaceIdx, { branchId, depth: 1, isCoPlanarWithFocus: neighborEntry.isCoPlanar });

          clusterFaces.push({
            faceIndex: nFaceIdx,
            isFocus: false,
            polygon: nLocalPolygon,
            origPolygon2D: nOrigCoords,
            sharedEdgeIndex: i,
            branchId,
            depth: 1,
            isCoPlanarWithFocus: neighborEntry.isCoPlanar,
            isFoldHinge,
            clusterToNet: CrossSeamMapper.computeRigidAffine(nLocalPolygon, nOrigCoords),
            netToCluster: CrossSeamMapper.computeRigidAffine(nOrigCoords, nLocalPolygon)
          });

          queue.push({
            faceIndex: nFaceIdx,
            localPolygon: nLocalPolygon,
            entryEdgeIndex: neighborEntry.neighborEdgeIndex,
            branchId,
            depth: 1
          });
        }
      } else {
        clusterEdges.push({
          edgeIndex: i,
          v1,
          v2,
          p1: p1Local,
          p2: p2Local,
          isFoldHinge,
          assignment: assign,
          hasNeighbor: false,
          neighborFace: null
        });
      }
    }

    // Propagate Breadth-First: Straight Ahead + Left Turns + Co-Planar expansion
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.depth >= maxDepth) continue;

      const currFaceIdx = current.faceIndex;
      const currFaceVerts2D = foldData.facesVertices[currFaceIdx];
      const numVerts = currFaceVerts2D.length;
      const currNeighbors = faceAdjacency3D[currFaceIdx] || [];

      // Determine valid exit edges for recursive expansion:
      // 1. Straight ahead (opposite edge): (entry + Math.floor(N/2)) % N
      // 2. Left turn: (entry + 1) % N (counter-clockwise relative to entry edge)
      // 3. Any co-planar adjacent edge
      const candidateEdgeIndices = new Set();
      
      const oppositeEdgeIdx = (current.entryEdgeIndex + Math.floor(numVerts / 2)) % numVerts;
      candidateEdgeIndices.add(oppositeEdgeIdx);

      // Left-turn edge relative to entry direction
      const leftTurnEdgeIdx = (current.entryEdgeIndex + 1) % numVerts;
      candidateEdgeIndices.add(leftTurnEdgeIdx);

      // Co-planar adjacent edges
      currNeighbors.forEach(n => {
        if (n.isCoPlanar) {
          candidateEdgeIndices.add(n.edgeIndexInFace);
        }
      });

      for (const exitEdgeIdx of candidateEdgeIndices) {
        if (exitEdgeIdx === current.entryEdgeIndex) continue; // Don't turn back through entry edge

        const nextNeighborEntry = currNeighbors.find(n => n.edgeIndexInFace === exitEdgeIdx);
        if (!nextNeighborEntry) continue;

        const nextFaceIdx = nextNeighborEntry.neighborFace;
        if (visitedFaces.has(nextFaceIdx)) continue; // Avoid duplicate / collision

        const p1Local = current.localPolygon[exitEdgeIdx];
        const p2Local = current.localPolygon[(exitEdgeIdx + 1) % numVerts];

        const nextFaceVerts2D = foldData.facesVertices[nextFaceIdx];
        const nextOrigCoords = nextFaceVerts2D.map(vIdx => origCoords[vIdx]);
        const isOpposite = nextNeighborEntry.isOpposite !== undefined ? nextNeighborEntry.isOpposite : true;

        const nextLocalPolygon = this.alignNeighborFaceToEdge(
          nextOrigCoords,
          nextNeighborEntry.neighborEdgeIndex,
          p1Local,
          p2Local,
          isOpposite
        );

        // Geometrically check if placing this face causes planar overlap with any already-placed face
        if (CrossSeamMapper.checkPolygonOverlap(nextLocalPolygon, clusterFaces)) {
          continue;
        }

        const nextDepth = current.depth + 1;
        visitedFaces.set(nextFaceIdx, { branchId: current.branchId, depth: nextDepth, isCoPlanarWithFocus: nextNeighborEntry.isCoPlanar });

        const v1 = currFaceVerts2D[exitEdgeIdx];
        const v2 = currFaceVerts2D[(exitEdgeIdx + 1) % numVerts];
        const key2D = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;
        const edgeIdx2D = foldData.edgeLookup ? foldData.edgeLookup.get(key2D) : -1;
        const assign = edgeIdx2D >= 0 ? (foldData.edgesAssignment[edgeIdx2D] || 'C') : 'C';
        const isFoldHinge = (assign === 'V' || assign === 'M' || assign === 'F');

        clusterEdges.push({
          edgeIndex: exitEdgeIdx,
          v1,
          v2,
          p1: p1Local,
          p2: p2Local,
          isFoldHinge,
          assignment: assign,
          hasNeighbor: true,
          neighborFace: nextFaceIdx
        });

        clusterFaces.push({
          faceIndex: nextFaceIdx,
          isFocus: false,
          polygon: nextLocalPolygon,
          origPolygon2D: nextOrigCoords,
          sharedEdgeIndex: exitEdgeIdx,
          branchId: current.branchId,
          depth: nextDepth,
          isCoPlanarWithFocus: nextNeighborEntry.isCoPlanar,
          isFoldHinge,
          clusterToNet: CrossSeamMapper.computeRigidAffine(nextLocalPolygon, nextOrigCoords),
          netToCluster: CrossSeamMapper.computeRigidAffine(nextOrigCoords, nextLocalPolygon)
        });

        queue.push({
          faceIndex: nextFaceIdx,
          localPolygon: nextLocalPolygon,
          entryEdgeIndex: nextNeighborEntry.neighborEdgeIndex,
          branchId: current.branchId,
          depth: nextDepth
        });
      }
    }

    return {
      focusFaceIndex: focusFaceIdx,
      clusterFaces,
      clusterEdges,
      center: [cx, cy]
    };
  }

  /**
   * Aligns neighbor face 2D polygon to lie rigidly attached to the edge [p1, p2].
   */
  static alignNeighborFaceToEdge(neighborCoords, neighborEdgeIdx, p1, p2, isOpposite = true) {
    const len = neighborCoords.length;
    const nv1 = neighborCoords[neighborEdgeIdx];
    const nv2 = neighborCoords[(neighborEdgeIdx + 1) % len];

    // Source edge endpoints in neighbor local coords
    const srcStart = isOpposite ? nv2 : nv1;
    const srcEnd   = isOpposite ? nv1 : nv2;

    // Source edge vector
    const sDx = srcEnd[0] - srcStart[0];
    const sDy = srcEnd[1] - srcStart[1];

    // Target edge vector: from p1 to p2
    const tDx = p2[0] - p1[0];
    const tDy = p2[1] - p1[1];

    const sAngle = Math.atan2(sDy, sDx);
    const tAngle = Math.atan2(tDy, tDx);
    const rotAngle = tAngle - sAngle;

    const cos = Math.cos(rotAngle);
    const sin = Math.sin(rotAngle);

    return neighborCoords.map(pt => {
      const rx = (pt[0] - srcStart[0]) * cos - (pt[1] - srcStart[1]) * sin + p1[0];
      const ry = (pt[0] - srcStart[0]) * sin + (pt[1] - srcStart[1]) * cos + p1[1];
      return [rx, ry];
    });
  }

  /**
   * Transforms a point or shape from Cluster Canvas space to Face UV space [0..1, 0..1].
   */
  static mapClusterPointToFaceUV(point, faceClusterPolygon) {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    faceClusterPolygon.forEach(p => {
      if (p[0] < minX) minX = p[0];
      if (p[0] > maxX) maxX = p[0];
      if (p[1] < minY) minY = p[1];
      if (p[1] > maxY) maxY = p[1];
    });

    const u = (point[0] - minX) / (maxX - minX || 1);
    const v = (point[1] - minY) / (maxY - minY || 1);
    return [u, v];
  }

  /**
   * Computes a rigid 2D affine transform {a,b,c,d,e,f} mapping srcPoly → dstPoly
   * using the first two vertices of each polygon (rotation + uniform scale + translation).
   *
   * The affine maps: dst = M * src, where
   *   dst_x = a * src_x + c * src_y + e
   *   dst_y = b * src_x + d * src_y + f
   */
  static computeRigidAffine(srcPoly, dstPoly) {
    const s0 = srcPoly[0], s1 = srcPoly[1];
    const d0 = dstPoly[0], d1 = dstPoly[1];

    const sdx = s1[0] - s0[0], sdy = s1[1] - s0[1];
    const ddx = d1[0] - d0[0], ddy = d1[1] - d0[1];

    const sLen = Math.hypot(sdx, sdy);
    const dLen = Math.hypot(ddx, ddy);
    const scale = sLen > 1e-9 ? dLen / sLen : 1;

    const sAngle = Math.atan2(sdy, sdx);
    const dAngle = Math.atan2(ddy, ddx);
    const rot = dAngle - sAngle;

    const cosR = Math.cos(rot) * scale;
    const sinR = Math.sin(rot) * scale;

    return {
      a:  cosR,
      b:  sinR,
      c: -sinR,
      d:  cosR,
      e:  d0[0] - cosR * s0[0] + sinR * s0[1],
      f:  d0[1] - sinR * s0[0] - cosR * s0[1]
    };
  }

  /** Compose two affine transforms: result = m2 ∘ m1  (apply m1 first, then m2). */
  static composeAffine(m2, m1) {
    return {
      a: m2.a * m1.a + m2.c * m1.b,
      b: m2.b * m1.a + m2.d * m1.b,
      c: m2.a * m1.c + m2.c * m1.d,
      d: m2.b * m1.c + m2.d * m1.d,
      e: m2.a * m1.e + m2.c * m1.f + m2.e,
      f: m2.b * m1.e + m2.d * m1.f + m2.f
    };
  }

  /** Apply an affine to a point: returns {x, y}. */
  static applyAffine(m, x, y) {
    return {
      x: m.a * x + m.c * y + m.e,
      y: m.b * x + m.d * y + m.f
    };
  }

  /**
   * Checks if candidate 2D polygon overlaps with any existing placed face polygon (interior overlap).
   * Tests whether the candidate polygon's centroid or inner test points lie strictly inside any existing face.
   */
  static checkPolygonOverlap(candidatePoly, existingFaces) {
    // Candidate centroid
    let ccx = 0, ccy = 0;
    candidatePoly.forEach(p => { ccx += p[0]; ccy += p[1]; });
    ccx /= candidatePoly.length;
    ccy /= candidatePoly.length;

    // Candidate bounding box
    let cMinX = Infinity, cMaxX = -Infinity, cMinY = Infinity, cMaxY = -Infinity;
    candidatePoly.forEach(p => {
      cMinX = Math.min(cMinX, p[0]); cMaxX = Math.max(cMaxX, p[0]);
      cMinY = Math.min(cMinY, p[1]); cMaxY = Math.max(cMaxY, p[1]);
    });
    const cWidth = cMaxX - cMinX;
    const cHeight = cMaxY - cMinY;

    for (const f of existingFaces) {
      const poly = f.polygon;
      let fMinX = Infinity, fMaxX = -Infinity, fMinY = Infinity, fMaxY = -Infinity;
      let fcx = 0, fcy = 0;
      poly.forEach(p => {
        fMinX = Math.min(fMinX, p[0]); fMaxX = Math.max(fMaxX, p[0]);
        fMinY = Math.min(fMinY, p[1]); fMaxY = Math.max(fMaxY, p[1]);
        fcx += p[0]; fcy += p[1];
      });
      fcx /= poly.length;
      fcy /= poly.length;

      // Check if centroids are practically coincident (overlapping faces)
      const dCentroid = Math.hypot(ccx - fcx, ccy - fcy);
      if (dCentroid < 0.25 * Math.min(cWidth, cHeight)) {
        return true;
      }

      // Check if candidate centroid is inside existing face polygon
      if (this.isPointInsidePoly([ccx, ccy], poly)) {
        return true;
      }

      // Check if existing face centroid is inside candidate polygon
      if (this.isPointInsidePoly([fcx, fcy], candidatePoly)) {
        return true;
      }
    }
    return false;
  }

  /** Ray casting point-in-polygon test */
  static isPointInsidePoly(point, poly) {
    let inside = false;
    const len = poly.length;
    for (let i = 0, j = len - 1; i < len; j = i++) {
      const xi = poly[i][0], yi = poly[i][1];
      const xj = poly[j][0], yj = poly[j][1];
      const intersect = ((yi > point[1]) !== (yj > point[1])) &&
        (point[0] < (xj - xi) * (point[1] - yi) / (yj - yi || 1e-9) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }
}
