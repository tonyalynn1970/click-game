import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="wrapper d-flex flex-row flex-wrap">{props.children}</div>
  );
}

export default Container;
