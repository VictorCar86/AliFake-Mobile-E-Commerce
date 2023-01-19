import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import skeletonImage from '../assets/images/skeleton.webp';

const ItemWishList = ({ data }) => {

    const [imageLoaded,setImageLoaded] = useState(skeletonImage);

    return (
        <li className='border-b border-b-gray-300'>
            <Link className='flex gap-[2%] p-[2%]' to={`/product/${data.id}`}>
                <img
                    className='w-[32vw] max-w-[204px] h-[32vw] max-h-[204px] object-contain object-center'
                    src={imageLoaded}
                    alt={data.name}
                    onLoad={() => setImageLoaded(data.image)}
                />
                <div className='w-[65%]'>
                    <p className='text-clamp-lg text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden'>{data.name}</p>
                    <p className='text-clamp-base'>{data.currency} {data.price}</p>
                </div>
            </Link>
        </li>
    )
}

export default ItemWishList