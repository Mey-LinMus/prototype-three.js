import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Modelfile from "./Models";
import "../styles/App.css";
import VictorianHallway from "./gltfjsx/VictorianHallway";
import UndergroundRoom from "./gltfjsx/UndergroundRoom";
import CyberpunkRoom from "./gltfjsx/CyberpunkRoom";
import HamburgerMenu from "./HamburgerMenu";

const App = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  const albums = [
    {
      name: "Spiderman Album:",
      models: [
        { name: "Portal", path: "models/spiders_portal.glb" },
        {
          name: "Spider-man",
          path: "models/spider-man.glb",
        },
        { name: "Spider-man 2099", path: "models/spider-man_2099_.glb" },
      ],
    },
    {
      name: "Animal Album:",
      models: [
        { name: "Cat", path: "models/cat.glb" },
        { name: "Turtle", path: "models/turtle.glb" },
        { name: "Mink", path: "models/mink.glb" },
        { name: "Leopard", path: "models/leopard.glb" },
        { name: "Dog", path: "models/dog.glb" },
      ],
    },
    {
      name: "Rooms Album:",
      models: [
        { name: "Victorian Hallway", path: <VictorianHallway /> },
        { name: "Underground Room", path: <UndergroundRoom /> },
        { name: "Cyberpunk Room", path: <CyberpunkRoom /> },
        { name: "Modern Living", path: "models/modern_living_room.glb" },
      ],
    },
  ];

  const loadModel = (modelPath) => {
    if (modelPath !== selectedModel) {
      setSelectedModel(modelPath);
      setLoadingError(null);
    }
  };

  return (
    <div>
      <HamburgerMenu albums={albums} loadModel={loadModel} />
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
          selectedModel &&
          (typeof selectedModel === "string" ? (
            <Modelfile
              modelPath={selectedModel}
              onError={(error) => setLoadingError(error.message)}
            />
          ) : (
            selectedModel
          ))
        )}
      </Canvas>
    </div>
  );
};

export default App;
