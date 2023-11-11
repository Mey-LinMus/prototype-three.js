import React from "react";
import { useGLTF } from "@react-three/drei";

const GLTFLoader  = (props) => {
  const { scene } = useGLTF(props.modelPath);

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
      {...props}
    />
  );
};

export default GLTFLoader;
 