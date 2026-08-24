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

    // ────────────────────────────────────────────────────────────
    // TIER 1: Full Expansion of Co-Planar Island around F0
    // ────────────────────────────────────────────────────────────
    const coPlanarQueue = [{
      faceIndex: focusFaceIdx,
      isFocus: true,
      polygon: localF0,
      origPolygon2D: f0Coords2D
    }];

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

    while (coPlanarQueue.length > 0) {
      const parent = coPlanarQueue.shift();
      const pIdx = parent.faceIndex;
      const pVerts2D = foldData.facesVertices[pIdx];
      const pLen = pVerts2D.length;
      const neighbors = faceAdjacency3D[pIdx] || [];

      for (let i = 0; i < pLen; i++) {
        const neighborEntry = neighbors.find(n => n.edgeIndexInFace === i);
        if (!neighborEntry || !neighborEntry.isCoPlanar) continue;

        const nFaceIdx = neighborEntry.neighborFace;
        if (visitedFaces.has(nFaceIdx)) continue;

        visitedFaces.set(nFaceIdx, { branchId: -1, depth: 0, isCoPlanarWithFocus: true });

        const p1Local = parent.polygon[i];
        const p2Local = parent.polygon[(i + 1) % pLen];

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

        // Record interior flat edge
        const v1 = pVerts2D[i];
        const v2 = pVerts2D[(i + 1) % pLen];
        const key2D = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;
        const edgeIdx2D = foldData.edgeLookup ? foldData.edgeLookup.get(key2D) : -1;
        const assign = edgeIdx2D >= 0 ? (foldData.edgesAssignment[edgeIdx2D] || 'F') : 'F';

        clusterEdges.push({
          edgeIndex: i,
          v1,
          v2,
          p1: p1Local,
          p2: p2Local,
          isFoldHinge: true,
          assignment: assign,
          hasNeighbor: true,
          neighborFace: nFaceIdx
        });

        const newFaceItem = {
          faceIndex: nFaceIdx,
          isFocus: false,
          polygon: nLocalPolygon,
          origPolygon2D: nOrigCoords,
          branchId: -1,
          depth: 0,
          isCoPlanarWithFocus: true,
          isFoldHinge: true,
          clusterToNet: CrossSeamMapper.computeRigidAffine(nLocalPolygon, nOrigCoords),
          netToCluster: CrossSeamMapper.computeRigidAffine(nOrigCoords, nLocalPolygon)
        };

        clusterFaces.push(newFaceItem);
        coPlanarQueue.push(newFaceItem);
      }
    }

    // ────────────────────────────────────────────────────────────
    // TIER 2: Cardinal Rays Emitters from Island Perimeter
    // ────────────────────────────────────────────────────────────
    const cardinalQueue = [];
    let branchCounter = 0;

    // Collect all exterior perimeter edges of the co-planar island
    for (const islandFace of clusterFaces) {
      const fIdx = islandFace.faceIndex;
      const fVerts2D = foldData.facesVertices[fIdx];
      const fLen = fVerts2D.length;
      const neighbors = faceAdjacency3D[fIdx] || [];

      for (let i = 0; i < fLen; i++) {
        const neighborEntry = neighbors.find(n => n.edgeIndexInFace === i);
        const p1Local = islandFace.polygon[i];
        const p2Local = islandFace.polygon[(i + 1) % fLen];
        const v1 = fVerts2D[i];
        const v2 = fVerts2D[(i + 1) % fLen];

        const key2D = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;
        const edgeIdx2D = foldData.edgeLookup ? foldData.edgeLookup.get(key2D) : -1;
        const assign = edgeIdx2D >= 0 ? (foldData.edgesAssignment[edgeIdx2D] || 'C') : 'C';
        const isFoldHinge = (assign === 'V' || assign === 'M' || assign === 'F');

        // Only emit cardinal rays across non-coplanar hinges / seams
        if (neighborEntry && !neighborEntry.isCoPlanar) {
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
            const branchId = branchCounter++;
            visitedFaces.set(nFaceIdx, { branchId, depth: 1, isCoPlanarWithFocus: false });

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

            clusterFaces.push({
              faceIndex: nFaceIdx,
              isFocus: false,
              polygon: nLocalPolygon,
              origPolygon2D: nOrigCoords,
              sharedEdgeIndex: i,
              branchId,
              depth: 1,
              isCoPlanarWithFocus: false,
              isFoldHinge,
              clusterToNet: CrossSeamMapper.computeRigidAffine(nLocalPolygon, nOrigCoords),
              netToCluster: CrossSeamMapper.computeRigidAffine(nOrigCoords, nLocalPolygon)
            });

            cardinalQueue.push({
              faceIndex: nFaceIdx,
              localPolygon: nLocalPolygon,
              entryEdgeIndex: neighborEntry.neighborEdgeIndex,
              branchId,
              depth: 1
            });
          }
        } else if (!neighborEntry) {
          // Boundary / non-connected cut edge
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
    }

    // Propagate Cardinal Rays Breadth-First (Depth >= 2)
    while (cardinalQueue.length > 0) {
      const current = cardinalQueue.shift();
      if (current.depth >= maxDepth) continue;

      const currFaceIdx = current.faceIndex;
      const currFaceVerts2D = foldData.facesVertices[currFaceIdx];
      const numVerts = currFaceVerts2D.length;
      const currNeighbors = faceAdjacency3D[currFaceIdx] || [];

      // Forward cardinal step: exit through opposite edge
      const oppositeEdgeIdx = (current.entryEdgeIndex + Math.floor(numVerts / 2)) % numVerts;
      const nextNeighborEntry = currNeighbors.find(n => n.edgeIndexInFace === oppositeEdgeIdx);
      if (!nextNeighborEntry) continue;

      const nextFaceIdx = nextNeighborEntry.neighborFace;
      if (visitedFaces.has(nextFaceIdx)) continue; // Stop at collision or already visited

      visitedFaces.set(nextFaceIdx, { branchId: current.branchId, depth: current.depth + 1, isCoPlanarWithFocus: false });

      const p1Local = current.localPolygon[oppositeEdgeIdx];
      const p2Local = current.localPolygon[(oppositeEdgeIdx + 1) % numVerts];

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

      const v1 = currFaceVerts2D[oppositeEdgeIdx];
      const v2 = currFaceVerts2D[(oppositeEdgeIdx + 1) % numVerts];
      const key2D = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;
      const edgeIdx2D = foldData.edgeLookup ? foldData.edgeLookup.get(key2D) : -1;
      const assign = edgeIdx2D >= 0 ? (foldData.edgesAssignment[edgeIdx2D] || 'C') : 'C';
      const isFoldHinge = (assign === 'V' || assign === 'M' || assign === 'F');

      clusterEdges.push({
        edgeIndex: oppositeEdgeIdx,
        v1,
        v2,
        p1: p1Local,
        p2: p2Local,
        isFoldHinge,
        assignment: assign,
        hasNeighbor: true,
        neighborFace: nextFaceIdx
      });

      const nextDepth = current.depth + 1;

      clusterFaces.push({
        faceIndex: nextFaceIdx,
        isFocus: false,
        polygon: nextLocalPolygon,
        origPolygon2D: nextOrigCoords,
        sharedEdgeIndex: oppositeEdgeIdx,
        branchId: current.branchId,
        depth: nextDepth,
        isCoPlanarWithFocus: false,
        isFoldHinge,
        clusterToNet: CrossSeamMapper.computeRigidAffine(nextLocalPolygon, nextOrigCoords),
        netToCluster: CrossSeamMapper.computeRigidAffine(nextOrigCoords, nextLocalPolygon)
      });

      cardinalQueue.push({
        faceIndex: nextFaceIdx,
        localPolygon: nextLocalPolygon,
        entryEdgeIndex: nextNeighborEntry.neighborEdgeIndex,
        branchId: current.branchId,
        depth: nextDepth
      });
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
}
