import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {contexto} from "../main/CustomProvider"


function CartWidget() {
  const valorDelContexto = useContext(contexto);
  
  return (
    <Link to="/Carrito">
    <div className="material-icons">shopping_cart</div>
    <span>{valorDelContexto.qty}</span>
    </Link>
  )
}

export default CartWidget