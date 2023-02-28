import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import skeletonImage from '../assets/images/skeleton.webp';
import { addShoppingCart } from '../context/sliceShoppingCart';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

const ItemCart = ({ productData = {}, selectedItems = [], updater}) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(productData.amount);
    const [lazyImage, setLazyImage] = useState(skeletonImage);

    const selected = selectedItems.some(item => item.id === productData.id);

    useEffect(() => {
        if (productData.image !== lazyImage){
            setLazyImage(productData.image);
            updater( selectedItems.filter(item => item.id !== productData.id) );
        }
    }, [productData]);

    useEffect(() => {
        if (amount !== productData.amount){
            const itemStorage = {usItemId: productData.id, amount};
            dispatch(addShoppingCart(itemStorage));

            const itemIndex = selectedItems.findIndex(item => item.id === productData.id);

            if (itemIndex !== -1){
                const newItem = [...selectedItems];
                newItem[itemIndex].amount = amount;
                updater( newItem );
            }
        }
    }, [amount]);

    function selectItem() {
        if (selected){
            updater( selectedItems.filter(item => item.id !== productData.id) );
        }
        else {
            updater( [...selectedItems, {id: productData.id, amount: productData.amount}] );
        }
    }

    return (
        <li className='relative mt-[2%] overflow-hidden'>
            <button className='absolute top-0 left-0 bottom-0 w-[10vw] max-w-[64px]' onClick={selectItem} aria-label='Select product' type='button'>
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
            <Link to={`/product/${productData.id}`}>
                <figure className='flex gap-[2%] p-[2%] pl-[10%] bg-white'>
                    <img
                        className='max-w-[154px] w-[24vw] max-h-[154px] h-[24vw] rounded-2xl object-contain object-center'
                        src={lazyImage}
                        alt={productData.name}
                        onLoad={() => setLazyImage(productData.image)}
                    />
                    <figcaption className='text-clamp-base overflow-hidden'>
                        <p className='text-clamp-lg text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden'>
                            {productData.name}
                        </p>
                        <p className='whitespace-nowrap text-ellipsis overflow-hidden'>
                            {productData.manufacturer}
                        </p>
                        <p className='w-[55%] font-bold'>
                            {productData.currency} {productData.price}
                        </p>
                    </figcaption>
                </figure>
            </Link>
            <span className='absolute bottom-[16%] left-[70%] w-[25vw] max-w-[160px] flex items-center'>
                <MinusButton
                    onClick={() => setAmount(prev => prev - 1)}
                    disabled={amount === productData.minAmount}
                    className={`p-[5%] ${amount === productData.minAmount && 'opacity-60'}`}
                />

                <span className='inline-block w-[35%] h-auto text-center text-clamp-sm'>
                    {amount}
                </span>

                <PlusButton
                    onClick={() => setAmount(prev => prev + 1)}
                    disabled={amount === productData.maxAmount}
                    className={`p-[5%] ${amount === productData.maxAmount && 'opacity-60'}`}
                />
            </span>
        </li>
    )
}

export default ItemCart