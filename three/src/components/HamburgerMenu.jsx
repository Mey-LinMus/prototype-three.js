import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../HamburgerMenu.css";

const HamburgerMenu = ({ albums,  loadModel }) => {
  return (
    <Menu right>
      {albums.map((album, albumIndex) => (
        <div key={albumIndex} className="album-menu">
          <p>{album.name}</p>
          <div className="model-menu">
            {album.models.map((model, modelIndex) => (
              <button
                key={modelIndex}
                className="model-button"
                onClick={() => loadModel(model.path)}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </Menu>
  );
};

export default HamburgerMenu;
