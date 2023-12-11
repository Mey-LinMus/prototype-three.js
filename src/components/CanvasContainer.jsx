import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Sky,
  Cloud,
  PresentationControls,
} from "@react-three/drei";
import GLTFLoader from "./GLTFLoader";

const CanvasContainer = ({
  selectedModel,
  loadingError,
  setSelectedModel,
  setLoadingError,
}) => {
  return (
    <Canvas shadows flat dpr={[2, 2]} style={{ position: "absolute" }}>
      <PresentationControls
        snap
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[0, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <OrbitControls />

        <Sky
          distance={450000}
          inclination={0}
          azimuth={-180}
          rayleigh={5}
          turbidity={10}
          mieCoefficient={0.01}
          sunPosition={[20, 0, 10]}
        />
        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]} />

        <Cloud
          segments={90}
          bounds={[100, 100, 100]}
          volume={4}
          color="#FEF9E7"
          fade={600}
        />

        <ambientLight intensity={5} />
        <Stars
          radius={50}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

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
      </PresentationControls>
    </Canvas>
  );
};

export default CanvasContainer;
