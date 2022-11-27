import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductByCategoryId, getProducts} from "./utils"
import {toast} from "react-toastify"
import ItemList from "./ItemList"
import { db } from '../firebase'
import {collection} from "firebase/firestore"

function ItemListContainer() {

  const [items, setItems] = useState ([])
  const {cat} = useParams() 
  
  useEffect (()=>{
    const  productosDB =  collection(db, "productos")
    const pedido = getDocs (productosDB)
    pedido.then((resultado)=>{}).catch((error)=>{})
    
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