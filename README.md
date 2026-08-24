# FOLDNet 📦

> **Interactive 2D/3D Packaging Net Preparation, Folding Kinematics & Cross-Seam Graphic Studio** built on the **FOLD 1.1 Specification** and **Three.js**.

---

## ✨ Features

- **📐 2D Net Preparation & Editor**:
  - Full vector canvas for painting edge crease directives (`Mountain`, `Valley`, `Boundary`, `Cut/Slit`, `Flat`, `Unassigned`).
  - Interactive tools: `Auto-Boundary`, `Invert Folds`, `Flip V`, `Flip H`, and edge face attachment.
  - Automatic model bounding and adaptive auto-fit for models of any scale.
- **🎨 Graphic Studio (Cross-Seam Vector Painting)**:
  - Planar unrolling and multi-depth breadth-first expansion across neighbor face clusters.
  - Vector drawing tools (Rectangles, Circles, Typography, Custom Decals/Stamps) that draw seamlessly across 3D fold hinges and seams.
  - Click-to-focus directly from the interactive pop-out 3D model.
- **👁️ 3D Animated Folding Viewer**:
  - Real-time kinematic folding simulation from flat 2D net ($t = 0\%$) to fully folded 3D box ($t = 100\%$).
  - Orbit camera controls and customizable rendering themes (High Contrast, Cardboard Craft, Blueprint, Cyber Neon, Origami Paper).
  - **GLB Binary Export**: Download the active 3D folded geometry with all painted artwork textures packed into a universal `.glb` file.
- **📥 Universal CAD Import & Unfolding**:
  - Direct import for `.json`, `.fold`, `.stl`, `.obj`, and `.step` CAD files with automatic orthogonal planar facet extraction and grid unrolling.

---

## 🚀 Quick Start

### Prerequisites
- **[Node.js](https://nodejs.org/)** (v18 or higher recommended)
- **[Git](https://git-scm.com/)**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mech0s/foldnet.git

# 2. Navigate to the project folder
cd foldnet

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

After starting the server, open your browser at:
👉 **`http://localhost:5173/`**

---

## 🛠️ Tech Stack

- **Core**: Vanilla JavaScript (ES Modules), HTML5 Canvas, SVG
- **3D Graphics & Rendering**: [Three.js](https://threejs.org/) (WebGL, OrbitControls, GLTFExporter, STLLoader, OBJLoader)
- **Tooling & Bundling**: [Vite](https://vitejs.dev/)
- **Data Standard**: [FOLD 1.1 Specification](https://github.com/edemaine/fold) (Foldable Origami / Net Description format)

---

## 📦 Production Build

To build the static web application for deployment:

```bash
npm run build
```

The optimized static bundle will be generated in the `dist/` directory ready to deploy to GitHub Pages, Netlify, Vercel, or any static web host.

---

## 📄 License

MIT License. Feel free to use, modify, and distribute.
