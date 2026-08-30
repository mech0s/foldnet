import { parseFoldData } from './foldParser.js';
import { FoldKinematics } from './foldKinematics.js';
import { FoldRenderer } from './renderer.js';
import { NetEditor } from './netEditor.js';
import { CADParser } from './cadParser.js';
import { NetUnfolder } from './netUnfolder.js';
import { GraphicStudio } from './graphicStudio.js';
import { AssemblyManager } from './assemblyManager.js';

class App {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.renderer = new FoldRenderer(this.container, {
      onFaceClick: (faceIdx, partIdx) => {
        if (this.assemblyManager && this.assemblyManager.isAssembly) {
          if (partIdx !== undefined && partIdx !== this.assemblyManager.activePartIndex) {
            this.onSelectAssemblyPart(partIdx);
            if (this.graphicStudio && this.graphicStudio.thumbnailStrip) {
              this.graphicStudio.thumbnailStrip.selectPart(partIdx);
            }
            if (this.netEditor && this.netEditor.thumbnailStrip) {
              this.netEditor.thumbnailStrip.selectPart(partIdx);
            }
          }
        }
        if (this.graphicStudio) {
          this.graphicStudio.setFocusFace(faceIdx);
        }
      }
    });

    this.assemblyManager = new AssemblyManager();
    this.foldData = null;
    this.kinematics = null;
    this.explodedProgress = 0.0;

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

    // Graphic Studio state
    this.graphicStudio = null;
    this.studioPreviewRenderer = null;
    this.isStudioPreviewPlaying = false;
    this.studioPreviewDirection = 1;

    // Seeded CAD Generation State
    this.currentCadPlanarData = null;
    this.currentCadSeed = 1;

