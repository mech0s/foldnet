import { CrossSeamMapper } from './crossSeamMapper.js';
import { PartThumbnailStrip } from './partThumbnailStrip.js';

/**
 * Graphic Studio: Neighbor Cluster Painting Engine
 * 
 * Provides interactive vector SVG drawing tools across 3D-adjacent face clusters,
 * with live rasterization to 3D model textures.
 */
export class GraphicStudio {
  constructor(container, options = {}) {
    this.container = container;
    this.assemblyManager = null;
    this.onSelectAssemblyPart = null;
    this.thumbnailStrip = null;

    this.foldData = null;
    this.kinematics = null;
    this.cadDualGraph = null;

    this.focusFaceIndex = 0;
    this.faceAdjacency3D = [];
    this.currentCluster = null;

    // SVG Artwork storage per part: Map<partIndex, Map<faceIndex, Array<SVGElementSpec>>>
    this.partArtworksMap = new Map();
    this.currentPartIndex = 0;
    this.faceArtworks = new Map();

    // Tools: 'select', 'rect', 'circle', 'text', 'stamp'
    this.activeTool = 'rect';
    this.selectedElement = null;

    // Properties
    this.fillColor = '#3b82f6';
    this.fontColor = '#ffffff';
    this.activeColorTab = 'fill'; // Default tab is Fill
    this.textAlign = 'center';
    this.textValue = '';
    this.activeStamp = 'fragile';
    this.selectedArtwork = null;

    // Grid & Snapping properties
    this.showGrid = true;
    this.snapEnabled = true;
    this.overallScale = 100;
    this.gridSize = 2;
    this.standaloneFontSize = 10;
    this.snapDistance = 1.2;

    // Canvas view state (pan & zoom)
    this.zoom = 2.0;
    this.panX = 0;
    this.panY = 0;
    this.isPanning = false;
    this.panStart = { x: 0, y: 0 };


    // Drawing state
    this.isDrawing = false;
    this.drawStart = null;

    // Undo / Redo history
    this.undoStack = [];
    this.redoStack = [];

    this.onTextureUpdate = options.onTextureUpdate || null;
    this.onFocusChange = options.onFocusChange || null;

    this.buildStudioLayout();
    this.bindEvents();
  }

  buildStudioLayout() {
    this.container.innerHTML = `
      <div class="studio-wrapper">
        <!-- Top Toolbar -->
        <header class="studio-top-toolbar">
          <div class="header-left">
            <span class="cluster-badge">Neighbor Cluster Canvas</span>
            <span class="current-face-indicator">Focus Face: <strong id="lbl-focus-face">F0</strong></span>
            <div class="cluster-legend">
              <span class="legend-item"><span class="dot fold-dot"></span>Fold</span>
              <span class="legend-item"><span class="dot cut-dot"></span>3D Seam</span>
              <span class="legend-item"><span class="dot accidental-dot"></span>Accidental 2D</span>
            </div>
          </div>

          <div class="header-center">
            <div class="zoom-indicator">
              <button id="btn-studio-zoom-out" class="btn-icon" title="Zoom Out (Scroll Down)">-</button>
              <span id="lbl-studio-zoom">200%</span>
              <button id="btn-studio-zoom-in" class="btn-icon" title="Zoom In (Scroll Up)">+</button>
              <button id="btn-studio-zoom-fit" class="btn-sm btn-secondary" title="Reset View">Fit</button>
            </div>
            <div class="snapping-toolbar-group" style="display: flex; gap: 4px; margin-left: 8px;">
              <button id="btn-studio-toggle-grid" class="btn btn-sm btn-secondary active" title="Toggle Grid (1/50th of assembly scale)"># Grid</button>
              <button id="btn-studio-toggle-snap" class="btn btn-sm btn-secondary active" title="Toggle Snap (Hold Ctrl while drawing to bypass)">🧲 Snap</button>
            </div>
          </div>

          <div class="header-right">
            <button id="btn-studio-toggle-preview" class="btn btn-primary btn-sm" title="Toggle Live 3D Fold Preview">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>3D Preview</span>
            </button>
          </div>
        </header>

        <!-- Studio Main Workspace -->
        <div class="studio-layout">
          <!-- Left Tool Palette Sidebar -->
          <aside class="studio-toolbar">
            <div class="tool-section">
              <span class="tool-section-title">Draw Tools</span>
              <div class="tool-btn-group">
                <button class="tool-btn" data-tool="select" title="Select / Move / Focus Face (V)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
                    <path d="M13 13l6 6"></path>
                  </svg>
                  <span>Select</span>
                </button>
                <button class="tool-btn" data-tool="fill" title="Face Fill / Paint Bucket (F)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 11L12 17l-7-7 7-7 4 4"></path>
                    <path d="M5 10l-2 2 7 7 2-2"></path>
                    <path d="M22 20a2 2 0 1 1-4 0c0-1.6 2-3 2-3s2 1.4 2 3z" fill="currentColor"></path>
                  </svg>
                  <span>Face Fill</span>
                </button>
                <button class="tool-btn active" data-tool="rect" title="Rectangle (R)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  </svg>
                  <span>Rectangle</span>
                </button>
                <button class="tool-btn" data-tool="circle" title="Circle (C)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                  <span>Circle</span>
                </button>
                <button class="tool-btn" data-tool="text" title="Text Label (T)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="4 7 4 4 20 4 20 7"></polyline>
                    <line x1="9" y1="20" x2="15" y2="20"></line>
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                  </svg>
                  <span>Text</span>
                </button>
                <button class="tool-btn" data-tool="stamp" title="Stamps & Decals (S)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span>Stamp</span>
                </button>
              </div>
            </div>

            <!-- Color Selection Tabs & Swatch Palette -->
            <div class="tool-section color-tabs-section">
              <span class="tool-section-title">Color Palette</span>
              <div class="color-tabs-header">
                <button type="button" class="color-tab-btn active" data-color-tab="fill" id="tab-btn-fill">
                  <span>Fill</span>
                  <div class="tab-swatch-wrapper" title="Click to custom pick Fill color">
                    <span class="tab-color-swatch" id="swatch-indicator-fill" style="background-color: ${this.fillColor};"></span>
                    <input type="color" id="studio-fill-color" class="hidden-color-input" value="${this.fillColor}" />
                  </div>
                </button>
                <button type="button" class="color-tab-btn" data-color-tab="font" id="tab-btn-font">
                  <span>Font</span>
                  <div class="tab-swatch-wrapper" title="Click to custom pick Font color">
                    <span class="tab-color-swatch" id="swatch-indicator-font" style="background-color: ${this.fontColor};"></span>
                    <input type="color" id="studio-font-color" class="hidden-color-input" value="${this.fontColor}" />
                  </div>
                </button>
              </div>

              <!-- Color Palette Container (stays open for active tab) -->
              <div class="color-palette-body">
                <div class="color-palette-grid" id="studio-color-palette"></div>
              </div>
            </div>

            <div class="tool-section text-options">
              <span class="tool-section-title">Text & Alignment</span>
              <input type="text" id="studio-text-input" class="text-input" value="" placeholder="Type text for element..." />
              <div class="text-align-group">
                <button type="button" class="align-btn" data-align="left" title="Align Left">⇤ Left</button>
                <button type="button" class="align-btn active" data-align="center" title="Align Center">↔ Center</button>
                <button type="button" class="align-btn" data-align="right" title="Align Right">⇥ Right</button>
              </div>
            </div>

            <div class="tool-section stamp-options" style="display: none;">
              <span class="tool-section-title">Stamp Type</span>
              <select id="studio-stamp-select" class="custom-select">
                <option value="fragile">📦 Fragile / Handle with Care</option>
                <option value="up">⬆️ This Way Up</option>
                <option value="recycle">♻️ Recyclable</option>
                <option value="barcode">📊 Barcode & QR</option>
                <option value="star">⭐ Quality Seal</option>
              </select>
            </div>

            <div class="tool-section">
              <span class="tool-section-title">Actions</span>
              <div class="action-btn-group">
                <button id="btn-studio-undo" class="btn btn-secondary btn-sm" title="Undo (Ctrl+Z)">Undo</button>
                <button id="btn-studio-clear" class="btn btn-secondary btn-sm" title="Clear current face">Clear Face</button>
                <button id="btn-studio-clear-all" class="btn btn-danger btn-sm" title="Clear all faces">Reset Art</button>
              </div>
            </div>
          </aside>

          <!-- Studio Main Canvas Viewport -->
          <main class="studio-canvas-container">
            <svg id="studio-svg-canvas" class="studio-canvas" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                </pattern>
              </defs>
              <rect id="studio-grid-rect" width="100%" height="100%" fill="url(#grid-pattern)" />
              <g id="cluster-root-group"></g>
            </svg>

            <!-- Mini Map Face Navigator -->
            <div class="face-navigator">
              <span class="navigator-title">Net Overview (Click Face to Focus)</span>
              <svg id="navigator-svg" width="160" height="120"></svg>
            </div>
          </main>

          <!-- Pop-Out Live 3D Preview Sidebar in Graphic Studio -->
          <aside id="studio-preview-sidebar" class="preview-sidebar open">
            <div class="preview-header">
              <div class="preview-title">
                <span class="preview-dot"></span>
                <h3>Live 3D Fold Preview</h3>
              </div>
              <button id="btn-studio-close-preview" class="btn-close">&times;</button>
            </div>

            <div id="studio-preview-canvas-container" class="preview-canvas-container"></div>

            <div class="preview-controls-bar">
              <button id="btn-studio-preview-play" class="btn btn-primary btn-round btn-sm" title="Play/Pause 3D Preview">
                <svg id="studio-preview-play-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <svg id="studio-preview-pause-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              </button>

              <div class="preview-slider-container">
                <input type="range" id="studio-preview-fold-slider" min="0" max="100" step="0.1" value="0" />
              </div>
              <span id="studio-preview-slider-value" class="preview-slider-val">0%</span>
            </div>
          </aside>
        </div>
      </div>
    `;

    this.svgElement = this.container.querySelector('#studio-svg-canvas');
    this.rootGroup = this.container.querySelector('#cluster-root-group');
    this.navSvg = this.container.querySelector('#navigator-svg');

    const stripContainer = this.container.querySelector('#studio-part-strip-container');
    if (stripContainer) {
      this.thumbnailStrip = new PartThumbnailStrip(stripContainer, {
        onSelectPart: (partIdx) => this.selectPart(partIdx)
      });
    }
  }

