import { parseFoldData } from './foldParser.js';
import { FoldKinematics } from './foldKinematics.js';
import { FoldRenderer } from './renderer.js';
import { NetEditor } from './netEditor.js';

class App {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.renderer = new FoldRenderer(this.container);

    this.foldData = null;
    this.kinematics = null;

    this.isPlaying = false;
    this.animSpeed = 1.0;
    this.direction = 1; // 1 for forward, -1 for reverse loop

    // Net Editor state
    this.netEditor = null;
    this.previewRenderer = null;
    this.previewKinematics = null;
    this.previewFoldData = null;
    this.isPreviewPlaying = false;
    this.previewDirection = 1;

    this.initNetEditor();
    this.discoverModels();
    this.bindUIEvents();
    this.loadDefaultModel();
    this.startAnimationLoop();
  }

  discoverModels() {
    const modelSelect = document.getElementById('model-select');
    if (!modelSelect) return;

    try {
      // Dynamically discover all JSON files in models/ folder
      const globModules = import.meta.glob('../models/*.json', { eager: true });
      const discovered = [];

      for (const path in globModules) {
        const filename = path.split('/').pop();
        const mod = globModules[path];
        const data = mod.default || mod;

        if (data && typeof data === 'object') {
          const title = data.file_title || data.title || filename.replace('.json', '');
          const facesCount = Array.isArray(data.faces_vertices) ? data.faces_vertices.length : null;

          discovered.push({
            url: `models/${filename}`,
            filename,
            title,
            facesCount
          });
        }
      }

      // Sort alphabetically by filename
      discovered.sort((a, b) => a.filename.localeCompare(b.filename));

      // Rebuild model dropdown options
      modelSelect.innerHTML = '';
      let defaultSelectedUrl = 'models/subdivided-notched-cube.json';

      discovered.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.url;
        const faceBadge = m.facesCount ? ` (${m.facesCount} Faces)` : '';
        
        const nameWithoutExt = m.filename.replace(/\.json$/i, '');
        const titleClean = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '');
        const nameClean = nameWithoutExt.toLowerCase().replace(/[^a-z0-9]+/g, '');

        if (titleClean === nameClean) {
          opt.textContent = `${m.filename}${faceBadge}`;
        } else {
          opt.textContent = `${m.filename} — ${m.title}${faceBadge}`;
        }

        if (m.filename === 'subdivided-notched-cube.json' || m.filename.includes('subdivided-notched')) {
          opt.selected = true;
          defaultSelectedUrl = m.url;
        }
        modelSelect.appendChild(opt);
      });

      // Add Custom File option
      const customOpt = document.createElement('option');
      customOpt.value = 'custom';
      customOpt.textContent = 'Custom File...';
      modelSelect.appendChild(customOpt);

      this.defaultModelUrl = defaultSelectedUrl;
    } catch (err) {
      console.warn('Dynamic model discovery warning:', err);
    }
  }

  async loadDefaultModel() {
    const url = this.defaultModelUrl || 'models/subdivided-notched-cube.json';
    await this.loadModelFromUrl(url);
  }

  onWindowResize() {
    if (this.renderer) this.renderer.resize();
    if (this.netEditor) this.netEditor.resizeCanvas();
    if (this.previewRenderer) this.previewRenderer.resize();
  }

  async loadModelFromUrl(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      this.initFoldModel(json);
    } catch (err) {
      console.error('Failed to load model:', err);
      alert(`Could not load model: ${err.message}`);
    }
  }

  initFoldModel(jsonData) {
    try {
      this.foldData = parseFoldData(jsonData);
      this.kinematics = new FoldKinematics(this.foldData);
      this.renderer.buildModel(this.foldData, this.kinematics);

      this.updateInspectorUI();
      this.resetSlider();
      this.updateFoldProgress();

      // Also update Net Editor if available
      if (this.netEditor) {
        this.netEditor.loadFoldJSON(jsonData);
      }
    } catch (err) {
      console.error('Error initializing FOLD model:', err);
      alert(`Error parsing FOLD file: ${err.message}`);
    }
  }

  initNetEditor() {
    const editorContainer = document.getElementById('editor-canvas-container');
    if (!editorContainer) return;

    this.netEditor = new NetEditor(editorContainer, (foldJson) => {
      this.onNetEditorChange(foldJson);
    });

    // Preview Sidebar Renderer
    const previewContainer = document.getElementById('preview-canvas-container');
    if (previewContainer) {
      this.previewRenderer = new FoldRenderer(previewContainer);
    }
  }

  onNetEditorChange(foldJson) {
    // Update live 3D preview sidebar with in-memory model
    if (this.previewRenderer) {
      try {
        this.previewFoldData = parseFoldData(foldJson);
        this.previewKinematics = new FoldKinematics(this.previewFoldData);
        this.previewRenderer.buildModel(this.previewFoldData, this.previewKinematics);
        this.updatePreviewFoldProgress();
      } catch (e) {
        console.warn('Preview fold kinematics warning:', e.message);
      }
    }

    // Update JSON code panel textarea
    const textarea = document.getElementById('json-code-textarea');
    if (textarea && document.activeElement !== textarea) {
      textarea.value = JSON.stringify(foldJson, null, 2);
    }
  }

  resetSlider() {
    const slider = document.getElementById('fold-slider');
    slider.value = 0;
    this.updateFoldProgress();
  }

  updateFoldProgress() {
    const slider = document.getElementById('fold-slider');
    const val = parseFloat(slider.value);
    const t = val / 100;

    this.renderer.updateFold(t);

    // Update readout UI
    const valueDisplay = document.getElementById('slider-value');
    if (valueDisplay) valueDisplay.textContent = `${Math.round(val)}%`;

    const progress = document.getElementById('slider-progress');
    if (progress) progress.style.width = `${val}%`;

    // Update status badge
    const badgeText = document.getElementById('state-text');
    if (badgeText) {
      if (val === 0) {
        badgeText.textContent = 'FLAT 2D NET';
      } else if (val === 100) {
        badgeText.textContent = '3D BOX';
      } else {
        badgeText.textContent = `FOLDING (${Math.round(val)}%)`;
      }
    }
  }

  updatePreviewFoldProgress() {
    const slider = document.getElementById('preview-fold-slider');
    if (!slider || !this.previewRenderer) return;

    const val = parseFloat(slider.value);
    const t = val / 100;

    this.previewRenderer.updateFold(t);

    const valDisplay = document.getElementById('preview-slider-value');
    if (valDisplay) valDisplay.textContent = `${Math.round(val)}%`;
  }

  bindUIEvents() {
    // Mode Switcher Tabs
    const btnMode3D = document.getElementById('btn-mode-3d');
    const btnModeEditor = document.getElementById('btn-mode-editor');
    const viewerWorkspace = document.getElementById('viewer-workspace');
    const editorWorkspace = document.getElementById('editor-workspace');

    btnMode3D.addEventListener('click', () => {
      btnMode3D.classList.add('active');
      btnModeEditor.classList.remove('active');
      viewerWorkspace.classList.add('active');
      editorWorkspace.classList.remove('active');
      this.renderer.resize();
    });

    btnModeEditor.addEventListener('click', () => {
      btnModeEditor.classList.add('active');
      btnMode3D.classList.remove('active');
      editorWorkspace.classList.add('active');
      viewerWorkspace.classList.remove('active');
      if (this.netEditor) this.netEditor.resizeCanvas();
      if (this.previewRenderer) this.previewRenderer.resize();
    });

    // Slider event
    const slider = document.getElementById('fold-slider');
    slider.addEventListener('input', () => {
      if (this.isPlaying) this.pauseAnimation();
      this.updateFoldProgress();
    });

    // Model selection dropdown
    const modelSelect = document.getElementById('model-select');
    modelSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'custom') {
        document.getElementById('file-input').click();
      } else {
        this.loadModelFromUrl(val);
      }
    });

    // File input handler
    const fileInput = document.getElementById('file-input');
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        this.readFoldFile(file);
      }
    });

    // Drag and drop zone
    const dropZone = document.getElementById('drop-zone');
    const viewport = document.querySelector('.viewport-container');

    viewport.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('active');
    });

    viewport.addEventListener('dragleave', (e) => {
      if (e.target === dropZone || !viewport.contains(e.relatedTarget)) {
        dropZone.classList.remove('active');
      }
    });

    viewport.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('active');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        this.readFoldFile(e.dataTransfer.files[0]);
      }
    });

    // Theme selector
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', (e) => {
      this.renderer.setTheme(e.target.value);
      if (this.previewRenderer) this.previewRenderer.setTheme(e.target.value);
    });

    // Play/Pause button
    const btnPlayPause = document.getElementById('btn-play-pause');
    btnPlayPause.addEventListener('click', () => {
      this.toggleAnimation();
    });

    // Speed selector
    const speedSelect = document.getElementById('speed-select');
    speedSelect.addEventListener('change', (e) => {
      this.animSpeed = parseFloat(e.target.value);
    });

    // Camera preset buttons
    document.getElementById('btn-view-2d').addEventListener('click', () => {
      this.renderer.setView2D();
    });

    document.getElementById('btn-view-3d').addEventListener('click', () => {
      this.renderer.setView3D();
    });

    document.getElementById('btn-reset-cam').addEventListener('click', () => {
      this.renderer.centerModel();
    });

    // Inspector toggle
    const inspectorPanel = document.getElementById('inspector-panel');
    const btnToggleInspector = document.getElementById('btn-toggle-inspector');
    const btnCloseInspector = document.getElementById('btn-close-inspector');

    btnToggleInspector.addEventListener('click', () => {
      inspectorPanel.classList.toggle('open');
      btnToggleInspector.classList.toggle('active');
    });

    btnCloseInspector.addEventListener('click', () => {
      inspectorPanel.classList.remove('open');
      btnToggleInspector.classList.remove('active');
    });

    // Root face selector in inspector
    const rootFaceSelect = document.getElementById('root-face-select');
    rootFaceSelect.addEventListener('change', (e) => {
      const idx = parseInt(e.target.value, 10);
      if (this.kinematics) {
        this.kinematics.setRootFace(idx);
        this.updateFoldProgress();
      }
    });

    // Crease lines checkbox
    const showCreasesCheck = document.getElementById('show-creases-check');
    showCreasesCheck.addEventListener('change', (e) => {
      this.renderer.setShowCreases(e.target.checked);
      if (this.previewRenderer) this.previewRenderer.setShowCreases(e.target.checked);
      this.updateFoldProgress();
    });

    // --- Net Editor Toolbar & Controls ---
    const paletteButtons = document.querySelectorAll('.palette-btn');
    paletteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        paletteButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const dir = btn.dataset.directive;
        if (this.netEditor) {
          this.netEditor.activeDirective = dir;
          if (this.netEditor.selectedEdgeIndex >= 0) {
            this.netEditor.setEdgeAssignment(this.netEditor.selectedEdgeIndex, dir);
          }
        }
      });
    });

    document.getElementById('btn-attach-face').addEventListener('click', () => {
      if (this.netEditor) {
        if (this.netEditor.selectedEdgeIndex < 0) {
          alert('Please click to select an edge first on the 2D Net Editor canvas!');
        } else {
          this.netEditor.attachFaceToSelectedEdge();
        }
      }
    });

    document.getElementById('btn-auto-boundary').addEventListener('click', () => {
      if (this.netEditor) this.netEditor.autoDetectBoundaries();
    });

    document.getElementById('btn-invert-folds').addEventListener('click', () => {
      if (this.netEditor) this.netEditor.invertFolds();
    });

    document.getElementById('btn-center-net').addEventListener('click', () => {
      if (this.netEditor) this.netEditor.centerView();
    });

    // Global window resize listener
    window.addEventListener('resize', () => this.onWindowResize());

    // Preview Sidebar Toggles & Controls
    const previewSidebar = document.getElementById('preview-sidebar');
    const btnTogglePreview = document.getElementById('btn-toggle-preview');
    const btnClosePreview = document.getElementById('btn-close-preview');

    btnTogglePreview.addEventListener('click', () => {
      previewSidebar.classList.toggle('open');
      btnTogglePreview.classList.toggle('active');
      setTimeout(() => this.onWindowResize(), 50);
      setTimeout(() => this.onWindowResize(), 260);
    });

    btnClosePreview.addEventListener('click', () => {
      previewSidebar.classList.remove('open');
      btnTogglePreview.classList.remove('active');
      setTimeout(() => this.onWindowResize(), 50);
      setTimeout(() => this.onWindowResize(), 260);
    });

    const previewSlider = document.getElementById('preview-fold-slider');
    previewSlider.addEventListener('input', () => {
      if (this.isPreviewPlaying) this.pausePreviewAnimation();
      this.updatePreviewFoldProgress();
    });

    const btnPreviewPlay = document.getElementById('btn-preview-play');
    btnPreviewPlay.addEventListener('click', () => {
      this.togglePreviewAnimation();
    });

    // Code Panel Toggles & Actions
    const codePanel = document.getElementById('code-panel');
    const btnToggleCode = document.getElementById('btn-toggle-code');
    const btnCloseCode = document.getElementById('btn-close-code');
    const btnApplyJson = document.getElementById('btn-apply-json');

    btnToggleCode.addEventListener('click', () => {
      codePanel.classList.toggle('open');
      btnToggleCode.classList.toggle('active');
      setTimeout(() => this.onWindowResize(), 50);
      setTimeout(() => this.onWindowResize(), 260);
    });

    btnCloseCode.addEventListener('click', () => {
      codePanel.classList.remove('open');
      btnToggleCode.classList.remove('active');
      setTimeout(() => this.onWindowResize(), 50);
      setTimeout(() => this.onWindowResize(), 260);
    });

    btnApplyJson.addEventListener('click', () => {
      const textarea = document.getElementById('json-code-textarea');
      try {
        const json = JSON.parse(textarea.value);
        if (this.netEditor) this.netEditor.loadFoldJSON(json);
      } catch (err) {
        alert(`Invalid JSON format: ${err.message}`);
      }
    });

    // Send to 3D Viewer Action
    document.getElementById('btn-send-to-3d').addEventListener('click', () => {
      if (this.netEditor) {
        const foldJson = this.netEditor.getFoldJSON();
        const modelSelect = document.getElementById('model-select');
        modelSelect.value = 'custom';
        this.initFoldModel(foldJson);
        btnMode3D.click();
      }
    });

    // Export FOLD JSON File Action
    document.getElementById('btn-export-fold').addEventListener('click', async () => {
      if (!this.netEditor) return;
      const foldJson = this.netEditor.getFoldJSON();
      const str = JSON.stringify(foldJson, null, 2);

      let rawTitle = foldJson.file_title || (this.foldData && this.foldData.title ? this.foldData.title : 'box-net');
      let slug = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      if (!slug || slug === 'untitled') {
        slug = 'box-net-prepared';
      }

      const fileName = `${slug}.json`;

      // Method 1: Try Native File System Access API (Save As Dialog)
      if ('showSaveFilePicker' in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: fileName,
            types: [{
              description: 'FOLD 1.1 Spec File (*.json, *.fold)',
              accept: { 'application/json': ['.json', '.fold'] }
            }]
          });
          const writable = await handle.createWritable();
          await writable.write(str);
          await writable.close();
          return;
        } catch (err) {
          if (err.name === 'AbortError') return; // User cancelled dialog
          console.warn('Native save picker fallback:', err);
        }
      }

      // Method 2: Data URI Fallback (guarantees filename without blob: URL UUID issues)
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(str);
      const a = document.createElement('a');
      a.setAttribute('href', dataUri);
      a.setAttribute('download', fileName);
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        if (a.parentNode) {
          document.body.removeChild(a);
        }
      }, 300);
    });
  }

  readFoldFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        const modelSelect = document.getElementById('model-select');
        modelSelect.value = 'custom';
        this.initFoldModel(json);
      } catch (err) {
        alert(`Failed to parse file "${file.name}": Invalid JSON.`);
      }
    };
    reader.readAsText(file);
  }

  toggleAnimation() {
    if (this.isPlaying) {
      this.pauseAnimation();
    } else {
      this.startAnimation();
    }
  }

  startAnimation() {
    this.isPlaying = true;
    document.getElementById('play-icon').style.display = 'none';
    document.getElementById('pause-icon').style.display = 'block';
  }

  pauseAnimation() {
    this.isPlaying = false;
    document.getElementById('play-icon').style.display = 'block';
    document.getElementById('pause-icon').style.display = 'none';
  }

  togglePreviewAnimation() {
    if (this.isPreviewPlaying) {
      this.pausePreviewAnimation();
    } else {
      this.startPreviewAnimation();
    }
  }

  startPreviewAnimation() {
    this.isPreviewPlaying = true;
    document.getElementById('preview-play-icon').style.display = 'none';
    document.getElementById('preview-pause-icon').style.display = 'block';
  }

  pausePreviewAnimation() {
    this.isPreviewPlaying = false;
    document.getElementById('preview-play-icon').style.display = 'block';
    document.getElementById('preview-pause-icon').style.display = 'none';
  }

  updateInspectorUI() {
    if (!this.foldData) return;

    document.getElementById('meta-title').textContent = this.foldData.title;
    document.getElementById('meta-creator').textContent = this.foldData.creator;
    document.getElementById('meta-spec').textContent = `v${this.foldData.spec}`;

    document.getElementById('stat-vertices').textContent = this.foldData.counts.vertices;
    document.getElementById('stat-edges').textContent = this.foldData.counts.edges;
    document.getElementById('stat-faces').textContent = this.foldData.counts.faces;

    document.getElementById('stat-boundary').textContent = this.foldData.counts.boundary;
    document.getElementById('stat-valley').textContent = this.foldData.counts.valley;
    document.getElementById('stat-mountain').textContent = this.foldData.counts.mountain;
    document.getElementById('stat-cut').textContent = this.foldData.counts.cut;
    document.getElementById('stat-flat').textContent = this.foldData.counts.flat;
    document.getElementById('stat-unassigned').textContent = this.foldData.counts.unassigned;

    // Populate Root Face selector
    const rootFaceSelect = document.getElementById('root-face-select');
    rootFaceSelect.innerHTML = '';
    this.foldData.facesVertices.forEach((_, fIdx) => {
      const opt = document.createElement('option');
      opt.value = fIdx;
      opt.textContent = `Face #${fIdx} ${fIdx === this.kinematics.rootFaceIndex ? '(Root Base)' : ''}`;
      if (fIdx === this.kinematics.rootFaceIndex) opt.selected = true;
      rootFaceSelect.appendChild(opt);
    });
  }

  startAnimationLoop() {
    let lastTime = performance.now();

    const animate = (currentTime) => {
      requestAnimationFrame(animate);

      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Main 3D viewer loop
      if (this.isPlaying) {
        const slider = document.getElementById('fold-slider');
        let val = parseFloat(slider.value);
        val += this.direction * (100 / 3) * this.animSpeed * delta;

        if (val >= 100) {
          val = 100;
          this.direction = -1;
        } else if (val <= 0) {
          val = 0;
          this.direction = 1;
        }

        slider.value = val;
        this.updateFoldProgress();
      }

      this.renderer.render();

      // Preview sidebar 3D loop
      if (this.previewRenderer) {
        if (this.isPreviewPlaying) {
          const pSlider = document.getElementById('preview-fold-slider');
          let pVal = parseFloat(pSlider.value);
          pVal += this.previewDirection * (100 / 3) * this.animSpeed * delta;

          if (pVal >= 100) {
            pVal = 100;
            this.previewDirection = -1;
          } else if (pVal <= 0) {
            pVal = 0;
            this.previewDirection = 1;
          }

          pSlider.value = pVal;
          this.updatePreviewFoldProgress();
        }

        this.previewRenderer.render();
      }
    };

    requestAnimationFrame(animate);
  }
}

// Initialize application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
