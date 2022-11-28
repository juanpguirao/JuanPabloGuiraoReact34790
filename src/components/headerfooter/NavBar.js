import React from "react"
import {NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";


const Nav =(isHeader)=>{
    // const categorias = productos.map((item) => {
    //     return (
    //         <NavLink to={`/productos/${item.category}`} key={item.category} className="link" activeClassName="active">
    //             {item.category}
    //         </NavLink>
    //     )
    // })
    return(
        <nav>
                {/* {!isHeader && categorias } */}
                <NavLink className="nav__link link" to="/home">Home</NavLink>
                <NavLink className="nav__link link" to="/productos">Tienda</NavLink>
                <NavLink className="nav__link link" to="/productos/Perros">Perros</NavLink>
                <NavLink className="nav__link link" to="/productos/Gatos">Gatos</NavLink>
                <NavLink className="nav__link link" to="/contacto">Contacto</NavLink>
                <NavLink className="nav__link link" to="/carrito">Carrito</NavLink>
                <CartWidget/>
        </nav>
    )
}
export default Nav