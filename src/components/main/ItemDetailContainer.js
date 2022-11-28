import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProductById } from "../Products";
import {toast} from "react-toastify"
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {   

    const [items, setItem] = useState({})
    const {id} = useParams()

    useEffect (()=>{    
        getProductById(id)
        .then((res) => {
          setItem(res.data())
        })
        .catch((e) => {
          toast.error(e)
        })
  
    }, [id])
    return (
        <div className='contenedor-detail'>
            {<ItemDetail producto={{id, ...items}}/>}
        </div>
    );
}

export default ItemDetailContainer;