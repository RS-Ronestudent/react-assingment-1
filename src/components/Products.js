import React from 'react'

import Product from './Product'

const Products = (props) => {
    const{products}=props;
  return (
    <div className='products'>
        {products.map((product,id)=><Product product={product} key={id} />)}
    </div>
  )
}

export default Products