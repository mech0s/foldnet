import { CrossSeamMapper } from './crossSeamMapper.js';

/**
 * Graphic Studio: Neighbor Cluster Painting Engine
 * 
 * Provides interactive vector SVG drawing tools across 3D-adjacent face clusters,
 * with live rasterization to 3D model textures.
 */
export class GraphicStudio {
  constructor(container, options = {}) {
    this.container = container;
    this.foldData = null;
    this.kinematics = null;
    this.cadDualGraph = null;

    this.focusFaceIndex = 0;
    this.faceAdjacency3D = [];
    this.currentCluster = null;

    // SVG Artwork storage per face: Map<faceIndex, Array<SVGElementSpec>>
    this.faceArtworks = new Map();

    // Tools: 'select', 'rect', 'circle', 'text', 'stamp'
    this.activeTool = 'rect';
    this.selectedElement = null;

    // Properties
    this.fillColor = '#3b82f6';
    this.strokeColor = '#ffffff';
    this.strokeWidth = 2;
    this.textValue = 'BOX LOGO';
    this.fontSize = 24;
    this.activeStamp = 'fragile';

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

    this.initUI();
    this.bindEvents();
  }

  initUI() {
    this.container.innerHTML = `
      <div class="studio-layout">
        <!-- Studio Left Toolbar -->
        <aside class="studio-toolbar">
          <div class="tool-section">
            <span class="tool-section-title">Vector Tools</span>
            <div class="tool-btn-group">
              <button class="tool-btn" data-tool="select" title="Select & Move (V)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
                </svg>
                <span>Select</span>
              </button>
              <button class="tool-btn active" data-tool="rect" title="Rectangle (R)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                </svg>
                <span>Rect</span>
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

          <div class="tool-section">
            <span class="tool-section-title">Fill & Stroke</span>
            <div class="color-row">
              <label class="color-picker-label" title="Fill Color">
                <span>Fill:</span>
                <input type="color" id="studio-fill-color" value="#3b82f6" />
              </label>
              <label class="color-picker-label" title="Stroke Color">
                <span>Stroke:</span>
                <input type="color" id="studio-stroke-color" value="#ffffff" />
              </label>
            </div>
            <div class="control-slider-group">
              <label>Stroke Width: <span id="val-stroke-width">2px</span></label>
              <input type="range" id="studio-stroke-width" min="0" max="10" value="2" />
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

          <div class="tool-section text-options" style="display: none;">
            <span class="tool-section-title">Text Options</span>
            <input type="text" id="studio-text-input" class="text-input" value="BOX LOGO" placeholder="Enter text..." />
            <div class="control-slider-group">
              <label>Font Size: <span id="val-font-size">24px</span></label>
              <input type="range" id="studio-font-size" min="12" max="64" value="24" />
            </div>
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
          <div class="cluster-header-overlay">
            <span class="cluster-badge">Focus Face: <strong id="lbl-focus-face">F0</strong></span>
            <span class="cluster-legend">
              <span class="legend-item"><span class="dot fold-dot"></span> Fold Hinge</span>
              <span class="legend-item"><span class="dot cut-dot"></span> 3D Seam (Cut Line)</span>
            </span>
          </div>

          <svg id="studio-svg-canvas" class="studio-canvas" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <g id="cluster-root-group"></g>
          </svg>

          <!-- Mini Map Face Navigator -->
          <div class="face-navigator">
            <span class="navigator-title">Net Overview (Click Face to Focus)</span>
            <svg id="navigator-svg" width="160" height="120"></svg>
          </div>
        </main>
      </div>
    `;

    this.svgElement = this.container.querySelector('#studio-svg-canvas');
    this.rootGroup = this.container.querySelector('#cluster-root-group');
    this.navSvg = this.container.querySelector('#navigator-svg');
  }

