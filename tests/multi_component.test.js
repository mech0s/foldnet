import fs from 'fs';
import * as THREE from 'three';
import { CADParser } from '../src/cadParser.js';
import { NetUnfolder } from '../src/netUnfolder.js';
import { AssemblyManager } from '../src/assemblyManager.js';
import { parseFoldData } from '../src/foldParser.js';
import { FoldKinematics } from '../src/foldKinematics.js';

console.log('=== RUNNING MULTI-COMPONENT ASSEMBLY UNIT TESTS ===\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

// TEST 1: Single-Body STL parsing
try {
  const boxBuf = fs.readFileSync('./models/box-shell.stl');
  const meshData = await CADParser.parseCADFile(boxBuf.buffer.slice(boxBuf.byteOffset, boxBuf.byteOffset + boxBuf.byteLength), 'stl');
  const multiPlanar = CADParser.extractMultiBodyPlanarFaces(meshData);

  assert(multiPlanar.isAssembly === false, 'Single box-shell.stl correctly identified as single body');
  assert(multiPlanar.components.length === 1, 'Single body components count is 1');
  assert(multiPlanar.components[0].facesVertices.length >= 6, 'Box shell extracted valid orthogonal faces');
} catch (e) {
  assert(false, `Test 1 failed with error: ${e.message}`);
}

// TEST 2: Multi-Body Synthetic STL / Geometry (2 disconnected boxes in 1 mesh)
try {
  const createBoxTriangles = (offset, vertStart) => {
    const s = 10;
    const [ox, oy, oz] = offset;
    const v = [
      [ox, oy, oz], [ox+s, oy, oz], [ox+s, oy+s, oz], [ox, oy+s, oz], // bottom 0,1,2,3
      [ox, oy, oz+s], [ox+s, oy, oz+s], [ox+s, oy+s, oz+s], [ox, oy+s, oz+s] // top 4,5,6,7
    ];
    const rawTris = [
      [0, 2, 1], [0, 3, 2],
      [4, 5, 6], [4, 6, 7],
      [0, 1, 5], [0, 5, 4],
      [1, 2, 6], [1, 6, 5],
      [2, 3, 7], [2, 7, 6],
      [3, 0, 4], [3, 4, 7]
    ];
    const tris = rawTris.map(t => t.map(idx => idx + vertStart));
    return { vertices: v, triangles: tris };
  };

  const b1 = createBoxTriangles([0, 0, 0], 0);
  const b2 = createBoxTriangles([30, 30, 30], 8);
  const combinedMesh = {
    vertices: [...b1.vertices, ...b2.vertices],
    triangles: [...b1.triangles, ...b2.triangles]
  };

  const multiResult = CADParser.extractMultiBodyPlanarFaces(combinedMesh);
  assert(multiResult.isAssembly === true, 'Multi-body CAD mesh correctly identified as isAssembly = true');
  assert(multiResult.components.length === 2, 'Exactly 2 distinct bodies detected');
  assert(multiResult.components[0].facesVertices.length === 6, 'Body 1 has 6 faces');
  assert(multiResult.components[1].facesVertices.length === 6, 'Body 2 has 6 faces');

  // TEST 3: Multi-Net Unfolding & _assembly Metadata
  const assemblyPayload = NetUnfolder.unfoldAssemblyToFold(multiResult.components, 1);
  assert(assemblyPayload.isAssembly === true, 'Unfolded payload isAssembly = true');
  assert(assemblyPayload.parts.length === 2, 'Unfolded payload contains 2 part FOLD specs');

  const p1 = assemblyPayload.parts[0];
  const p2 = assemblyPayload.parts[1];
  assert(p1.foldData._assembly !== undefined, 'Part 1 contains _assembly anchor metadata');
  assert(p2.foldData._assembly !== undefined, 'Part 2 contains _assembly anchor metadata');
  assert(p1.foldData._assembly.componentId === 'part_0', 'Part 1 componentId is part_0');
  assert(p2.foldData._assembly.componentId === 'part_1', 'Part 2 componentId is part_1');

  // TEST 4: AssemblyManager lifecycle & Explosion Vectors
  const manager = new AssemblyManager(assemblyPayload);
  assert(manager.isAssembly === true, 'AssemblyManager initialized with isAssembly = true');
  assert(manager.parts.length === 2, 'AssemblyManager tracks 2 parts');
  assert(manager.getActivePart().id === 'part_0', 'Initial active part is part_0');

  manager.setActivePartIndex(1);
  assert(manager.getActivePart().id === 'part_1', 'Switched active part to part_1');
  assert(manager.globalCentroid !== undefined, 'Assembly global centroid computed');
  assert(manager.parts[0].explosionVector.some(v => Math.abs(v) > 0), 'Part 0 has non-zero explosion vector');
  assert(manager.parts[1].explosionVector.some(v => Math.abs(v) > 0), 'Part 1 has non-zero explosion vector');

} catch (e) {
  assert(false, `Multi-body tests failed with error: ${e.message}\n${e.stack}`);
}

// TEST 5: Backward compatibility with JSON models
try {
  const jsonContent = fs.readFileSync('./models/lid-cube.json', 'utf8');
  const jsonObj = JSON.parse(jsonContent);
  const manager = new AssemblyManager();
  manager.loadAssembly(jsonObj);

  assert(manager.isAssembly === false, 'Single JSON model loaded as single part');
  assert(manager.parts.length === 1, 'Manager tracks 1 part for JSON model');
  assert(manager.getActivePart().foldData.facesVertices.length > 0, 'Part foldData faces loaded');
} catch (e) {
  assert(false, `Test 5 failed with error: ${e.message}`);
}

// TEST 6: Testing nested3.stl
console.log('\n--- TESTING nested3.stl ---');
try {
  const nestedBuf = fs.readFileSync('./models/nested3.stl');
  const meshData = await CADParser.parseCADFile(nestedBuf.buffer.slice(nestedBuf.byteOffset, nestedBuf.byteOffset + nestedBuf.byteLength), 'stl');
  console.log(`[nested3.stl] Raw mesh: ${meshData.triangles.length} triangles, ${meshData.vertices.length} vertices.`);

  const multiPlanar = CADParser.extractMultiBodyPlanarFaces(meshData);
  console.log(`[nested3.stl] Extracted ${multiPlanar.components.length} component(s), isAssembly = ${multiPlanar.isAssembly}`);

  multiPlanar.components.forEach((c, idx) => {
    console.log(`  Component ${idx + 1} (${c.name}): ${c.facesVertices.length} faces, ${c.vertices.length} vertices, area: ${c.area.toFixed(1)}`);
  });

  assert(multiPlanar.components.length >= 1, 'nested3.stl parsed into valid component(s)');

  const assemblyPayload = NetUnfolder.unfoldAssemblyToFold(multiPlanar.components, 1);
  console.log(`[nested3.stl] Unfolded into ${assemblyPayload.parts.length} part net(s).`);

  assemblyPayload.parts.forEach((p, idx) => {
    const faces = p.foldData.faces_vertices.length;
    const edges = p.foldData.edges_vertices.length;
    console.log(`  Part Net ${idx + 1} (${p.name}): ${faces} faces, ${edges} edges in 2D net.`);
    assert(faces > 0 && edges > 0, `Part ${idx + 1} has valid 2D net topology`);
  });

  const manager = new AssemblyManager(assemblyPayload);
  assert(manager.parts.length === assemblyPayload.parts.length, 'AssemblyManager successfully loaded nested3.stl assembly');
  
  manager.parts.forEach((p, idx) => {
    assert(p.alignMatrix instanceof THREE.Matrix4, `Part ${idx + 1} has valid 3D alignMatrix`);
    assert(p.alignTranslation instanceof THREE.Vector3, `Part ${idx + 1} has valid 3D alignTranslation`);
    assert(p.alignQuaternion instanceof THREE.Quaternion, `Part ${idx + 1} has valid 3D alignQuaternion`);
  });

  console.log(`[nested3.stl] Global BBox: [${manager.globalBBox.min.map(v=>v.toFixed(1))}] to [${manager.globalBBox.max.map(v=>v.toFixed(1))}]`);
} catch (e) {
  assert(false, `nested3.stl test failed with error: ${e.message}\n${e.stack}`);
}

console.log(`\nTESTS COMPLETED: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
