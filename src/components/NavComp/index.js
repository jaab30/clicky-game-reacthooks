import React from "react";
import "./style.css";

function NavComp(props) {
  return <header id="navbar" className="navContainer">
    <p className="score">Score = {props.counter}</p>
    <div className="titleContainer">
      <img src="./assets/img/sslogov1.png" className="sslogo" alt="Sesame Street Logo"></img><h2 className="gameTitle"> Clicky - Game</h2></div>
    <p className="topScore">Top Score = {props.topScore}</p>
  </header>;
}

export default NavComp;
