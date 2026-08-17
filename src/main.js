import { parseFoldData } from './foldParser.js';
import { FoldKinematics } from './foldKinematics.js';
import { FoldRenderer } from './renderer.js';

class App {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.renderer = new FoldRenderer(this.container);

    this.foldData = null;
    this.kinematics = null;

    this.isPlaying = false;
    this.animSpeed = 1.0;
    this.direction = 1; // 1 for forward, -1 for reverse loop

    this.bindUIEvents();
    this.loadDefaultModel();
    this.startAnimationLoop();
  }

  async loadDefaultModel() {
    await this.loadModelFromUrl('models/notched-cube.json');
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
    } catch (err) {
      console.error('Error initializing FOLD model:', err);
      alert(`Error parsing FOLD file: ${err.message}`);
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
    valueDisplay.textContent = `${Math.round(val)}%`;

    const progress = document.getElementById('slider-progress');
    if (progress) progress.style.width = `${val}%`;

    // Update status badge
    const badgeText = document.getElementById('state-text');
    if (val === 0) {
      badgeText.textContent = 'FLAT 2D NET';
    } else if (val === 100) {
      badgeText.textContent = '3D BOX';
    } else {
      badgeText.textContent = `FOLDING (${Math.round(val)}%)`;
    }
  }

  bindUIEvents() {
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
      this.updateFoldProgress();
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

      if (this.isPlaying) {
        const slider = document.getElementById('fold-slider');
        let val = parseFloat(slider.value);

        // Advance slider (0 to 100 in ~3 seconds at 1x speed)
        val += this.direction * (100 / 3) * this.animSpeed * delta;

        if (val >= 100) {
          val = 100;
          this.direction = -1; // Reverse loop or ping-pong
        } else if (val <= 0) {
          val = 0;
          this.direction = 1;
        }

        slider.value = val;
        this.updateFoldProgress();
      }

      this.renderer.render();
    };

    requestAnimationFrame(animate);
  }
}

// Initialize application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
