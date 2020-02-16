import React from "react";
import "./style.css";

function DisplayComp(props) {
  return <div className="mainContainer">
    <div className="displayComp">{props.children}</div>
  </div>;
}

export default DisplayComp;
