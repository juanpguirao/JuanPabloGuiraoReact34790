import React from "react"
import { Link } from "react-router-dom"

const Item = ({ id, title, category, price, image }) => {

    return (
				<div className="card__div">
					<h1>{title}</h1>
					<h3>$ {price}</h3>
					<h4>{category}</h4>
					<img src={image} alt={title} className="card__img" />
						<Link to={"/item/" + id}>Leer más</Link>
				</div >
    )
}
export default Item