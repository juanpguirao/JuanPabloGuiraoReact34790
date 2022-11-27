import { createContext, useState, useContext } from "react"
export const contexto = createContext()
const { Provider } = contexto


const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        const storageCarrito = JSON.parse(localStorage.getItem("carrito"))
        const storageCantidad = JSON.parse(localStorage.getItem("cantidad"))
        const storagePrecio = JSON.parse(localStorage.getItem("precioFinal"))
        if (storageCarrito) {
            setCarrito(storageCarrito)
            setCantidadTotal(storageCantidad)
            setTotal(storagePrecio)
        }
    }, [])
   // agrega productos recuperados de local storage
   useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    localStorage.setItem("cantidad", JSON.stringify(cantidadTotal))
    localStorage.setItem("precioFinal", JSON.stringify(total))
}, [carrito])
//agrega datos al local storage
    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    }
    const borrarItem = (id) => {
    }
    const agregarProducto = (producto, cantidad) => {
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
        }
    }
    const isInCart = (id) => {
        return { inCart: false, item: {}, index: 0}}
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