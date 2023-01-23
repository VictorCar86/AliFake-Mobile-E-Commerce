import React from 'react';
import { Link } from 'react-router-dom';

const ItemViewedList = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <img className='w-[30vw] max-w-[189px] h-[30vw] max-h-[189px] mb-1.5 rounded-md object-contain object-center' src={product.image} alt={product.id} />
      <p className='pb-[3%] font-bold'>
        {product.currency} {product.price}
      </p>
    </Link>
  )
}

export default ItemViewedList