import React, { useEffect } from "react";
import * as THREE from "three";
import Stats from "stats.js";
import './Earth.css';

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let earth: THREE.Mesh;
let cloud: THREE.Mesh;
let pointLight: THREE.PointLight;
let ambientLight: THREE.AmbientLight;

let mouseDown = false;
let mouseX = 0;
let mouseY = 0;
let stats: Stats;

const EarthScene: React.FC = () => {
  useEffect(() => {
    init();
    animate();

    return () => {
      // Cleanup on component unmount
      scene.clear();
      document.body.removeChild(renderer.domElement); 
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  function init() {
    scene = new THREE.Scene();
    
    // Set up the camera to be more adaptive to screen size (centered view)
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    camera.position.z = 160;
    camera.position.x = 0; // Center the camera for mobile and desktop
    camera.position.y = 0;

    stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);

    // Earth terrain
    const earthTexture = new THREE.TextureLoader().load("https://i.postimg.cc/ry0pcyyZ/earth.jpg");
    const earthBump = new THREE.TextureLoader().load("https://i.postimg.cc/mgrJfkBt/bump.jpg");
    const earthSpecular = new THREE.TextureLoader().load("https://i.postimg.cc/R06YhY3m/spec.jpg");
    const earthGeometry = new THREE.SphereGeometry(15, 32, 32); // Reduced size
    const earthMaterial = new THREE.MeshPhongMaterial({
      shininess: 40,
      bumpScale: 1,
      map: earthTexture,
      bumpMap: earthBump,
      specularMap: earthSpecular,
    });
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Earth cloud
const cloudTexture = new THREE.TextureLoader().load("https://i.postimg.cc/k4WhFtFh/cloud.png");
const cloudGeometry = new THREE.SphereGeometry(16, 32, 32); // Reduced size
const cloudMaterial = new THREE.MeshPhongMaterial({
  shininess: 10,  // This works with MeshPhongMaterial
  map: cloudTexture,
  transparent: true,
  opacity: 0.5 // Example opacity adjustment (optional)
});

const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(cloud);


    // Check screen width and apply position shift for larger screens (laptop/desktop)
    if (window.innerWidth > 1024) {  // Adjust this threshold for your needs
      earth.position.x = -50;  // Move Earth to the left for laptop/desktop
      cloud.position.x = -50; // Move Cloud to the left for laptop/desktop
    } else {
      earth.position.x = 0;   // Keep Earth centered on smaller screens
      cloud.position.x = 0;   // Keep Clouds centered on smaller screens
    }

    // Point light
    pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(-400, 100, 150);
    scene.add(pointLight);

    // Ambient light
    ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); 

    // Event handlers
    window.addEventListener("resize", onWindowResize, false);
    document.addEventListener("mousemove", (e) => onMouseMove(e), false);
    document.addEventListener("mousedown", (e) => onMouseDown(e), false);
    document.addEventListener("mouseup", (e) => onMouseUp(e), false);
  }

  function animate() {
    requestAnimationFrame(animate);
    stats.begin();
    earth.rotation.y += 0.001;
    cloud.rotation.y += 0.001;
    stats.end();
    renderer.render(scene, camera);
  }

  function onWindowResize() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseMove(evt: MouseEvent) {
    if (!mouseDown) return;
    evt.preventDefault();
    const deltaX = evt.clientX - mouseX;
    const deltaY = evt.clientY - mouseY;
    mouseX = evt.clientX;
    mouseY = evt.clientY;
    rotateScene(deltaX, deltaY);
  }

  function onMouseDown(evt: MouseEvent) {
    evt.preventDefault();
    mouseDown = true;
    mouseX = evt.clientX;
    mouseY = evt.clientY;
  }

  function onMouseUp(evt: MouseEvent) {
    evt.preventDefault();
    mouseDown = false;
  }

  function rotateScene(deltaX: number, deltaY: number) {
    earth.rotation.y += deltaX / 300;
    earth.rotation.x += deltaY / 300;
    cloud.rotation.y += deltaX / 300;
    cloud.rotation.x += deltaY / 300;
  }

  return <div />;
};

export default EarthScene;
