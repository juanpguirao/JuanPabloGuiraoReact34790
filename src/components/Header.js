import React from "react"
import Nav from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import Search from "./header/Search"


const Header=(prop)=>{
    return(
        
        <header id="mainHeader" className="header"> 
            <ItemListContainer nombre="Juan Pablo" apellido="Guirao"/>       
            <Nav/>
            <Search/>
        </header>
        
    )
    
}

export default Header
