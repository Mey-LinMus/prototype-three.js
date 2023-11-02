import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Modelfile from "./Models";
import "../App.css";

// https://3dviewer.net/

const App = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  const models = [
    { name: "Portal", path: "/spiders_portal.glb" },
    { name: "Spider-man", path: "/spider-man.glb" },
    { name: "Cat", path: "/cat.glb" },
    { name: "Spider-man 2099", path: "/spider-man_2099_.glb" },
  ];

  const loadModel = (modelPath) => {
    setSelectedModel(modelPath);
    setLoadingError(null);
  };

  return (
    <div>
      <div className="button-container">
        {models.map((model, index) => (
          <button
            key={index}
            className="button"
            onClick={() => loadModel(model.path)}
          >
            {model.name}
          </button>
        ))}
      </div>
      <Canvas style={{ position: "absolute" }}>
        <OrbitControls />
        <ambientLight intensity={5.5} />
        <Stars />
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
