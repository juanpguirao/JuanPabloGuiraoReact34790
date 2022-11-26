import React from "react"
import {NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";
import { productosIniciales } from "../main/utils"

const Nav =(isHeader)=>{
    const categorias = productosIniciales.map((item) => {
        return (
            <NavLink to={`/productos/${item.category}`} key={item.category} className="link" activeClassName="active">
                {item.category}
            </NavLink>
        )
    })
    return(
        <nav>
                {!isHeader && categorias }
                <NavLink className="nav__link link" to="/Home">Home</NavLink>
                <NavLink className="nav__link link" to="/Productos">Tienda</NavLink>
                <NavLink className="nav__link link" to="/Contacto">Contacto</NavLink>
                <NavLink className="nav__link link" to="/Carrito">Carrito</NavLink>
                <CartWidget/>
        </nav>
    )
}   
export default Nav