import React from "react";
import { Html } from "@react-three/drei";

const Spiderman = ({ src }) => {
  return (
    <Html center>
      <iframe
        title="Spider-man (Spider-man: No way Home)"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/2cb11e591cc44357bffc6e23931a78e2/embed"
      ></iframe>
    </Html>
  );
};

export default Spiderman;
