import React, { useState } from "react";
import CanvasContainer from "./CanvasContainer";
import ModelLoader from "./ModelLoader";
import "../styles/App.css";
import VictorianHallway from "../gltfjsx/VictorianHallway";
import UndergroundRoom from "../gltfjsx/UndergroundRoom";
import CyberpunkRoom from "../gltfjsx/CyberpunkRoom";
import Kitchen from "../gltfjsx/Kitchen";
import FuturSpiderman from "../gltfjsx/FuturSpiderman";
import Spiderman from "../gltfjsx/Spiderman";

const App = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  const albums = [
    {
      name: "Spiderman Album:",
      models: [
        { name: "Portal", path: "models/spiders_portal.glb" },
        { name: "Spider-man", path: <Spiderman /> },
        { name: "Spider-man 2099", path: <FuturSpiderman /> },
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
        { name: "Kitchen", path: <Kitchen /> },
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
      <ModelLoader albums={albums} loadModel={loadModel} />
      <CanvasContainer
        selectedModel={selectedModel}
        loadingError={loadingError}
        setSelectedModel={setSelectedModel}
        setLoadingError={setLoadingError}
      />
    </div>
  );
};

export default App;
