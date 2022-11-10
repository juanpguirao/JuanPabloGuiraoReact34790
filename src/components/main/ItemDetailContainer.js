import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProductByProductId } from "./utils";
import {toast} from "react-toastify"
import ItemDetail from './ItemDetail';
import Item from './Item';

const ItemDetailContainer = () => {   

    const [items, setItem] = useState({})
    const {id} = useParams()

    useEffect (()=>{setItem({})
                    getProductByProductId(id)
                    .then(res=>{setItem(res)})
                    .catch((err)=>{toast.log(err)})}
                    ,[id])
    return (
        <div className='contenedor-detail'>
            {items.length === 0 ? <h1 className='loading'>Cargando...</h1> : 
            <ItemDetail {...items}/>}
        </div>
    );
}

export default ItemDetailContainer;