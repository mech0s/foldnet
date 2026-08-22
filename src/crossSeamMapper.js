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

    if (cadDualGraph && cadDualGraph.edges) {
      // Direct CAD 3D dual graph
      cadDualGraph.edges.forEach(edge => {
        faceAdjacency3D[edge.f0].push({
          neighborFace: edge.f1,
          edgeKey: edge.edgeKey,
          v1_3D: edge.v1,
          v2_3D: edge.v2,
          foldAngleDeg: edge.foldAngleDeg
        });
        faceAdjacency3D[edge.f1].push({
          neighborFace: edge.f0,
          edgeKey: edge.edgeKey,
          v1_3D: edge.v2,
          v2_3D: edge.v1,
          foldAngleDeg: edge.foldAngleDeg
        });
      });
      return faceAdjacency3D;
    }

    // For FOLD JSON: Evaluate 3D positions at t = 1.0 (100% folded)
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

    // Extract all directed 3D edge segments per face
    // Key format: rounded 3D coordinates of endpoints "x1,y1,z1-x2,y2,z2"
    const edgeToFaces = new Map();
    const tol = 1e-2;
    const snap = (n) => (Math.round(n / tol) * tol).toFixed(2);
    const pointKey = (p) => `${snap(p.x)},${snap(p.y)},${snap(p.z)}`;

    faceWorldVerts3D.forEach((verts, fIdx) => {
      const len = verts.length;
      for (let i = 0; i < len; i++) {
        const p1 = verts[i];
        const p2 = verts[(i + 1) % len];
        const pk1 = pointKey(p1);
        const pk2 = pointKey(p2);

        const edgeKey = pk1 < pk2 ? `${pk1}_${pk2}` : `${pk2}_${pk1}`;
        if (!edgeToFaces.has(edgeKey)) {
          edgeToFaces.set(edgeKey, []);
        }
        edgeToFaces.get(edgeKey).push({
          faceIndex: fIdx,
          edgeIndexInFace: i,
          p1,
          p2,
          v1_2D: foldData.facesVertices[fIdx][i],
          v2_2D: foldData.facesVertices[fIdx][(i + 1) % len]
        });
      }
    });

    // Connect faces that meet in 3D
    edgeToFaces.forEach((entries, edgeKey) => {
      if (entries.length === 2) {
        const e0 = entries[0];
        const e1 = entries[1];

        faceAdjacency3D[e0.faceIndex].push({
          neighborFace: e1.faceIndex,
          edgeKey,
          edgeIndexInFace: e0.edgeIndexInFace,
          v1_2D: e0.v1_2D,
          v2_2D: e0.v2_2D,
          neighborEdgeIndex: e1.edgeIndexInFace
        });

        faceAdjacency3D[e1.faceIndex].push({
          neighborFace: e0.faceIndex,
          edgeKey,
          edgeIndexInFace: e1.edgeIndexInFace,
          v1_2D: e1.v1_2D,
          v2_2D: e1.v2_2D,
          neighborEdgeIndex: e0.edgeIndexInFace
        });
      }
    });

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
        transformToNet: { tx: cx, ty: cy, rot: 0, scale: 1 }
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
      const neighborEntry = neighbors.find(n => 
        (n.v1_2D === v1 && n.v2_2D === v2) || (n.v1_2D === v2 && n.v2_2D === v1) || n.edgeIndexInFace === i
      );

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

        // Find the shared edge on neighbor in 2D or 3D
        // In local 2D, we rigidly align neighbor edge [v2, v1] to F0 edge [p1Local, p2Local]
        // Compute edge lengths
        const hDx = p2Local[0] - p1Local[0];
        const hDy = p2Local[1] - p1Local[1];
        const hLen = Math.hypot(hDx, hDy);

        // Compute local 2D polygon of neighbor face
        const nLocalPolygon = this.alignNeighborFaceToEdge(
          nOrigCoords,
          neighborEntry.neighborEdgeIndex,
          p1Local,
          p2Local
        );

        clusterFaces.push({
          faceIndex: nFaceIdx,
          isFocus: false,
          polygon: nLocalPolygon,
          origPolygon2D: nOrigCoords,
          sharedEdgeIndex: i,
          isFoldHinge
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
  static alignNeighborFaceToEdge(neighborCoords, neighborEdgeIdx, p1, p2) {
    const len = neighborCoords.length;
    const nv1 = neighborCoords[neighborEdgeIdx];
    const nv2 = neighborCoords[(neighborEdgeIdx + 1) % len];

    // Source edge in neighbor local coords: from nv2 to nv1 (opposite direction)
    const sDx = nv1[0] - nv2[0];
    const sDy = nv1[1] - nv2[1];

    // Target edge: from p1 to p2
    const tDx = p2[0] - p1[0];
    const tDy = p2[1] - p1[1];

    const sAngle = Math.atan2(sDy, sDx);
    const tAngle = Math.atan2(tDy, tDx);
    const rotAngle = tAngle - sAngle;

    const cos = Math.cos(rotAngle);
    const sin = Math.sin(rotAngle);

    return neighborCoords.map(pt => {
      const rx = (pt[0] - nv2[0]) * cos - (pt[1] - nv2[1]) * sin + p1[0];
      const ry = (pt[0] - nv2[0]) * sin + (pt[1] - nv2[1]) * cos + p1[1];
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
}
