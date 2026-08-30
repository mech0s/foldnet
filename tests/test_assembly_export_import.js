import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { CADParser } from '../src/cadParser.js';
import { NetUnfolder } from '../src/netUnfolder.js';
import { AssemblyManager } from '../src/assemblyManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== RUNNING ASSEMBLY EXPORT / IMPORT ROUND-TRIP TESTS ===\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

async function runTests() {
  // Test 1: Single Model with Artworks Round-Trip
  console.log('--- TEST 1: Single Model (lid-cube.json) with Artworks ---');
  const lidCubePath = path.join(__dirname, '../models/lid-cube.json');
  const lidCubeRaw = JSON.parse(fs.readFileSync(lidCubePath, 'utf8'));

  const mgr1 = new AssemblyManager(lidCubeRaw);
  assert(!mgr1.isAssembly, 'Single model initialized with isAssembly = false');
  assert(mgr1.parts.length === 1, 'Manager tracks 1 part');

  // Add artworks to Part 0 (Face 0 and Face 2)
  const part0 = mgr1.parts[0];
  part0.faceArtworks = new Map();
  part0.faceArtworks.set(0, [
    { id: 'fill_1', type: 'face-fill', fill: '#ef4444', faceIndex: 0 },
    { id: 'art_1', type: 'rect', x: 0.1, y: 0.1, width: 0.8, height: 0.8, fill: '#3b82f6', text: 'HELLO 3D', fontColor: '#ffffff' }
  ]);
  part0.faceArtworks.set(2, [
    { id: 'art_2', type: 'circle', cx: 0.5, cy: 0.5, r: 0.3, fill: '#10b981' }
  ]);

  // Export
  const exportedSingle = mgr1.getAssemblyJSON();
  assert(exportedSingle.file_spec === 1.1, 'Exported single model has file_spec 1.1');
  assert(exportedSingle._artworks !== undefined, 'Exported single model includes _artworks');
  assert(exportedSingle._artworks['0'].length === 2, 'Face 0 artworks count is 2');
  assert(exportedSingle._artworks['2'].length === 1, 'Face 2 artworks count is 1');

  // Reload into fresh AssemblyManager
  const reloadedMgr1 = new AssemblyManager(exportedSingle);
  assert(!reloadedMgr1.isAssembly, 'Reloaded model isAssembly = false');
  assert(reloadedMgr1.parts.length === 1, 'Reloaded model tracks 1 part');
  assert(reloadedMgr1.parts[0].faceArtworks instanceof Map, 'Reloaded part has faceArtworks Map');
  assert(reloadedMgr1.parts[0].faceArtworks.get(0).length === 2, 'Reloaded Face 0 artwork restored');
  assert(reloadedMgr1.parts[0].faceArtworks.get(0)[0].fill === '#ef4444', 'Reloaded Face 0 fill restored');
  assert(reloadedMgr1.parts[0].faceArtworks.get(0)[1].text === 'HELLO 3D', 'Reloaded Face 0 text restored');
  assert(reloadedMgr1.parts[0].faceArtworks.get(2)[0].type === 'circle', 'Reloaded Face 2 circle restored');

  // Test 2: Multi-Component CAD Assembly (nested3.stl) Round-Trip
  console.log('\n--- TEST 2: Multi-Part Assembly (nested3.stl) with Artworks & Kinematics ---');
  const nested3Path = path.join(__dirname, '../models/nested3.stl');
  const nestedBuf = fs.readFileSync(nested3Path);
  const stlArrayBuf = nestedBuf.buffer.slice(nestedBuf.byteOffset, nestedBuf.byteOffset + nestedBuf.byteLength);

  const meshData = await CADParser.parseCADFile(stlArrayBuf, 'stl');
  const multiPlanar = CADParser.extractMultiBodyPlanarFaces(meshData);
  assert(multiPlanar.isAssembly, 'CAD model extracted as multi-part assembly');
  assert(multiPlanar.components.length === 3, 'Extracted 3 distinct components');

  const assemblyPayload = NetUnfolder.unfoldAssemblyToFold(multiPlanar.components, 1);
  const mgr2 = new AssemblyManager(assemblyPayload);
  assert(mgr2.isAssembly, 'AssemblyManager initialized with isAssembly = true');
  assert(mgr2.parts.length === 3, 'AssemblyManager tracks 3 parts');

  // Attach artworks to Part 0, Part 1, Part 2
  mgr2.parts[0].faceArtworks = new Map();
  mgr2.parts[0].faceArtworks.set(0, [
    { id: 'fill_p0', type: 'face-fill', fill: '#f59e0b', faceIndex: 0 }
  ]);
  mgr2.parts[1].faceArtworks = new Map();
  mgr2.parts[1].faceArtworks.set(3, [
    { id: 'art_p1', type: 'text', text: 'PART 2', x: 10, y: 10, fontColor: '#ffffff' }
  ]);
  mgr2.parts[2].faceArtworks = new Map();
  mgr2.parts[2].faceArtworks.set(1, [
    { id: 'art_p2', type: 'stamp', stampType: 'fragile', x: 20, y: 20 }
  ]);

  // Export Assembly JSON
  const exportedAssembly = mgr2.getAssemblyJSON();
  assert(exportedAssembly.isAssembly === true, 'Exported assembly has isAssembly = true');
  assert(exportedAssembly.file_classes.includes('multiModel'), 'Exported assembly has file_classes: [multiModel]');
  assert(exportedAssembly.parts.length === 3, 'Exported assembly contains 3 parts');
  assert(exportedAssembly.parts[0].foldData._artworks['0'][0].fill === '#f59e0b', 'Part 0 artwork exported');
  assert(exportedAssembly.parts[1].foldData._artworks['3'][0].text === 'PART 2', 'Part 1 artwork exported');
  assert(exportedAssembly.parts[2].foldData._artworks['1'][0].stampType === 'fragile', 'Part 2 artwork exported');

  // Reload into fresh AssemblyManager
  const reloadedMgr2 = new AssemblyManager(exportedAssembly);
  assert(reloadedMgr2.isAssembly === true, 'Reloaded assembly has isAssembly = true');
  assert(reloadedMgr2.parts.length === 3, 'Reloaded assembly tracks exactly 3 parts');
  assert(reloadedMgr2.parts[0].name === mgr2.parts[0].name, 'Part 0 name preserved');
  assert(reloadedMgr2.parts[1].name === mgr2.parts[1].name, 'Part 1 name preserved');
  assert(reloadedMgr2.parts[2].name === mgr2.parts[2].name, 'Part 2 name preserved');

  // Verify 3D align transforms and kinematics restored
  for (let i = 0; i < 3; i++) {
    const origPart = mgr2.parts[i];
    const reloadPart = reloadedMgr2.parts[i];
    assert(reloadPart.kinematics !== null, `Part ${i} kinematics initialized`);
    assert(reloadPart.foldData.facesVertices.length === origPart.foldData.facesVertices.length, `Part ${i} face count matches`);
    assert(reloadPart.alignTranslation.distanceTo(origPart.alignTranslation) < 1e-4, `Part ${i} alignTranslation matches`);
    assert(reloadPart.alignQuaternion.angleTo(origPart.alignQuaternion) < 1e-4, `Part ${i} alignQuaternion matches`);
    assert(reloadPart.center[0] === origPart.center[0] && reloadPart.center[1] === origPart.center[1] && reloadPart.center[2] === origPart.center[2], `Part ${i} center matches`);
  }

  // Verify faceArtworks restored across all parts
  assert(reloadedMgr2.parts[0].faceArtworks.get(0)[0].fill === '#f59e0b', 'Reloaded Part 0 face fill intact');
  assert(reloadedMgr2.parts[1].faceArtworks.get(3)[0].text === 'PART 2', 'Reloaded Part 1 text label intact');
  assert(reloadedMgr2.parts[2].faceArtworks.get(1)[0].stampType === 'fragile', 'Reloaded Part 2 stamp intact');

  // Test 3: Loading Clean Model resets graphics
  console.log('\n--- TEST 3: Loading Clean Model resets graphics ---');
  const freshLidCube = JSON.parse(fs.readFileSync(lidCubePath, 'utf8'));
  const cleanMgr = new AssemblyManager(freshLidCube);
  assert(cleanMgr.parts[0].faceArtworks.size === 0, 'Clean model has 0 face artworks');

  console.log(`\nTESTS COMPLETED: ${passCount} passed, ${failCount} failed.`);
  if (failCount > 0) process.exit(1);
}

runTests().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
