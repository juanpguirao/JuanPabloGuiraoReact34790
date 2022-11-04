import React from "react"
import {Link} from "react-router-dom"
import Nav from "./NavBar"
import Search from "./Search"


export const Header=()=>{
    return(
        
        <header id="mainHeader" class="header">
            <Link to="/" className="link">
                <h1>Store</h1>
            </Link>
            <Nav/>
            <Search/>
        </header>
        
    )
    
}
export default Header
