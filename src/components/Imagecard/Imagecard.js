import React from "react";
import "./Imagecard.css";

function Imagecard({ image, onClick }) {
  return (
    <div className="card">
      <img alt={image} src={image} onClick={onClick} />
    </div>
  );
}

export default Imagecard;
