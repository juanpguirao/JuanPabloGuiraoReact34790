import React, {useEffect, useState} from 'react'
import ProductList from './ProductList'

const ProductContainer = () => {

  const [product,setProduct] = useState([])

useEffect(()=>{
  setProduct([
    {id:1,nombre:"Pepsi"},
    {id:2,nombre:"Coca"},
    {id:3,nombre:"Talca"}
  ])
},[])
   
  return (
    <div>
      <ProductList product={product}/>

    </div>
  )
}

export default ProductContainer