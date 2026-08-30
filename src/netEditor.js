import { PartThumbnailStrip } from './partThumbnailStrip.js';

/**
 * Net Preparation & FOLD 1.1 Net Editor
 * 2D Interactive Canvas for editing vertices, faces, attachment edges, fold directives (M, V, B, C, F, U), and fold angles.
 */

export class NetEditor {
  constructor(canvasContainer, onChangeCallback) {
    this.container = canvasContainer;
    this.onChange = onChangeCallback;

    // Assembly State
    this.assemblyManager = null;
    this.onSelectAssemblyPart = null;

    // Part Thumbnail Strip (for multi-component assemblies)
    this.thumbnailStrip = new PartThumbnailStrip(this.container, {
      onSelectPart: (partIdx) => this.selectPart(partIdx)
    });

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    // Viewport transform (pan & zoom)
    this.zoom = 60; // pixels per unit
    this.panX = 0;
    this.panY = 0;
    this.isPanning = false;
    this.lastMouse = { x: 0, y: 0 };

    // Selection State
    this.selectedEdgeIndex = -1;
    this.hoveredEdgeIndex = -1;
    this.selectedFaceIndex = -1;

    // Active tool: 'V' | 'M' | 'B' | 'C' | 'F' | 'U'
    this.activeDirective = 'V'; // Default painting assignment

    // FOLD Data state
    this.foldData = this.createDefaultCubeNet();

    this.setupEvents();
    this.resizeCanvas();
    this.centerView();
    this.render();
  }

  /**
   * Loads an AssemblyManager into the NetEditor.
   * Focuses on the active part while rendering thumbnail strip of all parts.
   * @param {import('./assemblyManager.js').AssemblyManager} assemblyManager
   */
  loadAssembly(assemblyManager, onSelectPart = null) {
    this.assemblyManager = assemblyManager;
    this.onSelectAssemblyPart = onSelectPart;

    if (assemblyManager && assemblyManager.isAssembly) {
      if (this.thumbnailStrip) {
        this.thumbnailStrip.update(assemblyManager.parts, assemblyManager.activePartIndex);
      }
      const activePart = assemblyManager.getActivePart();
      if (activePart) {
        this.loadFoldJSON(activePart.foldJson || activePart.foldData, true);
      }
    } else {
      if (this.thumbnailStrip) {
        this.thumbnailStrip.update([], 0);
      }
      if (assemblyManager) {
        const activePart = assemblyManager.getActivePart();
        if (activePart) this.loadFoldJSON(activePart.foldJson || activePart.foldData, true);
      }
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
        this.loadFoldJSON(part.foldJson || part.foldData, true);
      }
    }
  }

  createDefaultCubeNet() {
    // Standard cross box net (unit size 1.5)
    const s = 1.5;
    const vertices_coords = [
      // Base Face 0 (0,0 to s,s)
      [0, 0], [s, 0], [s, s], [0, s],             // 0, 1, 2, 3
      // Right Face 1 (x: s to 2s, y: 0 to s)
      [2*s, 0], [2*s, s],                         // 4, 5
      // Left Face 2 (x: -s to 0, y: 0 to s)
      [-s, 0], [-s, s],                           // 6, 7
      // Top Face 3 (x: 0 to s, y: s to 2s)
      [0, 2*s], [s, 2*s],                         // 8, 9
      // Bottom Face 4 (x: 0 to s, y: -s to 0)
      [0, -s], [s, -s],                           // 10, 11
      // Lid / Far Face 5 (x: 0 to s, y: 2s to 3s)
      [0, 3*s], [s, 3*s]                          // 12, 13
    ];

    const faces_vertices = [
      [0, 1, 2, 3],     // Face 0: Base
      [1, 4, 5, 2],     // Face 1: Right
      [7, 6, 0, 3],     // Face 2: Left
      [3, 2, 9, 8],     // Face 3: Top
      [10, 11, 1, 0],   // Face 4: Bottom
      [8, 9, 13, 12]    // Face 5: Lid
    ];

    return this.buildFoldDataFromFaces(vertices_coords, faces_vertices);
  }

  buildFoldDataFromFaces(vertices, faces, explicitAssignments = {}) {
    // Generate edges_vertices from faces
    const edgeMap = new Map();
    const edges_vertices = [];

    faces.forEach((fv) => {
      const len = fv.length;
      for (let i = 0; i < len; i++) {
        const v1 = fv[i];
        const v2 = fv[(i + 1) % len];
        const key = `${Math.min(v1, v2)}-${Math.max(v1, v2)}`;

        if (!edgeMap.has(key)) {
          edges_vertices.push([Math.min(v1, v2), Math.max(v1, v2)]);
          edgeMap.set(key, { count: 1 });
        } else {
          edgeMap.get(key).count += 1;
        }
      }
    });

    const edges_assignment = [];
    const edges_foldAngle = [];

    edges_vertices.forEach(([v1, v2]) => {
      const key = `${v1}-${v2}`;
      const isBoundary = edgeMap.get(key).count === 1;

      if (explicitAssignments[key]) {
        edges_assignment.push(explicitAssignments[key].assignment);
        edges_foldAngle.push(explicitAssignments[key].foldAngle);
      } else if (isBoundary) {
        // Outer boundary edge
        edges_assignment.push('B');
        edges_foldAngle.push(0);
      } else {
        // Internal fold crease - default to Valley fold (+90 deg)
        edges_assignment.push('V');
        edges_foldAngle.push(90);
      }
    });

    return {
      file_spec: 1.1,
      file_title: 'Net Preparation Model',
      file_creator: 'FOLDNet Net Editor',
      vertices_coords: vertices,
      faces_vertices: faces,
      edges_vertices,
      edges_assignment,
      edges_foldAngle
    };
  }

  getFoldJSON() {
    return JSON.parse(JSON.stringify(this.foldData));
  }

  loadFoldJSON(json, silent = false) {
    if (!json || !json.vertices_coords || !json.faces_vertices) return;

    // Normalize vertices 3D -> 2D
    const coords2D = json.vertices_coords.map(v => [v[0], v[1]]);
    const faces = json.faces_vertices.slice();

    let edges = json.edges_vertices ? json.edges_vertices.slice() : [];
    let assignments = json.edges_assignment ? json.edges_assignment.slice() : [];
    let angles = json.edges_foldAngle ? json.edges_foldAngle.slice() : [];

    // If edges are missing, derive them
    if (edges.length === 0) {
      const temp = this.buildFoldDataFromFaces(coords2D, faces);
      edges = temp.edges_vertices;
      assignments = temp.edges_assignment;
      angles = temp.edges_foldAngle;
    }

    this.foldData = {
      file_spec: json.file_spec || 1.1,
      file_title: json.file_title || json.title || 'box-net-prepared',
      file_creator: json.file_creator || 'FOLDNet Editor',
      vertices_coords: coords2D,
      faces_vertices: faces,
      edges_vertices: edges,
      edges_assignment: assignments,
      edges_foldAngle: angles
    };

    this.selectedEdgeIndex = -1;
    this.hoveredEdgeIndex = -1;
    this.centerView();
    this.render();
    if (!silent) {
      this.notifyChange();
    }
  }

  notifyChange() {
    if (typeof this.onChange === 'function') {
      this.onChange(this.getFoldJSON());
    }
  }

  setupEvents() {
    window.addEventListener('resize', () => this.resizeCanvas());

    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
        // Middle click or Shift+Left click to pan
        this.isPanning = true;
        this.lastMouse = { x: e.clientX, y: e.clientY };
        return;
      }

      if (e.button === 0) {
        // Left click selection / painting
        const worldPos = this.screenToWorld(e.offsetX, e.offsetY);
        const edgeIdx = this.findNearestEdge(worldPos, 20 / this.zoom);

        if (edgeIdx >= 0) {
          this.selectedEdgeIndex = edgeIdx;

          // If in paint mode or quick directive active
          if (this.activeDirective) {
            this.setEdgeAssignment(edgeIdx, this.activeDirective);
          }
          this.render();
        } else {
          // Click background -> start panning if dragging
          this.isPanning = true;
          this.lastMouse = { x: e.clientX, y: e.clientY };
          this.selectedEdgeIndex = -1;
          this.render();
        }
      }
    });

    this.canvas.addEventListener('mousemove', (e) => {
      if (this.isPanning) {
        const dx = e.clientX - this.lastMouse.x;
        const dy = e.clientY - this.lastMouse.y;
        this.panX += dx;
        this.panY += dy;
        this.lastMouse = { x: e.clientX, y: e.clientY };
        this.render();
        return;
      }

      const worldPos = this.screenToWorld(e.offsetX, e.offsetY);
      const edgeIdx = this.findNearestEdge(worldPos, 20 / this.zoom);
      if (edgeIdx !== this.hoveredEdgeIndex) {
        this.hoveredEdgeIndex = edgeIdx;
        this.canvas.style.cursor = edgeIdx >= 0 ? 'pointer' : 'default';
        this.render();
      }
    });

    this.canvas.addEventListener('mouseup', () => {
      this.isPanning = false;
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.isPanning = false;
      this.hoveredEdgeIndex = -1;
      this.render();
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;

      const mouseWorldBefore = this.screenToWorld(e.offsetX, e.offsetY);
      this.zoom = Math.min(Math.max(this.zoom * zoomFactor, 0.05), 500);
      const mouseWorldAfter = this.screenToWorld(e.offsetX, e.offsetY);

      // Adjust pan to zoom around cursor
      this.panX += (mouseWorldAfter.x - mouseWorldBefore.x) * this.zoom;
      this.panY -= (mouseWorldAfter.y - mouseWorldBefore.y) * this.zoom;

      this.render();
    }, { passive: false });
  }

  resizeCanvas() {
    const prevW = this.canvas.width;
    const prevH = this.canvas.height;
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    // If canvas had 0 dimensions previously (e.g. loaded while tab was hidden), auto-fit now
    if ((prevW === 0 || prevH === 0) && this.canvas.width > 0 && this.canvas.height > 0) {
      this.centerView();
    }
    this.render();
  }

  centerView() {
    if (!this.foldData || !this.foldData.vertices_coords || this.foldData.vertices_coords.length === 0) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    this.foldData.vertices_coords.forEach(v => {
      minX = Math.min(minX, v[0]);
      maxX = Math.max(maxX, v[0]);
      minY = Math.min(minY, v[1]);
      maxY = Math.max(maxY, v[1]);
    });

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const width = Math.max(maxX - minX, 0.01);
    const height = Math.max(maxY - minY, 0.01);

    const cWidth = this.canvas.width || this.container.clientWidth || 800;
    const cHeight = this.canvas.height || this.container.clientHeight || 600;

    const scaleX = (cWidth * 0.75) / width;
    const scaleY = (cHeight * 0.75) / height;
    // Auto-fit zoom to frame model comfortably across any units
    this.zoom = Math.min(scaleX, scaleY);
    if (!Number.isFinite(this.zoom) || this.zoom <= 0) this.zoom = 60;

    this.panX = cWidth / 2 - centerX * this.zoom;
    this.panY = cHeight / 2 + centerY * this.zoom;
    this.render();
  }

  screenToWorld(sx, sy) {
    return {
      x: (sx - this.panX) / this.zoom,
      y: -(sy - this.panY) / this.zoom
    };
  }

  worldToScreen(wx, wy) {
    return {
      x: this.panX + wx * this.zoom,
      y: this.panY - wy * this.zoom
    };
  }

  findNearestEdge(worldPos, thresholdWorld) {
    if (!this.foldData || !this.foldData.edges_vertices) return -1;

    let bestDist = thresholdWorld;
    let bestIdx = -1;

    this.foldData.edges_vertices.forEach((edge, idx) => {
      const v1 = this.foldData.vertices_coords[edge[0]];
      const v2 = this.foldData.vertices_coords[edge[1]];
      if (!v1 || !v2) return;

      const dist = this.pointToSegmentDistance(worldPos.x, worldPos.y, v1[0], v1[1], v2[0], v2[1]);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    return bestIdx;
  }

  pointToSegmentDistance(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    const projX = x1 + t * (x2 - x1);
    const projY = y1 + t * (y2 - y1);
    return Math.hypot(px - projX, py - projY);
  }

  // --- Topology & Editing Operations ---

  setEdgeAssignment(edgeIdx, directive, angle = null) {
    if (edgeIdx < 0 || edgeIdx >= this.foldData.edges_vertices.length) return;

    this.foldData.edges_assignment[edgeIdx] = directive;

    if (angle !== null) {
      this.foldData.edges_foldAngle[edgeIdx] = angle;
    } else {
      switch (directive) {
        case 'V': this.foldData.edges_foldAngle[edgeIdx] = 90; break;
        case 'M': this.foldData.edges_foldAngle[edgeIdx] = -90; break;
        case 'B':
        case 'C':
        case 'F':
        case 'U':
        default:
          this.foldData.edges_foldAngle[edgeIdx] = 0; break;
      }
    }

    this.render();
    this.notifyChange();
  }

  autoDetectBoundaries() {
    if (!this.foldData) return;

    // Count how many faces share each edge
    const edgeFaceCounts = new Array(this.foldData.edges_vertices.length).fill(0);

    this.foldData.faces_vertices.forEach(fv => {
      const len = fv.length;
      for (let i = 0; i < len; i++) {
        const v1 = fv[i];
        const v2 = fv[(i + 1) % len];
        const edgeIdx = this.findEdgeIndexByVerts(v1, v2);
        if (edgeIdx >= 0) {
          edgeFaceCounts[edgeIdx]++;
        }
      }
    });

    // Outer boundary edges are shared by exactly 1 face
    edgeFaceCounts.forEach((count, edgeIdx) => {
      if (count === 1) {
        this.foldData.edges_assignment[edgeIdx] = 'B';
        this.foldData.edges_foldAngle[edgeIdx] = 0;
      } else if (count >= 2 && this.foldData.edges_assignment[edgeIdx] === 'B') {
        // If an internal edge was marked Boundary, turn into Valley (+90)
        this.foldData.edges_assignment[edgeIdx] = 'V';
        this.foldData.edges_foldAngle[edgeIdx] = 90;
      }
    });

    this.render();
    this.notifyChange();
  }

  invertFolds() {
    if (!this.foldData) return;

    this.foldData.edges_assignment.forEach((assign, idx) => {
      const code = (assign || 'B').toUpperCase();
      if (code === 'V') {
        this.foldData.edges_assignment[idx] = 'M';
        this.foldData.edges_foldAngle[idx] = -90;
      } else if (code === 'M') {
        this.foldData.edges_assignment[idx] = 'V';
        this.foldData.edges_foldAngle[idx] = 90;
      }
    });

    this.render();
    this.notifyChange();
  }

  /** Flips the entire 2D net vertically across its bounding center. */
  flipVertically() {
    if (!this.foldData || !this.foldData.vertices_coords.length) return;

    let minY = Infinity, maxY = -Infinity;
    this.foldData.vertices_coords.forEach(c => {
      if (c[1] < minY) minY = c[1];
      if (c[1] > maxY) maxY = c[1];
    });
    const midY = (minY + maxY) / 2;

    this.foldData.vertices_coords.forEach(c => {
      c[1] = 2 * midY - c[1];
    });

    // Invert face vertex winding so normals stay consistent
    if (this.foldData.faces_vertices) {
      this.foldData.faces_vertices.forEach(fv => fv.reverse());
    }

    this.render();
    this.notifyChange();
  }

  /** Flips the entire 2D net horizontally across its bounding center. */
  flipHorizontally() {
    if (!this.foldData || !this.foldData.vertices_coords.length) return;

    let minX = Infinity, maxX = -Infinity;
    this.foldData.vertices_coords.forEach(c => {
      if (c[0] < minX) minX = c[0];
      if (c[0] > maxX) maxX = c[0];
    });
    const midX = (minX + maxX) / 2;

    this.foldData.vertices_coords.forEach(c => {
      c[0] = 2 * midX - c[0];
    });

    // Invert face vertex winding so normals stay consistent
    if (this.foldData.faces_vertices) {
      this.foldData.faces_vertices.forEach(fv => fv.reverse());
    }

    this.render();
    this.notifyChange();
  }

  attachFaceToSelectedEdge() {
    if (this.selectedEdgeIndex >= 0) {
      this.attachFaceToEdge(this.selectedEdgeIndex);
    }
  }

  attachFaceToEdge(edgeIdx) {
    if (edgeIdx < 0 || edgeIdx >= this.foldData.edges_vertices.length) return;

    const edge = this.foldData.edges_vertices[edgeIdx];
    const v1Idx = edge[0];
    const v2Idx = edge[1];
    const p1 = this.foldData.vertices_coords[v1Idx];
    const p2 = this.foldData.vertices_coords[v2Idx];

    // Compute edge vector
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const len = Math.hypot(dx, dy);
    if (len === 0) return;

    // Normal vector perpendicular to edge (length = len by default for a square extension)
    let nx = -dy;
    let ny = dx;

    // Determine which direction faces outwards by checking connected face centroid
    const parentFace = this.foldData.faces_vertices.find(fv => fv.includes(v1Idx) && fv.includes(v2Idx));
    if (parentFace) {
      let cx = 0, cy = 0;
      parentFace.forEach(v => {
        cx += this.foldData.vertices_coords[v][0];
        cy += this.foldData.vertices_coords[v][1];
      });
      cx /= parentFace.length;
      cy /= parentFace.length;

      const midX = (p1[0] + p2[0]) / 2;
      const midY = (p1[1] + p2[1]) / 2;

      // Vector from face center to edge midpoint
      const outX = midX - cx;
      const outY = midY - cy;

      // Ensure normal points away from parent face
      if (nx * outX + ny * outY < 0) {
        nx = -nx;
        ny = -ny;
      }
    }

    // New vertex coordinates for attached quad
    const np1 = [p1[0] + nx, p1[1] + ny];
    const np2 = [p2[0] + nx, p2[1] + ny];

    // Find or add vertices with snap tolerance
    const nv1Idx = this.findOrAddVertex(np1[0], np1[1]);
    const nv2Idx = this.findOrAddVertex(np2[0], np2[1]);

    // New face: [v1, v2, nv2, nv1]
    const newFace = [v1Idx, v2Idx, nv2Idx, nv1Idx];
    this.foldData.faces_vertices.push(newFace);

    // Rebuild edges and auto-detect boundaries
    const explicitAssignments = {};
    this.foldData.edges_vertices.forEach((e, i) => {
      const key = `${Math.min(e[0], e[1])}-${Math.max(e[0], e[1])}`;
      explicitAssignments[key] = {
        assignment: this.foldData.edges_assignment[i],
        angle: this.foldData.edges_foldAngle[i]
      };
    });

    // Set hinge edge to Valley (+90) by default
    const hingeKey = `${Math.min(v1Idx, v2Idx)}-${Math.max(v1Idx, v2Idx)}`;
    explicitAssignments[hingeKey] = { assignment: 'V', angle: 90 };

    this.foldData = this.buildFoldDataFromFaces(
      this.foldData.vertices_coords,
      this.foldData.faces_vertices,
      explicitAssignments
    );

    this.autoDetectBoundaries();
  }

  findOrAddVertex(x, y, tol = 0.05) {
    const existing = this.foldData.vertices_coords.findIndex(v => Math.hypot(v[0] - x, v[1] - y) < tol);
    if (existing >= 0) return existing;
    this.foldData.vertices_coords.push([x, y]);
    return this.foldData.vertices_coords.length - 1;
  }

  findEdgeIndexByVerts(v1, v2) {
    const minV = Math.min(v1, v2);
    const maxV = Math.max(v1, v2);
    return this.foldData.edges_vertices.findIndex(e => (e[0] === minV && e[1] === maxV) || (e[0] === maxV && e[1] === minV));
  }

  // --- Rendering 2D Canvas ---

  render() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background
    this.ctx.fillStyle = '#090b10';
    this.ctx.fillRect(0, 0, w, h);

    // Grid
    this.renderGrid(w, h);

    if (!this.foldData) return;

    // Render Faces
    this.renderFaces();

    // Render Edges
    this.renderEdges();

    // Render Vertices
    this.renderVertices();
  }

  renderGrid(w, h) {
    this.ctx.strokeStyle = '#1e293b';
    this.ctx.lineWidth = 1;

    const startWorld = this.screenToWorld(0, h);
    const endWorld = this.screenToWorld(w, 0);

    const gridSize = 1.0;
    const firstX = Math.floor(startWorld.x / gridSize) * gridSize;
    const lastX = Math.ceil(endWorld.x / gridSize) * gridSize;
    const firstY = Math.floor(startWorld.y / gridSize) * gridSize;
    const lastY = Math.ceil(endWorld.y / gridSize) * gridSize;

    this.ctx.beginPath();
    for (let x = firstX; x <= lastX; x += gridSize) {
      const p1 = this.worldToScreen(x, firstY);
      const p2 = this.worldToScreen(x, lastY);
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
    }
    for (let y = firstY; y <= lastY; y += gridSize) {
      const p1 = this.worldToScreen(firstX, y);
      const p2 = this.worldToScreen(lastX, y);
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
    }
    this.ctx.stroke();

    // Axis crosshair at (0,0)
    const origin = this.worldToScreen(0, 0);
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(origin.x - 15, origin.y);
    this.ctx.lineTo(origin.x + 15, origin.y);
    this.ctx.moveTo(origin.x, origin.y - 15);
    this.ctx.lineTo(origin.x, origin.y + 15);
    this.ctx.stroke();
  }

  renderFaces() {
    this.foldData.faces_vertices.forEach((fv, fIdx) => {
      if (fv.length < 3) return;

      this.ctx.beginPath();
      fv.forEach((vIdx, i) => {
        const c = this.foldData.vertices_coords[vIdx];
        const s = this.worldToScreen(c[0], c[1]);
        if (i === 0) this.ctx.moveTo(s.x, s.y);
        else this.ctx.lineTo(s.x, s.y);
      });
      this.ctx.closePath();

      // Semi-transparent front facet fill
      this.ctx.fillStyle = fIdx === 0 ? 'rgba(255, 234, 0, 0.15)' : 'rgba(0, 240, 255, 0.08)';
      this.ctx.fill();

      // Draw Face ID label in centroid
      let cx = 0, cy = 0;
      fv.forEach(vIdx => {
        const c = this.foldData.vertices_coords[vIdx];
        cx += c[0];
        cy += c[1];
      });
      cx /= fv.length;
      cy /= fv.length;
      const cs = this.worldToScreen(cx, cy);

      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      this.ctx.font = '11px "JetBrains Mono", monospace';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(`F${fIdx}${fIdx === 0 ? ' (Root)' : ''}`, cs.x, cs.y);
    });
  }

  renderEdges() {
    const styleMap = {
      'V': { color: '#3b82f6', dash: [6, 4], width: 3, label: 'Valley (+90°)' },
      'M': { color: '#ef4444', dash: [6, 4], width: 3, label: 'Mountain (-90°)' },
      'B': { color: '#f8fafc', dash: [], width: 3, label: 'Boundary' },
      'C': { color: '#f97316', dash: [], width: 2, label: 'Cut' },
      'F': { color: '#64748b', dash: [2, 2], width: 1.5, label: 'Flat' },
      'U': { color: '#a855f7', dash: [4, 4], width: 2, label: 'Unassigned' }
    };

    this.foldData.edges_vertices.forEach((edge, idx) => {
      const v1 = this.foldData.vertices_coords[edge[0]];
      const v2 = this.foldData.vertices_coords[edge[1]];
      if (!v1 || !v2) return;

      const p1 = this.worldToScreen(v1[0], v1[1]);
      const p2 = this.worldToScreen(v2[0], v2[1]);

      const assignment = (this.foldData.edges_assignment[idx] || 'B').toUpperCase();
      const style = styleMap[assignment] || styleMap['B'];

      const isSelected = idx === this.selectedEdgeIndex;
      const isHovered = idx === this.hoveredEdgeIndex;

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.setLineDash(style.dash);
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);

      if (isSelected) {
        this.ctx.strokeStyle = '#eab308';
        this.ctx.lineWidth = style.width + 4;
        this.ctx.shadowColor = '#eab308';
        this.ctx.shadowBlur = 10;
      } else if (isHovered) {
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = style.width + 2;
      } else {
        this.ctx.strokeStyle = style.color;
        this.ctx.lineWidth = style.width;
      }

      this.ctx.stroke();
      this.ctx.restore();

      // Render edge label if hovered or selected
      if (isSelected || isHovered) {
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        const angleDeg = this.foldData.edges_foldAngle[idx] ?? 0;

        this.ctx.fillStyle = isSelected ? '#fef08a' : '#ffffff';
        this.ctx.font = 'bold 12px "Outfit", sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText(`E${idx}: ${assignment} (${angleDeg}°)`, midX, midY - 6);
      }
    });
  }

  renderVertices() {
    this.foldData.vertices_coords.forEach((v, idx) => {
      const p = this.worldToScreen(v[0], v[1]);
      this.ctx.fillStyle = '#64748b';
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }
}
