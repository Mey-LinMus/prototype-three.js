import React, { useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../style/App.css"

function App() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [filesList, setFilesList] = useState([]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  return <div>

  </div>;
}

export default App;

