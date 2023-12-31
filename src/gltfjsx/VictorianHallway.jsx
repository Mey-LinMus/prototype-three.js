/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 victorian_hallway.glb 
Author: coleerc (https://sketchfab.com/coleerc)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/victorian-hallway-diorama-1e20facf9cf14dbf84fac4e33eba3b71
Title: Victorian Hallway Diorama
*/

import React, { useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import "../styles/Models.css";

const Room = (props) => {
  const { nodes, materials } = useGLTF("models/victorian_hallway.glb");
  const [changeColor, setChangeColor] = useState(false);

  const ChangeColor = () => {
    // Toggle wall color between red and blue
    if (changeColor) {
      materials.wall_old_environmentwallpaper_MAT.color.set(0xff0000); 
    } else {
      materials.wall_old_environmentwallpaper_MAT.color.set(0x0000ff); 
    }
    setChangeColor(!changeColor);
  };

  return (
    <>
      <Html className="text">
        <button onClick={ChangeColor} className="action-button">
          Change wall collor
        </button>
      </Html>
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <mesh
            geometry={nodes.diorama_table1trimsheet_MAT_0.geometry}
            material={materials.table1trimsheet_MAT}
          />
          <mesh
            geometry={nodes.diorama_portrait_MAT_0.geometry}
            material={materials.portrait_MAT}
          />
          <mesh
            geometry={nodes.diorama_trimsheet_MAT_0.geometry}
            material={materials.trimsheet_MAT}
          />
          <mesh
            geometry={nodes.diorama_clock_MAT_0.geometry}
            material={materials.clock_MAT}
          />
          <mesh
            geometry={nodes.diorama_fabric_MAT_0.geometry}
            material={materials.fabric_MAT}
          />
          <mesh
            geometry={
              nodes.diorama_wall_old_environmenttrimSheet_MAT_0.geometry
            }
            material={materials.wall_old_environmenttrimSheet_MAT}
          />
          <mesh
            geometry={
              nodes.diorama_wall_old_environmentwallpaper_MAT_0.geometry
            }
            material={materials.wall_old_environmentwallpaper_MAT}
          />
          <mesh
            geometry={nodes.diorama_woodPanel_MAT_0.geometry}
            material={materials.woodPanel_MAT}
          />
        </group>
      </group>
    </>
  );
};

useGLTF.preload("models/victorian_hallway.glb");
export default Room;
