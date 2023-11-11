import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sky, Cloud } from "@react-three/drei";
import GLTFLoader  from "./GLTFLoader";

const CanvasContainer = ({ selectedModel, loadingError, setSelectedModel, setLoadingError }) => {
  return (
    <Canvas style={{ position: "absolute" }}>
      <OrbitControls />

      <Sky
        distance={450000}
        inclination={0.35}
        sunPosition={[0, 5, 0]}
        sunColor="black"
        groundColor="#003366"
      />

      <Cloud segments={90} bounds={[100, 100, 100]} volume={4} color="#FEF9E7" fade={600} />

      <ambientLight intensity={5.5} />
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {loadingError ? (
        <div className="error-message">{loadingError}</div>
      ) : (
        selectedModel &&
        (typeof selectedModel === "string" ? (
          <GLTFLoader
            modelPath={selectedModel}
            onError={(error) => setLoadingError(error.message)}
          />
        ) : (
          selectedModel
        ))
      )}
    </Canvas>
  );
};

export default CanvasContainer;
