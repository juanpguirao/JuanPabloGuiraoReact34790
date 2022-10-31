import React from "react"
import Nav from "./NavBar"
import ItemListContainer from "./ItemListContainer"


const Header=(prop)=>{
    return(
        
        <header id="mainHeader" class="header"> 
            <ItemListContainer nombre="Juan Pablo" apellido="Guirao"/>       
            <Nav/>
            <input id="search" type="text" value="Search"></input>
            <button onClick="" className="material-icons" >search</button>
        </header>
        
    )
    
}

export default Header
