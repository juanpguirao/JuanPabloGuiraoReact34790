import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {context} from "../../App"


function CartWidget() {
  const valorDelContexto = useContext(context);
  
  return (
    <Link to="/Carrito">
    <div className="material-icons">shopping_cart</div>
    <span>{valorDelContexto.qty}</span>
    </Link>
  )
}

export default CartWidget