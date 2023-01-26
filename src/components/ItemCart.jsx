import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import skeletonImage from '../assets/images/skeleton.webp';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

const ItemCart = ({ data, selectedItems, updater }) => {
    const [selected, setSelected] = useState(false);
    const [amount, setAmount] = useState(data.amount);
    const [lazyImage, setLazyImage] = useState(skeletonImage);

    useEffect(() => {
        setLazyImage(data.image);
        setSelected(false);
    }, [data]);

    function selectItem() {
        if (selectedItems.some(e => e === data.id)){
            setSelected(false);
            updater( selectedItems.filter(i => i !== data.id) );
        }
        else {
            setSelected(true);
            updater( [...selectedItems, data.id] );
        }
    }

    return (
        <li className='relative mt-[2%] overflow-hidden'>
            <button className='absolute top-0 left-0 bottom-0 right-[90%]' onClick={selectItem}>
                {selected && (
                    <FaCheckCircle
                        className='absolute top-[40%] left-1/4 max-w-[32px] w-[5vw] h-min fill-rose-600'
                    />
                )}
                {!selected && (
                    <FaRegCircle
                        className='absolute top-[40%] left-1/4 max-w-[32px] w-[5vw] h-min fill-gray-400/75'
                    />
                )}
            </button>
            <Link to={`/product/${data.id}`}>
                <figure className='flex gap-[2%] p-[2%] pl-[10%] bg-white'>
                    <img
                        className='max-w-[154px] w-[24vw] max-h-[154px] h-[24vw] rounded-2xl object-contain object-center'
                        src={lazyImage}
                        alt={data.name}
                        onLoad={() => setLazyImage(data.image)}
                    />
                    <figcaption className='text-clamp-base overflow-hidden'>
                        <p className='text-clamp-lg text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden'>
                            {data.name}
                        </p>
                        <p>
                            {data.manufacturer}
                        </p>
                        <p className='font-bold'>
                            {data.currency} {data.price}
                        </p>
                    </figcaption>
                </figure>
            </Link>
            <span className='absolute bottom-[16%] left-[70%] w-[25vw] max-w-[160px] flex items-center'>
                <MinusButton
                    onClick={() => setAmount(prev => prev - 1)}
                    disabled={amount === data.minAmount}
                    className={`p-[5%] ${amount === data.minAmount && 'opacity-60'}`}
                />

                <span className='inline-block w-[35%] h-auto text-center text-clamp-sm'>
                    {amount}
                </span>

                <PlusButton
                    onClick={() => setAmount(prev => prev + 1)}
                    disabled={amount === data.maxAmount}
                    className={`p-[5%] ${amount === data.maxAmount && 'opacity-60'}`}
                />
            </span>
        </li>
    )
}

export default ItemCart