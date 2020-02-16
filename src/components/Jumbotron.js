import React from "react";


function Jumbotron({ children }){


    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Employee Management</h1>
                { children }
            </div>
        </div>
    )




}

export default Jumbotron;