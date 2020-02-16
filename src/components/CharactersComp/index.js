import React from "react";
import "./style.css";

function CharactersComp(props) {
  console.log(props);
  
  return (
    <div onClick={() => props.handleClick(props.id)} className={`characterContainer ${props.classShake}`}>
      <div className="imgDiv">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p>
          {props.name}
        </p>
      </div>
    </div>
  );
}

export default CharactersComp;
