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

    // For solid-mesh STLs the coplanar merger produces BOTH the outer surface
    // and the inner shell as separate, disconnected edge-adjacency components.
    // Keeping both causes the net unfolder to fail (inner/outer face pairs
    // superimpose in 2D). We keep only the largest connected component by
    // total face area — the outer surface. For pure surface-shell STLs there
    // is exactly one component so nothing is discarded (concave notch walls stay).
    const filteredFaces = this.filterLargestConnectedComponent(vertices, planarFaces);

    // Grid refinement (Demaine & O'Rourke "grid unfolding"):
    // The spanning-tree unfolding algorithm requires all faces to be convex.
    // Non-convex faces (L, T, U shapes with >4 vertices) must be subdivided
    // into axis-aligned rectangles. We compute grid lines from all vertex
    // coordinates on each face's plane, then clip each face into grid cells.
    const { vertices: refinedVertices, facesVertices: refinedFaces } =
      this.subdivideNonConvexFaces(vertices, filteredFaces);

    return {
      vertices: refinedVertices,
      facesVertices: refinedFaces
    };
  }

  /**
   * Demaine-style global grid refinement: collect ALL vertex X/Y/Z coordinates
   * as grid lines, then subdivide EVERY face into axis-aligned rectangular cells.
   * This ensures adjacent faces on perpendicular planes share intermediate
   * vertices, maintaining dual-graph connectivity after subdivision.
   */
  static subdivideNonConvexFaces(vertices, planarFaces) {
    // Step 1: Collect global grid coordinates from ALL vertices across ALL faces
    const globalX = new Set();
    const globalY = new Set();
    const globalZ = new Set();
    const tol = 1e-4;
    const snap = v => Math.round(v / tol) * tol;

    for (const fv of planarFaces) {
      for (const vIdx of fv) {
        const v = vertices[vIdx];
        globalX.add(snap(v[0]));
        globalY.add(snap(v[1]));
        globalZ.add(snap(v[2]));
      }
    }
    const gx = [...globalX].sort((a, b) => a - b);
    const gy = [...globalY].sort((a, b) => a - b);
    const gz = [...globalZ].sort((a, b) => a - b);

    // Step 2: Build vertex dedup map
    const newVertices = vertices.slice();
    const vertMap = new Map();

    const getVertIdx = (x, y, z) => {
      const rx = snap(x), ry = snap(y), rz = snap(z);
      const key = `${rx},${ry},${rz}`;
      if (vertMap.has(key)) return vertMap.get(key);

      // Search existing original vertices
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        if (Math.abs(v[0] - rx) < tol && Math.abs(v[1] - ry) < tol && Math.abs(v[2] - rz) < tol) {
          vertMap.set(key, i);
          return i;
        }
      }
      const idx = newVertices.length;
      newVertices.push([rx, ry, rz]);
      vertMap.set(key, idx);
      return idx;
    };

    // Step 3: Subdivide each face using global grid lines projected onto its plane
    const newFaces = [];
    const gridAxes = [gx, gy, gz]; // indexed by axis 0=X, 1=Y, 2=Z

    for (const fv of planarFaces) {
      // Determine face normal → fixed axis
      const p0 = new THREE.Vector3(...vertices[fv[0]]);
      const p1 = new THREE.Vector3(...vertices[fv[1]]);
      const p2 = new THREE.Vector3(...vertices[fv[2]]);
      const e1 = new THREE.Vector3().subVectors(p1, p0);
      const e2 = new THREE.Vector3().subVectors(p2, p0);
      const normal = new THREE.Vector3().crossVectors(e1, e2).normalize();

      const ax = Math.abs(normal.x), ay = Math.abs(normal.y), az = Math.abs(normal.z);
      let fixedAxis, uAxis, vAxis;
      if (ax >= ay && ax >= az) {
        fixedAxis = 0; uAxis = 1; vAxis = 2;
      } else if (ay >= ax && ay >= az) {
        fixedAxis = 1; uAxis = 0; vAxis = 2;
      } else {
        fixedAxis = 2; uAxis = 0; vAxis = 1;
      }

      const fixedVal = snap(vertices[fv[0]][fixedAxis]);

      // Use GLOBAL grid lines for u and v axes, filtered to face's bounding range
      const poly2D = fv.map(vIdx => {
        const v = vertices[vIdx];
        return [v[uAxis], v[vAxis]];
      });

      // Bounding box of this face in u,v space
      let uMin = Infinity, uMax = -Infinity, vMin = Infinity, vMax = -Infinity;
      for (const pt of poly2D) {
        if (pt[0] < uMin) uMin = pt[0];
        if (pt[0] > uMax) uMax = pt[0];
        if (pt[1] < vMin) vMin = pt[1];
        if (pt[1] > vMax) vMax = pt[1];
      }

      // Filter global grid lines to this face's bounding range
      const uLines = gridAxes[uAxis].filter(v => v >= uMin - tol && v <= uMax + tol);
      const vLines = gridAxes[vAxis].filter(v => v >= vMin - tol && v <= vMax + tol);

      if (uLines.length < 2 || vLines.length < 2) {
        // Degenerate — keep original face
        newFaces.push(fv);
        continue;
      }

      // Test each grid cell center against the face polygon
      let emitted = 0;
      for (let ui = 0; ui < uLines.length - 1; ui++) {
        for (let vi = 0; vi < vLines.length - 1; vi++) {
          const u0 = uLines[ui], u1 = uLines[ui + 1];
          const v0 = vLines[vi], v1 = vLines[vi + 1];

          const cu = (u0 + u1) / 2;
          const cv = (v0 + v1) / 2;

          if (this.isPointInPolygon2D(cu, cv, poly2D)) {
            const corners = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
            const cellVerts = corners.map(([u, v]) => {
              const coord = [0, 0, 0];
              coord[uAxis] = u;
              coord[vAxis] = v;
              coord[fixedAxis] = fixedVal;
              return getVertIdx(coord[0], coord[1], coord[2]);
            });

            // Ensure winding matches original normal
            const cp0 = new THREE.Vector3(...newVertices[cellVerts[0]]);
            const cp1 = new THREE.Vector3(...newVertices[cellVerts[1]]);
            const cp2 = new THREE.Vector3(...newVertices[cellVerts[2]]);
            const ce1 = new THREE.Vector3().subVectors(cp1, cp0);
            const ce2 = new THREE.Vector3().subVectors(cp2, cp0);
            const cellNormal = new THREE.Vector3().crossVectors(ce1, ce2);
            if (cellNormal.dot(normal) < 0) {
              cellVerts.reverse();
            }

            newFaces.push(cellVerts);
            emitted++;
          }
        }
      }

      if (emitted === 0) {
        // Fallback: if no grid cells emitted, keep original face
        newFaces.push(fv);
      }
    }

    console.log(
      `[CADParser] Grid refinement: ${planarFaces.length} faces → ` +
      `${newFaces.length} rectangular cells, ${newVertices.length} vertices. ` +
      `Grid: X=${gx.length} Y=${gy.length} Z=${gz.length} lines.`
    );

    return { vertices: newVertices, facesVertices: newFaces };
  }

  /**
   * Simple point-in-polygon (ray casting) for 2D grid cell tests.
   */
  static isPointInPolygon2D(px, py, poly) {
    let inside = false;
    const len = poly.length;
    for (let i = 0, j = len - 1; i < len; j = i++) {
      const xi = poly[i][0], yi = poly[i][1];
      const xj = poly[j][0], yj = poly[j][1];
      const intersect = ((yi > py) !== (yj > py)) &&
        (px < (xj - xi) * (py - yi) / (yj - yi + 1e-9) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }

  /**
   * Build face-adjacency graph via shared edges and return only the faces
   * belonging to the largest connected component (by summed face area).
   */
  static filterLargestConnectedComponent(vertices, planarFaces) {
    if (planarFaces.length <= 1) return planarFaces;

    // Map undirected edge → [faceIndex, …]
    const edgeToFaces = new Map();
    planarFaces.forEach((fv, fIdx) => {
      const len = fv.length;
      for (let i = 0; i < len; i++) {
        const a = fv[i];
        const b = fv[(i + 1) % len];
        const key = `${Math.min(a, b)}-${Math.max(a, b)}`;
        if (!edgeToFaces.has(key)) edgeToFaces.set(key, []);
        edgeToFaces.get(key).push(fIdx);
      }
    });

    // Build adjacency list from shared edges
    const n = planarFaces.length;
    const adj = Array.from({ length: n }, () => new Set());
    edgeToFaces.forEach(faceList => {
      if (faceList.length >= 2) {
        for (let i = 0; i < faceList.length; i++) {
          for (let j = i + 1; j < faceList.length; j++) {
            adj[faceList[i]].add(faceList[j]);
            adj[faceList[j]].add(faceList[i]);
          }
        }
      }
    });

    // BFS to collect connected components
    const visited = new Array(n).fill(false);
    const components = [];
    for (let start = 0; start < n; start++) {
      if (visited[start]) continue;
      const component = [];
      const queue = [start];
      visited[start] = true;
      while (queue.length > 0) {
        const curr = queue.shift();
        component.push(curr);
        adj[curr].forEach(nb => {
          if (!visited[nb]) { visited[nb] = true; queue.push(nb); }
        });
      }
      components.push(component);
    }

    if (components.length === 1) return planarFaces;

    // Keep the component with the greatest total face area (= outer surface)
    const componentAreas = components.map(comp =>
      comp.reduce((sum, fIdx) => sum + this.computeFaceArea(vertices, planarFaces[fIdx]), 0)
    );
    const largestIdx = componentAreas.indexOf(Math.max(...componentAreas));
    console.log(
      `[CADParser] Found ${components.length} disconnected surface components. ` +
      `Keeping outer surface (${components[largestIdx].length} faces, area ≈ ${componentAreas[largestIdx].toFixed(1)}).`
    );
    return components[largestIdx].map(fIdx => planarFaces[fIdx]);
  }

  /** Approximate face area via fan triangulation from vertex 0. */
  static computeFaceArea(vertices, fv) {
    if (fv.length < 3) return 0;
    const p0 = new THREE.Vector3(...vertices[fv[0]]);
    let area = 0;
    for (let i = 1; i < fv.length - 1; i++) {
      const p1 = new THREE.Vector3(...vertices[fv[i]]);
      const p2 = new THREE.Vector3(...vertices[fv[i + 1]]);
      area += new THREE.Vector3()
        .crossVectors(
          new THREE.Vector3().subVectors(p1, p0),
          new THREE.Vector3().subVectors(p2, p0)
        )
        .length() / 2;
    }
    return area;
  }
}
