var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
r = 1;
h = 3;
var geometry = new THREE.ConeGeometry( r, h, 12 );
material = new THREE.MeshPhongMaterial({ color: 0x0000ff });
cone = new THREE.Mesh(geometry, material);

cone.rotateX(90 * (Math.PI/180));
cone.translateY(h/3);

cone.translateY(-h/3);
cone.rotateX(-90 * (Math.PI/180));

cone.translateY(h/6.4);
cone.translateX(r *( r + ((r*3)/4)));
cone.rotateZ(-90 * (Math.PI/180));
cone.rotateZ(-Math.atan(r/h));

scene.add(cone);

const light1 = new THREE.DirectionalLight(0x00ffff, 1); 
light1.position.set(-1, 2, 4);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0x00ffff, 1);
light2.position.set(1, -2, -4);
scene.add(light2);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();