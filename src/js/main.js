import * as Three from 'three';
import shapeGenerator from './shapeGenerator';
// import MotionRandomizer from './motionRandomizer';
// const motionRandomizer = new MotionRandomizer();
const scene = new Three.Scene();
// scene.fog = new Three.FogExp2(shapeGenerator.getRandomColor(), 50);
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new Three.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cube = shapeGenerator.createCube();
scene.add( cube );

const cube2 = shapeGenerator.createCube();
scene.add( cube2 );

const sphere1 = shapeGenerator.createRandomSphere();
scene.add( sphere1 );

const sphere2 = shapeGenerator.createRandomSphere();
scene.add( sphere2 );

const sphere3 = shapeGenerator.createRandomSphere();
scene.add( sphere3 );

// const line1 = shapeGenerator.createRandomLine();
// scene.add( line1 );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  cube.rotation.y += 0.01;
  cube2.rotation.y -= 0.01;
  cube.rotation.x += 0.01;
  cube2.rotation.x -= 0.01;
  // cube2.material.color.set(shapeGenerator.getRandomColor());
  // cube.color = shapeGenerator.getRandomColor();
  sphere1.rotation.x -= 0.01;
  sphere1.rotation.y -= 0.01;
  sphere1.rotation.z -= 0.01;
  // sphere1.material.color.set(shapeGenerator.getRandomColor());


  renderer.render( scene, camera );
}

animate();
