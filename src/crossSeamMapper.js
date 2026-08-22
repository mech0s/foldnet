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

            faceAdjacency3D[e0.faceIndex].push({
              neighborFace: e1.faceIndex,
              edgeIndexInFace: e0.edgeIndexInFace,
              v1_2D: e0.v1_2D,
              v2_2D: e0.v2_2D,
              neighborEdgeIndex: e1.edgeIndexInFace,
              isOpposite
            });

            faceAdjacency3D[e1.faceIndex].push({
              neighborFace: e0.faceIndex,
              edgeIndexInFace: e1.edgeIndexInFace,
              v1_2D: e1.v1_2D,
              v2_2D: e1.v2_2D,
              neighborEdgeIndex: e0.edgeIndexInFace,
              isOpposite
            });
          }
        }
      }
    }

    return faceAdjacency3D;
  }

  /**
   * Builds the local 2D cluster layout for a given focus face.
   * Focus face F0 is placed centered at (0, 0).
   * All 3D adjacent neighbors are unrolled and attached directly to F0's edges.
   */
  static buildNeighborCluster(focusFaceIdx, foldData, faceAdjacency3D) {
    const focusFaceVerts2D = foldData.facesVertices[focusFaceIdx];
    const origCoords = foldData.vertices;

    // Get 2D coordinates of focus face
    const f0Coords2D = focusFaceVerts2D.map(vIdx => origCoords[vIdx]);

    // Compute centroid of F0 to center at (0,0)
    let cx = 0, cy = 0;
    f0Coords2D.forEach(p => { cx += p[0]; cy += p[1]; });
    cx /= f0Coords2D.length;
    cy /= f0Coords2D.length;

    // Centered F0 local coordinates
    const localF0 = f0Coords2D.map(p => [p[0] - cx, p[1] - cy]);

    const clusterFaces = [
      {
        faceIndex: focusFaceIdx,
        isFocus: true,
        polygon: localF0,
        origPolygon2D: f0Coords2D,
        // Transform from local cluster coords to global 2D net coords: [x + cx, y + cy]
        transformToNet: { tx: cx, ty: cy, rot: 0, scale: 1 },
        clusterToNet: { a: 1, b: 0, c: 0, d: 1, e: cx, f: cy },
        netToCluster: { a: 1, b: 0, c: 0, d: 1, e: -cx, f: -cy }
      }
    ];

    const clusterEdges = [];
    const neighbors = faceAdjacency3D[focusFaceIdx] || [];
    const lenF0 = focusFaceVerts2D.length;

    for (let i = 0; i < lenF0; i++) {
      const v1 = focusFaceVerts2D[i];
      const v2 = focusFaceVerts2D[(i + 1) % lenF0];
      const p1Local = localF0[i];
      const p2Local = localF0[(i + 1) % lenF0];

      // Find if this edge connects to a 3D neighbor
      const neighborEntry = neighbors.find(n => n.edgeIndexInFace === i);

      // Check if this edge is a Fold Crease or a Cut in the global 2D net
      const key2D = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;
      const edgeIdx2D = foldData.edgeLookup ? foldData.edgeLookup.get(key2D) : -1;
      const assign = edgeIdx2D >= 0 ? (foldData.edgesAssignment[edgeIdx2D] || 'C') : 'C';
      const isFoldHinge = (assign === 'V' || assign === 'M' || assign === 'F');

      clusterEdges.push({
        edgeIndex: i,
        v1,
        v2,
        p1: p1Local,
        p2: p2Local,
        isFoldHinge,
        assignment: assign,
        hasNeighbor: !!neighborEntry,
        neighborFace: neighborEntry ? neighborEntry.neighborFace : null
      });

      if (neighborEntry) {
        const nFaceIdx = neighborEntry.neighborFace;
        const nFaceVerts2D = foldData.facesVertices[nFaceIdx];
        const nOrigCoords = nFaceVerts2D.map(vIdx => origCoords[vIdx]);

        // Compute local 2D polygon of neighbor face
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
          isFoldHinge,
          clusterToNet: CrossSeamMapper.computeRigidAffine(nLocalPolygon, nOrigCoords),
          netToCluster: CrossSeamMapper.computeRigidAffine(nOrigCoords, nLocalPolygon)
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
}
