import * as THREE from "three";
function createCourtyard() {
  const scene = new THREE.Group();
  const worldRoot = new THREE.Group();
  worldRoot.name = "courtyard";
  scene.add(worldRoot);
  const stone = new THREE.MeshStandardMaterial({ color: "#77796b", roughness: 0.92 });
  const paleStone = new THREE.MeshStandardMaterial({ color: "#aaa58e", roughness: 0.78 });
  const soil = new THREE.MeshStandardMaterial({ color: "#344033", roughness: 1 });
  const leaves = new THREE.MeshStandardMaterial({ color: "#405940", roughness: 0.95 });
  const darkLeaves = new THREE.MeshStandardMaterial({ color: "#2c4435", roughness: 0.95 });
  const water = new THREE.MeshStandardMaterial({
    color: "#739b91",
    roughness: 0.22,
    metalness: 0.12,
    transparent: true,
    opacity: 0.88
  });
  const brass = new THREE.MeshStandardMaterial({ color: "#b28b4d", roughness: 0.38, metalness: 0.55 });
  const lanternGlass = new THREE.MeshStandardMaterial({
    color: "#f5cb78",
    emissive: "#e49d42",
    emissiveIntensity: 1.6,
    roughness: 0.3
  });
  scene.add(new THREE.HemisphereLight("#d3ded0", "#202c20", 1.35));
  const moonlight = new THREE.DirectionalLight("#c2d0c6", 1.25);
  moonlight.position.set(-5, 10, 4);
  scene.add(moonlight);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(14, 24), stone);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.04, 8);
  ground.receiveShadow = true;
  worldRoot.add(ground);
  const soilPatch = new THREE.Mesh(new THREE.CircleGeometry(1.05, 32), soil);
  soilPatch.rotation.x = -Math.PI / 2;
  soilPatch.position.set(-1.55, -0.015, 1.6);
  worldRoot.add(soilPatch);
  function makeHost(id, position) {
    const host = new THREE.Group();
    host.name = id;
    host.userData.satieId = id;
    host.position.set(...position);
    worldRoot.add(host);
    return host;
  }
  function addMesh(host, geometry, material, position = [0, 0, 0]) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    host.add(mesh);
    return mesh;
  }
  function addWall(position, size) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(...size), paleStone);
    wall.position.set(...position);
    wall.castShadow = true;
    wall.receiveShadow = true;
    worldRoot.add(wall);
  }
  const fountain = makeHost("central_fountain", [0, 0, 6]);
  addMesh(fountain, new THREE.CylinderGeometry(0.9, 1, 0.18, 40), paleStone, [0, 0.24, 0]);
  addMesh(fountain, new THREE.CylinderGeometry(0.72, 0.78, 0.12, 40), stone, [0, 0.39, 0]);
  addMesh(fountain, new THREE.CylinderGeometry(0.66, 0.66, 0.025, 40), water, [0, 0.46, 0]);
  addMesh(fountain, new THREE.CylinderGeometry(0.12, 0.2, 0.45, 16), paleStone, [0, 0.66, 0]);
  addMesh(fountain, new THREE.SphereGeometry(0.12, 16, 12), water, [0, 0.93, 0]);
  function createLantern(id, position) {
    const lantern = makeHost(id, position);
    addMesh(lantern, new THREE.CylinderGeometry(0.055, 0.08, 0.8, 10), brass, [0, 0.4, 0]);
    addMesh(lantern, new THREE.CylinderGeometry(0.17, 0.17, 0.07, 12), brass, [0, 0.83, 0]);
    addMesh(lantern, new THREE.BoxGeometry(0.22, 0.27, 0.22), lanternGlass, [0, 1.02, 0]);
    addMesh(lantern, new THREE.ConeGeometry(0.18, 0.12, 12), brass, [0, 1.22, 0]);
    const light = new THREE.PointLight("#f0b968", 1.2, 5, 1.8);
    light.position.set(0, 1, 0);
    lantern.add(light);
  }
  createLantern("left_lantern", [-2.598076211353316, 0, 1.5000000000000004]);
  createLantern("right_lantern", [2.598076211353316, 0, 1.5000000000000004]);
  const entranceHedge = makeHost("entrance_hedge", [-1.55, 0, 1.6]);
  addMesh(entranceHedge, new THREE.BoxGeometry(0.7, 0.8, 3), leaves, [0, 0.4, 0]);
  for (let index = 0; index < 7; index += 1) {
    const x = (index % 2 === 0 ? -1 : 1) * 0.22;
    const z = -1.2 + index * 0.4;
    addMesh(entranceHedge, new THREE.SphereGeometry(0.32, 12, 8), darkLeaves, [x, 0.58, z]);
  }
  const backHedge = makeHost("back_hedge", [0, 0, 11]);
  addMesh(backHedge, new THREE.BoxGeometry(8, 0.8, 0.7), leaves, [0, 0.4, 0]);
  for (let index = 0; index < 14; index += 1) {
    const x = -3.4 + index * 0.52;
    addMesh(backHedge, new THREE.SphereGeometry(0.43, 12, 8), darkLeaves, [x, 0.58, 0]);
  }
  const birdShrub = makeHost("outer_shrub", [3.742410434719668, 0, 17.606656813208502]);
  addMesh(birdShrub, new THREE.CylinderGeometry(0.12, 0.2, 1.2, 9), paleStone, [0, 0.6, 0]);
  for (const [x, y, z, radius] of [
    [-0.45, 1.1, 0, 0.72],
    [0.35, 1.35, 0.18, 0.8],
    [0, 1.75, -0.18, 0.72],
    [0.48, 0.95, -0.32, 0.58]
  ]) {
    addMesh(birdShrub, new THREE.SphereGeometry(radius, 14, 10), leaves, [x, y, z]);
  }
  addWall([-5, 0.28, 6], [0.5, 0.56, 12]);
  addWall([5, 0.28, 6], [0.5, 0.56, 12]);
  addWall([0, 0.28, 12], [10.5, 0.56, 0.5]);
  return { root: scene, hosts: worldRoot };
}
export {
  createCourtyard
};
