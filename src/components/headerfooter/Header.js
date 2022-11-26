import React from "react"
import {Link} from "react-router-dom"
import Nav from "./NavBar"
import CartWidget from "./CartWidget"

export const Header=()=>{
    return(
        
        <header id="mainHeader" className="header">
            <Link to="/Home" className="link">
                <h1>Store</h1>
            </Link>
            <CartWidget />
            <Nav/>
        </header>
        
    )
    
}
export default Header
