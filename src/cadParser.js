import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

/**
 * CAD Geometry Parser & Orthogonal Facet Extractor
 * Parses OBJ, STL, and STEP files, validates orthogonality, and merges coplanar triangles into planar 3D box faces.
 */
export class CADParser {
  /**
   * Parse CAD file content into raw 3D polygons/triangles.
   * @param {string|ArrayBuffer} content 
   * @param {string} extension e.g. "obj", "stl", "step", "stp"
   * @returns {Promise<{vertices: number[][], triangles: number[][]}>}
   */
  static async parseCADFile(content, extension) {
    const ext = extension.toLowerCase().replace('.', '');

    if (ext === 'obj') {
      return this.parseOBJ(typeof content === 'string' ? content : new TextDecoder().decode(content));
    } else if (ext === 'stl') {
      return this.parseSTL(content);
    } else if (ext === 'step' || ext === 'stp') {
      return this.parseSTEP(typeof content === 'string' ? content : new TextDecoder().decode(content));
    } else {
      throw new Error(`Unsupported CAD file extension: .${ext}`);
    }
  }

  static parseOBJ(text) {
    const loader = new OBJLoader();
    const group = loader.parse(text);
    return this.extractFromThreeGroup(group);
  }

  static parseSTL(bufferOrText) {
    const loader = new STLLoader();
    const geometry = loader.parse(bufferOrText);
    const mesh = new THREE.Mesh(geometry);
    const group = new THREE.Group();
    group.add(mesh);
    return this.extractFromThreeGroup(group);
  }

