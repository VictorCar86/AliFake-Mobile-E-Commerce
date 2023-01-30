import React from 'react';
import { useSelector } from 'react-redux';
import GenericPage from '../containers/GenericPage';
import { BiMap } from "react-icons/bi";
import { FiChevronRight } from 'react-icons/fi';
import PaymentIcon from '../utils/icons/PaymentIcon';
import { purchaseListState } from '../utils/redux/slicePurchase';
import { shoppingCartState } from '../utils/redux/sliceShoppingCart';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const { purchaseIDList } = useSelector(purchaseListState);
    const { shoppingCart } = useSelector(shoppingCartState);
    const navigate = useNavigate();
    console.log("🚀 ~ file: orderPage.jsx:11 ~ OrderPage ~ purchaseIDList", purchaseIDList)

    const filteredProducts = shoppingCart.filter(item => {
        return purchaseIDList.some(id => id === item.id)
    });
    console.log("🚀 ~ file: orderPage.jsx:18 ~ filteredProducts ~ filteredProducts", filteredProducts)

    useEffect(() => {
        if (purchaseIDList.length <= 0){
            navigate('/cart');
        }
        return () => console.log('Closed');
    }, []);

    return (
        <GenericPage title='Order Confirmation'>
            <section className='m-[3%]'>
                <button className='flex justify-between items-center gap-[3%] h-max w-full py-[1%] px-[2%] rounded-md whitespace-nowrap bg-white' type='button'>
                    <i className='h-[20vw] max-h-32'>
                        <BiMap className='w-[5.5vw] max-w-[35px] h-min' />
                    </i>
                    <div className='overflow-hidden text-clamp-sm'>
                        <p className='overflow-hidden text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='overflow-hidden text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='overflow-hidden text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='overflow-hidden text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <i>
                        <FiChevronRight className='w-[5.5vw] max-w-[35px] h-min' />
                    </i>
                </button>
            </section>
            <section className='m-[3%] text-clamp-base'>
                <button className='flex justify-between items-center gap-[3%] h-max w-full py-[4.5%] px-[2%] rounded-md whitespace-nowrap bg-white' type='button'>
                    <i>
                        <PaymentIcon className='w-[5.5vw] max-w-[35px] h-min' />
                    </i>
                    <p className='text-cyan-500'>Select Payment Method</p>
                    <i className='ml-auto'>
                        <FiChevronRight className='w-[5.5vw] max-w-[35px] h-min' />
                    </i>
                </button>
            </section>



            <section className='m-[3%] text-clamp-base bg-white'>
                <p>Summary</p>
            </section>
        </GenericPage>
    )
}

export default OrderPage;