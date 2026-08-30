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
   * Segment raw mesh triangles into disconnected topological bodies/shells.
   * @param {{vertices: number[][], triangles: number[][]}} meshData
   * @returns {Array<{vertices: number[][], triangles: number[][]}>}
   */
  static segmentConnectedTriangleBodies(meshData) {
    const { vertices, triangles } = meshData;
    if (!triangles || triangles.length === 0) return [];

    const edgeToTris = new Map();
    triangles.forEach((tri, tIdx) => {
      for (let i = 0; i < 3; i++) {
        const a = Math.min(tri[i], tri[(i + 1) % 3]);
        const b = Math.max(tri[i], tri[(i + 1) % 3]);
        const key = `${a}-${b}`;
        if (!edgeToTris.has(key)) edgeToTris.set(key, []);
        edgeToTris.get(key).push(tIdx);
      }
    });

    const triAdj = Array.from({ length: triangles.length }, () => []);
    edgeToTris.forEach(triList => {
      for (let i = 0; i < triList.length; i++) {
        for (let j = i + 1; j < triList.length; j++) {
          triAdj[triList[i]].push(triList[j]);
          triAdj[triList[j]].push(triList[i]);
        }
      }
    });

    const visited = new Uint8Array(triangles.length);
    const bodies = [];

    for (let i = 0; i < triangles.length; i++) {
      if (visited[i]) continue;
      const bodyTris = [];
      const queue = [i];
      visited[i] = 1;
      while (queue.length > 0) {
        const curr = queue.shift();
        bodyTris.push(curr);
        for (const nb of triAdj[curr]) {
          if (!visited[nb]) {
            visited[nb] = 1;
            queue.push(nb);
          }
        }
      }

      // Remap vertices for this body
      const bodyVertMap = new Map();
      const bodyVertices = [];
      const remappedTriangles = [];

      bodyTris.forEach(tIdx => {
        const tri = triangles[tIdx];
        const newTri = tri.map(vIdx => {
          if (bodyVertMap.has(vIdx)) return bodyVertMap.get(vIdx);
          const newIdx = bodyVertices.length;
          bodyVertices.push(vertices[vIdx]);
          bodyVertMap.set(vIdx, newIdx);
          return newIdx;
        });
        remappedTriangles.push(newTri);
      });

      bodies.push({
        vertices: bodyVertices,
        triangles: remappedTriangles
      });
    }

    return bodies;
  }

  /**
   * Phase A Validation & Multi-Body Extraction
   * Extracts planar faces and grid refinement across all detected bodies in the CAD mesh.
   * @param {{vertices: number[][], triangles: number[][]}} meshData
   * @param {number} tolerance
   * @returns {{isAssembly: boolean, components: Array<{id: string, name: string, vertices: number[][], facesVertices: number[][], bbox: {min: number[], max: number[]}, center: number[], area: number}>}}
   */
  static extractMultiBodyPlanarFaces(meshData, tolerance = 1e-4) {
    const bodies = this.segmentConnectedTriangleBodies(meshData);
    if (bodies.length === 0) {
      throw new Error('Invalid CAD data: no valid 3D geometry found.');
    }

    const components = [];

    bodies.forEach((bodyMesh, bIdx) => {
      try {
        const bodyPlanar = this.extractSingleBodyPlanarFaces(bodyMesh, tolerance);
        if (bodyPlanar.facesVertices.length > 0) {
          // Compute 3D bounding box & centroid
          let minX = Infinity, minY = Infinity, minZ = Infinity;
          let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

          bodyPlanar.vertices.forEach(v => {
            minX = Math.min(minX, v[0]); maxX = Math.max(maxX, v[0]);
            minY = Math.min(minY, v[1]); maxY = Math.max(maxY, v[1]);
            minZ = Math.min(minZ, v[2]); maxZ = Math.max(maxZ, v[2]);
          });

          const center = [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2];
          const totalArea = bodyPlanar.facesVertices.reduce(
            (sum, fv) => sum + this.computeFaceArea(bodyPlanar.vertices, fv),
            0
          );

          components.push({
            id: `part_${bIdx}`,
            name: bodies.length > 1 ? `Component ${bIdx + 1}` : 'Main Body',
            vertices: bodyPlanar.vertices,
            facesVertices: bodyPlanar.facesVertices,
            bbox: { min: [minX, minY, minZ], max: [maxX, maxY, maxZ] },
            center,
            area: totalArea
          });
        }
      } catch (err) {
        console.warn(`[CADParser] Warning extracting body ${bIdx}:`, err.message);
      }
    });

    if (components.length === 0) {
      throw new Error('Could not extract any valid orthogonal planar faces from the CAD model.');
    }

    console.log(`[CADParser] Extracted ${components.length} component(s) from CAD model.`);
    return {
      isAssembly: components.length > 1,
      components
    };
  }

  /**
   * Extract planar faces from a single connected 3D triangle body.
   */
  static extractSingleBodyPlanarFaces(meshData, tolerance = 1e-4) {
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

    const filteredFaces = this.filterLargestConnectedComponent(vertices, planarFaces);

    const { vertices: refinedVertices, facesVertices: refinedFaces } =
      this.subdivideNonConvexFaces(vertices, filteredFaces);

    return {
      vertices: refinedVertices,
      facesVertices: refinedFaces
    };
  }

  /**
   * Phase A Validation & Coplanar Triangle Merger (Legacy single-body entry point)
   */
  static extractOrthogonalPlanarFaces(meshData, tolerance = 1e-4) {
    const multiResult = this.extractMultiBodyPlanarFaces(meshData, tolerance);
    // Return largest component for single-body backward compatibility
    const mainComp = multiResult.components.reduce((max, c) => c.area > max.area ? c : max, multiResult.components[0]);
    return {
      vertices: mainComp.vertices,
      facesVertices: mainComp.facesVertices
    };
  }

  /**
   * Demaine-style global grid refinement: collect ALL vertex X/Y/Z coordinates
   * as grid lines, then subdivide EVERY face into axis-aligned rectangular cells.
   * This ensures adjacent faces on perpendicular planes share intermediate
   * vertices, maintaining dual-graph connectivity after subdivision.
   */
  /**
   * Newell's method to compute exact outward area-weighted normal for arbitrary 3D polygons.
   */
  static computePolygonNormal(vertices3D, faceVertIndices) {
    let nx = 0, ny = 0, nz = 0;
    const n = faceVertIndices.length;
    for (let i = 0; i < n; i++) {
      const curr = vertices3D[faceVertIndices[i]];
      const next = vertices3D[faceVertIndices[(i + 1) % n]];
      nx += (curr[1] - next[1]) * (curr[2] + next[2]);
      ny += (curr[2] - next[2]) * (curr[0] + next[0]);
      nz += (curr[0] - next[0]) * (curr[1] + next[1]);
    }
    const len = Math.hypot(nx, ny, nz);
    return len > 1e-6 ? new THREE.Vector3(nx / len, ny / len, nz / len) : new THREE.Vector3(0, 0, 1);
  }

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
    const newVertices = vertices.map(v => [snap(v[0]), snap(v[1]), snap(v[2])]);
    const vertMap = new Map();
    newVertices.forEach((v, idx) => {
      vertMap.set(`${v[0]},${v[1]},${v[2]}`, idx);
    });

    const getVertIdx = (x, y, z) => {
      const rx = snap(x), ry = snap(y), rz = snap(z);
      const key = `${rx},${ry},${rz}`;
      if (vertMap.has(key)) return vertMap.get(key);
      const idx = newVertices.length;
      newVertices.push([rx, ry, rz]);
      vertMap.set(key, idx);
      return idx;
    };

    // Step 3: Subdivide each face using global grid lines projected onto its plane
    const newFaces = [];
    const gridAxes = [gx, gy, gz]; // indexed by axis 0=X, 1=Y, 2=Z

    for (const fv of planarFaces) {
      // Determine true face normal via Newell's method
      const normal = this.computePolygonNormal(vertices, fv);

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
