import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

// /3d-objects/Formula1.obj

function App() {
  useEffect(() => {

    const scene = new THREE.Scene();

  
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create an OrbitControls to interact with the scene
    const controls = new OrbitControls(camera, renderer.domElement);

    // Load the OBJ model
    const loader = new OBJLoader();
    loader.load(
      "/3d-objects/IronMan.obj",
      (obj) => {
        // Create a material for the model
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Apply the material to the model
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        // Add the model to the scene
        scene.add(obj);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened", error);
      }
    );

    // Create a function to handle window resizing
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Create an animate function to render the scene
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div />;
}

export default App;
