import React from "react";
import "./Main.css";

function Header() {
  return (
    <div className="jumbotron text-center">
      <div className="Header">
        <h1>Clicky-Game</h1>
        <h2>
          Click on a picture to earn points, but dont click the same picture
          more than once or you lose
        </h2>
      </div>
    </div>
  );
}

export default Header;