  /**
   * Loads an AssemblyManager into GraphicStudio.
   * Focuses on the active part while rendering thumbnail strip of all parts.
   * @param {import('./assemblyManager.js').AssemblyManager} assemblyManager
   */
  loadAssembly(assemblyManager, onSelectPart = null) {
    this.assemblyManager = assemblyManager;
    this.onSelectAssemblyPart = onSelectPart;
    this.undoStack = [];
    this.redoStack = [];
    this.selectedArtwork = null;

    // Reset artwork cache for the newly loaded assembly or single model
    this.partArtworksMap.clear();

    // Hydrate partArtworksMap from assemblyManager parts if present
    if (assemblyManager && Array.isArray(assemblyManager.parts)) {
      assemblyManager.parts.forEach((p, idx) => {
        if (p.faceArtworks && p.faceArtworks.size > 0) {
          this.partArtworksMap.set(idx, p.faceArtworks);
        } else {
          const cleanMap = new Map();
          this.partArtworksMap.set(idx, cleanMap);
          p.faceArtworks = cleanMap;
        }
      });
    }

    if (assemblyManager && assemblyManager.isAssembly) {
      if (this.thumbnailStrip) {
        this.thumbnailStrip.update(assemblyManager.parts, assemblyManager.activePartIndex);
      }
      const activePart = assemblyManager.getActivePart();
      if (activePart) {
        this.loadModel(activePart.foldData, activePart.kinematics, null, assemblyManager.activePartIndex);
      }
    } else {
      if (this.thumbnailStrip) {
        this.thumbnailStrip.update([], 0);
      }
      if (assemblyManager) {
        const activePart = assemblyManager.getActivePart();
        if (activePart) this.loadModel(activePart.foldData, activePart.kinematics, null, 0);
      }
    }

    // Notify 3D renderers of current face artworks (clean or restored) across all parts
    if (this.onTextureUpdate && assemblyManager && Array.isArray(assemblyManager.parts)) {
      assemblyManager.parts.forEach((p, pIdx) => {
        const artMap = this.partArtworksMap.get(pIdx) || new Map();
        this.onTextureUpdate(artMap, pIdx);
      });
    }
  }

  selectPart(partIndex) {
    if (this.assemblyManager && this.assemblyManager.parts[partIndex]) {
      if (this.onSelectAssemblyPart) {
        this.onSelectAssemblyPart(partIndex);
      } else {
        this.assemblyManager.setActivePartIndex(partIndex);
        if (this.thumbnailStrip) {
          this.thumbnailStrip.selectPart(partIndex);
        }
        const part = this.assemblyManager.parts[partIndex];
        this.loadModel(part.foldData, part.kinematics, null, partIndex);
      }
    }
  }

