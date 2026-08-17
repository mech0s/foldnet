import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const THEMES = {
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
  constructor(container) {
    this.container = container;
    this.currentTheme = THEMES.cardboard;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.currentTheme.bg);

    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
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
    this.setupGrid();

    // Geometry groups
    this.modelGroup = new THREE.Group();
    this.scene.add(this.modelGroup);

    this.faceMeshes = [];
    this.creaseLines = null;
    this.showCreases = true;

    window.addEventListener('resize', () => this.onWindowResize());
  }

  setupLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
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

  setupGrid() {
    this.gridHelper = new THREE.GridHelper(20, 20, this.currentTheme.gridColor, this.currentTheme.gridColor);
    this.gridHelper.position.y = -0.01;
    this.scene.add(this.gridHelper);
  }

  setTheme(themeKey) {
    if (THEMES[themeKey]) {
      this.currentTheme = THEMES[themeKey];
      this.scene.background.setHex(this.currentTheme.bg);
      this.gridHelper.material.color.setHex(this.currentTheme.gridColor);
      
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

  buildModel(foldData, kinematics) {
    this.fold = foldData;
    this.kinematics = kinematics;

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
      // Triangulate face (fan triangulation)
      const indices = [];
      for (let i = 1; i < faceVerts.length - 1; i++) {
        indices.push(0, i, i + 1);
      }

      // Initial positions for face geometry (local to face)
      const positions = new Float32Array(faceVerts.length * 3);
      faceVerts.forEach((vIdx, i) => {
        const c = origCoords[vIdx];
        positions[i * 3 + 0] = c[0];
        positions[i * 3 + 1] = c[1];
        positions[i * 3 + 2] = c[2];
      });

      const geometryFront = new THREE.BufferGeometry();
      geometryFront.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
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
        geometryBack
      });
    });

    // Create Crease Lines
    this.buildCreaseLines();

    // Center and set camera
    this.centerModel();
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

  updateFold(t) {
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
    if (!this.fold) return;
    const box = new THREE.Box3();
    
    // Compute bounding box of initial flat 2D net
    this.fold.vertices.forEach(v => {
      box.expandByPoint(new THREE.Vector3(v[0], v[1], v[2]));
    });

    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Offset model so center of 2D net is at origin (0, 0, 0)
    this.modelGroup.position.set(-center.x, -center.y, 0);

    const maxDim = Math.max(size.x, size.y, size.z, 2);
    this.camera.position.set(0, 0, maxDim * 2.2);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  setView2D() {
    const box = new THREE.Box3().setFromObject(this.modelGroup);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, 4);

    this.camera.position.set(0, 0, maxDim * 2.2);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  setView3D() {
    const box = new THREE.Box3().setFromObject(this.modelGroup);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z, 4);

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

  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
