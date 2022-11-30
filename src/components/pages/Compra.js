import React from 'react'
import { useCustomProvider } from '../main/CustomProvider'
import { Card, Container } from '@mui/material'
import { Form } from './Form'

function Compra() {
	const value = useCustomProvider()
	const carrito = value.productos
	const total = value.total

	return (
		<Container maxWidth="md">
			<Card>
				{
					carrito.map((producto) => (
						<div key={producto.id}>
                          
							<div>
								<img src={producto.image} alt={producto.title}></img>
								<h3>{producto.title}</h3>
								<p >Cantidad: {producto.cantidad}</p>
								<p>$ {producto.cantidad * producto.price}</p>

							</div>
						</div>
					)
					)}
				<div>
					<h2>Total: $ {total} </h2>
				</div>
			</Card>
            <Form/>
		</Container>
	)
}
export default Compra