/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 Spider-Woman.glb 
Author: Diox..Andrey (https://sketchfab.com/Diox..Andrey)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gwen-stacy-downloadable-83c543eb10804a8b82827401012d61ba
Title: Gwen Stacy (downloadable)
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const SpiderWomen = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/Spider-Woman.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Idle"].play().setDuration(3);
  }, [actions]);

  console.log(animations);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.192}
        >
          <group
            name="97c2cb86eccd4a549e20779f0334db52fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" />
                  <group name="default" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Scene_-_Root"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default SpiderWomen;
useGLTF.preload("models/Spider-Woman.glb");
