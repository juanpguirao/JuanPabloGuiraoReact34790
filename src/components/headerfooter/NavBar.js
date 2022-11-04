import React from "react"
import {Link, NavLink} from "react-router-dom"


const Nav =()=>{
    return(
<>
            <nav className="link">
                <Link className="nav__link link" to="/Inicio">Home</Link>
                <Link className="nav__link link" to="/Tienda">Tienda</Link>
                <Link className="nav__link link" to="/Contacto">Contacto</Link>
            </nav>
</>
    )
}   
export default Nav