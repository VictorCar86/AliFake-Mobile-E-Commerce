import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import skeletonImage from '../assets/images/skeleton.webp';

const ItemWishList = ({ data, selectedItems, updater, editMode }) => {

    const [lazyImage, setLazyImage] = useState(skeletonImage);

    useEffect(() => {
        setLazyImage(data.image);
    }, [data]);

    const changeSelectedState = () => {
        if (selectedItems.some(item => item === data.id)){
            updater( selectedItems.filter(i => i !== data.id) );
        }
        else {
            updater( [...selectedItems, data.id] );
        }
    };

    return (
        <li className='relative border-b border-b-gray-300 bg-white'>
            <Link className='flex gap-[2%] p-[2%]' to={`/product/${data.id}`}>
                <img
                    className='w-[32vw] max-w-[204px] h-[32vw] max-h-[204px] object-contain object-center'
                    src={lazyImage}
                    alt={data.name}
                    onLoad={() => setLazyImage(data.image)}
                />
                <div className='w-[65%]'>
                    <p className='text-clamp-lg text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden'>{data.name}</p>
                    <p className='text-clamp-base'>{data.currency} {data.price}</p>
                </div>
            </Link>
            {editMode && (
              <>
                <label className='absolute top-0 w-full h-full z-10 cursor-pointer' htmlFor={data.id} />
                <input
                    type="checkbox"
                    onChange={changeSelectedState}
                    className='absolute right-[6%] top-1/2 max-h-8 h-[5vw] max-w-[32px] w-[5vw]'
                    name={data.name}
                    id={data.id}
                />
              </>
            )}
        </li>
    )
};

export default ItemWishList;