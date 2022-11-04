import React from "react"
import {Link, NavLink} from "react-router-dom"


const Nav =()=>{
    return(
<>
            <nav className="link">
                <Link className="nav__link link" to="/Home">Home</Link>
                <Link className="nav__link link" to="/Productos">Tienda</Link>
                <Link className="nav__link link" to="/Contacto">Contacto</Link>
                <Link className="nav__link link" to="/Carrito">Carrito</Link>
            </nav>
</>
    )
}   
export default Nav