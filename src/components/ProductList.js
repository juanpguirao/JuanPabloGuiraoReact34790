import React from 'react'
import Product from './Product'

const ProductList = ({product}) => {
    
  return (
    <section>
        {product.map((product) => {
            return (
                <Product product={product}/>
            )

        })}
    </section>
  )
}

export default ProductList