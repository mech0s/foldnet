import * as THREE from 'three';
import { parseFoldData } from './foldParser.js';
import { FoldKinematics } from './foldKinematics.js';

/**
 * AssemblyManager
 * Orchestrates multi-component CAD assemblies, synchronizes kinematics across parts,
 * manages active part selection, and calculates exploded assembly views.
 */
export class AssemblyManager {
  /**
   * @param {object} [assemblyPayload] Output from NetUnfolder.unfoldAssemblyToFold or custom assembly json
   * @param {object} [options]
   */
  constructor(assemblyPayload = null, options = {}) {
    this.parts = [];
    this.activePartIndex = 0;
    this.title = 'Assembly';
    this.isAssembly = false;
    this.foldProgress = 0.0;
    this.explodedProgress = 0.0; // 0.0 (assembled) to 1.0 (fully exploded)
    this.listeners = {
      partSelected: [],
      assemblyUpdated: [],
      progressChanged: []
    };

    if (assemblyPayload) {
      this.loadAssembly(assemblyPayload);
    }
  }

  on(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    }
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => {
        try { cb(data); } catch (e) { console.error(`Error in ${event} listener:`, e); }
      });
    }
  }

  /**
   * Load an assembly payload or a single FOLD object into the manager.
   * @param {object} payload Either { isAssembly: true, parts: [...] } or a single FOLD JSON object
   */
  loadAssembly(payload) {
    this.parts = [];
    this.activePartIndex = 0;

    if (payload && payload.isAssembly && Array.isArray(payload.parts)) {
      this.isAssembly = true;
      this.title = payload.title || 'Multi-Part Assembly';

      payload.parts.forEach((p, idx) => {
        const foldJson = p.foldData || p;
        const parsedFold = parseFoldData(foldJson);
        const kinematics = new FoldKinematics(parsedFold);

        const bbox = p.bbox || (foldJson._assembly ? foldJson._assembly.target3DBBox : null) || this.computeBBoxFromFold(parsedFold);
        const center = p.center || (foldJson._assembly ? foldJson._assembly.target3DOrigin : null) || [
          (bbox.min[0] + bbox.max[0]) / 2,
          (bbox.min[1] + bbox.max[1]) / 2,
          (bbox.min[2] + bbox.max[2]) / 2
        ];

        const alignTransform = this.computePartAlignmentTransform(foldJson, parsedFold);

        let faceArtworks = new Map();
        if (foldJson._artworks) {
          for (const [fIdxStr, list] of Object.entries(foldJson._artworks)) {
            faceArtworks.set(parseInt(fIdxStr, 10), list);
          }
        }

        this.parts.push({
          id: p.id || `part_${idx}`,
          name: p.name || foldJson.file_title || `Component ${idx + 1}`,
          foldJson,
          foldData: parsedFold,
          kinematics,
          bbox,
          center,
          isVisible: true,
          faceArtworks,
          alignMatrix: alignTransform.matrix,
          alignTranslation: alignTransform.translation,
          alignQuaternion: alignTransform.quaternion,
          explosionVector: [0, 0, 0]
        });
      });
    } else if (payload) {
      // Single FOLD model fallback
      this.isAssembly = false;
      const parsedFold = parseFoldData(payload);
      const kinematics = new FoldKinematics(parsedFold);
      const bbox = this.computeBBoxFromFold(parsedFold);
      const center = [
        (bbox.min[0] + bbox.max[0]) / 2,
        (bbox.min[1] + bbox.max[1]) / 2,
        (bbox.min[2] + bbox.max[2]) / 2
      ];
      const alignTransform = this.computePartAlignmentTransform(payload, parsedFold);

      let faceArtworks = new Map();
      if (payload._artworks) {
        for (const [fIdxStr, list] of Object.entries(payload._artworks)) {
          faceArtworks.set(parseInt(fIdxStr, 10), list);
        }
      }

      this.parts.push({
        id: 'part_0',
        name: payload.file_title || 'Main Body',
        foldJson: payload,
        foldData: parsedFold,
        kinematics,
        bbox,
        center,
        isVisible: true,
        faceArtworks,
        alignMatrix: alignTransform.matrix,
        alignTranslation: alignTransform.translation,
        alignQuaternion: alignTransform.quaternion,
        explosionVector: [0, 0, 0]
      });
    }

    this.computeAssemblyCentroidAndExplosion();
    this.emit('assemblyUpdated', this);
    if (this.parts.length > 0) {
      this.emit('partSelected', this.getActivePart());
    }
  }

  /**
   * Computes the 3D rigid alignment transformation from local 2D root face coordinates to original 3D CAD space.
   */
  computePartAlignmentTransform(foldJson, parsedFold) {
    const assemblyMeta = foldJson._assembly;
    if (!assemblyMeta || !assemblyMeta.rootFace3DVertices || assemblyMeta.rootFace3DVertices.length < 3) {
      return {
        matrix: new THREE.Matrix4(),
        translation: new THREE.Vector3(0, 0, 0),
        quaternion: new THREE.Quaternion()
      };
    }

    const rootIdx = assemblyMeta.rootFaceIndex !== undefined ? assemblyMeta.rootFaceIndex : 0;
    const root2DIndices = parsedFold.facesVertices[rootIdx];
    if (!root2DIndices || root2DIndices.length < 3) {
      return {
        matrix: new THREE.Matrix4(),
        translation: new THREE.Vector3(0, 0, 0),
        quaternion: new THREE.Quaternion()
      };
    }

    const root2DVerts = root2DIndices.map(vi => parsedFold.vertices[vi]);
    const root3DVerts = assemblyMeta.rootFace3DVertices;

    // 2D root face basis (in flat 2D net coordinate system, Z=0):
    const p0_2D = new THREE.Vector3(root2DVerts[0][0], root2DVerts[0][1], 0);
    const p1_2D = new THREE.Vector3(root2DVerts[1][0], root2DVerts[1][1], 0);
    const u2D = new THREE.Vector3().subVectors(p1_2D, p0_2D).normalize();
    const w2D = new THREE.Vector3(0, 0, 1);
    const v2D = new THREE.Vector3().crossVectors(w2D, u2D).normalize();

    // 3D root face basis in CAD model space:
    const p0_3D = new THREE.Vector3(...root3DVerts[0]);
    const p1_3D = new THREE.Vector3(...root3DVerts[1]);
    const u3D = new THREE.Vector3().subVectors(p1_3D, p0_3D).normalize();

    let nx = 0, ny = 0, nz = 0;
    const n = root3DVerts.length;
    for (let i = 0; i < n; i++) {
      const c = root3DVerts[i], nxt = root3DVerts[(i + 1) % n];
      nx += (c[1] - nxt[1]) * (c[2] + nxt[2]);
      ny += (c[2] - nxt[2]) * (c[0] + nxt[0]);
      nz += (c[0] - nxt[0]) * (c[1] + nxt[1]);
    }
    const len = Math.hypot(nx, ny, nz);
    const w3D = len > 1e-6 ? new THREE.Vector3(nx / len, ny / len, nz / len) : new THREE.Vector3(0, 0, 1);
    const v3D = new THREE.Vector3().crossVectors(w3D, u3D).normalize();

    const m2D = new THREE.Matrix4().makeBasis(u2D, v2D, w2D).setPosition(p0_2D);
    const m3D = new THREE.Matrix4().makeBasis(u3D, v3D, w3D).setPosition(p0_3D);

    const matrix = new THREE.Matrix4().multiplyMatrices(m3D, m2D.clone().invert());
    const translation = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    matrix.decompose(translation, quaternion, scale);

    return { matrix, translation, quaternion };
  }

  computeBBoxFromFold(foldData) {
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    const coords = foldData.vertices_coords || [];

    coords.forEach(pt => {
      const x = pt[0] || 0;
      const y = pt[1] || 0;
      const z = pt[2] || 0;
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
    });

    if (minX === Infinity) {
      return { min: [-50, -50, -50], max: [50, 50, 50] };
    }
    return { min: [minX, minY, minZ], max: [maxX, maxY, maxZ] };
  }

  computeAssemblyCentroidAndExplosion() {
    if (this.parts.length === 0) return;

    let sumX = 0, sumY = 0, sumZ = 0;
    let globalMin = [Infinity, Infinity, Infinity];
    let globalMax = [-Infinity, -Infinity, -Infinity];

    this.parts.forEach(part => {
      sumX += part.center[0];
      sumY += part.center[1];
      sumZ += part.center[2];

      for (let k = 0; k < 3; k++) {
        globalMin[k] = Math.min(globalMin[k], part.bbox.min[k]);
        globalMax[k] = Math.max(globalMax[k], part.bbox.max[k]);
      }
    });

    const count = this.parts.length;
    this.globalCentroid = [sumX / count, sumY / count, sumZ / count];
    this.globalBBox = { min: globalMin, max: globalMax };

    // Calculate max dimension of assembly to scale explosion offset
    const dx = globalMax[0] - globalMin[0];
    const dy = globalMax[1] - globalMin[1];
    const dz = globalMax[2] - globalMin[2];
    const maxDim = Math.max(dx, dy, dz, 50);

    this.parts.forEach((part, idx) => {
      const vx = part.center[0] - this.globalCentroid[0];
      const vy = part.center[1] - this.globalCentroid[1];
      const vz = part.center[2] - this.globalCentroid[2];
      const dist = Math.hypot(vx, vy, vz);

      if (dist > 1e-4) {
        part.explosionVector = [
          (vx / dist) * maxDim * 0.8,
          (vy / dist) * maxDim * 0.8,
          (vz / dist) * maxDim * 0.8
        ];
      } else {
        // Offset along staggered axes if concentric
        const axis = idx % 3;
        part.explosionVector = [
          axis === 0 ? maxDim * 0.6 * (idx % 2 === 0 ? 1 : -1) : 0,
          axis === 1 ? maxDim * 0.6 * (idx % 2 === 0 ? 1 : -1) : 0,
          axis === 2 ? maxDim * 0.6 * (idx % 2 === 0 ? 1 : -1) : 0
        ];
      }
    });
  }

  getActivePart() {
    return this.parts[this.activePartIndex] || null;
  }

  setActivePartIndex(idx) {
    if (idx >= 0 && idx < this.parts.length && idx !== this.activePartIndex) {
      this.activePartIndex = idx;
      this.emit('partSelected', this.getActivePart());
    }
  }

  updateFoldProgress(progress) {
    this.foldProgress = Math.max(0, Math.min(1, progress));
    this.emit('progressChanged', { fold: this.foldProgress, exploded: this.explodedProgress });
  }

  updateExplodedProgress(progress) {
    this.explodedProgress = Math.max(0, Math.min(1, progress));
    this.emit('progressChanged', { fold: this.foldProgress, exploded: this.explodedProgress });
  }

  /**
   * Update the FOLD JSON of the active part (e.g. after Net Editor modifications)
   */
  updateActivePartFoldJSON(foldJson) {
    const active = this.getActivePart();
    if (!active) return;

    // Preserve _assembly metadata if not explicitly provided
    if (active.foldJson && active.foldJson._assembly && !foldJson._assembly) {
      foldJson._assembly = active.foldJson._assembly;
    }
    if (active.foldData && active.foldData._assembly && !foldJson._assembly) {
      foldJson._assembly = active.foldData._assembly;
    }

    active.foldJson = foldJson;
    active.foldData = parseFoldData(foldJson);
    active.kinematics = new FoldKinematics(active.foldData);

    // Recompute alignment transforms so 3D position is strictly preserved
    const alignTransform = this.computePartAlignmentTransform(foldJson, active.foldData);
    active.alignMatrix = alignTransform.matrix;
    active.alignTranslation = alignTransform.translation;
    active.alignQuaternion = alignTransform.quaternion;

    this.emit('assemblyUpdated', this);
  }

  /**
   * Serializes the complete assembly or single model into a FOLD 1.1 compliant JSON payload.
   * Preserves 2D net topology, crease assignments, fold angles, 3D spatial alignment metadata,
   * and face vector artworks.
   */
  getAssemblyJSON() {
    if (!this.isAssembly && this.parts.length <= 1) {
      const part = this.parts[0];
      if (!part) return null;
      const foldJson = { ...(part.foldJson || part.foldData) };

      if (!foldJson._assembly) {
        if (part.foldData && part.foldData._assembly) foldJson._assembly = part.foldData._assembly;
        else if (part.foldJson && part.foldJson._assembly) foldJson._assembly = part.foldJson._assembly;
      }

      if (part.faceArtworks && part.faceArtworks.size > 0) {
        foldJson._artworks = {};
        part.faceArtworks.forEach((artList, fIdx) => {
          if (artList && artList.length > 0) {
            foldJson._artworks[fIdx] = artList;
          }
        });
      }
      return foldJson;
    }

    const partsExport = this.parts.map((p, idx) => {
      const pFold = { ...(p.foldJson || p.foldData) };

      if (!pFold._assembly) {
        if (p.foldData && p.foldData._assembly) pFold._assembly = p.foldData._assembly;
        else if (p.foldJson && p.foldJson._assembly) pFold._assembly = p.foldJson._assembly;
      }

      if (p.faceArtworks && p.faceArtworks.size > 0) {
        pFold._artworks = {};
        p.faceArtworks.forEach((artList, fIdx) => {
          if (artList && artList.length > 0) {
            pFold._artworks[fIdx] = artList;
          }
        });
      }
      return {
        id: p.id || `part_${idx}`,
        name: p.name || `Component ${idx + 1}`,
        bbox: p.bbox,
        center: p.center,
        foldData: pFold
      };
    });

    return {
      file_spec: 1.1,
      file_creator: 'FoldNet Assembly',
      file_title: this.title || 'Multi-Part Assembly',
      file_classes: ['multiModel'],
      isAssembly: true,
      parts: partsExport
    };
  }
}
