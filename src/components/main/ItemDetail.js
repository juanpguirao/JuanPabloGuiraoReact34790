import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";
import { useCustomProvider } from "./CustomProvider";



function ItemDetail({ producto }) {
	const [cantidad, setCantidad] = useState(1)
	const { agregarProducto } = useCustomProvider()
	const [confirmado, setConfirmado] = useState(false)
	const [habilitado, setHabilitado] = useState(false)

	const habilitar = () => {
		setHabilitado(false)
	}

	const handleOnAdd = (cantidad) => {
		setCantidad(cantidad)
		setConfirmado(true)
	}

	const handleClick = () => {
		agregarProducto(producto, cantidad)
		setHabilitado(true)
		toast.success("Producto agregado al carrito", { autoClose: 1500 })
	}

	return (
		<>
					<div className="contenedor__detail">
						<div className="div__detail">
							<h1>{producto.title}</h1>
							<h2>$ {producto.price}</h2>
							<img src={producto.img} alt={producto.title} className="img__detail"></img>
								<div>	{producto.description}</div>
						</div>
						<div className="item__count">
							<ItemCount habilitar={habilitar} handleOnAdd={handleOnAdd} />
							{confirmado && <button disabled={habilitado} onClick={handleClick}> Agregar al Carrito</button>}

						</div>
					</div>
		</>
	)
}

export default ItemDetail