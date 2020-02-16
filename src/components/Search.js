


import React from "react";


function Search({ searchVal, onChangeHandler }){


    return (
        <nav className="navbar navbar-dark bg-dark mt-5 d-flex justify-content-center">
            <form className="form-inline">
                <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search By Last Name" 
                aria-label="Search"
                onChange={onChangeHandler}
                value={searchVal}
                name="search"
                />
            </form>
        </nav>
    )

}

export default Search;