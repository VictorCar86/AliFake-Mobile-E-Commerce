import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import skeletonImage from '../assets/images/skeleton.webp';

const ItemViewedList = ({ product }) => {
    const [lazyImage, setLazyImage] = useState(skeletonImage);

    useEffect(() => {
        setLazyImage(product.image);
    }, [product]);

    return (
        <Link to={`/product/${product.id}`}>
            <img
              className='w-[30vw] max-w-[189px] h-[30vw] max-h-[189px] mb-1.5 rounded-md object-contain object-center'
              src={lazyImage}
              alt={product.id}
              onLoad={() => setLazyImage(product.image)}
            />
            <p className='pb-[3%] font-bold'>
              {product.currency} {product.price}
            </p>
        </Link>
    )
}

export default ItemViewedList;