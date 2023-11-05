import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Modelfile from "./Models";
import "../App.css";
import HamburgerMenu from "./HamburgerMenu"; 

const App = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  const albums = [
    {
      name: "Spiderman Album:",
      models: [
        { name: "Portal", path: "/spiders_portal.glb" },
        { name: "Spider-man", path: "/spider-man.glb" },
        { name: "Spider-man 2099", path: "/spider-man_2099_.glb" },
      ],
    },
    {
      name: "Animal Album:",
      models: [
        { name: "Cat", path: "cat.glb" },
        { name: "Turtle", path: "turtle.glb" },
        { name: "Mink", path: "mink.glb" },
        { name: "Leopard", path: "leopard.glb" },
        { name: "Dog", path: "dog.glb" },
      ],
    },
    // Add more albums as needed
  ];

  const loadModel = (modelPath) => {
    if (modelPath !== selectedModel) {
      setSelectedModel(modelPath);
      setLoadingError(null);
    }
  };

  return (
    <div>
      <HamburgerMenu albums={albums} loadModel={loadModel} /> {/* Add the HamburgerMenu component */}
      <Canvas style={{ position: "absolute" }}>
        <OrbitControls />
        <ambientLight intensity={5.5} />
        <Stars
          radius={50}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <spotLight position={[10, 15, 10]} angle={0.3} />
        {loadingError ? (
          <div className="error-message">{loadingError}</div>
        ) : (
          selectedModel && (
            <Modelfile
              modelPath={selectedModel}
              onError={(error) => setLoadingError(error.message)}
            />
          )
        )}
      </Canvas>
    </div>
  );
};

export default App;