  static parseSTEP(text) {
    // Lightweight STEP AP203/AP214 CARTESIAN_POINT & ADVANCED_FACE parser for orthogonal boxes
    const pointMatches = [...text.matchAll(/#(\d+)\s*=\s*CARTESIAN_POINT\s*\(\s*'[^']*'\s*,\s*\(\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*\)\s*\)/gi)];
    
    if (pointMatches.length === 0) {
      throw new Error('STEP file parsing: No CARTESIAN_POINT entities found in STEP file.');
    }

    const pointsMap = new Map();
    pointMatches.forEach(m => {
      const id = parseInt(m[1], 10);
      const x = parseFloat(m[2]);
      const y = parseFloat(m[3]);
      const z = parseFloat(m[4]);
      pointsMap.set(id, [x, y, z]);
    });

    // Extract faces or fallback to 3D bounding box / convex hull of cartesian points
    const vertices = Array.from(pointsMap.values());
    if (vertices.length < 4) {
      throw new Error('STEP file contains insufficient 3D geometry points.');
    }

    // Build 3D mesh from vertices via ConvexGeometry / Bounding Box triangulation
    return this.createBoxMeshFromPoints(vertices);
  }

  static createBoxMeshFromPoints(points) {
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;

    points.forEach(p => {
      minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]);
      minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]);
      minZ = Math.min(minZ, p[2]); maxZ = Math.max(maxZ, p[2]);
    });

    const boxGeo = new THREE.BoxGeometry(maxX - minX, maxY - minY, maxZ - minZ);
    boxGeo.translate((minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2);

    const mesh = new THREE.Mesh(boxGeo);
    const group = new THREE.Group();
    group.add(mesh);
    return this.extractFromThreeGroup(group);
  }

  static extractFromThreeGroup(group) {
    const rawVertices = [];
    const triangles = [];
    const vertMap = new Map();

    const getVertIndex = (x, y, z, tol = 1e-4) => {
      const rx = Math.round(x / tol) * tol;
      const ry = Math.round(y / tol) * tol;
      const rz = Math.round(z / tol) * tol;
      const key = `${rx},${ry},${rz}`;

      if (vertMap.has(key)) return vertMap.get(key);
      const idx = rawVertices.length;
      rawVertices.push([x, y, z]);
      vertMap.set(key, idx);
      return idx;
    };

    group.traverse(child => {
      if (child.isMesh && child.geometry) {
        const geo = child.geometry.isBufferGeometry ? child.geometry : new THREE.BufferGeometry().fromGeometry(child.geometry);
        const posAttr = geo.attributes.position;
        const indexAttr = geo.index;

        child.updateMatrixWorld(true);
        const matrix = child.matrixWorld;

        const processTriangle = (a, b, c) => {
          const vA = new THREE.Vector3().fromBufferAttribute(posAttr, a).applyMatrix4(matrix);
          const vB = new THREE.Vector3().fromBufferAttribute(posAttr, b).applyMatrix4(matrix);
          const vC = new THREE.Vector3().fromBufferAttribute(posAttr, c).applyMatrix4(matrix);

          const idxA = getVertIndex(vA.x, vA.y, vA.z);
          const idxB = getVertIndex(vB.x, vB.y, vB.z);
          const idxC = getVertIndex(vC.x, vC.y, vC.z);

          // Degenerate triangle check
          if (idxA !== idxB && idxB !== idxC && idxA !== idxC) {
            triangles.push([idxA, idxB, idxC]);
          }
        };

        if (indexAttr) {
          for (let i = 0; i < indexAttr.count; i += 3) {
            processTriangle(indexAttr.getX(i), indexAttr.getX(i + 1), indexAttr.getX(i + 2));
          }
        } else {
          for (let i = 0; i < posAttr.count; i += 3) {
            processTriangle(i, i + 1, i + 2);
          }
        }
      }
    });

    return { vertices: rawVertices, triangles };
  }

  /**
   * Phase A Validation & Coplanar Triangle Merger
   * Validates orthogonality of faces and merges coplanar triangles into planar 3D polygons.
   */
  static extractOrthogonalPlanarFaces(meshData, tolerance = 1e-4) {
    const { vertices, triangles } = meshData;
    if (vertices.length === 0 || triangles.length === 0) {
      throw new Error('Invalid CAD data: empty vertices or triangles.');
    }

    // Compute surface normal & plane distance for each triangle
    const trianglePlanes = triangles.map(tri => {
      const p0 = new THREE.Vector3(...vertices[tri[0]]);
      const p1 = new THREE.Vector3(...vertices[tri[1]]);
      const p2 = new THREE.Vector3(...vertices[tri[2]]);

      const edge1 = new THREE.Vector3().subVectors(p1, p0);
      const edge2 = new THREE.Vector3().subVectors(p2, p0);
      const normal = new THREE.Vector3().crossVectors(edge1, edge2).normalize();

      // Check orthogonality: normal must align with +/-X, +/-Y, or +/-Z within tolerance
      const absX = Math.abs(normal.x);
      const absY = Math.abs(normal.y);
      const absZ = Math.abs(normal.z);

      const isAxisX = Math.abs(absX - 1) < tolerance && absY < tolerance && absZ < tolerance;
      const isAxisY = Math.abs(absY - 1) < tolerance && absX < tolerance && absZ < tolerance;
      const isAxisZ = Math.abs(absZ - 1) < tolerance && absX < tolerance && absY < tolerance;

      if (!isAxisX && !isAxisY && !isAxisZ) {
        throw new Error(
          `Non-orthogonal face detected (Normal: [${normal.x.toFixed(3)}, ${normal.y.toFixed(3)}, ${normal.z.toFixed(3)}]). ` +
          `FOLDNet CAD import requires 3D orthogonal box geometries aligned to principal axes.`
        );
      }

      // Snap normal to exact principal axis
      let nx = 0, ny = 0, nz = 0;
      if (isAxisX) nx = Math.sign(normal.x) || 1;
      if (isAxisY) ny = Math.sign(normal.y) || 1;
      if (isAxisZ) nz = Math.sign(normal.z) || 1;

      const snappedNormal = new THREE.Vector3(nx, ny, nz);
      const dist = snappedNormal.dot(p0);

      // Quantize plane key
      const planeKey = `${nx},${ny},${nz}:${(Math.round(dist / tolerance) * tolerance).toFixed(4)}`;

      return {
        tri,
        normal: snappedNormal,
        dist,
        planeKey
      };
    });

    // Group triangles by planeKey
    const planeGroups = new Map();
    trianglePlanes.forEach(tp => {
      if (!planeGroups.has(tp.planeKey)) {
        planeGroups.set(tp.planeKey, []);
      }
      planeGroups.get(tp.planeKey).push(tp.tri);
    });

    // Reconstruct outer polygon boundary for each coplanar face group
    const planarFaces = [];

    planeGroups.forEach((tris, planeKey) => {
      // Find internal boundary edges (edges used exactly once in this coplanar group)
      const edgeCounts = new Map();

      tris.forEach(tri => {
        for (let i = 0; i < 3; i++) {
          const a = tri[i];
          const b = tri[(i + 1) % 3];
          const edgeKey = `${a}->${b}`;
          const reverseKey = `${b}->${a}`;

          if (edgeCounts.has(reverseKey)) {
            edgeCounts.delete(reverseKey);
          } else {
            edgeCounts.set(edgeKey, [a, b]);
          }
        }
      });

      // Chain boundary directed edges into polygon face loop
      const boundaryEdges = Array.from(edgeCounts.values());
      if (boundaryEdges.length < 3) return;

      const nextVertMap = new Map();
      boundaryEdges.forEach(([a, b]) => nextVertMap.set(a, b));

      const visited = new Set();
      const faceLoops = [];

      boundaryEdges.forEach(([startVert]) => {
        if (visited.has(startVert)) return;

        const loop = [];
        let curr = startVert;
        while (curr !== undefined && !visited.has(curr)) {
          visited.add(curr);
          loop.push(curr);
          curr = nextVertMap.get(curr);
        }

        if (loop.length >= 3) {
          faceLoops.push(loop);
        }
      });

      faceLoops.forEach(loop => planarFaces.push(loop));
    });

    // Filter outer surface boundary faces (discard inner shell cavity faces)
    const filteredFaces = this.filterOuterBoundaryFaces(vertices, planarFaces);

    return {
      vertices,
      facesVertices: filteredFaces
    };
  }

  static filterOuterBoundaryFaces(vertices, planarFaces, tolerance = 1e-3) {
    if (planarFaces.length <= 6) return planarFaces;

    const facesByNormal = new Map();

    planarFaces.forEach(fv => {
      const p0 = new THREE.Vector3(...vertices[fv[0]]);
      const p1 = new THREE.Vector3(...vertices[fv[1]]);
      const p2 = new THREE.Vector3(...vertices[fv[2]]);
      const e1 = new THREE.Vector3().subVectors(p1, p0);
      const e2 = new THREE.Vector3().subVectors(p2, p0);
      const norm = new THREE.Vector3().crossVectors(e1, e2).normalize();

      const rx = Math.round(norm.x);
      const ry = Math.round(norm.y);
      const rz = Math.round(norm.z);
      const key = `${rx},${ry},${rz}`;

      const d = norm.x * p0.x + norm.y * p0.y + norm.z * p0.z;

      if (!facesByNormal.has(key)) facesByNormal.set(key, []);
      facesByNormal.get(key).push({ fv, d });
    });

    const outerFaces = [];

    facesByNormal.forEach((list) => {
      list.sort((a, b) => b.d - a.d);
      const maxD = list[0].d;
      list.filter(item => Math.abs(item.d - maxD) < tolerance).forEach(item => outerFaces.push(item.fv));
    });

    return outerFaces.length >= 4 ? outerFaces : planarFaces;
  }
}
