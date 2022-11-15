import React, { useContext, useEffect, useState } from 'react'
import {
    FiChevronLeft,
    FiChevronRight,
    FiHeart,
    FiHome,
    FiMapPin,
    FiMoreHorizontal,
    FiSearch,
    FiShoppingBag,
    FiShoppingCart,
} from 'react-icons/fi';
import { AppContext } from '../context/AppProvider';
import { useNavigate, useParams, Link } from 'react-router-dom'
import AlifakelogoImg from '../assets/images/alifake_logo.webp'
import Searcher from '../components/Searcher';
import InfoModal from '../containers/InfoModal';
import InfiniteProducts from '../containers/InfiniteProducts';


const initialViewChanges = {
    navbarVanilla: true,
    specsModal: false,
    descModal: false,
};


const ProductViewPage = () => {
    const { state, callNewBestSalesData, productDescription } = useContext(AppContext);
    const { bestSalesData, productInfo } = state;

    const pageInfo = useParams();
    const navigate = useNavigate();

    const [viewChanges, setViewChanges] = useState(initialViewChanges);

    useEffect(() => {
        if (productInfo.product_id !== pageInfo.id && productInfo.product_id !== ""){
            productDescription(pageInfo.id)
        }
    }, []);

    const toggleNavbar = () => setViewChanges({...viewChanges, navbarVanilla: !viewChanges.navbarVanilla});

    const toggleSpecs = () => setViewChanges({...viewChanges, specsModal: !viewChanges.specsModal});

    const toggleDesc = () => setViewChanges({...viewChanges, descModal: !viewChanges.descModal});

    const starsPercentage = (productInfo.feedBackRating.averageStar / 5) * 100;

    const shippingData = productInfo.metadata.
                            shippingModule.generalFreightInfo.
                                originalLayoutResultList[0].bizData;

    const feeShipping = shippingData.shippingFee === "free" ?
                            <>Free Shipping</> :
                            <>{shippingData.currency} {shippingData.displayAmount}</>;


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
              ));
        }
    }

    return (
        <>
            <header className='fixed w-full bg-white shadow-sm z-10'>
                {viewChanges.navbarVanilla === true && (
                    <nav className='h-12 flex justify-between items-center'>
                        <div className='flex items-center'>
                            <button type='button' className='inline-block mx-4' onClick={() => navigate(-1)}>
                                <FiChevronLeft className='scale-[2]'/>
                            </button>
                            <Link className='inline-block' to={"/"}>
                                <FiHome className='inline-block h-6 w-6 mr-4' />
                                <img className='inline-block h-1/2 w-24' src={AlifakelogoImg} alt="Alifake banner" />
                            </Link>
                        </div>
                        <div className='flex gap-5 mr-4'>
                            <button onClick={toggleNavbar} type='button'>
                                <FiSearch className='h-6 w-6' />
                            </button>
                            <Link to={"/cart"}>
                                <FiShoppingCart className='h-6 w-6' />
                            </Link>
                            <button type='button'>
                                <FiMoreHorizontal className='h-6 w-6' />
                            </button>
                        </div>
                    </nav>)}
                {viewChanges.navbarVanilla === false && (
                    <nav className='relative h-12 flex justify-center items-center'>
                        <button type='button' className='inline-block mx-4 absolute left-0 top-1/3' onClick={toggleNavbar}>
                            <FiChevronLeft className='scale-[2]'/>
                        </button>
                        <Searcher />
                    </nav>
                )}
            </header>
            <main className='min-h-screen pt-12 pb-14 text-[4vw] bg-gray-300'>
                <section className='mb-[2%] bg-white'>
                    <div className='relative flex overscroll-x-contain snap-x snap-mandatory overflow-x-scroll overflow-y-hidden'>
                        {displayImages()}
                        <button className='sticky top-[90%] right-4 h-min px-1.5 flex items-center gap-1 rounded-full font-medium bg-gray-300/80' type='button'>
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
                        <button
                            className='w-full py-3.5 border-t border-gray-300'
                            onClick={toggleDesc}
                            type='button'
                        >
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
                <section className='p-[3%] text-white bg-black'>
                    <div className='absolute h-max w-max rounded-full bg-white'>
                        <FiShoppingBag className='w-[10vw] h-[10vw] m-[0.6vw] px-[12%] rounded-full border border-gray-300 text-gray-400' />
                    </div>
                    <div className='w-2/3 mx-auto'>
                        <p className='font-bold'>{productInfo.metadata.storeModule.storeName}</p>
                        <div className='grid grid-rows-2 grid-flow-col gap-x-12 my-2 text-[3.5vw]'>
                            <p className='font-bold'>{productInfo.metadata.storeModule.positiveRate}</p>
                            <p>Positive Feedback</p>
                            <p className='font-bold'>{productInfo.metadata.storeModule.countryCompleteName}</p>
                            <p>Country From</p>
                        </div>
                        <a
                            className='relative left-1/2 -translate-x-1/2 inline-block w-[50vw] max-w-xs py-0.5 rounded-full text-[3.5vw] text-center text-black bg-white'
                            href={productInfo.metadata.storeModule.storeURL}
                            aria-label={productInfo.metadata.storeModule.storeName}>
                            <span>Visit Store</span>
                        </a>
                    </div>
                </section>
                <div>
                    <button className='mr-2 px-2 bg-red-600 text-white' type='button' onClick={() => productDescription(pageInfo.id)}>product</button>
                    <button className='mr-2 px-2 bg-red-600 text-white' type='button' onClick={() => console.log(state)}>state</button>
                </div>
                <InfiniteProducts data={bestSalesData} callData={callNewBestSalesData} />
            </main>
            <InfoModal title="Product Details" state={viewChanges.specsModal} toggle={toggleSpecs} >
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
            </InfoModal>
            <InfoModal title="Description" state={viewChanges.descModal} toggle={toggleDesc} >
            </InfoModal>
        </>
    )
}

export default ProductViewPage