import React from "react"
import {NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";


const Nav =()=>{
    return(
        <nav>
                <NavLink to="/">  <img src="/img/logo_puppis_250x72.png" alt="puppis logo"></img></NavLink>           
                <NavLink className="nav__link link" to="/">Home</NavLink>
                <NavLink className="nav__link link" to="/productos">Tienda</NavLink>
                <NavLink className="nav__link link" to="/productos/Perros">Perros</NavLink>
                <NavLink className="nav__link link" to="/productos/Gatos">Gatos</NavLink>
                <CartWidget/>
        </nav>
    )
}
export default Nav