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
                <button onClick={handleMore}>+</button>
				<p>{count}</p>
                <button onClick={handleLess}>-</button>		
			</div>
            <button onClick={addCart}>Agregar al carrito</button>
		</div>
	</>)
}

export default ItemCount