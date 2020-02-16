import React from "react";
import "./style.css";

function HeaderComp(props) {
  return <div className="title">
    <h2 >{props.header1}</h2>
  </div>
}
export default HeaderComp;