  bindEvents() {
    // Tool buttons
    this.container.querySelectorAll('.tool-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTool = btn.getAttribute('data-tool');
        if (this.svgElement) {
          this.svgElement.setAttribute('data-tool', this.activeTool);
        }
        this.deselectActiveArtwork();

        // Toggle tool-specific options
        this.container.querySelector('.stamp-options').style.display = this.activeTool === 'stamp' ? 'block' : 'none';
      });
    });

    if (this.svgElement) {
      this.svgElement.setAttribute('data-tool', this.activeTool);
    }

    // Color Palette Swatches Rendering & Click Handlers
    const paletteGrid = this.container.querySelector('#studio-color-palette');
    const STUDIO_COLORS = [
      // Row 1: Primary Grayscale Continuum
      '#ffffff', '#f8fafc', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155',
      // Row 2: Deep Grayscale & Earth / Cardboard / Wood
      '#1e293b', '#0f172a', '#090d16', '#000000', '#fef3c7', '#fde68a', '#fcd34d', '#451a03',
      // Row 3: Browns, Ochres & Industrial Ambers
      '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#854d0e', '#592909',
      // Row 4: Reds & Pinks
      '#fee2e2', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d',
      // Row 5: Roses, Magentas & Purples
      '#f43f5e', '#e11d48', '#be123c', '#ec4899', '#db2777', '#d946ef', '#c026d3', '#86198f',
      // Row 6: Violets, Indigos & Deep Navy
      '#f3e8ff', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6366f1', '#4f46e5', '#3730a3',
      // Row 7: Sky Blues, Cyans & Deep Ocean Blues
      '#e0f2fe', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#3b82f6', '#2563eb', '#1e3a8a',
      // Row 8: Teals, Limes & Vibrant Eco Greens
      '#ccfbf1', '#14b8a6', '#0f766e', '#10b981', '#059669', '#22c55e', '#16a34a', '#84cc16'
    ];

    if (paletteGrid) {
      paletteGrid.innerHTML = '';
      STUDIO_COLORS.forEach(c => {
        const swatchBtn = document.createElement('button');
        swatchBtn.type = 'button';
        swatchBtn.className = 'palette-swatch-btn';
        swatchBtn.style.backgroundColor = c;
        swatchBtn.setAttribute('data-color', c);
        swatchBtn.title = c;
        if (c.toLowerCase() === this.fillColor.toLowerCase()) {
          swatchBtn.classList.add('active');
        }
        swatchBtn.addEventListener('click', () => {
          this.applyColorFromPalette(c);
        });
        paletteGrid.appendChild(swatchBtn);
      });
    }

    // Color Tabs (Fill / Font)
    const colorTabBtns = this.container.querySelectorAll('.color-tab-btn');
    colorTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        colorTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeColorTab = btn.getAttribute('data-color-tab') || 'fill';
        this.updatePaletteHighlight();
      });
    });

    // Native Color Inputs
    const fillInp = this.container.querySelector('#studio-fill-color');
    if (fillInp) {
      fillInp.addEventListener('input', (e) => {
        this.fillColor = e.target.value;
        const swatch = this.container.querySelector('#swatch-indicator-fill');
        if (swatch) swatch.style.backgroundColor = this.fillColor;
        this.updatePaletteHighlight();
        if (this.selectedArtwork) {
          this.selectedArtwork.fill = this.fillColor;
          this.syncArtworkUpdate(this.selectedArtwork);
        }
      });
    }

    const fontColorInp = this.container.querySelector('#studio-font-color');
    if (fontColorInp) {
      fontColorInp.addEventListener('input', (e) => {
        this.fontColor = e.target.value;
        const swatch = this.container.querySelector('#swatch-indicator-font');
        if (swatch) swatch.style.backgroundColor = this.fontColor;
        this.updatePaletteHighlight();
        if (this.selectedArtwork) {
          this.selectedArtwork.fontColor = this.fontColor;
          this.syncArtworkUpdate(this.selectedArtwork);
        }
      });
    }

    const textInp = this.container.querySelector('#studio-text-input');
    if (textInp) {
      textInp.addEventListener('input', (e) => {
        this.textValue = e.target.value;
        if (this.selectedArtwork) {
          this.selectedArtwork.text = this.textValue;
          this.syncArtworkUpdate(this.selectedArtwork);
        }
      });
    }

    const alignBtns = this.container.querySelectorAll('.align-btn');
    alignBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        alignBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.textAlign = btn.getAttribute('data-align') || 'center';
        if (this.selectedArtwork) {
          this.selectedArtwork.textAlign = this.textAlign;
          this.syncArtworkUpdate(this.selectedArtwork);
        }
      });
    });

    const stampSelect = this.container.querySelector('#studio-stamp-select');
    if (stampSelect) {
      stampSelect.addEventListener('change', (e) => { this.activeStamp = e.target.value; });
    }


    const gridToggleBtn = this.container.querySelector('#btn-studio-toggle-grid');
    if (gridToggleBtn) {
      gridToggleBtn.addEventListener('click', () => {
        this.showGrid = !this.showGrid;
        gridToggleBtn.classList.toggle('active', this.showGrid);
        const gridRect = this.container.querySelector('#studio-grid-rect');
        if (gridRect) gridRect.style.display = this.showGrid ? 'block' : 'none';
      });
    }

    const snapToggleBtn = this.container.querySelector('#btn-studio-toggle-snap');
    if (snapToggleBtn) {
      snapToggleBtn.addEventListener('click', () => {
        this.snapEnabled = !this.snapEnabled;
        snapToggleBtn.classList.toggle('active', this.snapEnabled);
      });
    }

    // Zoom & View controls
    const zoomInBtn = this.container.querySelector('#btn-studio-zoom-in');
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => this.zoomIn());
    }

    const zoomOutBtn = this.container.querySelector('#btn-studio-zoom-out');
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => this.zoomOut());
    }

    const zoomFitBtn = this.container.querySelector('#btn-studio-zoom-fit');
    if (zoomFitBtn) {
      zoomFitBtn.addEventListener('click', () => this.fitView());
    }

    // Actions
    this.container.querySelector('#btn-studio-undo').addEventListener('click', () => this.undo());
    this.container.querySelector('#btn-studio-clear').addEventListener('click', () => this.clearActiveFace());
    this.container.querySelector('#btn-studio-clear-all').addEventListener('click', () => this.clearAll());

    // Canvas Pointer Events
    this.svgElement.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    this.svgElement.addEventListener('pointermove', (e) => this.onPointerMove(e));
    this.svgElement.addEventListener('pointerup', (e) => this.onPointerUp(e));
    this.svgElement.addEventListener('pointerleave', () => this.updateSnapIndicator({ isSnapped: false }));
    this.svgElement.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (this.container.closest('.active') || this.container.offsetParent !== null) {
        const activeInput = document.activeElement;
        const isEditingText = activeInput && (activeInput.tagName === 'INPUT' || activeInput.tagName === 'TEXTAREA');

        if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          this.undo();
        } else if (e.key === 'Escape') {
          this.deselectActiveArtwork();
        } else if ((e.key === 'Delete' || e.key === 'Backspace') && !isEditingText && this.selectedArtwork) {
          e.preventDefault();
          this.deleteSelectedArtwork();
        }
      }
    });
  }

  applyColorFromPalette(color) {
    if (this.activeColorTab === 'font') {
      this.fontColor = color;
      const fontInp = this.container.querySelector('#studio-font-color');
      if (fontInp) fontInp.value = color;
      const swatch = this.container.querySelector('#swatch-indicator-font');
      if (swatch) swatch.style.backgroundColor = color;
      if (this.selectedArtwork) {
        this.selectedArtwork.fontColor = color;
        this.syncArtworkUpdate(this.selectedArtwork);
      }
    } else {
      this.fillColor = color;
      const fillInp = this.container.querySelector('#studio-fill-color');
      if (fillInp) fillInp.value = color;
      const swatch = this.container.querySelector('#swatch-indicator-fill');
      if (swatch) swatch.style.backgroundColor = color;
      if (this.selectedArtwork) {
        this.selectedArtwork.fill = color;
        this.syncArtworkUpdate(this.selectedArtwork);
      }
    }
    this.updatePaletteHighlight();
  }

  updatePaletteHighlight() {
    const activeColor = (this.activeColorTab === 'font' ? this.fontColor : this.fillColor).toLowerCase();
    const swatches = this.container.querySelectorAll('.palette-swatch-btn');
    swatches.forEach(btn => {
      const c = (btn.getAttribute('data-color') || '').toLowerCase();
      btn.classList.toggle('active', c === activeColor);
    });
  }

  syncArtworkUpdate(artwork) {
    if (!artwork) return;
    const artId = artwork.id;
    if (artId) {
      this.faceArtworks.forEach((list) => {
        list.forEach(item => {
          if (item.id === artId) {
            item.text = artwork.text;
            item.fill = artwork.fill;
            item.fontColor = artwork.fontColor;
            item.textAlign = artwork.textAlign;
          }
        });
      });
    }
    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  selectActiveArtwork(spec) {
    this.selectedArtwork = spec;
    const textInp = this.container.querySelector('#studio-text-input');
    if (textInp) {
      textInp.value = spec.text || '';
      textInp.focus();
      textInp.select();
    }
    if (spec.fill && spec.fill !== 'transparent') {
      this.fillColor = spec.fill;
      const fillInp = this.container.querySelector('#studio-fill-color');
      if (fillInp) fillInp.value = spec.fill;
      const swatch = this.container.querySelector('#swatch-indicator-fill');
      if (swatch) swatch.style.backgroundColor = spec.fill;
    }
    if (spec.fontColor) {
      this.fontColor = spec.fontColor;
      const fontInp = this.container.querySelector('#studio-font-color');
      if (fontInp) fontInp.value = spec.fontColor;
      const swatch = this.container.querySelector('#swatch-indicator-font');
      if (swatch) swatch.style.backgroundColor = spec.fontColor;
    }
    this.updatePaletteHighlight();

    if (spec.textAlign) {
      this.textAlign = spec.textAlign;
      this.container.querySelectorAll('.align-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-align') === spec.textAlign);
      });
    }

    this.renderClusterSVG();
  }

  deselectActiveArtwork() {
    if (this.selectedArtwork) {
      this.selectedArtwork = null;
      const textInp = this.container.querySelector('#studio-text-input');
      if (textInp) {
        textInp.value = '';
      }
      this.textValue = '';
      this.renderClusterSVG();
    }
  }

  loadModel(foldData, kinematics = null, cadDualGraph = null, partIndex = 0) {
    this.foldData = foldData;
    this.kinematics = kinematics;
    this.cadDualGraph = cadDualGraph;
    this.currentPartIndex = partIndex;

    // Load or create artwork storage for this specific part
    if (this.assemblyManager && this.assemblyManager.parts[partIndex] && this.assemblyManager.parts[partIndex].faceArtworks && this.assemblyManager.parts[partIndex].faceArtworks.size > 0) {
      this.partArtworksMap.set(partIndex, this.assemblyManager.parts[partIndex].faceArtworks);
    } else if (!this.partArtworksMap.has(partIndex)) {
      this.partArtworksMap.set(partIndex, new Map());
    }
    this.faceArtworks = this.partArtworksMap.get(partIndex);
    if (this.assemblyManager && this.assemblyManager.parts[partIndex]) {
      this.assemblyManager.parts[partIndex].faceArtworks = this.faceArtworks;
    }

    this.faceAdjacency3D = CrossSeamMapper.build3DAdjacency(foldData, kinematics, cadDualGraph);
    this.focusFaceIndex = 0;
    this.panX = 0;
    this.panY = 0;
    this.autoFitZoom();
    this.updateClusterView();
    this.updateNavigator();
  }

  /**
   * [IN-PROGRESS / SCALING STRATEGY]:
   * Automatically computes the initial viewport zoom and coordinate unit scale based on the model's physical/CAD bounds.
   * 
   * Strategy Note:
   * Models can arrive in unit coordinates (e.g. unit cube 1.0x1.0), inches (10x10), or millimeters (250x250).
   * - `targetFacePx`: Target visual pixel size on screen for an average face.
   * - `modelUnitScale`: Normalizes tool properties (stroke width, text font size, stamp dimensions) to coordinate units.
   * Alternative strategies to consider:
   * 1. Per-face bounding box normalization (scaling each element as % of active face width/height).
   * 2. Viewport-independent fixed screen-space pixel sizing with inverse zoom transforms.
   */
  autoFitZoom() {
    if (!this.foldData || !this.foldData.vertices || this.foldData.vertices.length === 0) return;
    
    // Compute total net bounding size to determine model scale
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    this.foldData.vertices.forEach(p => {
      if (p[0] < minX) minX = p[0];
      if (p[0] > maxX) maxX = p[0];
      if (p[1] < minY) minY = p[1];
      if (p[1] > maxY) maxY = p[1];
    });

    const netW = Math.max(maxX - minX, 0.01);
    const netH = Math.max(maxY - minY, 0.01);
    const maxDim = Math.max(netW, netH);

    // Compute overall scale of the assembly
    let overallScale = maxDim;
    if (this.assemblyManager && this.assemblyManager.globalBBox) {
      const gb = this.assemblyManager.globalBBox;
      const bScale = Math.max(gb.max.x - gb.min.x, gb.max.y - gb.min.y, gb.max.z - gb.min.z);
      if (bScale > 0 && isFinite(bScale)) overallScale = bScale;
    }
    if (overallScale <= 0 || !isFinite(overallScale)) overallScale = 100;

    this.overallScale = overallScale;
    this.gridSize = overallScale / 50.0;
    this.standaloneFontSize = overallScale / 10.0;
    this.snapDistance = this.gridSize * 0.6;
    this.updateGridPattern();

    // Calculate approximate focus face diameter
    const numFaces = this.foldData.facesVertices.length || 1;
    const approxFaceDim = Math.max(maxDim / Math.sqrt(numFaces), 0.01);

    // Target around 250px on screen for a standard face in cluster view
    const targetFacePx = 250;
    const computedZoom = targetFacePx / approxFaceDim;

    // Unit scale for drawing artwork, stamps, and labels (approxFaceDim / 100.0 is calibrated against ~100mm CAD default)
    this.modelUnitScale = approxFaceDim / 100.0;

    // Set zoom safely clamped across large CAD units (e.g. 500mm) and tiny units (e.g. unit cube = 1.0)
    this.zoom = Math.max(0.01, Math.min(2000.0, computedZoom));
    this.fitZoom = this.zoom;
    this.minZoom = this.zoom * 0.05;
    this.maxZoom = this.zoom * 50.0;
    this.updateZoomLabel();
  }

  zoomIn(factor = 1.25) {
    const maxZ = this.maxZoom || 10000.0;
    this.zoom = Math.min(maxZ, this.zoom * factor);
    this.updateZoomLabel();
    this.updateGridPattern();
    this.renderClusterSVG();
  }

  zoomOut(factor = 0.8) {
    const minZ = this.minZoom || 0.001;
    this.zoom = Math.max(minZ, this.zoom * factor);
    this.updateZoomLabel();
    this.updateGridPattern();
    this.renderClusterSVG();
  }

  fitView() {
    this.panX = 0;
    this.panY = 0;
    if (this.currentCluster && this.currentCluster.clusterFaces && this.currentCluster.clusterFaces.length > 0) {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      this.currentCluster.clusterFaces.forEach(f => {
        f.polygon.forEach(pt => {
          if (pt[0] < minX) minX = pt[0];
          if (pt[0] > maxX) maxX = pt[0];
          if (pt[1] < minY) minY = pt[1];
          if (pt[1] > maxY) maxY = pt[1];
        });
      });
      const clusterW = Math.max(maxX - minX, 0.01);
      const clusterH = Math.max(maxY - minY, 0.01);
      const rect = this.svgElement.getBoundingClientRect();
      const availW = Math.max(rect.width - 120, 200);
      const availH = Math.max(rect.height - 120, 200);
      const fitZ = Math.min(availW / clusterW, availH / clusterH);
      this.zoom = Math.max(0.001, Math.min(5000.0, fitZ));
    } else {
      this.autoFitZoom();
    }
    this.updateZoomLabel();
    this.updateGridPattern();
    this.renderClusterSVG();
  }

  updateZoomLabel() {
    const lbl = this.container.querySelector('#lbl-studio-zoom');
    if (lbl) {
      const base = this.fitZoom || 1;
      const pct = Math.round((this.zoom / base) * 100);
      lbl.textContent = `${pct}%`;
    }
  }

  updateGridPattern() {
    const pattern = this.container.querySelector('#grid-pattern');
    if (pattern) {
      pattern.setAttribute('width', this.gridSize);
    pattern.setAttribute('height', this.gridSize);
      pattern.innerHTML = `<path d="M ${this.gridSize} 0 L 0 0 0 ${this.gridSize}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="${Math.max(0.001, 1 / (this.zoom || 1))}" />`;
    }
    const gridRect = this.container.querySelector('#studio-grid-rect');
    if (gridRect) {
      gridRect.style.display = this.showGrid ? 'block' : 'none';
    }
  }

  getSnappedCoords(pos, ctrlKey = false) {
    if (ctrlKey || !this.snapEnabled) {
      return { x: pos.x, y: pos.y, isSnapped: false, type: 'none' };
    }

    const candidateTargets = [];

    // Helper: Project point onto line segment
    const projectOnSegment = (px, py, ax, ay, bx, by) => {
      const dx = bx - ax;
      const dy = by - ay;
      const lenSq = dx * dx + dy * dy;
      if (lenSq < 1e-10) return { x: ax, y: ay, t: 0, dist: Math.hypot(px - ax, py - ay) };
      const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
      const projX = ax + t * dx;
      const projY = ay + t * dy;
      const dist = Math.hypot(px - projX, py - projY);
      return { x: projX, y: projY, t, dist };
    };

    // 1. Face vertices and Face edges of all cluster faces
    if (this.currentCluster && this.currentCluster.clusterFaces) {
      this.currentCluster.clusterFaces.forEach(f => {
        const poly = f.polygon;
        // Vertices
        poly.forEach(pt => {
          candidateTargets.push({ x: pt[0], y: pt[1], type: 'vertex', priority: 1 });
        });
        // Edges
        for (let i = 0; i < poly.length; i++) {
          const p1 = poly[i];
          const p2 = poly[(i + 1) % poly.length];
          const proj = projectOnSegment(pos.x, pos.y, p1[0], p1[1], p2[0], p2[1]);
          if (proj.dist <= this.snapDistance) {
            if (proj.t < 0.05) {
              candidateTargets.push({ x: p1[0], y: p1[1], type: 'vertex', priority: 1 });
            } else if (proj.t > 0.95) {
              candidateTargets.push({ x: p2[0], y: p2[1], type: 'vertex', priority: 1 });
            } else {
              candidateTargets.push({ x: proj.x, y: proj.y, type: 'edge', priority: 2 });
            }
          }
        }
      });
    }

    // 2. Graphic element vertices, edges & center key points in current cluster
    if (this.currentCluster && this.currentCluster.clusterFaces) {
      this.currentCluster.clusterFaces.forEach(f => {
        const artworks = this.faceArtworks.get(f.faceIndex) || [];
        artworks.forEach(art => {
          const m = art.clusterToNet ? CrossSeamMapper.composeAffine(f.netToCluster, art.clusterToNet) : { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
          if (art.type === 'rect') {
            const p1 = CrossSeamMapper.applyAffine(m, art.x, art.y);
            const p2 = CrossSeamMapper.applyAffine(m, art.x + art.width, art.y);
            const p3 = CrossSeamMapper.applyAffine(m, art.x + art.width, art.y + art.height);
            const p4 = CrossSeamMapper.applyAffine(m, art.x, art.y + art.height);
            const pc = CrossSeamMapper.applyAffine(m, art.x + art.width / 2, art.y + art.height / 2);

            // Corners & Center
            candidateTargets.push({ x: p1.x, y: p1.y, type: 'element', priority: 1 });
            candidateTargets.push({ x: p2.x, y: p2.y, type: 'element', priority: 1 });
            candidateTargets.push({ x: p3.x, y: p3.y, type: 'element', priority: 1 });
            candidateTargets.push({ x: p4.x, y: p4.y, type: 'element', priority: 1 });
            candidateTargets.push({ x: pc.x, y: pc.y, type: 'element-center', priority: 1.5 });

            // Rect border edges
            const rectEdges = [[p1, p2], [p2, p3], [p3, p4], [p4, p1]];
            rectEdges.forEach(([e1, e2]) => {
              const proj = projectOnSegment(pos.x, pos.y, e1.x, e1.y, e2.x, e2.y);
              if (proj.dist <= this.snapDistance && proj.t >= 0.05 && proj.t <= 0.95) {
                candidateTargets.push({ x: proj.x, y: proj.y, type: 'edge', priority: 2 });
              }
            });
          } else if (art.type === 'circle') {
            const pc = CrossSeamMapper.applyAffine(m, art.cx, art.cy);
            candidateTargets.push({ x: pc.x, y: pc.y, type: 'element-center', priority: 1.5 });

            // Circle circumference closest point
            const cDist = Math.hypot(pos.x - pc.x, pos.y - pc.y);
            if (cDist > 1e-6) {
              const circX = pc.x + (art.r * (pos.x - pc.x)) / cDist;
              const circY = pc.y + (art.r * (pos.y - pc.y)) / cDist;
              candidateTargets.push({ x: circX, y: circY, type: 'edge', priority: 2 });
            }
          } else if (art.type === 'text') {
            const pt = CrossSeamMapper.applyAffine(m, art.x, art.y);
            candidateTargets.push({ x: pt.x, y: pt.y, type: 'element', priority: 1 });
          }
        });
      });
    }

    // 3. Nearest Grid point (ONLY active when Grid is toggled ON)
    if (this.showGrid) {
      const gx = Math.round(pos.x / this.gridSize) * this.gridSize;
      const gy = Math.round(pos.y / this.gridSize) * this.gridSize;
      candidateTargets.push({ x: gx, y: gy, type: 'grid', priority: 3 });
    }

    // Find best target within snapDistance, preferring higher priority (vertices > edges > grid)
    let bestTarget = null;
    let bestDist = this.snapDistance;

    for (const t of candidateTargets) {
      const dist = Math.hypot(t.x - pos.x, t.y - pos.y);
      if (dist <= bestDist) {
        if (!bestTarget) {
          bestTarget = t;
          bestDist = dist;
        } else if (t.priority < bestTarget.priority) {
          // Strictly higher priority target (e.g. vertex over edge, edge over grid)
          bestTarget = t;
          bestDist = dist;
        } else if (t.priority === bestTarget.priority && dist < bestDist) {
          // Same priority but closer
          bestTarget = t;
          bestDist = dist;
        }
      }
    }

    if (bestTarget) {
      return { x: bestTarget.x, y: bestTarget.y, isSnapped: true, type: bestTarget.type };
    }
    return { x: pos.x, y: pos.y, isSnapped: false, type: 'none' };
  }

  updateSnapIndicator(snapResult) {
    let ind = this.rootGroup ? this.rootGroup.querySelector('#studio-snap-indicator') : null;
    if (!snapResult || !snapResult.isSnapped) {
      if (ind) ind.remove();
      return;
    }

    if (!ind && this.rootGroup) {
      ind = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      ind.setAttribute('id', 'studio-snap-indicator');
      this.rootGroup.appendChild(ind);
    }

    if (ind) {
      const ringRadius = Math.max(0.01, 7 / (this.zoom || 1));
      const strokeW = `${Math.max(1, 2 / (this.zoom || 1))}px`;
      let color = '#38bdf8'; // Cyan for vertex
      if (snapResult.type === 'edge') color = '#34d399'; // Emerald for edge
      else if (snapResult.type === 'grid') color = '#a855f7'; // Purple for grid
      else if (snapResult.type === 'element' || snapResult.type === 'element-center') color = '#f59e0b'; // Amber

      ind.innerHTML = `
        <circle cx="${snapResult.x}" cy="${snapResult.y}" r="${ringRadius}" fill="none" stroke="${color}" stroke-width="${strokeW}" vector-effect="non-scaling-stroke" opacity="0.9" />
        <circle cx="${snapResult.x}" cy="${snapResult.y}" r="${ringRadius * 0.35}" fill="${color}" stroke="none" />
      `;
    }
  }

  setFocusFace(faceIdx, cameraUp = null) {
    this.deselectActiveArtwork();
    if (cameraUp) this.lastCameraUp = cameraUp;
    if (faceIdx >= 0 && faceIdx < this.foldData.facesVertices.length) {
      this.focusFaceIndex = faceIdx;
      this.updateClusterView();
      this.updateNavigator();
      if (this.onFocusChange) this.onFocusChange(faceIdx);
    }
  }

  updateClusterView() {
    if (!this.foldData) return;

    let alignMatrix = null;
    if (this.assemblyManager && this.assemblyManager.parts && this.assemblyManager.parts[this.currentPartIndex]) {
      alignMatrix = this.assemblyManager.parts[this.currentPartIndex].alignMatrix;
    }

    this.currentCluster = CrossSeamMapper.buildNeighborCluster(
      this.focusFaceIndex,
      this.foldData,
      this.faceAdjacency3D,
      Infinity,
      this.kinematics,
      alignMatrix,
      this.lastCameraUp
    );

    this.container.querySelector('#lbl-focus-face').textContent = `F${this.focusFaceIndex}`;
    this.renderClusterSVG();
  }

  /**
   * Computes the shared 1D collinear overlap between two 2D segments [p1, p2] and [q1, q2].
   * Handles subsegments, partial overlaps, and unequal edge lengths accurately.
   */
  computeCollinearOverlapSegment(p1, p2, q1, q2, distTol = 0.05, minOverlap = 1e-3) {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const lenP = Math.hypot(dx, dy);
    if (lenP < 1e-6) return null;

    const ux = dx / lenP;
    const uy = dy / lenP;
    const nx = -uy;
    const ny = ux;

    // Perpendicular distance of q1 and q2 to line through p1-p2
    const d1 = Math.abs((q1[0] - p1[0]) * nx + (q1[1] - p1[1]) * ny);
    const d2 = Math.abs((q2[0] - p1[0]) * nx + (q2[1] - p1[1]) * ny);

    if (d1 > distTol || d2 > distTol) return null;

    // Project onto line coordinate t along u
    const tQ1 = (q1[0] - p1[0]) * ux + (q1[1] - p1[1]) * uy;
    const tQ2 = (q2[0] - p1[0]) * ux + (q2[1] - p1[1]) * uy;

    const minQ = Math.min(tQ1, tQ2);
    const maxQ = Math.max(tQ1, tQ2);

    const tStart = Math.max(0, minQ);
    const tEnd = Math.min(lenP, maxQ);

    const overlapLen = tEnd - tStart;
    if (overlapLen <= minOverlap) return null;

    const overlapP1 = [p1[0] + tStart * ux, p1[1] + tStart * uy];
    const overlapP2 = [p1[0] + tEnd * ux, p1[1] + tEnd * uy];

    return {
      overlapLen,
      p1: overlapP1,
      p2: overlapP2
    };
  }

  renderClusterSVG() {
    if (!this.currentCluster) return;

    const cluster = this.currentCluster;
    const rect = this.svgElement.getBoundingClientRect();
    const centerX = rect.width / 2 + this.panX;
    const centerY = rect.height / 2 + this.panY;

    this.rootGroup.innerHTML = '';
    // Use scale(zoom, -zoom) so +Y is up, matching Cartesian / Net Editor coordinates
    this.rootGroup.setAttribute('transform', `translate(${centerX}, ${centerY}) scale(${this.zoom}, ${-this.zoom})`);

    // 0. Define Per-Face ClipPaths
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    cluster.clusterFaces.forEach(f => {
      const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
      clip.setAttribute('id', `face-clip-${f.faceIndex}`);
      const clipPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      clipPoly.setAttribute('points', f.polygon.map(p => `${p[0]},${p[1]}`).join(' '));
      clip.appendChild(clipPoly);
      defs.appendChild(clip);
    });
    this.rootGroup.appendChild(defs);

    // 1. Render Face Outlines & Background Fills
    cluster.clusterFaces.forEach(f => {
      const ptsStr = f.polygon.map(p => `${p[0]},${p[1]}`).join(' ');
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      poly.setAttribute('points', ptsStr);
      let faceClass = 'cluster-face neighbor';
      if (f.isFocus) faceClass = 'cluster-face focus';
      else if (f.isCoPlanarWithFocus) faceClass = 'cluster-face coplanar';

      poly.setAttribute('class', faceClass);
      poly.setAttribute('data-face', f.faceIndex);

      // Check if custom face-fill exists
      const artList = this.faceArtworks.get(f.faceIndex) || [];
      const fillArt = artList.find(a => a.type === 'face-fill');
      if (fillArt && fillArt.fill) {
        poly.style.fill = fillArt.fill;
      }
      
      // Click face
      poly.addEventListener('click', (e) => {
        if (this.activeTool === 'fill') {
          e.stopPropagation();
          this.applyFaceFill(f);
          return;
        }
        if (!f.isFocus) {
          e.stopPropagation();
          this.setFocusFace(f.faceIndex);
        }
      });

      this.rootGroup.appendChild(poly);

      // Face label (scaled relative to zoom so it remains legible regardless of coordinate unit scale)
      let fcx = 0, fcy = 0;
      f.polygon.forEach(p => { fcx += p[0]; fcy += p[1]; });
      fcx /= f.polygon.length;
      fcy /= f.polygon.length;

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', fcx);
      text.setAttribute('y', -fcy);
      text.setAttribute('transform', `scale(1, -1)`);
      text.setAttribute('class', 'face-id-label');
      const fontSizeInCoordUnits = Math.max(0.001, 14 / (this.zoom || 1));
      text.setAttribute('font-size', `${fontSizeInCoordUnits}px`);
      text.textContent = f.isFocus ? `F${f.faceIndex} (Focus)` : `F${f.faceIndex}`;
      this.rootGroup.appendChild(text);
    });

    // 2. Render Existing Artwork for Focus & Neighbor faces
    cluster.clusterFaces.forEach(f => {
      const artworks = this.faceArtworks.get(f.faceIndex) || [];
      if (artworks.length === 0) return;

      const faceLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      faceLayer.setAttribute('clip-path', `url(#face-clip-${f.faceIndex})`);
      faceLayer.setAttribute('class', `face-art-layer face-${f.faceIndex}`);

      artworks.forEach(item => {
        // Compute composite transform from item's creation coordinate space to current cluster view
        const m = item.clusterToNet
          ? CrossSeamMapper.composeAffine(f.netToCluster, item.clusterToNet)
          : { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };

        const itemGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        itemGroup.setAttribute('transform', `matrix(${m.a} ${m.b} ${m.c} ${m.d} ${m.e} ${m.f})`);

        const elem = this.createSVGElementFromSpec(item, f);
        if (elem) {
          itemGroup.appendChild(elem);
          faceLayer.appendChild(itemGroup);
        }
      });

      this.rootGroup.appendChild(faceLayer);
    });

    // 3. Render Edge Taxonomy: Fold Hinges, Touching 3D Cut Seams & Accidental 2D Edges
    const tol = Math.max(0.05, 0.5 * (this.modelUnitScale || 1));
    const invZoom = Math.max(0.001, 1 / (this.zoom || 1));
    const numFaces = cluster.clusterFaces.length;

    for (let i = 0; i < numFaces; i++) {
      const fA = cluster.clusterFaces[i];
      const polyA = fA.polygon;
      const nA = polyA.length;

      for (let j = i + 1; j < numFaces; j++) {
        const fB = cluster.clusterFaces[j];
        const polyB = fB.polygon;
        const nB = polyB.length;

        for (let ea = 0; ea < nA; ea++) {
          const ap1 = polyA[ea];
          const ap2 = polyA[(ea + 1) % nA];

          for (let eb = 0; eb < nB; eb++) {
            const bp1 = polyB[eb];
            const bp2 = polyB[(eb + 1) % nB];

            const overlap = this.computeCollinearOverlapSegment(ap1, ap2, bp1, bp2, tol);
            if (!overlap) continue;

            const midX = (overlap.p1[0] + overlap.p2[0]) * 0.5;
            const midY = (overlap.p1[1] + overlap.p2[1]) * 0.5;

            // Check if fA and fB are connected in 3D
            const aNeighbors3D = this.faceAdjacency3D[fA.faceIndex] || [];
            const is3DConnected = aNeighbors3D.some(n => n.neighborFace === fB.faceIndex);

            if (is3DConnected) {
              // Legitimate 3D crease / fold or touching 3D cut seam
              const matchedClusterEdge = cluster.clusterEdges.find(e => {
                const eMidX = (e.p1[0] + e.p2[0]) * 0.5;
                const eMidY = (e.p1[1] + e.p2[1]) * 0.5;
                return Math.hypot(midX - eMidX, midY - eMidY) < tol * 2;
              });
              const isFoldHinge = matchedClusterEdge ? matchedClusterEdge.isFoldHinge : true;

              const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
              line.setAttribute('x1', overlap.p1[0]);
              line.setAttribute('y1', overlap.p1[1]);
              line.setAttribute('x2', overlap.p2[0]);
              line.setAttribute('y2', overlap.p2[1]);
              line.setAttribute('class', isFoldHinge ? 'cluster-crease fold' : 'cluster-crease cut-seam');
              this.rootGroup.appendChild(line);
            } else {
              // ACCIDENTAL 2D ADJACENCY (Collinear touching / subsegment with NO 3D connection)
              // 1. Hatched / Dual-Tone warning stroke (Strategy A)
              const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
              line.setAttribute('x1', overlap.p1[0]);
              line.setAttribute('y1', overlap.p1[1]);
              line.setAttribute('x2', overlap.p2[0]);
              line.setAttribute('y2', overlap.p2[1]);
              line.setAttribute('class', 'cluster-crease accidental-edge');
              this.rootGroup.appendChild(line);

              // 2. Midpoint separation glyph badge (Strategy C)
              const glyphG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
              glyphG.setAttribute('class', 'accidental-edge-glyph');
              
              const badgeW = 20 * invZoom;
              const badgeH = 14 * invZoom;
              const rx = 3 * invZoom;
              const fontSize = Math.max(0.001, 9 * invZoom);

              const pill = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              pill.setAttribute('x', midX - badgeW / 2);
              pill.setAttribute('y', midY - badgeH / 2);
              pill.setAttribute('width', badgeW);
              pill.setAttribute('height', badgeH);
              pill.setAttribute('rx', rx);
              pill.setAttribute('class', 'accidental-glyph-badge');
              glyphG.appendChild(pill);

              const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              txt.setAttribute('x', midX);
              txt.setAttribute('y', -midY);
              txt.setAttribute('transform', 'scale(1, -1)');
              txt.setAttribute('class', 'accidental-glyph-text');
              txt.setAttribute('font-size', `${fontSize}px`);
              txt.textContent = '⫽'; // Double slash non-contact separation symbol
              glyphG.appendChild(txt);

              this.rootGroup.appendChild(glyphG);
            }
          }
        }
      }
    }
  }

  /**
   * [IN-PROGRESS / SCALING STRATEGY]:
   * Instantiates SVG elements from specs.
   */
  createSVGElementFromSpec(spec, targetFace = null) {
    let elem = null;
    const unitScale = this.modelUnitScale || 1;
    const isSelected = !!(this.selectedArtwork && spec.id === this.selectedArtwork.id);

    if (spec.type === 'rect') {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'artwork-element');

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', spec.x);
      rect.setAttribute('y', spec.y);
      rect.setAttribute('width', spec.width);
      rect.setAttribute('height', spec.height);
      rect.setAttribute('fill', spec.fill || '#3b82f6');
      rect.setAttribute('stroke', 'none');
      g.appendChild(rect);

      if (spec.text && spec.text.trim().length > 0) {
        const padding = Math.min(spec.width, spec.height) * 0.08;
        const maxW = Math.max(0.0001, spec.width - padding * 2);
        const maxH = Math.max(0.0001, spec.height - padding * 2);
        const fontSize = Math.max(0.0001, Math.min(maxH * 0.85, maxW / Math.max(1, spec.text.length * 0.55)));

        const align = spec.textAlign || 'center';
        let textX = spec.x + spec.width / 2;
        let anchor = 'middle';
        if (align === 'left') {
          textX = spec.x + padding;
          anchor = 'start';
        } else if (align === 'right') {
          textX = spec.x + spec.width - padding;
          anchor = 'end';
        }
        const textY = -(spec.y + spec.height / 2);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('transform', 'scale(1, -1)');
        text.setAttribute('text-anchor', anchor);
        text.setAttribute('dominant-baseline', 'central');
        text.setAttribute('font-size', `${fontSize}px`);
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-family', 'sans-serif');
        text.setAttribute('fill', spec.fontColor || '#ffffff');
        text.setAttribute('stroke', 'none');
        text.textContent = spec.text;
        g.appendChild(text);
      }

      // Render selection boundary inset on the perimeter of the graphic element
      if (isSelected) {
        const selInset = Math.max(0.0001, 1.0 / (this.zoom || 1));
        const selRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        selRect.setAttribute('x', spec.x + selInset);
        selRect.setAttribute('y', spec.y + selInset);
        selRect.setAttribute('width', Math.max(0.0001, spec.width - selInset * 2));
        selRect.setAttribute('height', Math.max(0.0001, spec.height - selInset * 2));
        selRect.setAttribute('fill', 'none');
        selRect.setAttribute('stroke', '#818cf8');
        selRect.setAttribute('stroke-width', '2');
        selRect.setAttribute('stroke-dasharray', '5 3');
        selRect.setAttribute('vector-effect', 'non-scaling-stroke');
        selRect.setAttribute('pointer-events', 'none');
        g.appendChild(selRect);
      }

      elem = g;
    } else if (spec.type === 'circle') {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'artwork-element');

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', spec.cx);
      circle.setAttribute('cy', spec.cy);
      circle.setAttribute('r', spec.r);
      circle.setAttribute('fill', spec.fill || '#3b82f6');
      circle.setAttribute('stroke', 'none');
      g.appendChild(circle);

      if (spec.text && spec.text.trim().length > 0) {
        const side = 1.414 * spec.r;
        const padding = side * 0.08;
        const maxW = Math.max(0.0001, side - padding * 2);
        const maxH = Math.max(0.0001, side - padding * 2);
        const fontSize = Math.max(0.0001, Math.min(maxH * 0.85, maxW / Math.max(1, spec.text.length * 0.55)));

        const align = spec.textAlign || 'center';
        let textX = spec.cx;
        let anchor = 'middle';
        if (align === 'left') {
          textX = spec.cx - (side / 2) + padding;
          anchor = 'start';
        } else if (align === 'right') {
          textX = spec.cx + (side / 2) - padding;
          anchor = 'end';
        }
        const textY = -spec.cy;

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('transform', 'scale(1, -1)');
        text.setAttribute('text-anchor', anchor);
        text.setAttribute('dominant-baseline', 'central');
        text.setAttribute('font-size', `${fontSize}px`);
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-family', 'sans-serif');
        text.setAttribute('fill', spec.fontColor || '#ffffff');
        text.setAttribute('stroke', 'none');
        text.textContent = spec.text;
        g.appendChild(text);
      }

      // Render selection boundary inset on circle perimeter
      if (isSelected) {
        const selInset = Math.max(0.0001, 1.0 / (this.zoom || 1));
        const selCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        selCircle.setAttribute('cx', spec.cx);
        selCircle.setAttribute('cy', spec.cy);
        selCircle.setAttribute('r', Math.max(0.0001, spec.r - selInset));
        selCircle.setAttribute('fill', 'none');
        selCircle.setAttribute('stroke', '#818cf8');
        selCircle.setAttribute('stroke-width', '2');
        selCircle.setAttribute('stroke-dasharray', '5 3');
        selCircle.setAttribute('vector-effect', 'non-scaling-stroke');
        selCircle.setAttribute('pointer-events', 'none');
        g.appendChild(selCircle);
      }

      elem = g;
    } else if (spec.type === 'text') {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'artwork-element');

      const textElem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textElem.setAttribute('x', spec.x);
      textElem.setAttribute('y', -spec.y);
      textElem.setAttribute('transform', `scale(1, -1)`);
      textElem.setAttribute('dominant-baseline', 'hanging');
      textElem.setAttribute('text-anchor', spec.textAlign === 'center' ? 'middle' : (spec.textAlign === 'right' ? 'end' : 'start'));
      const fSize = spec.fontSize || (this.standaloneFontSize || 10);
      textElem.setAttribute('font-size', `${fSize}px`);
      textElem.setAttribute('font-weight', 'bold');
      textElem.setAttribute('font-family', 'sans-serif');
      textElem.setAttribute('fill', spec.fontColor || spec.fill || '#ffffff');
      textElem.setAttribute('stroke', 'none');
      textElem.textContent = spec.text;
      g.appendChild(textElem);

      if (isSelected) {
        const textLen = (spec.text || '').length;
        const estW = Math.max(fSize, textLen * fSize * 0.6);
        const estH = fSize * 1.2;
        let bx = spec.x;
        if (spec.textAlign === 'center') bx -= estW / 2;
        else if (spec.textAlign === 'right') bx -= estW;
        const by = spec.y - estH * 0.9;

        const selRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        selRect.setAttribute('x', bx);
        selRect.setAttribute('y', by);
        selRect.setAttribute('width', estW);
        selRect.setAttribute('height', estH);
        selRect.setAttribute('fill', 'none');
        selRect.setAttribute('stroke', '#818cf8');
        selRect.setAttribute('stroke-width', '2');
        selRect.setAttribute('stroke-dasharray', '5 3');
        selRect.setAttribute('vector-effect', 'non-scaling-stroke');
        selRect.setAttribute('pointer-events', 'none');
        g.appendChild(selRect);
      }

      elem = g;
    } else if (spec.type === 'stamp') {
      elem = this.createStampElement(spec);
      if (isSelected) {
        let sw = 60, sh = 40;
        if (spec.stampType === 'up') { sw = 40; sh = 50; }
        else if (spec.stampType === 'recycle') { sw = 50; sh = 50; }
        else if (spec.stampType === 'barcode') { sw = 70; sh = 40; }
        const selRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        selRect.setAttribute('x', 0);
        selRect.setAttribute('y', 0);
        selRect.setAttribute('width', sw);
        selRect.setAttribute('height', sh);
        selRect.setAttribute('fill', 'none');
        selRect.setAttribute('stroke', '#818cf8');
        selRect.setAttribute('stroke-width', '2');
        selRect.setAttribute('stroke-dasharray', '5 3');
        selRect.setAttribute('vector-effect', 'non-scaling-stroke');
        selRect.setAttribute('pointer-events', 'none');
        elem.appendChild(selRect);
      }
    }

    if (elem) {
      elem.style.cursor = 'pointer';
      elem.addEventListener('pointerdown', (e) => {
        if (e.button === 0) {
          e.stopPropagation();
          this.selectActiveArtwork(spec);
        }
      });
      elem.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
    return elem;
  }

  createStampElement(spec) {
    const unitScale = this.modelUnitScale || 1;
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const scaleFactor = (spec.scale || 1) * unitScale;
    g.setAttribute('transform', `translate(${spec.x}, ${spec.y}) scale(${scaleFactor}, ${-scaleFactor})`);
    
    if (spec.stampType === 'fragile') {
      g.innerHTML = `
        <rect width="60" height="40" rx="4" fill="#ef4444" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="30" y="24" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">FRAGILE</text>
      `;
    } else if (spec.stampType === 'up') {
      g.innerHTML = `
        <rect width="40" height="50" rx="4" fill="#3b82f6" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <path d="M20 12 L10 24 L16 24 L16 38 L24 38 L24 24 L30 24 Z" fill="#ffffff" />
      `;
    } else if (spec.stampType === 'recycle') {
      g.innerHTML = `
        <circle cx="25" cy="25" r="22" fill="#10b981" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="25" y="30" fill="#ffffff" font-size="16" text-anchor="middle">♻</text>
      `;
    } else if (spec.stampType === 'barcode') {
      g.innerHTML = `
        <rect width="70" height="40" fill="#ffffff" stroke="#000000" stroke-width="1" vector-effect="non-scaling-stroke" />
        <line x1="10" y1="8" x2="10" y2="32" stroke="#000" stroke-width="3" />
        <line x1="18" y1="8" x2="18" y2="32" stroke="#000" stroke-width="1" />
        <line x1="24" y1="8" x2="24" y2="32" stroke="#000" stroke-width="4" />
        <line x1="34" y1="8" x2="34" y2="32" stroke="#000" stroke-width="2" />
        <line x1="42" y1="8" x2="42" y2="32" stroke="#000" stroke-width="1" />
        <line x1="50" y1="8" x2="50" y2="32" stroke="#000" stroke-width="4" />
        <line x1="60" y1="8" x2="60" y2="32" stroke="#000" stroke-width="2" />
      `;
    } else {
      g.innerHTML = `
        <polygon points="25,5 31,18 45,18 34,27 38,40 25,32 12,40 16,27 5,18 19,18" fill="#f59e0b" stroke="#ffffff" stroke-width="1" vector-effect="non-scaling-stroke" />
      `;
    }
    return g;
  }

  // Pointer & Drawing handlers
  getCanvasCoords(e) {
    const rect = this.svgElement.getBoundingClientRect();
    const centerX = rect.width / 2 + this.panX;
    const centerY = rect.height / 2 + this.panY;
    const x = (e.clientX - rect.left - centerX) / this.zoom;
    // Invert Y delta because rootGroup has scale(zoom, -zoom)
    const y = -(e.clientY - rect.top - centerY) / this.zoom;
    return { x, y };
  }

  onPointerDown(e) {
    if (e.button === 1 || e.shiftKey) {
      // Pan
      this.isPanning = true;
      this.panStart = { x: e.clientX - this.panX, y: e.clientY - this.panY };
      return;
    }

    // Only deselect if clicking on empty canvas space (not directly on an artwork element)
    if (this.selectedArtwork && !e.target.closest('.artwork-element')) {
      this.deselectActiveArtwork();
    }

    const rawPos = this.getCanvasCoords(e);
    const snap = this.getSnappedCoords(rawPos, e.ctrlKey);
    const pos = { x: snap.x, y: snap.y };
    const unitScale = this.modelUnitScale || 1;
    this.isDrawing = true;
    this.drawStart = pos;

    // Dynamically resolve initiating face from pointer position (supports initiating from ANY face)
    let initiatingFace = null;
    if (this.currentCluster && this.currentCluster.clusterFaces) {
      initiatingFace = this.currentCluster.clusterFaces.find(f => CrossSeamMapper.isPointInsidePoly([pos.x, pos.y], f.polygon));
      if (!initiatingFace) {
        let minDist = Infinity;
        for (const f of this.currentCluster.clusterFaces) {
          let fcx = 0, fcy = 0;
          f.polygon.forEach(p => { fcx += p[0]; fcy += p[1]; });
          fcx /= f.polygon.length;
          fcy /= f.polygon.length;
          const d = Math.hypot(pos.x - fcx, pos.y - fcy);
          if (d < minDist) {
            minDist = d;
            initiatingFace = f;
          }
        }
      }
    }
    this.drawStartFace = initiatingFace;
    const startFaceIdx = initiatingFace ? initiatingFace.faceIndex : this.focusFaceIndex;

    if (this.activeTool === 'select') {
      this.isDrawing = false;
      return;
    }

    if (this.activeTool === 'fill') {
      this.isDrawing = false;
      if (initiatingFace) {
        this.applyFaceFill(initiatingFace);
      }
      return;
    }

    if (this.activeTool === 'stamp') {
      const spec = {
        id: 'art_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
        type: 'stamp',
        stampType: this.activeStamp,
        x: pos.x - 30 * unitScale,
        y: pos.y - 20 * unitScale,
        scale: 1,
        unitScale: unitScale,
        faceIndex: startFaceIdx
      };
      this.addArtwork(spec);
      this.selectActiveArtwork(spec);
      this.isDrawing = false;
    } else if (this.activeTool === 'text') {
      const fontSize = this.standaloneFontSize || 24 * unitScale;
      const spec = {
        id: 'art_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
        type: 'text',
        text: this.textValue || 'TEXT',
        x: pos.x,
        y: pos.y,
        fontSize: fontSize,
        unitScale: unitScale,
        fill: 'transparent',
        fontColor: this.fontColor || '#ffffff',
        textAlign: this.textAlign || 'left',
        stroke: 'none',
        faceIndex: startFaceIdx
      };
      this.addArtwork(spec);
      this.selectActiveArtwork(spec);
      this.isDrawing = false;
    }
  }

  onPointerMove(e) {
    if (this.isPanning) {
      this.panX = e.clientX - this.panStart.x;
      this.panY = e.clientY - this.panStart.y;
      this.renderClusterSVG();
      return;
    }

    const rawPos = this.getCanvasCoords(e);
    const snap = this.getSnappedCoords(rawPos, e.ctrlKey);
    this.updateSnapIndicator(snap);
    const pos = { x: snap.x, y: snap.y };

    if (!this.isDrawing || !this.drawStart) return;
    const unitScale = this.modelUnitScale || 1;

    // Live preview during drag
    let previewElem = this.rootGroup.querySelector('#draw-preview');
    if (!previewElem) {
      previewElem = document.createElementNS('http://www.w3.org/2000/svg', this.activeTool === 'circle' ? 'circle' : 'rect');
      previewElem.setAttribute('id', 'draw-preview');
      previewElem.setAttribute('fill', this.fillColor || '#3b82f6');
      previewElem.setAttribute('stroke', 'none');
      previewElem.setAttribute('opacity', '0.7');
      this.rootGroup.appendChild(previewElem);
    }

    if (this.activeTool === 'rect') {
      const x = Math.min(this.drawStart.x, pos.x);
      const y = Math.min(this.drawStart.y, pos.y);
      const w = Math.abs(pos.x - this.drawStart.x);
      const h = Math.abs(pos.y - this.drawStart.y);
      previewElem.setAttribute('x', x);
      previewElem.setAttribute('y', y);
      previewElem.setAttribute('width', w);
      previewElem.setAttribute('height', h);
      previewElem.setAttribute('fill', this.fillColor || '#3b82f6');
    } else if (this.activeTool === 'circle') {
      const r = Math.hypot(pos.x - this.drawStart.x, pos.y - this.drawStart.y);
      previewElem.setAttribute('cx', this.drawStart.x);
      previewElem.setAttribute('cy', this.drawStart.y);
      previewElem.setAttribute('r', r);
      previewElem.setAttribute('fill', this.fillColor || '#3b82f6');
    }
  }

  onPointerUp(e) {
    if (this.isPanning) {
      this.isPanning = false;
      return;
    }

    const rawPos = this.getCanvasCoords(e);
    const snap = this.getSnappedCoords(rawPos, e.ctrlKey);
    this.updateSnapIndicator({ isSnapped: false });
    const pos = { x: snap.x, y: snap.y };

    if (!this.isDrawing || !this.drawStart) return;
    const unitScale = this.modelUnitScale || 1;
    this.isDrawing = false;

    const previewElem = this.rootGroup.querySelector('#draw-preview');
    if (previewElem) previewElem.remove();

    const startFaceIdx = this.drawStartFace ? this.drawStartFace.faceIndex : this.focusFaceIndex;

    if (this.activeTool === 'rect') {
      const w = Math.abs(pos.x - this.drawStart.x);
      const h = Math.abs(pos.y - this.drawStart.y);
      // Min threshold scaled to coordinate units
      if (w > 0.01 * unitScale && h > 0.01 * unitScale) {
        const spec = {
          id: 'art_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
          type: 'rect',
          x: Math.min(this.drawStart.x, pos.x),
          y: Math.min(this.drawStart.y, pos.y),
          width: w,
          height: h,
          fill: this.fillColor || '#3b82f6',
          stroke: 'none',
          text: this.textValue || '',
          fontColor: this.fontColor || '#ffffff',
          textAlign: this.textAlign || 'center',
          unitScale: unitScale,
          faceIndex: startFaceIdx
        };
        this.addArtwork(spec);
        this.selectActiveArtwork(spec);
      }
    } else if (this.activeTool === 'circle') {
      const r = Math.hypot(pos.x - this.drawStart.x, pos.y - this.drawStart.y);
      if (r > 0.01 * unitScale) {
        const spec = {
          id: 'art_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
          type: 'circle',
          cx: this.drawStart.x,
          cy: this.drawStart.y,
          r,
          fill: this.fillColor || '#3b82f6',
          stroke: 'none',
          text: this.textValue || '',
          fontColor: this.fontColor || '#ffffff',
          textAlign: this.textAlign || 'center',
          unitScale: unitScale,
          faceIndex: startFaceIdx
        };
        this.addArtwork(spec);
        this.selectActiveArtwork(spec);
      }
    }
  }

  onWheel(e) {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
    const minZ = this.minZoom || 0.001;
    const maxZ = this.maxZoom || 10000.0;
    this.zoom = Math.max(minZ, Math.min(maxZ, this.zoom * zoomFactor));
    this.updateZoomLabel();
    this.updateGridPattern();
    this.renderClusterSVG();
  }

  // ────────────────────────────────────────────────────────────
  // Cross-seam artwork replication
  // ────────────────────────────────────────────────────────────

  /** Bounding box {minX, minY, maxX, maxY} of an artwork spec in cluster space. */
  getArtworkBBox(spec) {
    const unitScale = spec.unitScale || this.modelUnitScale || 1;
    if (spec.type === 'rect') {
      return { minX: spec.x, minY: spec.y, maxX: spec.x + spec.width, maxY: spec.y + spec.height };
    }
    if (spec.type === 'circle') {
      return { minX: spec.cx - spec.r, minY: spec.cy - spec.r, maxX: spec.cx + spec.r, maxY: spec.cy + spec.r };
    }
    if (spec.type === 'text') {
      const fSize = spec.fontSize || (this.standaloneFontSize || 10);
      const estW = (spec.text || '').length * fSize * 0.6;
      const h = fSize;
      return { minX: spec.x, minY: spec.y - h, maxX: spec.x + estW, maxY: spec.y };
    }
    if (spec.type === 'stamp') {
      const sizes = { fragile: [60, 40], up: [40, 50], recycle: [50, 50], barcode: [70, 40], star: [50, 50] };
      const [w, h] = sizes[spec.stampType] || [60, 40];
      const sw = w * unitScale;
      const sh = h * unitScale;
      return { minX: spec.x, minY: spec.y - sh, maxX: spec.x + sw, maxY: spec.y };
    }
    return { minX: -1e9, minY: -1e9, maxX: 1e9, maxY: 1e9 };
  }

  /** Bounding box of a polygon in cluster space. */
  getPolygonBBox(polygon) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    polygon.forEach(p => {
      if (p[0] < minX) minX = p[0];
      if (p[1] < minY) minY = p[1];
      if (p[0] > maxX) maxX = p[0];
      if (p[1] > maxY) maxY = p[1];
    });
    return { minX, minY, maxX, maxY };
  }

  /** Check if two bounding boxes overlap. */
  bboxOverlap(a, b) {
    return a.minX <= b.maxX && a.maxX >= b.minX && a.minY <= b.maxY && a.maxY >= b.minY;
  }

  /**
   * Stores artwork on ALL overlapping faces in the current cluster.
   * Each copy carries the face's clusterToNet affine so the 3D renderer
   * can correctly map cluster-space coordinates to that face's texture.
   */
  addArtwork(spec) {
    if (!this.currentCluster) {
      // Fallback – no cluster available, store on focus face only
      const fIdx = spec.faceIndex;
      if (!this.faceArtworks.has(fIdx)) this.faceArtworks.set(fIdx, []);
      this.faceArtworks.get(fIdx).push(spec);
      this.undoStack.push({ action: 'add', spec, faceIndex: fIdx });
      this.redoStack = [];
      this.renderClusterSVG();
      this.notifyTextureUpdate();
      return;
    }

    const artBBox = this.getArtworkBBox(spec);
    const addedPairs = []; // Array<{faceIndex, spec}>

    for (const face of this.currentCluster.clusterFaces) {
      const faceBBox = this.getPolygonBBox(face.polygon);
      if (this.bboxOverlap(artBBox, faceBBox)) {
        const copy = {
          ...spec,
          faceIndex: face.faceIndex,
          clusterToNet: face.clusterToNet   // affine cluster → global 2D net
        };
        if (!this.faceArtworks.has(face.faceIndex)) {
          this.faceArtworks.set(face.faceIndex, []);
        }
        this.faceArtworks.get(face.faceIndex).push(copy);
        addedPairs.push({ faceIndex: face.faceIndex, spec: copy });
      }
    }

    // Fallback: if boundary edge-case prevented bbox overlap, ensure initiating face receives artwork
    if (addedPairs.length === 0) {
      const initFace = this.drawStartFace ||
        (this.currentCluster && this.currentCluster.clusterFaces.find(f => f.faceIndex === spec.faceIndex)) ||
        (this.currentCluster && this.currentCluster.clusterFaces[0]);
      if (initFace) {
        const copy = {
          ...spec,
          faceIndex: initFace.faceIndex,
          clusterToNet: initFace.clusterToNet
        };
        if (!this.faceArtworks.has(initFace.faceIndex)) {
          this.faceArtworks.set(initFace.faceIndex, []);
        }
        this.faceArtworks.get(initFace.faceIndex).push(copy);
        addedPairs.push({ faceIndex: initFace.faceIndex, spec: copy });
      }
    }

    if (addedPairs.length > 0) {
      this.undoStack.push({ action: 'add_multi', pairs: addedPairs });
      this.redoStack = [];
    }

    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  applyFaceFill(face) {
    const fIdx = face.faceIndex;
    const spec = {
      id: 'fill_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
      type: 'face-fill',
      fill: this.fillColor || '#3b82f6',
      faceIndex: fIdx,
      clusterToNet: face.clusterToNet
    };

    if (!this.faceArtworks.has(fIdx)) {
      this.faceArtworks.set(fIdx, []);
    }
    const list = this.faceArtworks.get(fIdx);
    const oldIdx = list.findIndex(item => item.type === 'face-fill');
    let prevFill = null;
    if (oldIdx >= 0) {
      prevFill = list[oldIdx];
      list.splice(oldIdx, 1);
    }
    list.unshift(spec); // Place at base of artwork stack for this face

    this.undoStack.push({ action: 'face_fill', faceIndex: fIdx, spec, prevFill });
    this.redoStack = [];
    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  deleteSelectedArtwork() {
    if (!this.selectedArtwork) return;
    const artId = this.selectedArtwork.id;
    const deletedPairs = [];
    this.faceArtworks.forEach((list, fIdx) => {
      const idx = list.findIndex(item => item.id === artId);
      if (idx >= 0) {
        const item = list.splice(idx, 1)[0];
        deletedPairs.push({ faceIndex: fIdx, spec: item });
      }
    });
    if (deletedPairs.length > 0) {
      this.undoStack.push({ action: 'delete_multi', pairs: deletedPairs });
      this.redoStack = [];
    }
    this.deselectActiveArtwork();
    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  undo() {
    if (this.undoStack.length === 0) return;
    const last = this.undoStack.pop();

    if (last.action === 'face_fill') {
      const list = this.faceArtworks.get(last.faceIndex) || [];
      const idx = list.indexOf(last.spec);
      if (idx >= 0) list.splice(idx, 1);
      if (last.prevFill) {
        list.unshift(last.prevFill);
      }
      this.redoStack.push(last);
    } else if (last.action === 'add') {
      const list = this.faceArtworks.get(last.faceIndex) || [];
      const idx = list.indexOf(last.spec);
      if (idx >= 0) list.splice(idx, 1);
      this.redoStack.push(last);
    } else if (last.action === 'add_multi') {
      last.pairs.forEach(pair => {
        const list = this.faceArtworks.get(pair.faceIndex) || [];
        const idx = list.indexOf(pair.spec);
        if (idx >= 0) list.splice(idx, 1);
      });
      this.redoStack.push(last);
    } else if (last.action === 'delete_multi') {
      last.pairs.forEach(pair => {
        if (!this.faceArtworks.has(pair.faceIndex)) {
          this.faceArtworks.set(pair.faceIndex, []);
        }
        this.faceArtworks.get(pair.faceIndex).push(pair.spec);
      });
      this.redoStack.push(last);
    }

    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  clearActiveFace() {
    this.faceArtworks.set(this.focusFaceIndex, []);
    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  clearAll() {
    this.faceArtworks.clear();
    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  notifyTextureUpdate() {
    if (this.assemblyManager && this.assemblyManager.parts[this.currentPartIndex]) {
      this.assemblyManager.parts[this.currentPartIndex].faceArtworks = this.faceArtworks;
    }
    if (this.onTextureUpdate) {
      this.onTextureUpdate(this.faceArtworks, this.currentPartIndex);
    }
  }

  updateNavigator() {
    if (!this.foldData || !this.navSvg) return;

    this.navSvg.innerHTML = '';
    const origCoords = this.foldData.vertices;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    origCoords.forEach(p => {
      if (p[0] < minX) minX = p[0];
      if (p[0] > maxX) maxX = p[0];
      if (p[1] < minY) minY = p[1];
      if (p[1] > maxY) maxY = p[1];
    });

    const w = maxX - minX || 100;
    const h = maxY - minY || 100;
    const scale = Math.min(140 / w, 100 / h);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    // Flip Y scale (-scale) so +Y is up, matching Cartesian / Net Editor orientation
    g.setAttribute('transform', `translate(${10 + (140 - w * scale) / 2}, ${10 + (100 + h * scale) / 2}) scale(${scale}, ${-scale}) translate(${-minX}, ${-minY})`);

    this.foldData.facesVertices.forEach((fv, fIdx) => {
      const ptsStr = fv.map(vIdx => `${origCoords[vIdx][0]},${origCoords[vIdx][1]}`).join(' ');
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      poly.setAttribute('points', ptsStr);
      poly.setAttribute('class', fIdx === this.focusFaceIndex ? 'nav-face focus' : 'nav-face');
      poly.addEventListener('click', () => this.setFocusFace(fIdx));
      g.appendChild(poly);
    });

    this.navSvg.appendChild(g);
  }
}
