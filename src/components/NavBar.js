import React from "react"
import Card from "./CartWidget"
import {Link} from "react-router-dom"


const Nav =()=>{
    return(
<>
            <div>

                <Card/>
            </div>
            <nav>
                <Link to="/Inicio">Home</Link>
                <Link to="/Tienda">Tienda</Link>
                <Link to="/Contacto">Contacto</Link>
            </nav>
</>
    )
}   
export default Nav