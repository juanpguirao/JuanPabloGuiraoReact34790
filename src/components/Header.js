import React from "react"
import Link from "react-router-dom"
import Nav from "./NavBar"

const Header=()=>{
    return(
        
        <header id="mainHeader" class="header">
            <Link to="/" className="link">
                <h1>Store</h1>
            </Link>
            <Nav/>
            <input id="search" type="text" value="Search"></input>
            <button onClick="" className="material-icons" >search</button>
        </header>
        
    )
    
}

export default Header
