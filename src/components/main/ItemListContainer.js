import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductByCategory, getProducts} from "../Products"
import {toast} from "react-toastify"
import ItemList from "./ItemList"



function ItemListContainer() {

  const [items, setItems] = useState ([])
  const {categoria} = useParams() 

  useEffect (()=>{

    if(categoria){
      getProductByCategory(categoria) 
      .then(res => {
        const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setItems(prods)
      })
      .catch(err => {toast.error(err)})
    }else{
      getProducts()
      .then((res)=>{const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setItems(prods)})
      .catch((error) => {console.log(error)})}
    },[categoria])
    return (
      <div>
        <div>
        {categoria ? <h2>{categoria}</h2> : <h2>{}</h2>}
        </div>
        <div>
          <ItemList items={items} />
        </div>
      </div>
)

}

export default ItemListContainer