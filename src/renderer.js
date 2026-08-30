import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

export const THEMES = {
  highContrast: {
    name: 'High Contrast (Yellow/Cyan)',
    bg: 0x090b10,
    frontColor: 0xffea00,
    backColor: 0x00f0ff,
    valleyColor: 0x3b82f6,
    mountainColor: 0xef4444,
    boundaryColor: 0xffffff,
    cutColor: 0xf97316,
    flatColor: 0x64748b,
    unassignedColor: 0xa855f7,
    gridColor: 0x1e293b
  },
  cardboard: {
    name: 'Cardboard Craft',
    bg: 0x0f1219,
    frontColor: 0xd4a373,
    backColor: 0xa97c50,
    valleyColor: 0x3b82f6,
    mountainColor: 0xef4444,
    boundaryColor: 0xf59e0b,
    cutColor: 0xf97316,
    flatColor: 0x64748b,
    unassignedColor: 0xa855f7,
    gridColor: 0x1e293b
  },
  blueprint: {
    name: 'Blueprint',
    bg: 0x0b192c,
    frontColor: 0x1e3a8a,
    backColor: 0x172554,
    valleyColor: 0x60a5fa,
    mountainColor: 0xf87171,
    boundaryColor: 0x93c5fd,
    cutColor: 0xfb923c,
    flatColor: 0x475569,
    unassignedColor: 0xc084fc,
    gridColor: 0x1e293b
  },
  cyber: {
    name: 'Cyber Neon',
    bg: 0x070913,
    frontColor: 0x4c1d95,
    backColor: 0x2e1065,
    valleyColor: 0x06b6d4,
    mountainColor: 0xf43f5e,
    boundaryColor: 0xa855f7,
    cutColor: 0xf97316,
    flatColor: 0x475569,
    unassignedColor: 0xe879f9,
    gridColor: 0x1e1b4b
  },
  paper: {
    name: 'Origami Paper',
    bg: 0x18181b,
    frontColor: 0xf8fafc,
    backColor: 0xe2e8f0,
    valleyColor: 0x2563eb,
    mountainColor: 0xd97706,
    boundaryColor: 0x334155,
    cutColor: 0xe11d48,
    flatColor: 0x94a3b8,
    unassignedColor: 0x8b5cf6,
    gridColor: 0x27272a
  }
};

export class FoldRenderer {
  constructor(container, options = {}) {
    this.container = container;
    this.currentTheme = THEMES.highContrast;
    this.onFaceClick = options.onFaceClick || null;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.currentTheme.bg);

    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      10000
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    this.setupLights();
    // (Ground grid mesh removed for a clean modern viewport)

