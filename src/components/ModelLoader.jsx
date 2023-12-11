import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const ModelLoader = ({ loadModel, albums }) => {
  return <HamburgerMenu albums={albums} loadModel={loadModel} />;
};

export default ModelLoader;
