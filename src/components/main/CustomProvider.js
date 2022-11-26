import { createContext, useState, useContext } from "react"
export const contexto = createContext()
const { Provider } = contexto



export const useCarrito = () => {
    return useContext(contexto)
}


const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const borrarItem = (id) => {

    }

    const agregarProducto = (producto, cantidad) => {
        /* console.log(producto)
        console.log(cantidad) */
        if (isInCart.inCart) {
            //Sumo la cantidad
        } else {
            console.log("producto nuevo en el carrito!")
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
            setTotal(total + producto.price * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
            //pusheo al array
            /* const prodConCant = {
                ...producto,
                cantidad: cantidad
            } */

            //producto.cantidad = cantidad

            //no puedo MODIFICAR LA VARIABLE carrito
            //const nuevoEstado = undefined
            //const copia = carrito
            //const copia = carrito.map(prod=>prod)
            //const copia = [...carrito]
            //copia.push(prodConCant)
            //setCarrito(carrito.map(prod=>prod).push(productoConCantidad))
            //setCarrito([...carrito, prodConCant])
        }
    
    }

    const isInCart = (id) => {
        //return true o false
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,//precio
        cantidadTotal : cantidadTotal,//cant de productos
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider