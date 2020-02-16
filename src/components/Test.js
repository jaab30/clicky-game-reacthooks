import React from "react";


function Test(props) {


    return (

        
            <div onClick={() => {props.handleClick()}}>
                <h2>Name: {props.name}</h2>
                <img src={props.image} alt={props.name}/>
            </div>
        



    )
}

export default Test;