import React, { useState, useEffect } from 'react';
import { BiStoreAlt } from 'react-icons/bi';
import { HiMinus, HiPlus } from "react-icons/hi";
import skeletonImage from '../assets/images/skeleton.webp';

const ItemOrder = ({ data, items, updater }) => {
    const [lazyImage, setLazyImage] = useState(skeletonImage);

    useEffect(() => {
        setLazyImage(data.image);
    }, [data]);

    const [amount, setAmount] = useState(data.amount);

    useEffect(() => {
        if (amount !== data.id){
            const filteredItems = items.filter(item => item.id !== data.id);
            updater([...filteredItems, {id: data.id, amount}]);
        }
    }
    , [amount]);

    return (
        <section className='m-[3%] rounded-lg text-clamp-sm bg-white'>
            <span className='flex items-center gap-[2%] p-[2.5%]'>
                <i>
                    <BiStoreAlt className='max-w-[35px] w-[5.5vw] h-min'/>
                </i>
                <p className='whitespace-nowrap text-ellipsis overflow-hidden'>
                    {data.manufacturer || 'Store not avaliable'}
                </p>
            </span>

            <figure className='flex gap-[3%] p-[2.5%] pt-0'>
                <img
                    className='max-h-48 h-[30vw] max-w-[192px] w-[30vw] object-contain object-center'
                    onLoad={() => setLazyImage(data.image)}
                    src={lazyImage}
                    alt={data.name}
                />
                <figcaption className='relative overflow-hidden text-clamp-base'>
                    <p className='mt-[5%] overflow-hidden whitespace-nowrap text-ellipsis'>
                        {data.name}
                    </p>
                    <p className='mt-[8%] font-bold'>
                        {data.currency} {data.price}
                    </p>
                    <div className='absolute flex right-0 bottom-1/3 w-2/5'>
                        <button
                            className={`px-[5%] border border-gray-300 rounded-l-xl ${data.minAmount === amount && 'bg-gray-200'}`}
                            onClick={() => setAmount(amount - 1)}
                            disabled={data.minAmount === amount}
                        >
                            <HiMinus className='fill-gray-400'/>
                        </button>
                        <span className='inline-grid w-1/3 border-t border-b border-gray-300 text-center font-bold'>
                            {amount}
                        </span>
                        <button
                            className={`px-[5%] border border-gray-300 rounded-r-xl ${data.maxAmount === amount && 'bg-gray-200'}`}
                            onClick={() => setAmount(amount + 1)}
                            disabled={data.maxAmount === amount}
                        >
                            <HiPlus className='fill-gray-400'/>
                        </button>
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}

export default ItemOrder;