  bindEvents() {
    // Tool buttons
    this.container.querySelectorAll('.tool-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTool = btn.getAttribute('data-tool');

        // Toggle tool-specific options
        this.container.querySelector('.stamp-options').style.display = this.activeTool === 'stamp' ? 'block' : 'none';
        this.container.querySelector('.text-options').style.display = this.activeTool === 'text' ? 'block' : 'none';
      });
    });

    // Inputs
    const fillInp = this.container.querySelector('#studio-fill-color');
    fillInp.addEventListener('input', (e) => { this.fillColor = e.target.value; });

    const strokeInp = this.container.querySelector('#studio-stroke-color');
    strokeInp.addEventListener('input', (e) => { this.strokeColor = e.target.value; });

    const strokeWidthInp = this.container.querySelector('#studio-stroke-width');
    strokeWidthInp.addEventListener('input', (e) => {
      this.strokeWidth = parseInt(e.target.value, 10);
      this.container.querySelector('#val-stroke-width').textContent = `${this.strokeWidth}px`;
    });

    const textInp = this.container.querySelector('#studio-text-input');
    textInp.addEventListener('input', (e) => { this.textValue = e.target.value; });

    const fontSizeInp = this.container.querySelector('#studio-font-size');
    fontSizeInp.addEventListener('input', (e) => {
      this.fontSize = parseInt(e.target.value, 10);
      this.container.querySelector('#val-font-size').textContent = `${this.fontSize}px`;
    });

    const stampSelect = this.container.querySelector('#studio-stamp-select');
    stampSelect.addEventListener('change', (e) => { this.activeStamp = e.target.value; });

    // Actions
    this.container.querySelector('#btn-studio-undo').addEventListener('click', () => this.undo());
    this.container.querySelector('#btn-studio-clear').addEventListener('click', () => this.clearActiveFace());
    this.container.querySelector('#btn-studio-clear-all').addEventListener('click', () => this.clearAll());

    // Canvas Pointer Events
    this.svgElement.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    this.svgElement.addEventListener('pointermove', (e) => this.onPointerMove(e));
    this.svgElement.addEventListener('pointerup', (e) => this.onPointerUp(e));
    this.svgElement.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (this.container.closest('.active') || this.container.offsetParent !== null) {
        if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          this.undo();
        }
      }
    });
  }

  loadModel(foldData, kinematics = null, cadDualGraph = null) {
    this.foldData = foldData;
    this.kinematics = kinematics;
    this.cadDualGraph = cadDualGraph;

    this.faceAdjacency3D = CrossSeamMapper.build3DAdjacency(foldData, kinematics, cadDualGraph);
    this.focusFaceIndex = 0;
    this.updateClusterView();
    this.updateNavigator();
  }

  setFocusFace(faceIdx) {
    if (faceIdx >= 0 && faceIdx < this.foldData.facesVertices.length) {
      this.focusFaceIndex = faceIdx;
      this.updateClusterView();
      this.updateNavigator();
      if (this.onFocusChange) this.onFocusChange(faceIdx);
    }
  }

  updateClusterView() {
    if (!this.foldData) return;

    this.currentCluster = CrossSeamMapper.buildNeighborCluster(
      this.focusFaceIndex,
      this.foldData,
      this.faceAdjacency3D
    );

    this.container.querySelector('#lbl-focus-face').textContent = `F${this.focusFaceIndex}`;
    this.renderClusterSVG();
  }

  renderClusterSVG() {
    if (!this.currentCluster) return;

    const cluster = this.currentCluster;
    const rect = this.svgElement.getBoundingClientRect();
    const centerX = rect.width / 2 + this.panX;
    const centerY = rect.height / 2 + this.panY;

    this.rootGroup.innerHTML = '';
    this.rootGroup.setAttribute('transform', `translate(${centerX}, ${centerY}) scale(${this.zoom})`);

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

    // 1. Render Face Outlines
    cluster.clusterFaces.forEach(f => {
      const ptsStr = f.polygon.map(p => `${p[0]},${p[1]}`).join(' ');
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      poly.setAttribute('points', ptsStr);
      poly.setAttribute('class', f.isFocus ? 'cluster-face focus' : 'cluster-face neighbor');
      poly.setAttribute('data-face', f.faceIndex);
      
      // Click neighbor face to focus it
      if (!f.isFocus) {
        poly.addEventListener('click', (e) => {
          e.stopPropagation();
          this.setFocusFace(f.faceIndex);
        });
      }

      this.rootGroup.appendChild(poly);

      // Face label
      let fcx = 0, fcy = 0;
      f.polygon.forEach(p => { fcx += p[0]; fcy += p[1]; });
      fcx /= f.polygon.length;
      fcy /= f.polygon.length;

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', fcx);
      text.setAttribute('y', fcy);
      text.setAttribute('class', 'face-id-label');
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

    // 3. Render Edge Hinges & Seam indicators
    cluster.clusterEdges.forEach(e => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', e.p1[0]);
      line.setAttribute('y1', e.p1[1]);
      line.setAttribute('x2', e.p2[0]);
      line.setAttribute('y2', e.p2[1]);
      line.setAttribute('class', e.isFoldHinge ? 'cluster-crease fold' : 'cluster-crease cut-seam');
      this.rootGroup.appendChild(line);
    });
  }

  createSVGElementFromSpec(spec, faceClusterInfo) {
    let elem = null;
    if (spec.type === 'rect') {
      elem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      elem.setAttribute('x', spec.x);
      elem.setAttribute('y', spec.y);
      elem.setAttribute('width', spec.width);
      elem.setAttribute('height', spec.height);
    } else if (spec.type === 'circle') {
      elem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      elem.setAttribute('cx', spec.cx);
      elem.setAttribute('cy', spec.cy);
      elem.setAttribute('r', spec.r);
    } else if (spec.type === 'text') {
      elem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      elem.setAttribute('x', spec.x);
      elem.setAttribute('y', spec.y);
      elem.setAttribute('font-size', spec.fontSize || 20);
      elem.setAttribute('font-weight', 'bold');
      elem.setAttribute('font-family', 'sans-serif');
      elem.textContent = spec.text;
    } else if (spec.type === 'stamp') {
      elem = this.createStampElement(spec);
    }

    if (elem) {
      elem.setAttribute('fill', spec.fill || 'transparent');
      elem.setAttribute('stroke', spec.stroke || 'none');
      elem.setAttribute('stroke-width', spec.strokeWidth || 1);
      elem.setAttribute('class', 'artwork-element');
    }
    return elem;
  }

  createStampElement(spec) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${spec.x}, ${spec.y}) scale(${spec.scale || 1})`);
    
    if (spec.stampType === 'fragile') {
      g.innerHTML = `
        <rect width="60" height="40" rx="4" fill="#ef4444" stroke="#ffffff" stroke-width="2" />
        <text x="30" y="24" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">FRAGILE</text>
      `;
    } else if (spec.stampType === 'up') {
      g.innerHTML = `
        <rect width="40" height="50" rx="4" fill="#3b82f6" stroke="#ffffff" stroke-width="2" />
        <path d="M20 12 L10 24 L16 24 L16 38 L24 38 L24 24 L30 24 Z" fill="#ffffff" />
      `;
    } else if (spec.stampType === 'recycle') {
      g.innerHTML = `
        <circle cx="25" cy="25" r="22" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <text x="25" y="30" fill="#ffffff" font-size="16" text-anchor="middle">♻</text>
      `;
    } else if (spec.stampType === 'barcode') {
      g.innerHTML = `
        <rect width="70" height="40" fill="#ffffff" stroke="#000000" stroke-width="1" />
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
        <polygon points="25,5 31,18 45,18 34,27 38,40 25,32 12,40 16,27 5,18 19,18" fill="#f59e0b" stroke="#ffffff" stroke-width="1" />
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
    const y = (e.clientY - rect.top - centerY) / this.zoom;
    return { x, y };
  }

  onPointerDown(e) {
    if (e.button === 1 || e.shiftKey) {
      // Pan
      this.isPanning = true;
      this.panStart = { x: e.clientX - this.panX, y: e.clientY - this.panY };
      return;
    }

    const pos = this.getCanvasCoords(e);
    this.isDrawing = true;
    this.drawStart = pos;

    if (this.activeTool === 'stamp') {
      const spec = {
        type: 'stamp',
        stampType: this.activeStamp,
        x: pos.x - 30,
        y: pos.y - 20,
        scale: 1,
        faceIndex: this.focusFaceIndex
      };
      this.addArtwork(spec);
      this.isDrawing = false;
    } else if (this.activeTool === 'text') {
      const spec = {
        type: 'text',
        text: this.textValue,
        x: pos.x,
        y: pos.y,
        fontSize: this.fontSize,
        fill: this.fillColor,
        stroke: this.strokeColor,
        strokeWidth: this.strokeWidth,
        faceIndex: this.focusFaceIndex
      };
      this.addArtwork(spec);
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

    if (!this.isDrawing || !this.drawStart) return;
    const pos = this.getCanvasCoords(e);

    // Live preview during drag
    let previewElem = this.rootGroup.querySelector('#draw-preview');
    if (!previewElem) {
      previewElem = document.createElementNS('http://www.w3.org/2000/svg', this.activeTool === 'circle' ? 'circle' : 'rect');
      previewElem.setAttribute('id', 'draw-preview');
      previewElem.setAttribute('fill', this.fillColor);
      previewElem.setAttribute('stroke', this.strokeColor);
      previewElem.setAttribute('stroke-width', this.strokeWidth);
      previewElem.setAttribute('opacity', '0.6');
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
    } else if (this.activeTool === 'circle') {
      const r = Math.hypot(pos.x - this.drawStart.x, pos.y - this.drawStart.y);
      previewElem.setAttribute('cx', this.drawStart.x);
      previewElem.setAttribute('cy', this.drawStart.y);
      previewElem.setAttribute('r', r);
    }
  }

  onPointerUp(e) {
    if (this.isPanning) {
      this.isPanning = false;
      return;
    }

    if (!this.isDrawing || !this.drawStart) return;
    const pos = this.getCanvasCoords(e);
    this.isDrawing = false;

    const previewElem = this.rootGroup.querySelector('#draw-preview');
    if (previewElem) previewElem.remove();

    if (this.activeTool === 'rect') {
      const w = Math.abs(pos.x - this.drawStart.x);
      const h = Math.abs(pos.y - this.drawStart.y);
      if (w > 3 && h > 3) {
        const spec = {
          type: 'rect',
          x: Math.min(this.drawStart.x, pos.x),
          y: Math.min(this.drawStart.y, pos.y),
          width: w,
          height: h,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          faceIndex: this.focusFaceIndex
        };
        this.addArtwork(spec);
      }
    } else if (this.activeTool === 'circle') {
      const r = Math.hypot(pos.x - this.drawStart.x, pos.y - this.drawStart.y);
      if (r > 3) {
        const spec = {
          type: 'circle',
          cx: this.drawStart.x,
          cy: this.drawStart.y,
          r,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          faceIndex: this.focusFaceIndex
        };
        this.addArtwork(spec);
      }
    }
  }

  onWheel(e) {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
    this.zoom = Math.max(0.4, Math.min(6.0, this.zoom * zoomFactor));
    this.renderClusterSVG();
  }

  // ────────────────────────────────────────────────────────────
  // Cross-seam artwork replication
  // ────────────────────────────────────────────────────────────

  /** Bounding box {minX, minY, maxX, maxY} of an artwork spec in cluster space. */
  getArtworkBBox(spec) {
    if (spec.type === 'rect') {
      return { minX: spec.x, minY: spec.y, maxX: spec.x + spec.width, maxY: spec.y + spec.height };
    }
    if (spec.type === 'circle') {
      return { minX: spec.cx - spec.r, minY: spec.cy - spec.r, maxX: spec.cx + spec.r, maxY: spec.cy + spec.r };
    }
    if (spec.type === 'text') {
      const estW = (spec.text || '').length * (spec.fontSize || 24) * 0.6;
      return { minX: spec.x - 5, minY: spec.y - (spec.fontSize || 24), maxX: spec.x + estW, maxY: spec.y + 5 };
    }
    if (spec.type === 'stamp') {
      const sizes = { fragile: [60, 40], up: [40, 50], recycle: [50, 50], barcode: [70, 40], star: [50, 50] };
      const [w, h] = sizes[spec.stampType] || [60, 40];
      return { minX: spec.x, minY: spec.y, maxX: spec.x + w, maxY: spec.y + h };
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
    return a.minX < b.maxX && a.maxX > b.minX && a.minY < b.maxY && a.maxY > b.minY;
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

    if (addedPairs.length > 0) {
      this.undoStack.push({ action: 'add_multi', pairs: addedPairs });
      this.redoStack = [];
    }

    this.renderClusterSVG();
    this.notifyTextureUpdate();
  }

  undo() {
    if (this.undoStack.length === 0) return;
    const last = this.undoStack.pop();

    if (last.action === 'add') {
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
    if (this.onTextureUpdate) {
      this.onTextureUpdate(this.faceArtworks);
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
    g.setAttribute('transform', `translate(${10 + (140 - w * scale) / 2}, ${10 + (100 - h * scale) / 2}) scale(${scale}) translate(${-minX}, ${-minY})`);

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