    // Raycasting for interactive 3D face selection
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.pointerDownPos = { x: 0, y: 0 };

    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      this.pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    this.renderer.domElement.addEventListener('pointerup', (e) => {
      // Only treat as click if pointer hasn't been dragged (orbit controls threshold)
      const dist = Math.hypot(e.clientX - this.pointerDownPos.x, e.clientY - this.pointerDownPos.y);
      if (dist < 6 && this.onFaceClick) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);

        const meshes = this.faceMeshes.flatMap(item => [item.frontMesh, item.backMesh]);
        const intersects = this.raycaster.intersectObjects(meshes, false);

        if (intersects.length > 0) {
          const hitMesh = intersects[0].object;
          if (hitMesh.userData && hitMesh.userData.faceIndex !== undefined) {
            const faceIdx = hitMesh.userData.faceIndex;
            const partIdx = hitMesh.userData.partIndex !== undefined ? hitMesh.userData.partIndex : 0;
            const cameraUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion).normalize();
            this.onFaceClick(faceIdx, partIdx, hitMesh.userData, cameraUp);
          }
        }
      }
    });

    // Geometry groups
    this.modelGroup = new THREE.Group();
    this.scene.add(this.modelGroup);

    this.faceMeshes = [];
    this.creaseLines = null;
    // Show creases if explicitly requested (e.g. for 3D preview pop-outs), otherwise clean by default
    this.showCreases = options.showCreases !== undefined ? options.showCreases : false;

    window.addEventListener('resize', () => this.onWindowResize());
  }

  setupLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight1.position.set(10, 20, 15);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 2048;
    dirLight1.shadow.mapSize.height = 2048;
    dirLight1.shadow.bias = -0.0001;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x90b0ff, 0.4);
    dirLight2.position.set(-10, -10, -10);
    this.scene.add(dirLight2);
  }

  setTheme(themeKey) {
    if (THEMES[themeKey]) {
      this.currentTheme = THEMES[themeKey];
      this.scene.background.setHex(this.currentTheme.bg);
      if (this.gridHelper) {
        this.gridHelper.material.color.setHex(this.currentTheme.gridColor);
      }

      // Update existing materials
      this.faceMeshes.forEach(item => {
        item.frontMesh.material.color.setHex(this.currentTheme.frontColor);
        item.backMesh.material.color.setHex(this.currentTheme.backColor);
      });
      if (this.creaseLines) {
        this.updateCreaseColors();
      }
    }
  }

  triangulateFace(faceVerts, origCoords) {
    const n = faceVerts.length;
    if (n === 3) return [0, 1, 2];
    if (n === 4) return [0, 1, 2, 0, 2, 3];

    // For 5+ vertices (e.g. non-convex L-shaped or T-shaped faces)
    const p0 = new THREE.Vector3(...origCoords[faceVerts[0]]);
    const p1 = new THREE.Vector3(...origCoords[faceVerts[1]]);

    let uAxis = new THREE.Vector3().subVectors(p1, p0).normalize();
    let normal = null;

    for (let i = 2; i < n; i++) {
      const pI = new THREE.Vector3(...origCoords[faceVerts[i]]);
      const cross = new THREE.Vector3().crossVectors(uAxis, new THREE.Vector3().subVectors(pI, p0));
      if (cross.lengthSq() > 1e-6) {
        normal = cross.normalize();
        break;
      }
    }

    if (!normal) normal = new THREE.Vector3(0, 0, 1);
    const vAxis = new THREE.Vector3().crossVectors(normal, uAxis).normalize();

    const contour2D = faceVerts.map(vIdx => {
      const v = new THREE.Vector3(...origCoords[vIdx]);
      const rel = new THREE.Vector3().subVectors(v, p0);
      return new THREE.Vector2(rel.dot(uAxis), rel.dot(vAxis));
    });

    const triangles = THREE.ShapeUtils.triangulateShape(contour2D, []);
    const indices = [];
    triangles.forEach(tri => {
      indices.push(tri[0], tri[1], tri[2]);
    });

    return indices.length > 0 ? indices : [0, 1, 2];
  }

  buildModel(foldData, kinematics, assemblyManager = null) {
    if (assemblyManager && assemblyManager.isAssembly) {
      return this.buildAssembly(assemblyManager);
    }

    this.assemblyManager = null;
    this.fold = foldData;
    this.kinematics = kinematics;
    this.partMeshGroups = [];

    // Clear previous model
    while (this.modelGroup.children.length > 0) {
      const child = this.modelGroup.children[0];
      if (child.geometry) child.geometry.dispose();
      this.modelGroup.remove(child);
    }
    this.faceMeshes = [];

    // Create Face Geometries
    const origCoords = this.fold.vertices;

    this.fold.facesVertices.forEach((faceVerts, fIdx) => {
      const indices = this.triangulateFace(faceVerts, origCoords);

      const positions = new Float32Array(faceVerts.length * 3);
      faceVerts.forEach((vIdx, i) => {
        const c = origCoords[vIdx];
        positions[i * 3 + 0] = c[0];
        positions[i * 3 + 1] = c[1];
        positions[i * 3 + 2] = c[2];
      });

      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      faceVerts.forEach(vIdx => {
        const c = origCoords[vIdx];
        if (c[0] < minX) minX = c[0];
        if (c[0] > maxX) maxX = c[0];
        if (c[1] < minY) minY = c[1];
        if (c[1] > maxY) maxY = c[1];
      });
      const width = Math.max(maxX - minX, 1e-4);
      const height = Math.max(maxY - minY, 1e-4);

      const uvs = new Float32Array(faceVerts.length * 2);
      faceVerts.forEach((vIdx, i) => {
        const c = origCoords[vIdx];
        uvs[i * 2 + 0] = (c[0] - minX) / width;
        uvs[i * 2 + 1] = (c[1] - minY) / height;
      });

      const geometryFront = new THREE.BufferGeometry();
      geometryFront.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
      geometryFront.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      geometryFront.setIndex(indices);
      geometryFront.computeVertexNormals();

      const matFront = new THREE.MeshStandardMaterial({
        color: this.currentTheme.frontColor,
        roughness: 0.4,
        metalness: 0.1,
        side: THREE.FrontSide
      });
      const frontMesh = new THREE.Mesh(geometryFront, matFront);
      frontMesh.castShadow = true;
      frontMesh.receiveShadow = true;
      frontMesh.userData = { faceIndex: fIdx, partIndex: 0 };

      const geometryBack = new THREE.BufferGeometry();
      geometryBack.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
      geometryBack.setIndex(indices);
      geometryBack.computeVertexNormals();

      const matBack = new THREE.MeshStandardMaterial({
        color: this.currentTheme.backColor,
        roughness: 0.5,
        metalness: 0.05,
        side: THREE.BackSide
      });
      const backMesh = new THREE.Mesh(geometryBack, matBack);
      backMesh.castShadow = true;
      backMesh.userData = { faceIndex: fIdx, partIndex: 0 };

      const faceGroup = new THREE.Group();
      faceGroup.add(frontMesh);
      faceGroup.add(backMesh);

      this.modelGroup.add(faceGroup);
      this.faceMeshes.push({
        faceGroup,
        frontMesh,
        backMesh,
        faceVerts,
        geometryFront,
        geometryBack,
        faceBounds: { minX, maxX, minY, maxY, width, height }
      });
    });

    // Create Crease Lines
    this.buildCreaseLines();

    // Center and set camera
    this.centerModel();
  }

  /**
   * Builds 3D multi-part assembly mesh groups from AssemblyManager.
   * @param {import('./assemblyManager.js').AssemblyManager} assemblyManager
   */
  buildAssembly(assemblyManager) {
    this.assemblyManager = assemblyManager;
    this.partMeshGroups = [];
    this.faceMeshes = [];

    while (this.modelGroup.children.length > 0) {
      const child = this.modelGroup.children[0];
      if (child.geometry) child.geometry.dispose();
      this.modelGroup.remove(child);
    }

    assemblyManager.parts.forEach((part, partIdx) => {
      const partGroup = new THREE.Group();
      partGroup.name = `part_${part.id}`;
      this.modelGroup.add(partGroup);

      const foldData = part.foldData;
      const origCoords = foldData.vertices;
      const partFaceMeshes = [];

      foldData.facesVertices.forEach((faceVerts, fIdx) => {
        const indices = this.triangulateFace(faceVerts, origCoords);

        const positions = new Float32Array(faceVerts.length * 3);
        faceVerts.forEach((vIdx, i) => {
          const c = origCoords[vIdx];
          positions[i * 3 + 0] = c[0];
          positions[i * 3 + 1] = c[1];
          positions[i * 3 + 2] = c[2];
        });

        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        faceVerts.forEach(vIdx => {
          const c = origCoords[vIdx];
          if (c[0] < minX) minX = c[0];
          if (c[0] > maxX) maxX = c[0];
          if (c[1] < minY) minY = c[1];
          if (c[1] > maxY) maxY = c[1];
        });
        const width = Math.max(maxX - minX, 1e-4);
        const height = Math.max(maxY - minY, 1e-4);

        const uvs = new Float32Array(faceVerts.length * 2);
        faceVerts.forEach((vIdx, i) => {
          const c = origCoords[vIdx];
          uvs[i * 2 + 0] = (c[0] - minX) / width;
          uvs[i * 2 + 1] = (c[1] - minY) / height;
        });

        const geometryFront = new THREE.BufferGeometry();
        geometryFront.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
        geometryFront.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
        geometryFront.setIndex(indices);
        geometryFront.computeVertexNormals();

        const matFront = new THREE.MeshStandardMaterial({
          color: this.currentTheme.frontColor,
          roughness: 0.4,
          metalness: 0.1,
          side: THREE.FrontSide
        });
        const frontMesh = new THREE.Mesh(geometryFront, matFront);
        frontMesh.castShadow = true;
        frontMesh.receiveShadow = true;
        frontMesh.userData = { faceIndex: fIdx, partIndex: partIdx };

        const geometryBack = new THREE.BufferGeometry();
        geometryBack.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
        geometryBack.setIndex(indices);
        geometryBack.computeVertexNormals();

        const matBack = new THREE.MeshStandardMaterial({
          color: this.currentTheme.backColor,
          roughness: 0.5,
          metalness: 0.05,
          side: THREE.BackSide
        });
        const backMesh = new THREE.Mesh(geometryBack, matBack);
        backMesh.castShadow = true;
        backMesh.userData = { faceIndex: fIdx, partIndex: partIdx };

        const faceGroup = new THREE.Group();
        faceGroup.add(frontMesh);
        faceGroup.add(backMesh);

        partGroup.add(faceGroup);

        const meshItem = {
          faceGroup,
          frontMesh,
          backMesh,
          faceVerts,
          partIndex: partIdx,
          faceIndex: fIdx,
          faceBounds: { minX, maxX, minY, maxY, width, height }
        };

        partFaceMeshes.push(meshItem);
        this.faceMeshes.push(meshItem);
      });

      // Build crease lines for this part
      const numEdges = foldData.edgesVertices.length;
      const posArray = new Float32Array(numEdges * 2 * 3);
      const colArray = new Float32Array(numEdges * 2 * 3);

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      lineGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        linewidth: 2
      });

      const creaseLines = new THREE.LineSegments(lineGeo, lineMat);
      creaseLines.visible = this.showCreases;
      partGroup.add(creaseLines);

      this.partMeshGroups.push({
        partIndex: partIdx,
        part,
        group: partGroup,
        faceMeshes: partFaceMeshes,
        creaseLines,
        foldData,
        kinematics: part.kinematics
      });
    });

    this.centerModel();
  }

  highlightActivePart(activePartIndex) {
    // 3D Assembly viewer renders all components cleanly and independently
  }

  /**
   * Updates face textures from Graphic Studio SVG artwork layers.
   *
   * Each artwork spec carries a `clusterToNet` affine {a,b,c,d,e,f} that maps
   * the spec's cluster-space coordinates → global 2D net-space coordinates.
   * We compose this with the face's net→canvas mapping (derived from faceBounds)
   * so the artwork is rendered at the correct position, rotation & scale on the
   * 512×512 canvas texture that is UV-mapped to the 3D face.
   */
  updateFaceArtworks(faceArtworks, activePartIndex = 0) {
    if (!this.faceMeshes || this.faceMeshes.length === 0) return;

    this.faceMeshes.forEach((meshItem) => {
      const partIdx = meshItem.partIndex !== undefined ? meshItem.partIndex : 0;
      const fIdx = meshItem.faceIndex !== undefined ? meshItem.faceIndex : 0;

      // Resolve artworks for this mesh item
      let artworks = [];
      if (this.assemblyManager && this.assemblyManager.isAssembly) {
        const part = this.assemblyManager.parts[partIdx];
        if (part && part.faceArtworks) {
          artworks = part.faceArtworks.get(fIdx) || [];
        } else if (partIdx === activePartIndex && faceArtworks) {
          artworks = faceArtworks.get(fIdx) || [];
        }
      } else if (faceArtworks) {
        artworks = faceArtworks.get(fIdx) || [];
      }

      // Resolve original 2D net vertices for this part
      let origCoords = null;
      if (this.assemblyManager && this.assemblyManager.isAssembly) {
        const part = this.assemblyManager.parts[partIdx];
        if (part && part.foldData) origCoords = part.foldData.vertices;
      } else if (this.fold) {
        origCoords = this.fold.vertices;
      }

      const frontMesh = meshItem.frontMesh;

      if (artworks.length === 0) {
        if (frontMesh.material.map) {
          frontMesh.material.map.dispose();
          frontMesh.material.map = null;
        }
        frontMesh.material.color.setHex(this.currentTheme.frontColor);
        frontMesh.material.needsUpdate = true;
        return;
      }

      const bounds = meshItem.faceBounds;
      const maxDim = Math.max(bounds.width, bounds.height, 1e-4);
      // Determine pixel resolution driven by the larger dimension (1024px base)
      const targetPPU = 1024 / maxDim;
      const canvasW = Math.max(32, Math.min(2048, Math.round(bounds.width * targetPPU)));
      const canvasH = Math.max(32, Math.min(2048, Math.round(bounds.height * targetPPU)));

      // Create high-res canvas texture tailored to this face's physical aspect ratio
      const canvas = document.createElement('canvas');
      canvas.width = canvasW;
      canvas.height = canvasH;
      const ctx = canvas.getContext('2d');

      // Base background color
      const bgHex = '#' + this.currentTheme.frontColor.toString(16).padStart(6, '0');
      ctx.fillStyle = bgHex;
      ctx.fillRect(0, 0, canvasW, canvasH);

      const sx = canvasW / bounds.width;
      const sy = canvasH / bounds.height;

      // Clip canvas drawing to the face polygon boundary in 2D net coordinates
      if (origCoords && meshItem.faceVerts) {
        ctx.beginPath();
        meshItem.faceVerts.forEach((vIdx, i) => {
          const c = origCoords[vIdx];
          const px = (c[0] - bounds.minX) * sx;
          const py = (bounds.maxY - c[1]) * sy;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.closePath();
        ctx.clip();
      }

      // Render artwork items onto canvas
      artworks.forEach(item => {
        ctx.save();

        // Apply composite cluster→net→canvas transform via ctx.setTransform
        // Canvas_x = (net_x - bounds.minX) * sx
        // Canvas_y = (bounds.maxY - net_y) * sy
        // net_x = m.a * cx + m.c * cy + m.e
        // net_y = m.b * cx + m.d * cy + m.f
        if (item.clusterToNet) {
          const m = item.clusterToNet;
          ctx.setTransform(
            m.a * sx,
            -m.b * sy,
            m.c * sx,
            -m.d * sy,
            (m.e - bounds.minX) * sx,
            (bounds.maxY - m.f) * sy
          );
        }

        this.drawArtworkOnCanvas(ctx, item, sx, sy);
        ctx.restore();
      });

      if (frontMesh.material.map) frontMesh.material.map.dispose();

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = true;
      texture.anisotropy = 8;
      texture.needsUpdate = true;

      frontMesh.material.map = texture;
      frontMesh.material.color.setHex(0xffffff);
      frontMesh.material.needsUpdate = true;
    });
  }

  /** Draws a single artwork spec onto a 2D canvas context (in cluster-space coordinates). */
  drawArtworkOnCanvas(ctx, item, sx = 512, sy = 512) {
    // Normalizing stroke width: ctx transform scales by sx, so divide stroke width by sx to get exact canvas pixels
    const sw = (item.strokeWidth || 2) / (sx || 512);
    const unitScale = item.unitScale || 1;

    if (item.type === 'rect') {
      if (item.fill && item.fill !== 'transparent') {
        ctx.fillStyle = item.fill;
        ctx.fillRect(item.x, item.y, item.width, item.height);
      }
      if (item.stroke && item.stroke !== 'none') {
        ctx.strokeStyle = item.stroke;
        ctx.lineWidth = sw;
        ctx.strokeRect(item.x, item.y, item.width, item.height);
      }
    } else if (item.type === 'circle') {
      ctx.beginPath();
      ctx.arc(item.cx, item.cy, item.r, 0, Math.PI * 2);
      if (item.fill && item.fill !== 'transparent') {
        ctx.fillStyle = item.fill;
        ctx.fill();
      }
      if (item.stroke && item.stroke !== 'none') {
        ctx.strokeStyle = item.stroke;
        ctx.lineWidth = sw;
        ctx.stroke();
      }
    } else if (item.type === 'text') {
      ctx.save();
      ctx.translate(item.x, item.y);
      // Invert Y scale so text renders upright under the negative Y canvas transform
      ctx.scale(1, -1);
      ctx.fillStyle = item.fill || '#ffffff';
      const fSize = (item.fontSize || 24) * unitScale;
      ctx.font = `bold ${fSize}px sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(item.text || '', 0, 0);
      ctx.restore();
    } else if (item.type === 'stamp') {
      ctx.save();
      ctx.translate(item.x, item.y);
      const scaleFactor = (item.scale || 1) * unitScale;
      // Invert Y scale so stamps render upright under the negative Y canvas transform
      ctx.scale(scaleFactor, -scaleFactor);
      this.drawStampOnCanvas(ctx, item);
      ctx.restore();
    }
  }

  /** Draws a stamp decal at local origin (0, 0). */
  drawStampOnCanvas(ctx, item) {
    const x = 0, y = 0;
    if (item.stampType === 'fragile') {
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(x, y, 60, 40);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('FRAGILE', x + 30, y + 20);
    } else if (item.stampType === 'up') {
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(x, y, 40, 50);
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(x + 20, y + 8);
      ctx.lineTo(x + 10, y + 20);
      ctx.lineTo(x + 15, y + 20);
      ctx.lineTo(x + 15, y + 38);
      ctx.lineTo(x + 25, y + 38);
      ctx.lineTo(x + 25, y + 20);
      ctx.lineTo(x + 30, y + 20);
      ctx.closePath();
      ctx.fill();
    } else if (item.stampType === 'recycle') {
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(x + 25, y + 25, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('♻', x + 25, y + 25);
    } else if (item.stampType === 'barcode') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, y, 70, 40);
      ctx.fillStyle = '#000000';
      ctx.fillRect(x + 5, y + 5, 3, 30);
      ctx.fillRect(x + 12, y + 5, 2, 30);
      ctx.fillRect(x + 18, y + 5, 5, 30);
      ctx.fillRect(x + 28, y + 5, 2, 30);
      ctx.fillRect(x + 35, y + 5, 4, 30);
      ctx.fillRect(x + 44, y + 5, 6, 30);
      ctx.fillRect(x + 55, y + 5, 3, 30);
      ctx.fillRect(x + 62, y + 5, 4, 30);
    } else {
      // Star / Quality Seal
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      const cx = x + 25, cy = y + 25;
      for (let i = 0; i < 5; i++) {
        const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
        ctx.lineTo(cx + 20 * Math.cos(angle), cy + 20 * Math.sin(angle));
        const inner = angle + Math.PI / 5;
        ctx.lineTo(cx + 8 * Math.cos(inner), cy + 8 * Math.sin(inner));
      }
      ctx.closePath();
      ctx.fill();
    }
  }

  buildCreaseLines() {
    if (this.creaseLines) {
      this.modelGroup.remove(this.creaseLines);
    }

    const numEdges = this.fold.edgesVertices.length;
    const positions = new Float32Array(numEdges * 2 * 3);
    const colors = new Float32Array(numEdges * 2 * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      linewidth: 2
    });

    this.creaseLines = new THREE.LineSegments(lineGeo, lineMat);
    this.creaseLines.visible = this.showCreases;
    this.modelGroup.add(this.creaseLines);

    this.updateCreaseColors();
  }

  updateCreaseColors() {
    if (!this.creaseLines) return;
    const colorsAttr = this.creaseLines.geometry.attributes.color;
    const colors = colorsAttr.array;

    const valley = new THREE.Color(this.currentTheme.valleyColor);
    const mountain = new THREE.Color(this.currentTheme.mountainColor);
    const boundary = new THREE.Color(this.currentTheme.boundaryColor);
    const cut = new THREE.Color(this.currentTheme.cutColor);
    const flat = new THREE.Color(this.currentTheme.flatColor);
    const unassigned = new THREE.Color(this.currentTheme.unassignedColor);

    this.fold.edgesAssignment.forEach((assign, idx) => {
      const code = (assign || 'B').toUpperCase();
      let c = boundary;
      switch (code) {
        case 'V': c = valley; break;
        case 'M': c = mountain; break;
        case 'B': c = boundary; break;
        case 'C': c = cut; break;
        case 'F': c = flat; break;
        case 'U': c = unassigned; break;
        default: c = boundary; break;
      }

      const offset = idx * 6;
      colors[offset + 0] = c.r;
      colors[offset + 1] = c.g;
      colors[offset + 2] = c.b;
      colors[offset + 3] = c.r;
      colors[offset + 4] = c.g;
      colors[offset + 5] = c.b;
    });

    colorsAttr.needsUpdate = true;
  }

  updateFold(t, explodedT = 0) {
    if (this.assemblyManager && this.assemblyManager.isAssembly) {
      this.partMeshGroups.forEach((pmg) => {
        const faceMatrices = pmg.kinematics.evaluateTransforms(t);

        // Apply 3D assembly alignment & radial explosion
        const exp = pmg.part.explosionVector || [0, 0, 0];
        const factor = explodedT * t;

        if (pmg.part.alignQuaternion && pmg.part.alignTranslation) {
          const qIdentity = new THREE.Quaternion();
          const currentQ = qIdentity.clone().slerp(pmg.part.alignQuaternion, t);
          pmg.group.quaternion.copy(currentQ);

          const currentT = pmg.part.alignTranslation.clone().multiplyScalar(t);
          pmg.group.position.set(
            currentT.x + exp[0] * factor,
            currentT.y + exp[1] * factor,
            currentT.z + exp[2] * factor
          );
        } else {
          pmg.group.position.set(exp[0] * factor, exp[1] * factor, exp[2] * factor);
        }

        // Apply transforms to face groups
        pmg.faceMeshes.forEach((item, fIdx) => {
          const matrix = faceMatrices[fIdx];
          if (matrix) {
            item.faceGroup.matrix.copy(matrix);
            item.faceGroup.matrixAutoUpdate = false;
          }
        });

        // Update crease lines
        if (pmg.creaseLines && this.showCreases) {
          const posAttr = pmg.creaseLines.geometry.attributes.position;
          const positions = posAttr.array;
          const origCoords = pmg.foldData.vertices;

          pmg.foldData.edgesVertices.forEach((edge, eIdx) => {
            const v1Idx = edge[0];
            const v2Idx = edge[1];

            const p1 = new THREE.Vector3(...origCoords[v1Idx]);
            const p2 = new THREE.Vector3(...origCoords[v2Idx]);

            const isEdgeInFace = (fv, v1, v2) => {
              const len = fv.length;
              for (let i = 0; i < len; i++) {
                const a = fv[i];
                const b = fv[(i + 1) % len];
                if ((a === v1 && b === v2) || (a === v2 && b === v1)) return true;
              }
              return false;
            };

            const faceVertsIdx = pmg.foldData.facesVertices.findIndex(fv => isEdgeInFace(fv, v1Idx, v2Idx));
            const mat = faceVertsIdx >= 0 ? faceMatrices[faceVertsIdx] : new THREE.Matrix4();

            p1.applyMatrix4(mat);
            p2.applyMatrix4(mat);

            const offset = eIdx * 6;
            positions[offset + 0] = p1.x;
            positions[offset + 1] = p1.y;
            positions[offset + 2] = p1.z + 0.002;

            positions[offset + 3] = p2.x;
            positions[offset + 4] = p2.y;
            positions[offset + 5] = p2.z + 0.002;
          });

          posAttr.needsUpdate = true;
        }
      });
      return;
    }

    if (!this.kinematics || !this.fold) return;

    const faceMatrices = this.kinematics.evaluateTransforms(t);

    // Apply matrices to face groups
    this.faceMeshes.forEach((item, fIdx) => {
      const matrix = faceMatrices[fIdx];
      item.faceGroup.matrix.copy(matrix);
      item.faceGroup.matrixAutoUpdate = false;
    });

    // Update Crease Lines positions
    if (this.creaseLines && this.showCreases) {
      const posAttr = this.creaseLines.geometry.attributes.position;
      const positions = posAttr.array;

      const origCoords = this.fold.vertices;

      this.fold.edgesVertices.forEach((edge, eIdx) => {
        const v1Idx = edge[0];
        const v2Idx = edge[1];

        // Find parent face of this edge to transform end points
        const p1 = new THREE.Vector3(...origCoords[v1Idx]);
        const p2 = new THREE.Vector3(...origCoords[v2Idx]);

        // Find face attached to edge (requiring cyclic adjacency along the face boundary)
        const isEdgeInFace = (fv, v1, v2) => {
          const len = fv.length;
          for (let i = 0; i < len; i++) {
            const a = fv[i];
            const b = fv[(i + 1) % len];
            if ((a === v1 && b === v2) || (a === v2 && b === v1)) return true;
          }
          return false;
        };

        const faceVertsIdx = this.fold.facesVertices.findIndex(fv => isEdgeInFace(fv, v1Idx, v2Idx));
        const mat = faceVertsIdx >= 0 ? faceMatrices[faceVertsIdx] : new THREE.Matrix4();

        p1.applyMatrix4(mat);
        p2.applyMatrix4(mat);

        const offset = eIdx * 6;
        positions[offset + 0] = p1.x;
        positions[offset + 1] = p1.y;
        positions[offset + 2] = p1.z + 0.002;

        positions[offset + 3] = p2.x;
        positions[offset + 4] = p2.y;
        positions[offset + 5] = p2.z + 0.002;
      });

      posAttr.needsUpdate = true;
    }
  }

  centerModel() {
    const box = new THREE.Box3();

    if (this.assemblyManager && this.assemblyManager.isAssembly) {
      this.assemblyManager.parts.forEach(p => {
        if (p.bbox && p.bbox.min && p.bbox.max) {
          box.expandByPoint(new THREE.Vector3(...p.bbox.min));
          box.expandByPoint(new THREE.Vector3(...p.bbox.max));
        } else {
          p.foldData.vertices.forEach(v => {
            box.expandByPoint(new THREE.Vector3(v[0], v[1], v[2]));
          });
        }
      });
    } else if (this.fold) {
      this.fold.vertices.forEach(v => {
        box.expandByPoint(new THREE.Vector3(v[0], v[1], v[2]));
      });
    } else {
      return;
    }

    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Offset model so center is at origin (0, 0, 0)
    this.modelGroup.position.set(-center.x, -center.y, -center.z);

    const maxDim = Math.max(size.x, size.y, size.z, 2);
    this.camera.far = Math.max(10000, maxDim * 20);
    this.camera.updateProjectionMatrix();
    this.camera.position.set(0, 0, maxDim * 2.2);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  setView2D() {
    const box = new THREE.Box3().setFromObject(this.modelGroup);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, 4);

    this.camera.far = Math.max(10000, maxDim * 20);
    this.camera.updateProjectionMatrix();
    this.camera.position.set(0, 0, maxDim * 2.2);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  setView3D() {
    const box = new THREE.Box3().setFromObject(this.modelGroup);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z, 4);

    this.camera.far = Math.max(10000, maxDim * 20);
    this.camera.updateProjectionMatrix();
    this.camera.position.set(maxDim * 1.5, maxDim * 1.5, maxDim * 1.8);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  setShowCreases(visible) {
    this.showCreases = visible;
    if (this.creaseLines) {
      this.creaseLines.visible = visible;
    }
  }

  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    if (!this.container) return;
    const width = this.container.clientWidth || 300;
    const height = this.container.clientHeight || 300;
    if (width > 0 && height > 0) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
  }

  onWindowResize() {
    this.resize();
  }

  /**
   * Exports the current 3D model (including textures and active fold state) as a binary .glb file.
   * @param {string} filename Output file name without extension
   * @returns {Promise<void>}
   */
  async exportGLB(filename = 'folded-model') {
    if (!this.modelGroup || this.modelGroup.children.length === 0) {
      alert('No 3D model available to export.');
      return;
    }

    const exporter = new GLTFExporter();
    const options = {
      binary: true,
      onlyVisible: true,
      embedImages: true
    };

    return new Promise((resolve, reject) => {
      exporter.parse(
        this.modelGroup,
        (gltf) => {
          const blob = new Blob([gltf], { type: 'model/gltf-binary' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `${filename}.glb`;
          link.click();
          URL.revokeObjectURL(link.href);
          resolve();
        },
        (error) => {
          console.error('An error occurred exporting GLB:', error);
          alert(`Error exporting GLB: ${error.message || error}`);
          reject(error);
        },
        options
      );
    });
  }
}
