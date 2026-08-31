import fs from 'fs';
import * as THREE from 'three';
import { CrossSeamMapper } from '../src/crossSeamMapper.js';
import { parseFoldData } from '../src/foldParser.js';
import { FoldKinematics } from '../src/foldKinematics.js';

console.log('=== RUNNING PRIORITY QUEUE CLUSTER UNPACKING TESTS ===\n');

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

// Helper to load test FOLD JSON
function loadFoldModel(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(content);
  // Handle assembly JSON vs single FOLD JSON
  if (json.parts && json.parts.length > 0) {
    return parseFoldData(json.parts[0].foldData);
  }
  return parseFoldData(json);
}

try {
  const foldData = loadFoldModel('./tests/5multi-part-assembly.json');
  const kinematics = new FoldKinematics(foldData);
  const faceAdjacency3D = CrossSeamMapper.build3DAdjacency(foldData, kinematics);

  console.log(`Loaded foldData with ${foldData.facesVertices.length} faces.`);

  // Test 1: buildNeighborCluster returns valid cluster with tiers
  const clusterF0 = CrossSeamMapper.buildNeighborCluster(0, foldData, faceAdjacency3D, 4, kinematics);
  
  assert(clusterF0 !== null, 'Cluster returned non-null object');
  assert(clusterF0.clusterFaces.length > 0, `Cluster contains ${clusterF0.clusterFaces.length} faces`);
  assert(clusterF0.clusterFaces[0].faceIndex === 0, 'First face is focus face F0');
  assert(clusterF0.clusterFaces[0].isFocus === true, 'F0 marked as focus');
  assert(clusterF0.clusterFaces[0].tier === 1, 'F0 is Tier 1');

  // Test 2: Check that all faces in cluster have valid tier tags (1, 2, or 3)
  const allHaveTiers = clusterF0.clusterFaces.every(f => f.tier === 1 || f.tier === 2 || f.tier === 3);
  assert(allHaveTiers, 'All cluster faces have a valid tier assigned (1, 2, or 3)');

  // Test 3: Check symmetry - right and left flaps on symmetrical face should unpack equally
  const tier2Faces = clusterF0.clusterFaces.filter(f => f.tier === 2);
  console.log(`Found ${tier2Faces.length} Tier 2 (Cardinal) faces around F0`);
  assert(tier2Faces.length >= 2, 'Multiple cardinal directions unpacked around focus face');

  // Test 4: Verify no internal polygon overlaps in cluster
  let hasOverlaps = false;
  for (let i = 0; i < clusterF0.clusterFaces.length; i++) {
    for (let j = i + 1; j < clusterF0.clusterFaces.length; j++) {
      const p1 = clusterF0.clusterFaces[i].polygon;
      const p2 = clusterF0.clusterFaces[j].polygon;
      if (CrossSeamMapper.checkPolygonOverlap(p1, [clusterF0.clusterFaces[j]])) {
        hasOverlaps = true;
        console.error(`Detected overlap between face ${clusterF0.clusterFaces[i].faceIndex} and face ${clusterF0.clusterFaces[j].faceIndex}`);
      }
    }
  }
  assert(!hasOverlaps, 'No overlapping polygons detected in unfolded cluster');

} catch (err) {
  assert(false, `Test execution failed with error: ${err.message}\n${err.stack}`);
}

console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed`);
if (failed > 0) process.exit(1);
