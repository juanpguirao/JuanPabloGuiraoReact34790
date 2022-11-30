import React from "react"
import { Link } from "react-router-dom"

const Item = ({ id, title, description, price, image }) => {

    return (
				<div className="card">
					<h1>{title}</h1>
					<h3>$ {price}</h3>
					<img src={image} alt={title} className="card__img" />
						<Link  className="card__button" to={"/item/" + id}>Leer más</Link>
							</div >
    )
}
export default Item