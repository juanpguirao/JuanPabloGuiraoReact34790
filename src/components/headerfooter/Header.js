import React from "react"
import {Link} from "react-router-dom"
import Nav from "./NavBar"

export const Header=()=>{
    return(
        
        <header id="mainHeader" className="header">
            <Link to="/Home" className="link">
            </Link>
            <Nav isHeader/>
        </header>
        
    )
    
}
export default Header
