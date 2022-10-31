 import React, { useEffect, useState } from 'react'


function ItemListContainer() {

  const [Product, setEstado] = useState ([])

  useEffect (()=>{
    let simulacionPedido = new Promise((res)=>{
      setTimeout(() => {
        res([
          {id:1,nombre:"Pepsi"},
          {id:2,nombre:"Coca"},
          {id:3,nombre:"Talca"}
        ])
      }, 2000);
    })
    simulacionPedido
    .then((respuesta)=>{
      setEstado(respuesta)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
   
  return ( 
    <div> cagando prod....</div>
  )
}

export default ItemListContainer