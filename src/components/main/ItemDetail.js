import { randProduct } from "@ngneat/falso"
import ItemCount from "./ItemCount"

const ItemDetail = () => {

    const producto = randProduct()
    const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(producto)
    }
    return (
        <div>
            <h2>{producto.title} - ${producto.price}</h2>
            <div className="detail-flex">
                <img src={producto.image} alt={producto.title} />
                <div>
                    <p>{producto.description}</p>
                    <ItemCount handleOnAdd={handleOnAdd}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail