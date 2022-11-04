import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {toast} from "react-toastify"
import ItemList from "./ItemList"
import {getProductByCategoryId, getProducts} from "./utils"

function ItemListContainer() {
  const [items, setItems] = useState ([])
  const {cat} = useParams()
  
  useEffect (()=>{
    if(cat){
      getProductByCategoryId(cat) 
      .then(res => {setItems(res)})
      .catch(err => {toast.error(err)})
    }else{
      getProducts()
      .then((respuesta)=>{setItems(respuesta)})
      .catch((error) => {console.log(error)})}
    },[cat])
return (
  <div>
      <h2>Productos</h2>
      {items.length == 0 ? <h1>Cargando Productos...</h1> : 
      <ItemList items={items}/>}
  </div>
)

}

export default ItemListContainer