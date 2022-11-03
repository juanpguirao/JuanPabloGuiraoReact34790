import React from "react"
import Link from "react-router-dom"
import Nav from "./NavBar"
<<<<<<< HEAD
import ItemListContainer from "./ItemListContainer"
import Search from "./header/Search"
=======
>>>>>>> c0e2a8ffdc48faee2ff7084770acacaa368e0937

const Header=()=>{
    return(
        
<<<<<<< HEAD
        <header id="mainHeader" className="header"> 
            <ItemListContainer nombre="Juan Pablo" apellido="Guirao"/>       
=======
        <header id="mainHeader" class="header">
            <Link to="/" className="link">
                <h1>Store</h1>
            </Link>
>>>>>>> c0e2a8ffdc48faee2ff7084770acacaa368e0937
            <Nav/>
            <Search/>
        </header>
        
    )
    
}

export default Header
