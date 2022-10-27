import React, { useContext, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiHeart, FiMapPin, FiShoppingBag, FiX } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppProvider';
import Searcher from '../components/Searcher';

const ProductViewPage = () => {
    const pageInfo = useParams();
    const navigate = useNavigate();

    const { state, productDescription } = useContext(AppContext);
    const { productInfo } = state;

    const [specs, setSpecs] = useState(false);


    const toggleSpecs = () => {
        setSpecs(prev => !prev)
    }

    const starsPercentage = (productInfo.feedBackRating.averageStar / 5) * 100;

    const shippingData = productInfo.metadata.shippingModule.generalFreightInfo.originalLayoutResultList[0].bizData;

    const feeShipping = shippingData.shippingFee === "free" ?
        <>Free Shipping</> :
        <>{shippingData.currency} {shippingData.displayAmount}</>;

    useEffect(() => {
        if (productInfo.product_id !== pageInfo.id && productInfo.product_id !== ""){
            productDescription(pageInfo.id)
        }
    }, [])

    const displayImages = () => {
        if (productInfo.product_small_image_urls) {
            return productInfo
                .product_small_image_urls
                    .string.map((image, index) => (
                        <img
                            className='w-full h-auto snap-center'
                            src={image}
                            alt={productInfo.product_title}
                            key={index}
                        />
                    ))
        }
    }

    return (
        <>
            <header className='flex items-center'>
                <button type='button' className='inline-block my-3 mx-2' onClick={() => navigate(-1)}>
                    <FiChevronLeft className='w-8 h-8'/>
                </button>
                <Searcher />
            </header>
            <main className='min-h-screen pb-14 text-[4vw] bg-gray-300'>
                <section className='mb-[2%] bg-white'>
                    <div className='relative flex overscroll-x-contain snap-x snap-mandatory overflow-x-scroll overflow-y-hidden'>
                        {displayImages()}
                        <button className='sticky top-[90%] right-4 h-min px-1.5 flex items-center gap-1 rounded-full font-medium bg-gray-300' type='button'>
                            <FiHeart />
                            <span>{productInfo.wishedCount}</span>
                        </button>
                    </div>
                    <div className='px-[3%] pt-[3%]'>
                        <div className='flex gap-2 items-center'>
                            <span className='text-[5.5vw] font-bold'>{`${productInfo.sale_price_currency} ${productInfo.sale_price}`}</span>
                            {Number(productInfo.discount.slice(0, 2)) >= 20 && (
                              <>
                                <span className='line-through opacity-70'>{`${productInfo.sale_price_currency} ${productInfo.original_price}`}</span>
                                <span className='text-red-600'>{`-${productInfo.discount}`}</span>
                              </>
                            )}
                        </div>
                        <div className='mt-1.5 mb-3.5 text-[3vw] opacity-70'>
                            <span>Price shown before tax, </span>
                            <span>{feeShipping}</span>
                        </div>
                        <p className='my-2'>{productInfo.product_title}</p>
                        <span
                            className={`mr-2 relative text-gray-300 before:content-["★★★★★"] before:absolute before:w-[${starsPercentage}%] before:text-yellow-400 before:drop-shadow-md before:overflow-hidden`}>
                            ★★★★★
                        </span>
                        <span className='pr-[3%] mr-[2.5%] border-r-2 border-gray-300'>{productInfo.feedBackRating.averageStar}</span>
                        <span className='mr-2'>{`${productInfo.lastest_volume} orders`}</span>
                        <button
                            className='w-full mt-4 py-3.5 border-t border-gray-300'
                            onClick={toggleSpecs}
                            type='button'
                        >
                            <span className='float-left font-bold'>Specifications</span>
                            <FiChevronRight className='inline-block w-[6%] h-[6%] float-right opacity-50' />
                        </button>
                        <button className='w-full py-3.5 border-t border-gray-300' type='button'>
                            <span className='font-bold float-left'>Item Description</span>
                            <FiChevronRight className='inline-block w-[6%] h-[6%] float-right opacity-50' />
                        </button>
                    </div>
                </section>
                <section className='px-[3%] pt-[3%] bg-white'>
                    {productInfo.metadata && (
                        <div className='mt-1 border-b border-gray-300'>
                            <span className='font-bold'>Discounts & Coupons</span>
                            <button className='float-right flex items-center px-2 rounded-full font-medium text-white bg-gradient-to-r from-red-600 to-orange-500'>
                                <span>Get</span>
                                <FiChevronRight className='inline-block' />
                            </button>
                            <div className='my-3 flex gap-2 overflow-x-scroll overflow-y-hidden'>
                                {productInfo.metadata
                                  .couponModule.webCouponInfo
                                    .couponList.map((coupon, index) => (
                                        <button
                                          className="px-2 py-1 rounded-md text-red-600 text-left bg-gray-200"
                                          key={index}
                                        >
                                          <p className='font-bold'>{coupon.copy}</p>
                                          <p className=''>{coupon.title}</p>
                                        </button>
                                    ))}
                            </div>
                            {/* {productInfo.metadata.descriptionModule.descriptionUrl} */}
                        </div>
                    )}
                    <div className='my-3'>
                        <span className='font-bold'>Delivery</span>
                        <span className='float-right flex items-center gap-1'>
                            <FiMapPin className='inline-block' />
                            {`To ${shippingData.shipTo}`}
                        </span>
                        <div className='mt-1.5 text-[3.5vw]'>
                            <p className='font-medium'>
                                Shipping: {feeShipping}
                            </p>
                            <p>From {shippingData.shipFrom} via {shippingData.deliveryProviderName}</p>
                            <p>Estimated delivery on {shippingData.deliveryDate.slice(0, 3) + " " + shippingData.deliveryDate.slice(-2)}</p>
                        </div>
                    </div>
                    <button className='w-full pt-3.5 pb-4 border-t text-left border-gray-300'>
                        <span className='mr-5 font-bold'>Service</span>
                        <span className='opacity-70'>75-day Buyer Protection</span>
                        <FiChevronRight className='inline-block w-[6%] h-[6%] float-right opacity-50' />
                    </button>
                </section>
                <section className='flex gap-4 p-[3%] text-white bg-black'>
                    <div className='h-max rounded-full bg-white'>
                        <FiShoppingBag className='w-[10vw] h-[10vw] m-[0.6vw] px-[12%] rounded-full border border-gray-300 text-gray-400' />
                    </div>
                    <div>
                        <p className='font-bold'>{productInfo.metadata.storeModule.storeName}</p>
                        <div className='grid grid-rows-2 grid-flow-col gap-x-12 my-2 text-[3.5vw]'>
                            <p className='font-bold'>{productInfo.metadata.storeModule.positiveRate}</p>
                            <p>Positive Feedback</p>
                            <p className='font-bold'>{productInfo.metadata.storeModule.countryCompleteName}</p>
                            <p>Country From</p>
                        </div>
                        <button className='relative left-1/2 -translate-x-1/2 w-[50vw] max-w-xs py-0.5 rounded-full text-[3.5vw] text-center text-black bg-white' type='button'>
                            <span>Visit Store</span>
                        </button>
                    </div>
                </section>
                <div>
                    <button className='mr-2 px-2 bg-red-600 text-white' type='button' onClick={() => productDescription(pageInfo.id)}>product</button>
                    <button className='mr-2 px-2 bg-red-600 text-white' type='button' onClick={() => console.log(state)}>state</button>
                </div>
            </main>
            <div className={`${specs ? "bg-gray-700/50" : "bg-transparent invisible"} transition-colors duration-200 min-h-screen w-full fixed top-0 text-[4vw] z-20`}>
                <div className={`${specs ? "" : "translate-y-full"} transition-transform duration-500 h-3/4 w-full px-5 pb-5 absolute bottom-0 rounded-t-xl bg-white overflow-y-scroll overflow-x-hidden`}>
                    <div className='fixed left-0 right-0 rounded-t-xl bg-white'>
                        <p className='mt-2.5 mb-3 text-center font-medium'>Product Details</p>
                        <button
                            className='absolute top-0 right-4 h-full w-[5%]'
                            onClick={toggleSpecs}
                            type='button'
                        >
                            <FiX className='w-full h-full opacity-60'/>
                        </button>
                    </div>
                    <table className='w-full h-max mt-[12%]'>
                        <tbody>
                            {productInfo.specs.map((item, index) => (
                                <tr className='border-b border-gray-300' key={index}>
                                  <th className='text-black/60 font-normal text-left'>{item.attrName}</th>
                                  <td className='py-2'>{item.attrValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductViewPage