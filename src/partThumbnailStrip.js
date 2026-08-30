/**
 * PartThumbnailStrip
 * Renders an interactive 2D thumbnail preview strip for multi-component assemblies.
 * Enables visual selection and switching between component nets.
 */
export class PartThumbnailStrip {
  /**
   * @param {HTMLElement} container Parent DOM element where the strip will be mounted
   * @param {object} options { onSelectPart: (partIndex) => void }
   */
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.parts = [];
    this.activeIndex = 0;
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'part-thumbnail-strip';
    this.container.appendChild(this.wrapper);
  }

  /**
   * Update the thumbnail strip with current assembly parts.
   * @param {Array<object>} parts
   * @param {number} activeIndex
   */
  update(parts = [], activeIndex = 0) {
    this.parts = parts;
    this.activeIndex = activeIndex;
    this.render();
  }

  render() {
    this.wrapper.innerHTML = '';

    if (!this.parts || this.parts.length <= 1) {
      this.wrapper.style.display = 'none';
      return;
    }

    this.wrapper.style.display = 'flex';

    // Header label
    const label = document.createElement('div');
    label.className = 'part-strip-label';
    label.innerHTML = `<span class="part-strip-icon">📦</span> Assembly Parts (${this.parts.length}):`;
    this.wrapper.appendChild(label);

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'part-cards-scroll';

    this.parts.forEach((part, idx) => {
      const fd = part.foldData || part.foldJson || {};
      const facesList = fd.facesVertices || fd.faces_vertices || (part.foldJson ? part.foldJson.faces_vertices : []) || [];
      const facesCount = facesList.length;

      const card = document.createElement('div');
      card.className = `part-card ${idx === this.activeIndex ? 'active' : ''}`;
      card.setAttribute('data-part-index', idx);
      card.title = `Switch to ${part.name} (${facesCount} faces)`;

      // Thumbnail SVG
      const svgThumb = this.generateMiniSVG(part.foldJson || part.foldData);
      
      const thumbWrapper = document.createElement('div');
      thumbWrapper.className = 'part-card-thumb';
      thumbWrapper.appendChild(svgThumb);

      const infoWrapper = document.createElement('div');
      infoWrapper.className = 'part-card-info';

      const title = document.createElement('div');
      title.className = 'part-card-title';
      title.textContent = part.name || `Part ${idx + 1}`;

      const badge = document.createElement('div');
      badge.className = 'part-card-badge';
      badge.textContent = `${facesCount} Faces`;

      infoWrapper.appendChild(title);
      infoWrapper.appendChild(badge);

      if (idx === this.activeIndex) {
        const activeTag = document.createElement('span');
        activeTag.className = 'part-card-active-tag';
        activeTag.textContent = 'ACTIVE';
        card.appendChild(activeTag);
      }

      card.appendChild(thumbWrapper);
      card.appendChild(infoWrapper);

      card.addEventListener('click', () => {
        if (this.options.onSelectPart) {
          this.options.onSelectPart(idx);
        }
      });

      cardsContainer.appendChild(card);
    });

    this.wrapper.appendChild(cardsContainer);
  }

  generateMiniSVG(foldData) {
    if (!foldData) {
      const placeholder = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      placeholder.setAttribute('viewBox', '0 0 100 100');
      return placeholder;
    }

    const coords = foldData.vertices_coords || foldData.vertices || [];
    const faces = foldData.faces_vertices || foldData.facesVertices || [];

    if (coords.length === 0 || faces.length === 0) {
      const placeholder = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      placeholder.setAttribute('viewBox', '0 0 100 100');
      return placeholder;
    }

    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    coords.forEach(pt => {
      const x = pt[0] || 0;
      const y = pt[1] || 0;
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    });

    const pad = Math.max((maxX - minX), (maxY - minY)) * 0.1 || 5;
    const vbX = minX - pad;
    const vbY = minY - pad;
    const vbW = Math.max(maxX - minX + pad * 2, 10);
    const vbH = Math.max(maxY - minY + pad * 2, 10);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`);
    svg.setAttribute('class', 'part-mini-svg');

    // Draw faces
    faces.forEach(fv => {
      if (fv.length < 3) return;
      const ptsStr = fv.map(vIdx => {
        const pt = coords[vIdx] || [0, 0];
        return `${pt[0]},${pt[1]}`;
      }).join(' ');
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      poly.setAttribute('points', ptsStr);
      poly.setAttribute('class', 'part-thumb-poly');
      svg.appendChild(poly);
    });

    // Draw boundary/crease lines
    const edges = foldData.edges_vertices || foldData.edgesVertices || [];
    const assignments = foldData.edges_assignment || foldData.edgesAssignment || [];

    edges.forEach((ev, eIdx) => {
      const p1 = coords[ev[0]];
      const p2 = coords[ev[1]];
      if (!p1 || !p2) return;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', p1[0]);
      line.setAttribute('y1', p1[1]);
      line.setAttribute('x2', p2[0]);
      line.setAttribute('y2', p2[1]);
      const assign = assignments[eIdx] || 'B';
      line.setAttribute('class', `part-thumb-edge edge-${assign}`);
      svg.appendChild(line);
    });

    return svg;
  }
}
