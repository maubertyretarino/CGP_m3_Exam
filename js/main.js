import * as THREE from './three.module.js'
import { OrbitControls } from './OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/ window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Orbit Controls
const controls = new OrbitControls(camera,renderer.domElement);
controls.update();

lighting();
sceneObjects();

//Scene recreation
function sceneObjects () {
//floor
const floorTexture = new THREE.TextureLoader().load('assets/textures/savanah.jpg');
const floorMaterial = new THREE.MeshPhongMaterial({ map: floorTexture });
const floorGeometry = new THREE.BoxGeometry(100,1,500);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

  floor.position.y = -45
  floor.position.x = 70
 
const dividerTexture = new THREE.TextureLoader().load('assets/textures/divider.jpg');
const dividerMaterial = new THREE.MeshPhongMaterial({ map: dividerTexture });
const dividerGeometry = new THREE.BoxGeometry(100,1,600);
const divider = new THREE.Mesh(dividerGeometry, dividerMaterial);
scene.add(divider);
  
  divider.position.y = -50
  divider.position.x = 170

//background
const wall1Texture = new THREE.TextureLoader().load('assets/textures/background.jpeg');
const wall1Material = new THREE.MeshBasicMaterial( {map: wall1Texture, color: "#FFFFFF"} );
const wall1Geometry = new THREE.BoxGeometry( 1, 205, 490);
const wall1 = new THREE.Mesh(wall1Geometry, wall1Material);
scene.add(wall1);

  wall1.position.y = 65
  wall1.position.x = 115
  wall1.position.z = -6
  
//tree1
const tree1Texture = new THREE.TextureLoader().load('assets/textures/tree1.png');
const tree1Material = new THREE.MeshBasicMaterial( {map: tree1Texture} );
const tree1Geometry = new THREE.BoxGeometry( 0.01, 30, 30);
const tree1 = new THREE.Mesh(tree1Geometry, tree1Material);
scene.add(tree1);

  tree1.material.transparent = true;
  tree1.material.opacity = 1; 
  tree1.position.y = -16.5
  tree1.position.x = 70
  tree1.position.z = 115

//tree2
const tree2Texture = new THREE.TextureLoader().load('assets/textures/tree.png');
const tree2Material = new THREE.MeshBasicMaterial( {map: tree2Texture} );
const tree2Geometry = new THREE.BoxGeometry( 0.01, 70, 70);
const tree2 = new THREE.Mesh(tree2Geometry, tree2Material);
scene.add(tree2);

  tree2.material.transparent = true;
  tree2.material.opacity = 1; 
  tree2.position.y = -10
  tree2.position.x = 100
  tree2.position.z = -32

const tree3Texture = new THREE.TextureLoader().load('assets/textures/trunk.png');
const tree3Material = new THREE.MeshBasicMaterial( {map: tree3Texture} );
const tree3Geometry = new THREE.BoxGeometry( 0.01, 20, 15);
const tree3 = new THREE.Mesh(tree3Geometry, tree3Material);
scene.add(tree3);

  tree3.material.transparent = true;
  tree3.material.opacity = 1; 
  tree3.position.y = -17
  tree3.position.x = 65
  tree3.position.z = 8



//hay1
const hay1Texture = new THREE.TextureLoader().load('assets/textures/hay.jpg');
const hay1Material = new THREE.MeshBasicMaterial( {map: hay1Texture} );
const hay1Geometry = new THREE.BoxGeometry( 8, 13, 20);
const hay1 = new THREE.Mesh(hay1Geometry, hay1Material);
scene.add(hay1);

  
  hay1.position.y = -35
  hay1.position.x = 90
  hay1.position.z = -40
  hay1.rotation.y = -10.1
  
//hay2
const hay2Texture = new THREE.TextureLoader().load('assets/textures/hay.jpg');
const hay2Material = new THREE.MeshBasicMaterial( {map: hay2Texture} );
const hay2Geometry = new THREE.BoxGeometry( 8, 13, 25);
const hay2 = new THREE.Mesh(hay2Geometry, hay2Material);
scene.add(hay2);

  hay2.position.y = -35
  hay2.position.x = 90
  hay2.position.z = -55
  hay2.rotation.y = -10.1

  


//house
const houseWall1Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const houseWall1Material = new THREE.MeshBasicMaterial( {map: houseWall1Texture} );
const houseWall1Geometry = new THREE.BoxGeometry( 29, 25, 70);
const houseWall1 = new THREE.Mesh(houseWall1Geometry, houseWall1Material);
scene.add(houseWall1);

  
 houseWall1.position.y = -30 
 houseWall1.position.x = 95
 houseWall1.position.z = 60 
 houseWall1.rotation.y = 10
  
//
const houseWall2Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const houseWall2Material = new THREE.MeshBasicMaterial( {map: houseWall2Texture} );
const houseWall2Geometry = new THREE.BoxGeometry( 40, 25, 30);
const houseWall2 = new THREE.Mesh(houseWall2Geometry, houseWall2Material);
scene.add(houseWall2);

  houseWall2.position.y = -30
  houseWall2.position.x = 95
  houseWall2.position.z = 100
  houseWall2.rotation.y = -10.55

const houseWall3Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const houseWall3Material = new THREE.MeshBasicMaterial( {map: houseWall3Texture} );
const houseWall3Geometry = new THREE.BoxGeometry( 29, 25, 70);
const houseWall3 = new THREE.Mesh(houseWall3Geometry, houseWall3Material);
scene.add(houseWall3);

  
  houseWall3.position.y = -30 
  houseWall3.position.x = 120
  houseWall3.position.z = 60 
  houseWall3.rotation.y = 10

//window
const windowTexture = new THREE.TextureLoader().load('assets/textures/window1.png');
const windowMaterial = new THREE.MeshBasicMaterial( {map: windowTexture} );
const windowGeometry = new THREE.BoxGeometry( 1, 12, 14);
const window = new THREE.Mesh(windowGeometry, windowMaterial);
scene.add(window);

  
  window.position.y = -30 
  window.position.x = 85.9
  window.position.z = 72
  window.rotation.y = 10

//wood Pillars  
const woodPillar1Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar1Material = new THREE.MeshBasicMaterial( {map: woodPillar1Texture} );
const woodPillar1Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar1 = new THREE.Mesh(woodPillar1Geometry, woodPillar1Material);
scene.add(woodPillar1);

  
  woodPillar1.position.y = -30 
  woodPillar1.position.x = 65
  woodPillar1.position.z = 40
  woodPillar1.rotation.y = 10

const woodPillar2Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar2Material = new THREE.MeshBasicMaterial( {map: woodPillar2Texture} );
const woodPillar2Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar2 = new THREE.Mesh(woodPillar2Geometry, woodPillar2Material);
scene.add(woodPillar2);

  
  woodPillar2.position.y = -30 
  woodPillar2.position.x = 70
  woodPillar2.position.z = 48
  woodPillar2.rotation.y = 10

const woodPillar3Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar3Material = new THREE.MeshBasicMaterial( {map: woodPillar3Texture} );
const woodPillar3Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar3 = new THREE.Mesh(woodPillar3Geometry, woodPillar3Material);
scene.add(woodPillar3);

  
  woodPillar3.position.y = -30 
  woodPillar3.position.x = 75
  woodPillar3.position.z = 55
  woodPillar3.rotation.y = 10

const woodPillar4Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar4Material = new THREE.MeshBasicMaterial( {map: woodPillar4Texture} );
const woodPillar4Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar4 = new THREE.Mesh(woodPillar4Geometry, woodPillar4Material);
scene.add(woodPillar4);

  
  woodPillar4.position.y = -30 
  woodPillar4.position.x = 88
  woodPillar4.position.z = 75
  woodPillar4.rotation.y = 10

const woodPillar5Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar5Material = new THREE.MeshBasicMaterial( {map: woodPillar5Texture} );
const woodPillar5Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar5 = new THREE.Mesh(woodPillar5Geometry, woodPillar5Material);
scene.add(woodPillar5);

  woodPillar5.position.y = -30 
  woodPillar5.position.x = 77
  woodPillar5.position.z = 30
  woodPillar5.rotation.y = 10

const woodPillar6Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar6Material = new THREE.MeshBasicMaterial( {map: woodPillar6Texture} );
const woodPillar6Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar6 = new THREE.Mesh(woodPillar6Geometry, woodPillar6Material);
scene.add(woodPillar6);

  woodPillar6.position.y = -30 
  woodPillar6.position.x = 70
  woodPillar6.position.z = 35
  woodPillar6.rotation.y = 10

const woodPillar7Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar7Material = new THREE.MeshBasicMaterial( {map: woodPillar7Texture} );
const woodPillar7Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar7 = new THREE.Mesh(woodPillar7Geometry, woodPillar7Material);
scene.add(woodPillar7);

  woodPillar7.position.y = -30 
  woodPillar7.position.x = 66
  woodPillar7.position.z = 37
  woodPillar7.rotation.y = 10


const woodPillar8Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar8Material = new THREE.MeshBasicMaterial( {map: woodPillar8Texture} );
const woodPillar8Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar8 = new THREE.Mesh(woodPillar8Geometry, woodPillar8Material);
scene.add(woodPillar8);

  woodPillar8.position.y = -30 
  woodPillar8.position.x = 85
  woodPillar8.position.z = 25
  woodPillar8.rotation.y = 10

const woodPillar9Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar9Material = new THREE.MeshBasicMaterial( {map: woodPillar9Texture} );
const woodPillar9Geometry = new THREE.BoxGeometry( 28, 0.5, 0.5);
const woodPillar9 = new THREE.Mesh(woodPillar9Geometry, woodPillar9Material);
scene.add(woodPillar9);

  woodPillar9.position.y = -40 
  woodPillar9.position.x = 75
  woodPillar9.position.z = 30
  woodPillar9.rotation.y = 10

const woodPillar10Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar10Material = new THREE.MeshBasicMaterial( {map: woodPillar10Texture} );
const woodPillar10Geometry = new THREE.BoxGeometry( 28, 0.5, 0.5);
const woodPillar10 = new THREE.Mesh(woodPillar10Geometry, woodPillar10Material);
scene.add(woodPillar10);

  woodPillar10.position.y = -39 
  woodPillar10.position.x = 75
  woodPillar10.position.z = 30
  woodPillar10.rotation.y = 10

const woodPillar11Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar11Material = new THREE.MeshBasicMaterial( {map: woodPillar11Texture} );
const woodPillar11Geometry = new THREE.BoxGeometry( 28, 1, 0.5);
const woodPillar11 = new THREE.Mesh(woodPillar11Geometry, woodPillar11Material);
scene.add(woodPillar11);

  woodPillar11.position.y = -17 
  woodPillar11.position.x = 75
  woodPillar11.position.z = 30
  woodPillar11.rotation.y = 10

const woodPillar12Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar12Material = new THREE.MeshBasicMaterial( {map: woodPillar12Texture} );
const woodPillar12Geometry = new THREE.BoxGeometry( 29, 1, 0.5);
const woodPillar12 = new THREE.Mesh(woodPillar12Geometry, woodPillar12Material);
scene.add(woodPillar12);

  woodPillar12.position.y = -20 
  woodPillar12.position.x = 73.5
  woodPillar12.position.z = 30
  woodPillar12.rotation.y = 10

const woodPillar13Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar13Material = new THREE.MeshBasicMaterial( {map: woodPillar13Texture} );
const woodPillar13Geometry = new THREE.BoxGeometry( 29, 1, 0.5);
const woodPillar13 = new THREE.Mesh(woodPillar13Geometry, woodPillar13Material);
scene.add(woodPillar13);

  woodPillar13.position.y = -19.5 
  woodPillar13.position.x = 73.5
  woodPillar13.position.z = 30
  woodPillar13.rotation.y = 10

const woodPillar14Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar14Material = new THREE.MeshBasicMaterial( {map: woodPillar14Texture} );
const woodPillar14Geometry = new THREE.BoxGeometry( 20, 1, 0.5);
const woodPillar14 = new THREE.Mesh(woodPillar14Geometry, woodPillar14Material);
scene.add(woodPillar14);

  woodPillar14.position.y = -17 
  woodPillar14.position.x = 75
  woodPillar14.position.z = 27
  woodPillar14.rotation.y = 10

const woodPillar15Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar15Material = new THREE.MeshBasicMaterial( {map: woodPillar15Texture} );
const woodPillar15Geometry = new THREE.BoxGeometry( 29, 1, 0.5);
const woodPillar15 = new THREE.Mesh(woodPillar15Geometry, woodPillar15Material);
scene.add(woodPillar15);

  woodPillar15.position.y = -18.5 
  woodPillar15.position.x = 73.5
  woodPillar15.position.z = 30
  woodPillar15.rotation.y = 10

const woodPillar16Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar16Material = new THREE.MeshBasicMaterial( {map: woodPillar16Texture} );
const woodPillar16Geometry = new THREE.BoxGeometry( 20, 1, 0.5);
const woodPillar16 = new THREE.Mesh(woodPillar16Geometry, woodPillar16Material);
scene.add(woodPillar16);

  woodPillar16.position.y = -24 
  woodPillar16.position.x = 75
  woodPillar16.position.z = 27
  woodPillar16.rotation.y = 10

const woodPillar17Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar17Material = new THREE.MeshBasicMaterial( {map: woodPillar17Texture} );
const woodPillar17Geometry = new THREE.BoxGeometry( 1, 25, 2);
const woodPillar17 = new THREE.Mesh(woodPillar17Geometry, woodPillar17Material);
scene.add(woodPillar17);

  woodPillar17.position.y = -30 
  woodPillar17.position.x = 80
  woodPillar17.position.z = 29
  woodPillar17.rotation.y = 10

const woodPillar18Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar18Material = new THREE.MeshBasicMaterial( {map: woodPillar18Texture} );
const woodPillar18Geometry = new THREE.BoxGeometry( 1, 25, 1);
const woodPillar18 = new THREE.Mesh(woodPillar18Geometry, woodPillar18Material);
scene.add(woodPillar18);

 woodPillar18.position.y = -30
 woodPillar18.position.x = 82
 woodPillar18.position.z = 84
 woodPillar18.rotation.y = -10.55

const woodPillar19Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar19Material = new THREE.MeshBasicMaterial( {map: woodPillar19Texture} );
const woodPillar19Geometry = new THREE.BoxGeometry( 1, 25, 1);
const woodPillar19 = new THREE.Mesh(woodPillar19Geometry, woodPillar19Material);
scene.add(woodPillar19);

 woodPillar19.position.y = -30
 woodPillar19.position.x = 78
 woodPillar19.position.z = 86
 woodPillar19.rotation.y = -10.55

const woodPillar20Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar20Material = new THREE.MeshBasicMaterial( {map: woodPillar20Texture} );
const woodPillar20Geometry = new THREE.BoxGeometry( 1, 25, 1);
const woodPillar20 = new THREE.Mesh(woodPillar20Geometry, woodPillar20Material);
scene.add(woodPillar20);

  woodPillar20.position.y = -30
  woodPillar20.position.x = 87.5
  woodPillar20.position.z = 81  
  woodPillar20.rotation.y = -10.55

const woodPillar21Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const woodPillar21Material = new THREE.MeshBasicMaterial( {map: woodPillar21Texture} );
const woodPillar21Geometry = new THREE.BoxGeometry( 1, 25, 1);
const woodPillar21 = new THREE.Mesh(woodPillar21Geometry, woodPillar21Material);
scene.add(woodPillar21);

  woodPillar21.position.y = -30
  woodPillar21.position.x = 74.5
  woodPillar21.position.z = 88  
  woodPillar21.rotation.y = -10.55

//roof
const houseRoof1Texture = new THREE.TextureLoader().load('assets/textures/roof.jpg');
const houseRoof1Material = new THREE.MeshPhongMaterial( {map: houseRoof1Texture} );
const houseRoof1Geometry = new THREE.BoxGeometry( 25, 0.5, 65);
const houseRoof1 = new THREE.Mesh(houseRoof1Geometry, houseRoof1Material);
scene.add(houseRoof1);

  
  houseRoof1.position.y = -8
  houseRoof1.position.x = 84
  houseRoof1.position.z = 60 
  houseRoof1.rotation.y = 10
  houseRoof1.rotation.z = 2.2 

const houseRoof2Texture = new THREE.TextureLoader().load('assets/textures/roof.jpg');
const houseRoof2Material = new THREE.MeshPhongMaterial( {map: houseRoof2Texture} );
const houseRoof2Geometry = new THREE.BoxGeometry( 25, 0.5, 75);
const houseRoof2 = new THREE.Mesh(houseRoof2Geometry, houseRoof2Material);
scene.add(houseRoof2);
    
      
  houseRoof2.position.y = -8
  houseRoof2.position.x = 105
  houseRoof2.position.z = 58 
  houseRoof2.rotation.y = 10
  houseRoof2.rotation.z = -2.2 

const houseRoof3Texture = new THREE.TextureLoader().load('assets/textures/roof.jpg');
const houseRoof3Material = new THREE.MeshPhongMaterial( {map: houseRoof3Texture} );
const houseRoof3Geometry = new THREE.BoxGeometry( 25, 0.5, 60);
const houseRoof3 = new THREE.Mesh(houseRoof3Geometry, houseRoof3Material);
scene.add(houseRoof3);

  houseRoof3.position.y = -8
  houseRoof3.position.x = 98
  houseRoof3.position.z = 78 
  houseRoof3.rotation.y = 1.9
  houseRoof3.rotation.z = 2.2

const houseRoof4Texture = new THREE.TextureLoader().load('assets/textures/roofb.jpg');
const houseRoof4Material = new THREE.MeshPhongMaterial( {map: houseRoof4Texture} );
const houseRoof4Geometry = new THREE.BoxGeometry( 25, 0.5, 55);
const houseRoof4 = new THREE.Mesh(houseRoof4Geometry, houseRoof4Material);
scene.add(houseRoof4);

  houseRoof4.position.y = -7.8
  houseRoof4.position.x = 109
  houseRoof4.position.z = 103 
  houseRoof4.rotation.y = 1.9
  houseRoof4.rotation.z = -2.2

const houseRoof5Texture = new THREE.TextureLoader().load('assets/textures/roof.jpg');
const houseRoof5Material = new THREE.MeshPhongMaterial( {map: houseRoof5Texture} );
const houseRoof5Geometry = new THREE.BoxGeometry( 20, 0.5, 75);
const houseRoof5 = new THREE.Mesh(houseRoof5Geometry, houseRoof5Material);
scene.add(houseRoof5);

  houseRoof5.position.y = -14
  houseRoof5.position.x = 120
  houseRoof5.position.z = 55 
  houseRoof5.rotation.y = 10
  houseRoof5.rotation.z = -2.8  

const roofFill1Texture = new THREE.TextureLoader().load('assets/textures/roofFill.png');
const roofFill1Material = new THREE.MeshBasicMaterial( {map: roofFill1Texture} );
const roofFill1Geometry = new THREE.BoxGeometry( 34, 25, 0.01);
const roofFill1 = new THREE.Mesh(roofFill1Geometry, roofFill1Material);
scene.add(roofFill1);

  roofFill1.material.transparent = true;
  roofFill1.material.opacity = 1; 
  roofFill1.position.y = -10 
  roofFill1.position.x = 78
  roofFill1.position.z = 32 
  roofFill1.rotation.y = 10

const roofFill2Texture = new THREE.TextureLoader().load('assets/textures/roofFill.png');
const roofFill2Material = new THREE.MeshBasicMaterial( {map: roofFill2Texture} );
const roofFill2Geometry = new THREE.BoxGeometry( 53, 22, 0.01);
const roofFill2 = new THREE.Mesh(roofFill2Geometry, roofFill2Material);
scene.add(roofFill2);

  roofFill2.material.transparent = true;
  roofFill2.material.opacity = 1; 
  roofFill2.position.y = -8
  roofFill2.position.x = 78
  roofFill2.position.z = 101
  roofFill2.rotation.y = -10.55

//chimney
const chimneyTexture = new THREE.TextureLoader().load('assets/textures/orangeConcrete.jpg');
const chimneyMaterial = new THREE.MeshBasicMaterial( {map: chimneyTexture} );
const chimneyGeometry = new THREE.BoxGeometry( 5, 10, 5);
const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
scene.add(chimney);

  
  chimney.position.y = -1 
  chimney.position.x = 85
  chimney.position.z = 50 
  chimney.rotation.y = 10

//fences
const fence1Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const fence1Material = new THREE.MeshBasicMaterial( {map: fence1Texture} );
const fence1Geometry = new THREE.BoxGeometry( 1, 3, 0.5);
const fence1 = new THREE.Mesh(fence1Geometry, fence1Material);
scene.add(fence1);

  fence1.position.y = -22
  fence1.position.x = 65
  fence1.position.z = -1

const fence2Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const fence2Material = new THREE.MeshBasicMaterial( {map: fence2Texture} );
const fence2Geometry = new THREE.BoxGeometry( 1, 3, 0.5);
const fence2 = new THREE.Mesh(fence2Geometry, fence2Material);
scene.add(fence2);

  fence2.position.y = -22
  fence2.position.x = 65
  fence2.position.z = 12 

const fence3Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const fence3Material = new THREE.MeshBasicMaterial( {map: fence3Texture} );
const fence3Geometry = new THREE.BoxGeometry( 0.5, 3, 0.5);
const fence3 = new THREE.Mesh(fence3Geometry, fence3Material);
scene.add(fence3);

  fence3.position.y = -22
  fence3.position.x = 65
  fence3.position.z = -50

const fence4Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const fence4Material = new THREE.MeshBasicMaterial( {map: fence4Texture} );
const fence4Geometry = new THREE.BoxGeometry( 0.5, 3, 0.5);
const fence4 = new THREE.Mesh(fence4Geometry, fence4Material);
scene.add(fence4);

  fence4.position.y = -22
  fence4.position.x = 65
  fence4.position.z = -100 

const fence5Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const fence5Material = new THREE.MeshBasicMaterial( {map: fence5Texture} );
const fence5Geometry = new THREE.BoxGeometry( 0.5, 3, 0.5);
const fence5 = new THREE.Mesh(fence5Geometry, fence5Material);
scene.add(fence5);

  fence5.position.y = -22
  fence5.position.x = 65
  fence5.position.z = -75 

const fence6Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const fence6Material = new THREE.MeshBasicMaterial( {map: fence6Texture} );
const fence6Geometry = new THREE.BoxGeometry( 0.5, 3, 0.5);
const fence6 = new THREE.Mesh(fence6Geometry, fence6Material);
scene.add(fence6);

  fence6.position.y = -22
  fence6.position.x = 65
  fence6.position.z = 99 

const fence7Texture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const fence7Material = new THREE.MeshBasicMaterial( {map: fence7Texture} );
const fence7Geometry = new THREE.BoxGeometry( 0.5, 3, 0.5);
const fence7 = new THREE.Mesh(fence7Geometry, fence7Material);
scene.add(fence7);

  fence7.position.y = -22
  fence7.position.x = 65
  fence7.position.z = 120 




}


function lighting() {


  const light1 = new THREE.PointLight( 0xE7901A, 1, 200 );
  light1.position.set( -10, 10, -1 );
  scene.add( light1 );

  const light2 = new THREE.PointLight( 0xF7E46D, 3, 2 );
  light2.position.set( 4, 30, 20 );
  scene.add( light2 );

  const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3 );
  scene.add( directionalLight );

  const spotLight = new THREE.SpotLight
  (0xffff00, 0.4, 30, -0.4, 0.5, 0);

  spotLight.position.set( 240,30,220 );
  spotLight.rotation.set( 40,0,0 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.set(100,100);
  scene.add(spotLight);


}

function animate() {
  requestAnimationFrame(animate);
  //camera
  camera.position.set(0,0,0);
  camera.lookAt(100,0,0);
  renderer.render(scene, camera);
  }

animate();
