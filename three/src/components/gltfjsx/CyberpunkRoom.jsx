import React, { useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import "../../styles/Models.css";

const CyberpunkRoom = (props) => {
  const { nodes, materials } = useGLTF("models/cyberpunk_room.glb");
  const [lightsOn, setLightsOn] = useState(false);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
  };

  return (
    <>
      <Html className="text">
        <button onClick={toggleLights} className="action-button">
          Lights On
        </button>
      </Html>
      <group {...props} dispose={null}>
        <group position={[1.198, -0.124, -0.827]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Material}
          />
          {lightsOn && (
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Yeet}
            />
          )}
        </group>
      </group>
    </>
  );
};

useGLTF.preload("models/cyberpunk_room.glb");
export default CyberpunkRoom;
