import { useState } from "react"

function ItemCount({ handleOnAdd, habilitar }) {
	const [count, setCount] = useState(1)

	const handleMore = () => {
		setCount(count + 1)
		habilitar(false)
	}

	const handleLess = () => {
		if (count > 1) {
			setCount(count - 1)
			habilitar(false)
		}
	}

	const addCart = () => {
		handleOnAdd(count)
		habilitar(true)
	}

	return (<>
		<div>
			<div className="counter__buttons">
                <button className="counter__button" onClick={handleLess}>-</button>		
				<p>{count}</p>
                <button className="counter__button" onClick={handleMore}>+</button>
			</div>
            <button onClick={addCart}>Cantidad a agregar</button>
		</div>
	</>)
}

export default ItemCount