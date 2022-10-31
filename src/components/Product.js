import React from 'react'

const Product = (product) => {
  
  return (
<article key={product.id}>{product.nombre}</article>
  )
}

export default Product