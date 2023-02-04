import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GenericPage from '../containers/GenericPage';
import { BiMap } from "react-icons/bi";
import { FiChevronRight } from 'react-icons/fi';
import PaymentIcon from '../utils/icons/PaymentIcon';
import { purchaseListState } from '../utils/redux/slicePurchase';
import { shoppingCartState } from '../utils/redux/sliceShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import ItemOrder from '../components/ItemOrder';
import priceReducer from '../utils/functions/priceReducer';
import PaymentModal from '../modals/PaymentModal';

const OrderPage = () => {
    const { purchaseIDList } = useSelector(purchaseListState);
    const { shoppingCart } = useSelector(shoppingCartState);
    const navigate = useNavigate();

    // const filteredProducts = [
    //     {
    //         "id": "179141552",
    //         "name": "Akedo, 18 Ultimate Arcade 2.5 inch Action Figures , Exclusive All Star Collector Pack, Boys, Ages 6+",
    //         "amount": 4,
    //         "minAmount": 1,
    //         "maxAmount": 5,
    //         "price": "$30.00",
    //         "currency": "USD",
    //         "image": "https://i5.walmartimages.com/asr/e44215ec-9d60-4e40-b624-1f68c1a6d41a.129a7ebe61d2e813700bbc25cc10e433.jpeg",
    //         "manufacturer": "Akedo"
    //     },
    //     {
    //         "id": "495431201",
    //         "name": "Nee Doh Cool Cats Squishy Fidget Ball, Novelty Toy, Multiple Colors, Children Ages 3+",
    //         "amount": 3,
    //         "minAmount": 1,
    //         "maxAmount": 12,
    //         "price": "$3.44",
    //         "currency": "USD",
    //         "image": "https://i5.walmartimages.com/asr/6ad2d944-d385-42d0-a9d8-2c079d520e5f_1.7e544a5cc7687fbbadc432ef3ee88393.jpeg",
    //         "manufacturer": "Schylling"
    //     },
    //     {
    //         "id": "2911481438",
    //         "name": "Funko Pop! Animation: Demon Slayer – Kyojuro Rengoku (Glow) Vinyl Figure (Walmart Exclusive) (+ Pop! Protector)",
    //         "amount": 1,
    //         "minAmount": 1,
    //         "maxAmount": 12,
    //         "price": "$19.76",
    //         "currency": "USD",
    //         "image": "https://i5.walmartimages.com/asr/9b803cce-5bd3-4ba4-9ee0-9c0baa0af2bd.43f3669ba2b70a78a6adc8ac88f7c696.jpeg",
    //         "manufacturer": null
    //     }
    // ];

    const filteredProducts = shoppingCart.filter(item => {
        return purchaseIDList.some(id => id === item.id)
    });

    const [itemsRefs, setItemsRefs] = useState(filteredProducts.map(product => ({id: product.id, amount: product.amount})));

    useEffect(() => {
        if (purchaseIDList.length <= 0){
            navigate('/cart');
        }
    }, []);

    const [payMethodModal, setPayMethodModal] = useState(false);

    const togglePayMethodModal = () => setPayMethodModal(prev => !prev);

    return (
        <GenericPage title='Order Confirmation'>
            {!purchaseIDList.length <= 0 && (
              <>
                <section className='m-[3%]'>
                    <button className='flex justify-start items-center gap-[3%] h-max w-full py-[1%] px-[2%] rounded-lg whitespace-nowrap bg-white' type='button'>
                        <i className='h-[20vw] max-h-32'>
                            <BiMap className='w-[5.5vw] max-w-[35px] h-min' />
                        </i>
                        <div className='overflow-hidden text-left text-clamp-sm text-gray-500'>
                            <p className='overflow-hidden text-ellipsis text-black'>Jamie Brooklyn</p>
                            <p className='overflow-hidden text-ellipsis'>+1-9024141132</p>
                            <p className='overflow-hidden text-ellipsis'>SE 26th Place Bellevue</p>
                            <p className='overflow-hidden text-ellipsis'>98008, Washington, United States</p>
                        </div>
                        <i className='ml-auto'>
                            <FiChevronRight className='w-[5.5vw] max-w-[35px] h-min' />
                        </i>
                    </button>
                </section>
                <section className='m-[3%] text-clamp-base'>
                    <button
                        className='flex justify-between items-center gap-[3%] h-max w-full py-[4.5%] px-[2%] rounded-lg whitespace-nowrap bg-white'
                        onClick={togglePayMethodModal}
                        type='button'
                    >
                        <i>
                            <PaymentIcon className='w-[5.5vw] max-w-[35px] h-min' />
                        </i>
                        <p className='text-cyan-500'>Select Payment Method</p>
                        <i className='ml-auto'>
                            <FiChevronRight className='w-[5.5vw] max-w-[35px] h-min' />
                        </i>
                    </button>
                </section>

                {filteredProducts.map((product, index) => (
                    <ItemOrder data={product} items={itemsRefs} updater={setItemsRefs} key={index}/>
                ))}

                <section className='mt-[3%] mx-[3%] pb-[24%] text-clamp-base'>
                    <div className='p-[2.5%] pb-[2%] rounded-lg bg-white'>
                        <p className='pb-[2%] font-medium'>Summary</p>

                        <table className='w-full text-clamp-xs'>
                            <tbody>
                                <tr className='border-t border-gray-50'>
                                    <td>Total items costs</td>
                                    <td className='py-[1%] pr-[4%] text-right'>
                                        {filteredProducts[0]?.currency} {priceReducer(filteredProducts, itemsRefs)}
                                    </td>
                                </tr>
                                <tr className='border-t border-gray-50'>
                                    <td>Promo Code</td>
                                    <td className='py-[1%]'>
                                        <button className='flex items-center ml-auto' type='button'>
                                            <span>Enter code here</span>
                                            <FiChevronRight className='translate-y-0.5'/>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='border-t border-gray-50'>
                                    <td>Total shipping</td>
                                    <td className='py-[1%] pr-[4%] text-right'>Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className='fixed bottom-0 h-min w-full max-w-screen-sm px-[clamp(0px,3vw,20px)] pb-[clamp(0px,2vw,13px)] bg-white'>
                    <p className='flex justify-between items-center py-[2%] font-bold'>
                        <span>Total</span>
                        <span>
                            {filteredProducts[0]?.currency} {priceReducer(filteredProducts, itemsRefs)}
                        </span>
                    </p>

                    <Link
                        className='inline-block w-full py-[1.5%] rounded-full font-medium text-center text-white bg-gradient-to-r from-orange-500 to-red-600'
                        to={'/cart/purchase-done'}
                    >
                        Place order
                    </Link>
                </div>

                <PaymentModal state={payMethodModal} toggle={togglePayMethodModal} />
              </>
            )}
        </GenericPage>
    )
}

export default OrderPage;