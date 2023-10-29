import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Modelfile from "../components/Models";

const App = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    { name: "Crocodile", path: "/crocodil.glb" },
    { name: "Dino", path: "/dinosaur.glb" },
    { name: "Cat", path: "/cat.glb" },
    { name: "Dragon", path: "/dragon.glb" },
  ];

  const loadModel = (modelPath) => {
    setSelectedModel(modelPath);
  };

  return (
    <div>
      <div>
        {models.map((model, index) => (
          <button key={index} onClick={() => loadModel(model.path)}>
            {model.name}
          </button>
        ))}
      </div>
      <Canvas style={{ position: "absolute" }}>
        <OrbitControls />
        <ambientLight intensity={1.0} />
        <Stars />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        {selectedModel && <Modelfile modelPath={selectedModel} />}
      </Canvas>
    </div>
  );
};

export default App;
