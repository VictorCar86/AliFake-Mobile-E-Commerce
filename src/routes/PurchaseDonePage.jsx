import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseListState, putPurchaseID } from '../utils/redux/slicePurchase';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";
import AliexpressBagIcon from '../utils/icons/AliexpressBagIcon';
import InfiniteProducts from '../containers/InfiniteProducts';

const PurchaseDonePage = () => {
    const { purchaseIDList } = useSelector(purchaseListState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [existItems, setExistItems] = useState(false);

    useEffect(() => {
        if (purchaseIDList.length <= 0){
            navigate('/cart');
        } else {
            if (!existItems) setExistItems(true);
        }
        return () => dispatch(putPurchaseID([]));
    }, []);

    function generateUniqueId() {
        return Math.random().toString(36).slice(2);
    }

    return (
        <main className='min-h-screen bg-gray-200/70'>
            {existItems && (
              <>
                <section className='table-caption w-[95%] mt-[2.5%] mx-auto rounded-2xl text-clamp-base text-center bg-white'>
                    <AliexpressBagIcon className='w-[50vw] max-w-xs h-min mx-auto'/>

                    <h1 className='text-clamp-xl font-bold'>
                        Payment Successful
                    </h1>
                    <p className='text-clamp-xs text-gray-500'>
                        Purchase ID: {generateUniqueId() + generateUniqueId()}
                    </p>

                    <div className='flex gap-[4%] justify-center items-center mt-[5%] pb-[6%] text-clamp-xs font-medium'>
                        <i>
                            <BsCheckCircleFill className='w-[13vw] max-w-[83px] h-min fill-green-600' />
                        </i>
                        <span>
                            <p>
                                Thank you for your purchase on AliFake.
                            </p>
                            <p>
                                We've received your payment.
                            </p>
                        </span>
                    </div>
                </section>

                <InfiniteProducts />
              </>
            )}
        </main>
    )
}

export default PurchaseDonePage;