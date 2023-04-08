import React from "react";
import "./styles/Header.css";
import trollFace from "../images/Troll Face.png";
function Header() {
  return (
    <nav>
      <div className="flex">
        <img className="navLogo" alt="Troll Face" src={trollFace} />
        <h2>Meme Generator</h2>
      </div>
      <p>React Course - Project 3</p>
    </nav>
  );
}

export default Header;