    this.initNetEditor();
    this.initGraphicStudio();
    this.discoverModels();
    this.bindUIEvents();
    this.loadDefaultModel();
    this.startAnimationLoop();
  }

  initGraphicStudio() {
    const studioContainer = document.getElementById('studio-workspace');
    if (!studioContainer) return;

    this.graphicStudio = new GraphicStudio(studioContainer, {
      onTextureUpdate: (artworks, partIdx) => {
        if (this.assemblyManager && this.assemblyManager.parts && this.assemblyManager.parts[partIdx]) {
          this.assemblyManager.parts[partIdx].faceArtworks = artworks;
        }
        if (this.renderer) {
          this.renderer.updateFaceArtworks(artworks, partIdx);
        }
        if (this.previewRenderer) {
          this.previewRenderer.updateFaceArtworks(artworks, partIdx);
        }
        if (this.studioPreviewRenderer) {
          this.studioPreviewRenderer.updateFaceArtworks(artworks, partIdx);
        }
      }
    });

    const studioPreviewContainer = document.getElementById('studio-preview-canvas-container');
    if (studioPreviewContainer) {
      this.studioPreviewRenderer = new FoldRenderer(studioPreviewContainer, {
        showCreases: true,
        onFaceClick: (faceIdx, partIdx) => {
          if (this.assemblyManager && this.assemblyManager.isAssembly) {
            if (partIdx !== undefined && partIdx !== this.assemblyManager.activePartIndex) {
              this.onSelectAssemblyPart(partIdx);
              if (this.graphicStudio && this.graphicStudio.thumbnailStrip) {
                this.graphicStudio.thumbnailStrip.selectPart(partIdx);
              }
              if (this.netEditor && this.netEditor.thumbnailStrip) {
                this.netEditor.thumbnailStrip.selectPart(partIdx);
              }
            }
          }
          if (this.graphicStudio) {
            this.graphicStudio.setFocusFace(faceIdx);
          }
        }
      });
      const themeSelect = document.getElementById('theme-select');
      if (themeSelect) this.studioPreviewRenderer.setTheme(themeSelect.value);
    }
  }

  discoverModels() {
    const modelSelect = document.getElementById('model-select');
    if (!modelSelect) return;

    try {
      const jsonModules = import.meta.glob('../models/*.json', { eager: true });
      const cadModules = import.meta.glob('../models/*.{stl,obj,step,stp}', { query: '?url', eager: true });

      const jsonDiscovered = [];
      const cadDiscovered = [];

      for (const path in jsonModules) {
        const filename = path.split('/').pop();
        const mod = jsonModules[path];
        const data = mod.default || mod;

        if (data && typeof data === 'object') {
          const title = data.file_title || data.title || filename.replace('.json', '');
          const facesCount = Array.isArray(data.faces_vertices) ? data.faces_vertices.length : null;

          jsonDiscovered.push({
            url: `models/${filename}`,
            filename,
            title,
            facesCount
          });
        }
      }

      for (const path in cadModules) {
        const filename = path.split('/').pop();
        const mod = cadModules[path];
        const cadUrl = mod.default || mod;

        cadDiscovered.push({
          url: cadUrl,
          filename,
          title: '3D CAD Model',
          facesCount: null
        });
      }

      jsonDiscovered.sort((a, b) => a.filename.localeCompare(b.filename));
      cadDiscovered.sort((a, b) => a.filename.localeCompare(b.filename));

      // Rebuild model dropdown options with optgroups
      modelSelect.innerHTML = '';
      let defaultSelectedUrl = 'models/subdivided-notched-cube.json';

      if (jsonDiscovered.length > 0) {
        const jsonGroup = document.createElement('optgroup');
        jsonGroup.label = 'Sample FOLD Nets';
        jsonDiscovered.forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.url;
          const faceBadge = m.facesCount ? ` (${m.facesCount} Faces)` : '';
          const nameWithoutExt = m.filename.replace(/\.[^/.]+$/, '');
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
          jsonGroup.appendChild(opt);
        });
        modelSelect.appendChild(jsonGroup);
      }

      if (cadDiscovered.length > 0) {
        const cadGroup = document.createElement('optgroup');
        cadGroup.label = 'Sample CAD Models';
        cadDiscovered.forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.url;
          opt.textContent = m.filename;
          cadGroup.appendChild(opt);
        });
        modelSelect.appendChild(cadGroup);
      }

      const customOpt = document.createElement('option');
      customOpt.value = 'custom';
      customOpt.textContent = 'Custom File...';
      modelSelect.appendChild(customOpt);

      this.defaultModelUrl = defaultSelectedUrl;
    } catch (err) {
      console.warn('Error discovering models:', err);
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
    if (this.studioPreviewRenderer) this.studioPreviewRenderer.resize();
  }

  async loadModelFromUrl(url) {
    try {
      const ext = url.split('.').pop().split('?')[0].toLowerCase();

      if (['obj', 'stl', 'step', 'stp'].includes(ext)) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const content = ext === 'stl' ? await response.arrayBuffer() : await response.text();
        const meshData = await CADParser.parseCADFile(content, ext);
        const multiPlanar = CADParser.extractMultiBodyPlanarFaces(meshData);
        
        // Reset seed to 1 on fresh file load for repeatable generation
        this.currentCadSeed = 1;
        const fileName = url.split('/').pop().split('?')[0];
        const fileTitle = fileName.replace(/\.[^/.]+$/, '');
        this.currentCadPlanarData = { ...multiPlanar, title: fileTitle };

        if (multiPlanar.isAssembly) {
          const assemblyPayload = NetUnfolder.unfoldAssemblyToFold(multiPlanar.components, this.currentCadSeed);
          this.assemblyManager.loadAssembly(assemblyPayload);
          this.updateRegenButtonUI(true);
          this.initAssemblyModel(this.assemblyManager);
        } else {
          const comp = multiPlanar.components[0];
          const foldJson = NetUnfolder.unfoldToFoldJSON(comp.vertices, comp.facesVertices, this.currentCadSeed, 500, {
            componentId: comp.id,
            bbox: comp.bbox,
            center: comp.center,
            name: fileTitle
          });
          foldJson.file_title = fileTitle;
          this.assemblyManager.loadAssembly(foldJson);
          this.updateRegenButtonUI(true);
          this.initAssemblyModel(this.assemblyManager);
        }
      } else {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();
        
        this.currentCadPlanarData = null;
        this.currentCadSeed = 1;
        this.updateRegenButtonUI(false);
        this.initFoldModel(json);
      }
    } catch (err) {
      console.error('Failed to load model:', err);
      alert(`Could not load model: ${err.message}`);
    }
  }

  initFoldModel(jsonData) {
    this.assemblyManager.loadAssembly(jsonData);
    this.initAssemblyModel(this.assemblyManager);
  }

  initAssemblyModel(assemblyManager) {
    try {
      this.assemblyManager = assemblyManager;
      const activePart = assemblyManager.getActivePart();
      if (!activePart) return;

      this.foldData = activePart.foldData;
      this.kinematics = activePart.kinematics;

      this.renderer.buildModel(this.foldData, this.kinematics, this.assemblyManager);

      if (this.previewRenderer) {
        this.previewFoldData = this.foldData;
        this.previewKinematics = this.kinematics;
        this.previewRenderer.buildModel(this.foldData, this.kinematics);
        this.updatePreviewFoldProgress();
      }

      if (this.studioPreviewRenderer) {
        this.studioPreviewRenderer.buildModel(this.foldData, this.kinematics, this.assemblyManager);
        this.updateStudioPreviewFoldProgress();
      }

      // Toggle Exploded View Slider UI
      const expGroup = document.getElementById('exploded-slider-group');
      if (expGroup) {
        expGroup.style.display = assemblyManager.isAssembly ? 'flex' : 'none';
        const expSlider = document.getElementById('exploded-slider');
        if (expSlider) expSlider.value = 0;
        this.explodedProgress = 0.0;
        const expVal = document.getElementById('exploded-slider-value');
        if (expVal) expVal.textContent = '0%';
      }

      this.updateInspectorUI();
      this.resetSlider();
      this.updateFoldProgress();

      // Update Net Editor with Assembly
      if (this.netEditor) {
        this.netEditor.loadAssembly(this.assemblyManager, (partIdx) => {
          this.onSelectAssemblyPart(partIdx);
        });
      }

      // Update Graphic Studio with Assembly
      if (this.graphicStudio) {
        this.graphicStudio.loadAssembly(this.assemblyManager, (partIdx) => {
          this.onSelectAssemblyPart(partIdx);
        });
      }
    } catch (err) {
      console.error('Error initializing Assembly model:', err);
      alert(`Error initializing Assembly: ${err.message}`);
    }
  }

  onSelectAssemblyPart(partIndex) {
    if (!this.assemblyManager) return;
    this.assemblyManager.setActivePartIndex(partIndex);
    this.renderer.highlightActivePart(partIndex);
    if (this.studioPreviewRenderer) {
      this.studioPreviewRenderer.highlightActivePart(partIndex);
    }
    const activePart = this.assemblyManager.getActivePart();
    if (activePart) {
      this.foldData = activePart.foldData;
      this.kinematics = activePart.kinematics;

      // 1. Update Net Editor with selected part
      if (this.netEditor) {
        if (this.netEditor.thumbnailStrip) {
          this.netEditor.thumbnailStrip.selectPart(partIndex);
        }
        this.netEditor.loadFoldJSON(activePart.foldJson || activePart.foldData, true);
      }

      // 2. Update Graphic Studio with selected part (updates main cluster view & Net Overview mini map)
      if (this.graphicStudio) {
        if (this.graphicStudio.thumbnailStrip) {
          this.graphicStudio.thumbnailStrip.selectPart(partIndex);
        }
        this.graphicStudio.loadModel(activePart.foldData, activePart.kinematics, null, partIndex);
      }

      // 3. Update Net Editor 3D Preview Sidebar
      if (this.previewRenderer) {
        this.previewFoldData = activePart.foldData;
        this.previewKinematics = activePart.kinematics;
        this.previewRenderer.buildModel(this.foldData, this.kinematics);
        this.updatePreviewFoldProgress();
      }

      this.updateInspectorUI();
    }
  }

  updateStudioPreviewFoldProgress() {
    if (!this.studioPreviewRenderer) return;
    const slider = document.getElementById('studio-preview-fold-slider');
    const valDisplay = document.getElementById('studio-preview-slider-value');
    if (!slider) return;
    const val = parseFloat(slider.value);
    const t = val / 100;
    this.studioPreviewRenderer.updateFold(t);
    if (valDisplay) valDisplay.textContent = `${Math.round(val)}%`;
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
      this.previewRenderer = new FoldRenderer(previewContainer, { showCreases: true });
      const themeSelect = document.getElementById('theme-select');
      if (themeSelect) this.previewRenderer.setTheme(themeSelect.value);
    }
  }

  onNetEditorChange(foldJson) {
    // 1. Update live 3D preview sidebar with in-memory model
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

    // 2. Synchronize AssemblyManager, main 3D fold viewer, and Graphic Studio
    try {
      if (this.assemblyManager) {
        this.assemblyManager.updateActivePartFoldJSON(foldJson);
      }
      this.foldData = parseFoldData(foldJson);
      this.kinematics = new FoldKinematics(this.foldData);

      if (this.renderer) {
        this.renderer.buildModel(this.foldData, this.kinematics, this.assemblyManager);
        this.updateFoldProgress();
      }
      if (this.studioPreviewRenderer) {
        this.studioPreviewRenderer.buildModel(this.foldData, this.kinematics, this.assemblyManager);
        this.updateStudioPreviewFoldProgress();
      }
      if (this.graphicStudio) {
        this.graphicStudio.loadAssembly(this.assemblyManager, (partIdx) => {
          this.onSelectAssemblyPart(partIdx);
        });
      }
      this.updateInspectorUI();
    } catch (e) {
      console.warn('Live fold sync warning:', e.message);
    }

    // 3. Update JSON code panel textarea
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

    this.renderer.updateFold(t, this.explodedProgress || 0);

    // Update readout UI
    const valueDisplay = document.getElementById('slider-value');
    if (valueDisplay) valueDisplay.textContent = `${Math.round(val)}%`;

    const progress = document.getElementById('slider-progress');
    if (progress) progress.style.width = `${val}%`;

    // Update status badge
    const badgeText = document.getElementById('state-text');
    if (badgeText) {
      const isAssy = this.assemblyManager && this.assemblyManager.isAssembly;
      const assyTag = isAssy ? ` [${this.assemblyManager.parts.length} PARTS]` : '';
      if (val === 0) {
        badgeText.textContent = `FLAT 2D NET${assyTag}`;
      } else if (val === 100) {
        badgeText.textContent = `3D ASSEMBLED${assyTag}`;
      } else {
        badgeText.textContent = `FOLDING (${Math.round(val)}%)${assyTag}`;
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
    const btnModeStudio = document.getElementById('btn-mode-studio');
    const viewerWorkspace = document.getElementById('viewer-workspace');
    const editorWorkspace = document.getElementById('editor-workspace');
    const studioWorkspace = document.getElementById('studio-workspace');

    const switchWorkspace = (activeBtn, activeWorkspace) => {
      [btnMode3D, btnModeEditor, btnModeStudio].forEach(b => {
        if (b) b.classList.toggle('active', b === activeBtn);
      });
      [viewerWorkspace, editorWorkspace, studioWorkspace].forEach(w => {
        if (w) w.classList.toggle('active', w === activeWorkspace);
      });
      this.onWindowResize();
    };

    btnMode3D.addEventListener('click', () => switchWorkspace(btnMode3D, viewerWorkspace));
    btnModeEditor.addEventListener('click', () => {
      switchWorkspace(btnModeEditor, editorWorkspace);
      if (this.netEditor) {
        this.netEditor.resizeCanvas();
        this.netEditor.centerView();
      }
      if (this.previewRenderer) this.previewRenderer.resize();
    });
    if (btnModeStudio) {
      btnModeStudio.addEventListener('click', () => {
        switchWorkspace(btnModeStudio, studioWorkspace);
        if (this.graphicStudio) {
          this.graphicStudio.updateClusterView();
          this.graphicStudio.updateNavigator();
        }
      });
    }

    // Slider event
    const slider = document.getElementById('fold-slider');
    slider.addEventListener('input', () => {
      if (this.isPlaying) this.pauseAnimation();
      this.updateFoldProgress();
    });

    // Exploded View Slider event
    const expSlider = document.getElementById('exploded-slider');
    if (expSlider) {
      expSlider.addEventListener('input', (e) => {
        this.explodedProgress = parseFloat(e.target.value) / 100;
        const expVal = document.getElementById('exploded-slider-value');
        if (expVal) expVal.textContent = `${Math.round(this.explodedProgress * 100)}%`;
        this.updateFoldProgress();
      });
    }

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

    // Dedicated CAD file input handler
    const cadFileInput = document.getElementById('cad-file-input');
    if (cadFileInput) {
      cadFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          this.readFoldFile(file);
        }
      });
    }

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
      const themeKey = e.target.value;
      if (this.renderer) this.renderer.setTheme(themeKey);
      if (this.previewRenderer) this.previewRenderer.setTheme(themeKey);
      if (this.studioPreviewRenderer) this.studioPreviewRenderer.setTheme(themeKey);
      
      // Re-apply existing artwork textures to keep graphics visible under new theme
      if (this.graphicStudio && this.graphicStudio.faceArtworks) {
        if (this.renderer) this.renderer.updateFaceArtworks(this.graphicStudio.faceArtworks);
        if (this.previewRenderer) this.previewRenderer.updateFaceArtworks(this.graphicStudio.faceArtworks);
        if (this.studioPreviewRenderer) this.studioPreviewRenderer.updateFaceArtworks(this.graphicStudio.faceArtworks);
      }
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

    // Camera preset buttons (if present)
    const btnView2D = document.getElementById('btn-view-2d');
    if (btnView2D) btnView2D.addEventListener('click', () => this.renderer.setView2D());

    const btnView3D = document.getElementById('btn-view-3d');
    if (btnView3D) btnView3D.addEventListener('click', () => this.renderer.setView3D());

    const btnResetCam = document.getElementById('btn-reset-cam');
    if (btnResetCam) btnResetCam.addEventListener('click', () => this.renderer.centerModel());

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

    const btnFlipV = document.getElementById('btn-flip-v');
    if (btnFlipV) {
      btnFlipV.addEventListener('click', () => {
        if (this.netEditor) this.netEditor.flipVertically();
      });
    }

    const btnFlipH = document.getElementById('btn-flip-h');
    if (btnFlipH) {
      btnFlipH.addEventListener('click', () => {
        if (this.netEditor) this.netEditor.flipHorizontally();
      });
    }

    document.getElementById('btn-center-net').addEventListener('click', () => {
      if (this.netEditor) this.netEditor.centerView();
    });

    // Re-generate CAD Net with next pseudo-random seed
    const btnRegenTop = document.getElementById('btn-regen-cad');
    if (btnRegenTop) {
      btnRegenTop.addEventListener('click', () => this.regenerateCadNet());
    }

    const btnRegenEditor = document.getElementById('btn-editor-regen-cad');
    if (btnRegenEditor) {
      btnRegenEditor.addEventListener('click', () => this.regenerateCadNet());
    }

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

    // Graphic Studio 3D Preview Sidebar Toggles & Controls
    const studioPreviewSidebar = document.getElementById('studio-preview-sidebar');
    const btnStudioTogglePreview = document.getElementById('btn-studio-toggle-preview');
    const btnStudioClosePreview = document.getElementById('btn-studio-close-preview');

    if (btnStudioTogglePreview && studioPreviewSidebar) {
      btnStudioTogglePreview.addEventListener('click', () => {
        studioPreviewSidebar.classList.toggle('open');
        btnStudioTogglePreview.classList.toggle('active');
        setTimeout(() => this.onWindowResize(), 50);
        setTimeout(() => this.onWindowResize(), 260);
      });
    }

    if (btnStudioClosePreview && studioPreviewSidebar) {
      btnStudioClosePreview.addEventListener('click', () => {
        studioPreviewSidebar.classList.remove('open');
        if (btnStudioTogglePreview) btnStudioTogglePreview.classList.remove('active');
        setTimeout(() => this.onWindowResize(), 50);
        setTimeout(() => this.onWindowResize(), 260);
      });
    }

    const studioPreviewSlider = document.getElementById('studio-preview-fold-slider');
    if (studioPreviewSlider) {
      studioPreviewSlider.addEventListener('input', () => {
        if (this.isStudioPreviewPlaying) this.pauseStudioPreviewAnimation();
        this.updateStudioPreviewFoldProgress();
      });
    }

    const btnStudioPreviewPlay = document.getElementById('btn-studio-preview-play');
    if (btnStudioPreviewPlay) {
      btnStudioPreviewPlay.addEventListener('click', () => {
        this.toggleStudioPreviewAnimation();
      });
    }

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

    // GLB 3D Model Export Action (Full 3D Fold Viewer)
    const btnExportGlb = document.getElementById('btn-export-glb');
    if (btnExportGlb) {
      btnExportGlb.addEventListener('click', async () => {
        const rawTitle = this.foldData && this.foldData.title ? this.foldData.title : 'folded-box';
        const slug = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'folded-box';
        if (this.renderer) {
          await this.renderer.exportGLB(slug);
        }
      });
    }

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

  async readFoldFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    const modelSelect = document.getElementById('model-select');

    if (ext === 'json' || ext === 'fold') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          this.currentCadPlanarData = null;
          this.currentCadSeed = 1;
          this.updateRegenButtonUI(false);
          if (modelSelect) modelSelect.value = 'custom';
          this.initFoldModel(json);
        } catch (err) {
          alert(`Failed to parse file "${file.name}": Invalid JSON.`);
        }
      };
      reader.readAsText(file);
    } else if (['obj', 'stl', 'step', 'stp'].includes(ext)) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const content = e.target.result;
          const meshData = await CADParser.parseCADFile(content, ext);
          const multiPlanar = CADParser.extractMultiBodyPlanarFaces(meshData);
          
          // Reset seed to 1 on fresh CAD load
          this.currentCadSeed = 1;
          const fileTitle = file.name.replace(/\.[^/.]+$/, '');
          this.currentCadPlanarData = { ...multiPlanar, title: fileTitle };

          if (modelSelect) modelSelect.value = 'custom';

          if (multiPlanar.isAssembly) {
            const assemblyPayload = NetUnfolder.unfoldAssemblyToFold(multiPlanar.components, this.currentCadSeed);
            this.assemblyManager.loadAssembly(assemblyPayload);
            this.updateRegenButtonUI(true);
            this.initAssemblyModel(this.assemblyManager);
          } else {
            const comp = multiPlanar.components[0];
            const foldJson = NetUnfolder.unfoldToFoldJSON(comp.vertices, comp.facesVertices, this.currentCadSeed, 500, {
              componentId: comp.id,
              bbox: comp.bbox,
              center: comp.center,
              name: fileTitle
            });
            foldJson.file_title = fileTitle;
            this.assemblyManager.loadAssembly(foldJson);
            this.updateRegenButtonUI(true);
            this.initAssemblyModel(this.assemblyManager);
          }

          // Automatically switch to Net Prep & Editor view
          const btnModeEditor = document.getElementById('btn-mode-editor');
          if (btnModeEditor) btnModeEditor.click();
        } catch (err) {
          console.error('CAD Import Error:', err);
          alert(`CAD Import Failed: ${err.message}`);
        }
      };

      if (ext === 'stl') {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    } else {
      alert(`Unsupported file format: .${ext}`);
    }
  }

  regenerateCadNet() {
    if (!this.currentCadPlanarData) return;

    // Advance to next pseudo-random seed variant
    this.currentCadSeed++;
    console.log(`[App] Regenerating CAD net with seed #${this.currentCadSeed}...`);

    try {
      if (this.currentCadPlanarData.isAssembly) {
        const assemblyPayload = NetUnfolder.unfoldAssemblyToFold(
          this.currentCadPlanarData.components,
          this.currentCadSeed
        );
        this.assemblyManager.loadAssembly(assemblyPayload);
        this.updateRegenButtonUI(true);
        this.initAssemblyModel(this.assemblyManager);
      } else {
        const comp = this.currentCadPlanarData.components ? this.currentCadPlanarData.components[0] : this.currentCadPlanarData;
        const foldJson = NetUnfolder.unfoldToFoldJSON(
          comp.vertices,
          comp.facesVertices,
          this.currentCadSeed,
          500,
          { componentId: comp.id || 'part_0', bbox: comp.bbox, center: comp.center, name: this.currentCadPlanarData.title }
        );
        foldJson.file_title = this.currentCadPlanarData.title;
        this.assemblyManager.loadAssembly(foldJson);
        this.updateRegenButtonUI(true);
        this.initAssemblyModel(this.assemblyManager);
      }
    } catch (err) {
      console.error('Regeneration error:', err);
      alert(`Could not generate net with seed #${this.currentCadSeed}: ${err.message}`);
    }
  }

  updateRegenButtonUI(isCad) {
    const cadSection = document.getElementById('editor-cad-section');
    const btnEditor = document.getElementById('btn-editor-regen-cad');
    const labelEditor = document.getElementById('btn-editor-regen-label');

    const display = isCad ? 'flex' : 'none';
    if (cadSection) cadSection.style.display = display;
    if (btnEditor) btnEditor.style.display = isCad ? 'inline-flex' : 'none';
    if (labelEditor) labelEditor.textContent = `🎲 Re-gen (Seed #${this.currentCadSeed})`;
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

  toggleStudioPreviewAnimation() {
    if (this.isStudioPreviewPlaying) {
      this.pauseStudioPreviewAnimation();
    } else {
      this.startStudioPreviewAnimation();
    }
  }

  startStudioPreviewAnimation() {
    this.isStudioPreviewPlaying = true;
    const playIcon = document.getElementById('studio-preview-play-icon');
    const pauseIcon = document.getElementById('studio-preview-pause-icon');
    if (playIcon) playIcon.style.display = 'none';
    if (pauseIcon) pauseIcon.style.display = 'block';
  }

  pauseStudioPreviewAnimation() {
    this.isStudioPreviewPlaying = false;
    const playIcon = document.getElementById('studio-preview-play-icon');
    const pauseIcon = document.getElementById('studio-preview-pause-icon');
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
  }

  updateInspectorUI() {
    if (!this.foldData) return;

    if (this.foldData.title) document.getElementById('meta-title').textContent = this.foldData.title;
    if (this.foldData.creator) document.getElementById('meta-creator').textContent = this.foldData.creator;
    if (this.foldData.spec) document.getElementById('meta-spec').textContent = `v${this.foldData.spec}`;

    if (this.foldData.counts) {
      document.getElementById('stat-vertices').textContent = this.foldData.counts.vertices ?? 0;
      document.getElementById('stat-edges').textContent = this.foldData.counts.edges ?? 0;
      document.getElementById('stat-faces').textContent = this.foldData.counts.faces ?? 0;

      document.getElementById('stat-boundary').textContent = this.foldData.counts.boundary ?? 0;
      document.getElementById('stat-valley').textContent = this.foldData.counts.valley ?? 0;
      document.getElementById('stat-mountain').textContent = this.foldData.counts.mountain ?? 0;
      document.getElementById('stat-cut').textContent = this.foldData.counts.cut ?? 0;
      document.getElementById('stat-flat').textContent = this.foldData.counts.flat ?? 0;
      document.getElementById('stat-unassigned').textContent = this.foldData.counts.unassigned ?? 0;
    }

    // Populate Root Face selector
    const rootFaceSelect = document.getElementById('root-face-select');
    if (rootFaceSelect) {
      rootFaceSelect.innerHTML = '';
      const facesList = this.foldData.facesVertices || this.foldData.faces_vertices || [];
      const rootIdx = this.kinematics ? this.kinematics.rootFaceIndex : 0;
      facesList.forEach((_, fIdx) => {
        const opt = document.createElement('option');
        opt.value = fIdx;
        opt.textContent = `Face #${fIdx} ${fIdx === rootIdx ? '(Root Base)' : ''}`;
        if (fIdx === rootIdx) opt.selected = true;
        rootFaceSelect.appendChild(opt);
      });
    }
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

      // Net Editor preview sidebar 3D loop
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

      // Graphic Studio preview sidebar 3D loop
      if (this.studioPreviewRenderer) {
        if (this.isStudioPreviewPlaying) {
          const spSlider = document.getElementById('studio-preview-fold-slider');
          if (spSlider) {
            let spVal = parseFloat(spSlider.value);
            spVal += this.studioPreviewDirection * (100 / 3) * this.animSpeed * delta;

            if (spVal >= 100) {
              spVal = 100;
              this.studioPreviewDirection = -1;
            } else if (spVal <= 0) {
              spVal = 0;
              this.studioPreviewDirection = 1;
            }

            spSlider.value = spVal;
            this.updateStudioPreviewFoldProgress();
          }
        }

        this.studioPreviewRenderer.render();
      }
    };

    requestAnimationFrame(animate);
  }
}

// Initialize application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
