import React from "react";

function Navbar({ score, highScore }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          <h1>Clicky Game</h1>
        </a>
        <h2>
          <span>Click an Image to Begin! </span>
        </h2>
        <div>
          <ul className="menu">
            <li>
              <h5 className="menu-text">
                Score: <span>{score}</span>
              </h5>
            </li>
            <li>
              <h5 className="menu-text">
                High Score: <span>{highScore}</span>
              </h5>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
