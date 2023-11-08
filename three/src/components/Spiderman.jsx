import React from "react";
import { Html } from "@react-three/drei";

const Spiderman = ({ src }) => {
  return (
    <Html center>
      <iframe
        title="Spiderman"
        frameborder="0"
        allow="autoplay; fullscreen; vr; xr; xr-spatial-tracking"
        src="https://sketchfab.com/models/476522e7076c4763a7e3ca4731e0add9/embed?transparent=1"
      ></iframe>
    </Html>
  );
};

export default Spiderman;
