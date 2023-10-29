import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stars } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/crocodil.glb");
  return <primitive object={scene} position={[0, 0, 0]} scale={[1, 1, 1]} {...props} />;
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={1.0} />
      <Stars />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Model />
    </Canvas>
  );
}

export default App;
