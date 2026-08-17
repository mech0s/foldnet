/**
 * FOLD 1.1 Specification Parser and Geometry Normalizer
 * Full handling of edges_assignment directives:
 *  - "M": Mountain fold (-90° default angle)
 *  - "V": Valley fold (+90° default angle)
 *  - "B": Boundary (0° outer edge)
 *  - "C": Cut / Internal Slit (0° cut line)
 *  - "F": Flat / Facet crease (0° crease)
 *  - "U": Unassigned (0° default)
 */

export function parseFoldData(json) {
  if (!json || typeof json !== 'object') {
    throw new Error('Invalid FOLD file: must be a JSON object.');
  }

  const verticesCoords2D = json.vertices_coords || [];
  const facesVertices = json.faces_vertices || [];
  const edgesVertices = json.edges_vertices || [];
  const edgesAssignment = json.edges_assignment || [];
  const edgesFoldAngle = json.edges_foldAngle || [];

  if (verticesCoords2D.length === 0 || facesVertices.length === 0) {
    throw new Error('Invalid FOLD file: missing vertices_coords or faces_vertices.');
  }

  // Convert 2D vertices [x, y] to 3D [x, y, 0] if necessary
  const vertices = verticesCoords2D.map(v => {
    if (v.length === 2) return [v[0], v[1], 0];
    return [v[0], v[1], v[2] || 0];
  });

  // Derive fold angle per edge according to edge assignment or explicit angle
  const parsedFoldAngles = edgesVertices.map((edge, idx) => {
    const explicitAngle = edgesFoldAngle[idx];
    if (explicitAngle !== null && explicitAngle !== undefined) {
      return explicitAngle;
    }

    const assignment = (edgesAssignment[idx] || 'B').toUpperCase();
    switch (assignment) {
      case 'V': return 90;    // Valley fold: +90 degrees toward viewer
      case 'M': return -90;   // Mountain fold: -90 degrees away from viewer
      case 'B': return 0;     // Boundary outer edge
      case 'C': return 0;     // Cut / internal slit
      case 'F': return 0;     // Flat crease (0 degrees)
      case 'U': return 0;     // Unassigned
      default: return 0;
    }
  });

  // Map edges to edge index for fast lookup: key = "v1-v2" (sorted)
  const edgeLookup = new Map();
  edgesVertices.forEach((edge, idx) => {
    const v1 = Math.min(edge[0], edge[1]);
    const v2 = Math.max(edge[0], edge[1]);
    edgeLookup.set(`${v1}-${v2}`, idx);
  });

  // Detailed Breakdown counts for directives
  const assignmentCounts = {
    boundary: 0, // B
    valley: 0,   // V
    mountain: 0, // M
    cut: 0,      // C
    flat: 0,     // F
    unassigned: 0// U
  };

  edgesAssignment.forEach(assign => {
    const code = (assign || 'B').toUpperCase();
    switch (code) {
      case 'B': assignmentCounts.boundary++; break;
      case 'V': assignmentCounts.valley++; break;
      case 'M': assignmentCounts.mountain++; break;
      case 'C': assignmentCounts.cut++; break;
      case 'F': assignmentCounts.flat++; break;
      case 'U': assignmentCounts.unassigned++; break;
      default: assignmentCounts.boundary++; break;
    }
  });

  return {
    raw: json,
    title: json.file_title || 'Untitled Box Net',
    creator: json.file_creator || 'Unknown',
    spec: json.file_spec || 1.1,
    vertices,
    facesVertices,
    edgesVertices,
    edgesAssignment,
    edgesFoldAngle: parsedFoldAngles,
    edgeLookup,
    counts: {
      vertices: vertices.length,
      edges: edgesVertices.length,
      faces: facesVertices.length,
      ...assignmentCounts
    }
  };
}
