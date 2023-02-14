import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import MinusButton from '../components/MinusButton';
import PlusButton from '../components/PlusButton';
import InfoModal from '../containers/InfoModal';
import { addShoppingCart } from '../utils/redux/sliceShoppingCart';

const AddToCartModal = ({ productData, state, toggle }) => {
    const dispatch = useDispatch();

    const closeModal = useRef(() => {});

    const [currentQuantity, setCurrentQuantity] = useState(1);

    useEffect(() => {
        setCurrentQuantity(1);
    }, [productData]);

    function sendToCart() {
        const newItem = {...productData, amount: currentQuantity};
        dispatch(addShoppingCart(newItem))
        closeModal.current()
    }

    return (
        <InfoModal title="Add to Cart" state={state} toggle={toggle} closeModal={closeModal}>
            <figure>
                <img
                    className='w-3/5 mx-auto mb-[4%]'
                    src={productData.imageInfo?.thumbnailUrl}
                    alt={productData.name}
                />

                <figcaption>
                    <section>
                        {productData.priceInfo?.currentPrice !== null && (
                            <span className='text-clamp-xl font-bold not-italic'>
                                {`${productData.priceInfo?.currentPrice?.currencyUnit} ${productData.priceInfo?.currentPrice?.priceString}`}
                            </span>
                        )}

                        {productData.priceInfo?.currentPrice === null && (
                            <span className='text-clamp-xl font-bold not-italic'>
                                {`${productData.priceInfo?.priceRange?.currencyUnit} ${productData.priceInfo?.priceRange?.priceString}`}
                            </span>
                        )}

                        {productData.primaryShelf && (
                            <p className='italic'>{productData.primaryShelf}</p>
                        )}
                    </section>

                    <section>
                        <p className='mt-3 mb-2 text-clamp-lg font-bold not-italic'>Quantity</p>

                        <MinusButton
                            className={`p-[1.5%] ${productData.orderMinLimit === currentQuantity && 'opacity-60'}`}
                            disabled={productData.orderMinLimit === currentQuantity}
                            onClick={() => setCurrentQuantity(prev => prev - 1)}
                        />

                        <span className='inline-block w-[10%] h-auto not-italic text-blue-500 align-text-bottom text-center'>
                            {currentQuantity}
                        </span>

                        <PlusButton
                            className={`p-[1.5%] ${productData.orderLimit === currentQuantity && 'opacity-60'}`}
                            disabled={productData.orderLimit === currentQuantity}
                            onClick={() => setCurrentQuantity(prev => prev + 1)}
                        />

                        <span className='text-clamp-sm mx-[4%] text-gray-500 align-text-top'>
                            {productData.orderLimit ||'Not'} avaliable to buy
                        </span>
                    </section>


                    <section className={`mt-1.5 pb-[16%] text-clamp-sm ${!productData.shippingOption && 'blur-[1px]'}`}>
                        <p className='mt-[5%] font-bold not-italic'>Delivery</p>

                        <p className='font-medium'>
                            <span className='font-normal'>Method avaliable: </span>
                            {productData.fulfillmentLabel ? (
                                    <span className='capitalize'>
                                    {productData.fulfillmentLabel[0].shippingText ||
                                        productData.fulfillmentLabel[0].fulfillmentType?.toLowerCase()}
                                    </span>
                                ) : ". . ."
                            }
                            {/* {productData.shippingOption?.shipPrice?.price > 0 && (
                                <span>
                                    {`- ${productData.shippingOption?.shipPrice.priceString}`}
                                </span>
                            )} */}
                        </p>
                        {productData.fulfillmentLabel && (
                            productData.fulfillmentLabel[0].checkStoreAvailability && (
                                <>
                                <p>{productData.fulfillmentLabel[0].checkStoreAvailability}</p>
                                <p>{productData.fulfillmentLabel[0].message}</p>
                                </>
                            )
                        )}
                        {productData.fulfillmentType !== "DIGITAL" && (
                            <p>
                                <span>Date product avaliable: </span>
                                <span className='italic font-medium capitalize'>
                                    {productData.fulfillmentLabel ? (
                                        productData.fulfillmentLabel[0].fulfillmentText || "Not Avaliable Yet"
                                    ) : "Not Avaliable Yet"}
                                </span>
                            </p>
                        )}
                        {productData.fulfillmentType === "DIGITAL" && (
                            <p>{productData.fulfillmentLabel[0].message}</p>
                        )}
                    </section>
                </figcaption>
            </figure>


            <div className='fixed bottom-0 w-[89vw] max-w-[585px] py-3 bg-white'>
                <button
                    className='w-full py-2 rounded-full text-rose-600 font-bold bg-rose-200/60'
                    onClick={sendToCart}
                    type='button'
                >
                    Continue
                </button>
            </div>
        </InfoModal>
    )
}

export default AddToCartModal;