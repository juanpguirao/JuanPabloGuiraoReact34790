import { randProduct } from "@ngneat/falso"
import ItemCount from "./ItemCount"

const ItemDetail = (/* props */) => {

    const producto = randProduct()

    
    //paso 1 ) el comp padre tiene un callback
    const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(producto)
    }

    //paso 2 ) el comp hijo recibe el callback como prop

    return (
        <div>
            <h2>{producto.title} - ${producto.price}</h2>
            <div className="detail-flex">
                <img src={producto.image} alt={producto.title} />
                <div>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>
                    <ItemCount handleOnAdd={handleOnAdd}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail