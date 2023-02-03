import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { purchaseListState } from '../utils/redux/slicePurchase';
import { Link, useNavigate } from 'react-router-dom';
import AliexpressBagIcon from '../utils/icons/AliexpressBagIcon';

const PurchaseDonePage = () => {
    const { purchaseIDList } = useSelector(purchaseListState);
    const navigate = useNavigate();

    useEffect(() => {
        if (purchaseIDList.length <= 0){
            navigate('/cart');
        }
    }, []);

    function generateUniqueId() {
        return Math.random().toString(36).slice(2);
    }

    return (
        <main className='min-h-screen px-[4%] text-clamp-base text-center bg-gray-200/70'>
            <AliexpressBagIcon className='w-[50vw] max-w-xs h-min pt-[5%] mx-auto'/>

            <h1 className='text-clamp-xl font-bold'>
                Payment Sucess
            </h1>
            <p className='text-clamp-xs text-gray-500'>
                Purchase ID: {generateUniqueId() + generateUniqueId()}
            </p>

            <p className='mt-[5%]'>
                Thank you for your purchase on Aliexpress.
            </p>
            <p>
                We hope you enjoy your product.
            </p>
            <p className='mb-[8%]'>
                If you have any questions or problems with your order, please do not hesitate to contact us.
            </p>

            <Link
                className='block w-full h-min py-[2%] border-2 border-red-600 rounded-lg text-red-600 font-medium'
                to={'/'}
            >
                Back to Homepage
            </Link>
        </main>
    )
}

export default PurchaseDonePage;