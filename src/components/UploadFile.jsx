import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/3d-objects/Formula1.gltf");
  return <primitive object={scene} {...props} />;
}

const UploadFiles = () => {
  return (
    <Canvas shadows camera={{ fov: 50 }} style={{ position: "absolute" }}>
      <PresentationControls
        speed={1.5}
        global
        zoom={1.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"}>
          <Model scale={0.05} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default UploadFiles;
