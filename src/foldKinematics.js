import * as THREE from 'three';

/**
 * FOLD Box Kinematics Engine
 * Builds face adjacency graph, spanning tree, and evaluates 3D face transformations.
 */
export class FoldKinematics {
  constructor(parsedFold) {
    this.fold = parsedFold;
    this.rootFaceIndex = 0;
    this.spanningTree = [];
    this.faceAdjacency = [];
    
    this.buildGraph();
    this.selectDefaultRoot();
    this.buildSpanningTree();
  }

  buildGraph() {
    const numFaces = this.fold.facesVertices.length;
    this.faceAdjacency = Array.from({ length: numFaces }, () => []);

    // Create edge-to-faces lookup
    // key: "minV-maxV", value: list of { faceIndex, directedEdge: [v1, v2] }
    const edgeToFaces = new Map();

    this.fold.facesVertices.forEach((faceVerts, fIdx) => {
      const len = faceVerts.length;
      for (let i = 0; i < len; i++) {
        const v1 = faceVerts[i];
        const v2 = faceVerts[(i + 1) % len];
        const key = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;

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

    // Connect adjacent faces across active fold creases (Valley, Mountain, Flat)
    edgeToFaces.forEach((faceList, edgeKey) => {
      if (faceList.length === 2) {
        const f0 = faceList[0];
        const f1 = faceList[1];
        const edgeIdx = this.fold.edgeLookup.get(edgeKey);
        const assign = (this.fold.edgesAssignment[edgeIdx] || 'B').toUpperCase();

        // Never hinge across Cut ('C') or Boundary ('B') lines
        if (assign === 'C' || assign === 'B') {
          return;
        }

        this.faceAdjacency[f0.faceIndex].push({
          neighborFace: f1.faceIndex,
          edgeIndex: edgeIdx,
          parentEdge: [f0.v1, f0.v2],
          childEdge: [f1.v1, f1.v2]
        });

        this.faceAdjacency[f1.faceIndex].push({
          neighborFace: f0.faceIndex,
          edgeIndex: edgeIdx,
          parentEdge: [f1.v1, f1.v2],
          childEdge: [f0.v1, f0.v2]
        });
      }
    });
  }

  selectDefaultRoot() {
    // Pick the face with the maximum number of neighbors (often central face)
    let maxNeighbors = -1;
    let bestFace = 0;
    this.faceAdjacency.forEach((neighbors, fIdx) => {
      if (neighbors.length > maxNeighbors) {
        maxNeighbors = neighbors.length;
        bestFace = fIdx;
      }
    });
    this.rootFaceIndex = bestFace;
  }

  setRootFace(faceIdx) {
    if (faceIdx >= 0 && faceIdx < this.fold.facesVertices.length) {
      this.rootFaceIndex = faceIdx;
      this.buildSpanningTree();
    }
  }

  buildSpanningTree() {
    const numFaces = this.fold.facesVertices.length;
    const visited = new Array(numFaces).fill(false);
    this.spanningTree = [];

    const queue = [this.rootFaceIndex];
    visited[this.rootFaceIndex] = true;

    while (queue.length > 0) {
      const parentIdx = queue.shift();
      const neighbors = this.faceAdjacency[parentIdx] || [];

      for (const edgeInfo of neighbors) {
        const childIdx = edgeInfo.neighborFace;
        if (!visited[childIdx]) {
          visited[childIdx] = true;
          
          const edgeIdx = edgeInfo.edgeIndex;
          const foldAngleDeg = this.fold.edgesFoldAngle[edgeIdx] || 0;
          const foldAngleRad = (foldAngleDeg * Math.PI) / 180;

          // Directed hinge line from v1 to v2 on the parent face
          const v1Idx = edgeInfo.parentEdge[0];
          const v2Idx = edgeInfo.parentEdge[1];

          this.spanningTree.push({
            parentFace: parentIdx,
            childFace: childIdx,
            edgeIndex: edgeIdx,
            v1Idx,
            v2Idx,
            foldAngleRad
          });

          queue.push(childIdx);
        }
      }
    }
  }

  /**
   * Computes 4x4 transform matrices for each face given fold progress t in [0, 1]
   */
  evaluateTransforms(t) {
    const numFaces = this.fold.facesVertices.length;
    const faceMatrices = Array.from({ length: numFaces }, () => new THREE.Matrix4());

    // Root face stays at identity
    faceMatrices[this.rootFaceIndex].identity();

    const origCoords = this.fold.vertices;

    for (const node of this.spanningTree) {
      const parentMatrix = faceMatrices[node.parentFace];
      const angle = t * node.foldAngleRad;

      // Hinge line points in initial 2D coords
      const p1 = new THREE.Vector3(...origCoords[node.v1Idx]);
      const p2 = new THREE.Vector3(...origCoords[node.v2Idx]);

      // Hinge line direction
      const axis = new THREE.Vector3().subVectors(p2, p1).normalize();

      // Create rotation around hinge line (p1, axis)
      const T1 = new THREE.Matrix4().makeTranslation(-p1.x, -p1.y, -p1.z);
      const R = new THREE.Matrix4().makeRotationAxis(axis, angle);
      const T2 = new THREE.Matrix4().makeTranslation(p1.x, p1.y, p1.z);

      const localHingeMatrix = new THREE.Matrix4().multiply(T2).multiply(R).multiply(T1);

      // Child matrix = ParentMatrix * localHingeMatrix
      const childMatrix = new THREE.Matrix4().multiplyMatrices(parentMatrix, localHingeMatrix);
      faceMatrices[node.childFace] = childMatrix;
    }

    return faceMatrices;
  }
}
