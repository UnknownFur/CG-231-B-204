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
// Tamaño Cubo Inicial
Size = 2;
// Cantidad Cubos
Cubes = 2
// Posición cubos
x = Size / 2;
y = Size / 2;
z = Size / 2;

cube = [];
material = [];
color = [];

for (var i = 0; i <= Cubes; i++){
  color[i] = Math.random() * 0xffffff;
  var geometry = new THREE.BoxGeometry(Size, Size, Size);
  material.push(new THREE.MeshPhongMaterial({ color: color[i] }));
  cube[i] = new THREE.Mesh(geometry, material[i]);

  cube[i].translateX(x);
  cube[i].translateY(y);
  cube[i].translateZ(z);

  y = y + (Size - (Size/4));

  Size = Size / 2;
  scene.add(cube[i])
}

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