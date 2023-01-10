import React, { useEffect, useRef, useState } from 'react'
import { FiChevronRight, FiMapPin, FiShoppingBag } from 'react-icons/fi';
import { useParams, useLocation } from 'react-router-dom';
import { Markup } from 'interweave';
import InfoModal from '../containers/InfoModal';
import InfiniteProducts from '../containers/InfiniteProducts';
import HeartButton from '../components/HeartButton';
import { useDispatch, useSelector } from 'react-redux';
import { productInfoState, requestProductInfo, resultProductInfo, errorProductInfo } from '../utils/sliceProductInfo';
import GenericNavbar from '../containers/GenericNavbar';
import NotFound from '../assets/images/not_found.webp';
const axios = require("axios");

const cleanString = (str) => {
    if (typeof str !== 'string') return false;
    return str.split('_').join(' ').toLowerCase();
}

const ProductViewPage = () => {
    const productInfo = useSelector(productInfoState);
    const dispatch = useDispatch();
    const pageInfo = useParams();
    const { pathname } = useLocation();

    const fetchProductInfo = (productId = 0) => {
        const alreadyFetching = productInfo.fetching;
        const envKey = process.env.WALMART_KEY;

        if (alreadyFetching){
            return;
        }
        if (!envKey){
            console.error('Your API Key is not valid or does not exist');
            return;
        }

        const options = {
            method: 'GET',
            url: 'https://walmart.p.rapidapi.com/products/v3/get-details',
            params: {usItemId: productId},
            headers: {
                'X-RapidAPI-Key': envKey,
                'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
            }
        };

        dispatch( requestProductInfo() );

        axios
            .request(options)
            .then((response) => {
                // console.log("fetchProductInfo", response.data);
                dispatch( resultProductInfo(response.data) );
            })
            .catch((error) => {
                dispatch( errorProductInfo() );
                console.error(error);
            });
    }

    useEffect(() => {
        if (pathname.includes(`/product/${pageInfo.id}`)){
            window.scrollTo(0, 0);
            fetchProductInfo(pageInfo.id);
        }
    }, [pathname]);

    const [specsModal, setSpecsModal] = useState(false);
    const [descModal, setDescModal] = useState(false);

    const toggleSpecs = () => setSpecsModal(prev => !prev);
    const toggleDesc = () => setDescModal(prev => !prev);

    const displayImages = () => {
        const imagesLocation = productInfo.docs.imageInfo?.allImages;

        if (imagesLocation){
            return imagesLocation.map((image, index) => (
                <img
                    className={`max-h-[576px] h-[90vw] max-w-[576px] w-[90vw] object-contain ${imagesLocation.length !== index+1 ? "snap-start" : "snap-end"} ${(imagesLocation.loading && !productInfo.errorFetch) && "animate-pulse"}`}
                    src={productInfo.errorFetch ? NotFound : image.url}
                    alt={productInfo.docs.name}
                    key={index}
                    />
                ));
        }
    }

    const starsPercentage = ((productInfo.reviews?.roundedAverageOverallRating / 5) * 100) || 0;


    // Show and disappear buttons

    const headerRef = useRef(null);
    const infiniteSectionRef = useRef(null);
    const [showExtraButtons, setShowExtraButtons] = useState(true);

    window.addEventListener('scroll', () => {
        const headerHeight = headerRef.current?.clientHeight;
        const scrollPosition = window.pageYOffset + headerHeight;
        const elementPosition = infiniteSectionRef.current?.offsetTop;

        // console.log(elementPosition, scrollPosition);
        if (elementPosition <= scrollPosition) {
            if (!showExtraButtons) {
                setShowExtraButtons(true);
            }
        } else {
            if (showExtraButtons) {
                setShowExtraButtons(false);
            }
        }
    });

    return (
        <>
            <GenericNavbar />

            <main className='relative min-h-screen pt-[clamp(0px,12.8vw,81.906px);] text-clamp-base bg-gray-300'>
                <section className='mb-[2%] bg-white'>
                    <div className='relative grid grid-flow-col overscroll-x-contain snap-x snap-mandatory overflow-x-scroll overflow-y-hidden'>

                        { displayImages() }

                        {productInfo.docs.wishedCount && (
                            <HeartButton wishedCount={productInfo.docs.wishedCount} sticky="true" />
                        )}
                    </div>

                    <div className='px-[3%] pt-[3%]'>
                        {productInfo.docs.priceInfo && (
                            <>
                                <div className='flex gap-2 justify-start items-center'>
                                    <span className='text-clamp-xl font-bold'>
                                        {`${productInfo.docs.priceInfo.currentPrice.currencyUnit} ${productInfo.docs.priceInfo.currentPrice.priceString}`}
                                    </span>
                                    {/* {productInfo.docs.discounts?.discountedValue && (
                                        <>
                                          <span className='line-through opacity-70'>
                                            {`${productInfo.docs.priceInfo.currentPrice.currencyUnit} ${productInfo.docs.priceInfo.currentPrice.priceString}`}
                                          </span>
                                          <span className='text-red-600'>{`-${productInfo.docs.discounts.discountedValue.priceString}`}</span>
                                        </>
                                    )} */}
                                </div>
                                <div className='mt-1.5 mb-3.5 text-clamp-xs opacity-70'>
                                    <span>Price shown before tax, </span>
                                    <span>{productInfo.docs.productTypeId}</span>
                                </div>
                                <p className='my-2'>{productInfo.docs.name}</p>
                            </>
                        )}
                        {!productInfo.docs.priceInfo && (
                            <>
                                <div className='max-h-[38.39px] h-[6vw] w-4/5 pl-2 mt-[1%] rounded-lg bg-gray-300 animate-pulse'></div>
                                <div className='max-h-[28.8px] h-[4.5vw] w-2/3 pl-2 mt-[2.75%] rounded-lg bg-gray-300 animate-pulse'></div>
                                <div className='max-h-[32px] h-[5vw] w-full pl-2 mt-[4.6%] rounded-lg bg-gray-300 animate-pulse'></div>
                                <div className='max-h-[32px] h-[5vw] w-11/12 pl-2 mt-[1%] rounded-lg bg-gray-300 animate-pulse'></div>
                                <div className='max-h-[32px] h-[5vw] w-3/5 pl-2 mt-[1%] mb-2.5 rounded-lg bg-gray-300 animate-pulse'></div>
                            </>
                        )}
                        <div className={`${!productInfo.reviews && 'blur-[1px]'}`}>
                            <span className={`mr-2 relative text-gray-300 before:content-["★★★★★"] before:absolute before:w-[${starsPercentage}%] before:text-yellow-400 before:drop-shadow-md before:overflow-hidden`}>
                                ★★★★★
                            </span>
                            <span className='pr-[3%] mr-[2.5%] border-r-2 border-gray-300'>{productInfo.reviews?.roundedAverageOverallRating || "0.0"}</span>
                            <span className='mr-2'>{`${productInfo.reviews?.totalReviewCount || "No"} reviews`}</span>
                        </div>
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
                    {productInfo.docs.metadata && (
                        <div className='mt-1 border-b border-gray-300'>
                            <span className='font-bold'>Discounts & Coupons</span>
                            <button className='float-right flex items-center px-2 rounded-full font-medium text-white bg-gradient-to-r from-red-600 to-orange-500'>
                                <span>Get</span>
                                <FiChevronRight className='inline-block' />
                            </button>
                            <div className='my-3 flex gap-2 overflow-x-scroll overflow-y-hidden'>
                                {productInfo.docs.metadata
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
                        </div>
                    )}

                    <div className='my-3'>
                        <span className='font-bold'>Delivery</span>
                        <span className={`float-right flex items-center gap-1 ${!productInfo.docs.fulfillmentLabel && 'blur-[1px]'}`}>
                            <FiMapPin className='inline-block' />
                            {/* Update logic with user information - local storage */}

                            {productInfo.docs.fulfillmentLabel ? (
                                `To ${productInfo.docs.fulfillmentLabel[0].locationText}`
                                ) : ". . ."
                            }

                        </span>
                        <div className={`mt-1.5 text-clamp-sm ${!productInfo.docs.shippingOption && 'blur-[1px]'}`}>
                            <p className='font-medium'>
                                <span className='mr-1'>
                                    Shipping:
                                </span>
                                {productInfo.docs.fulfillmentLabel ? (
                                      <span className='capitalize'>
                                        {productInfo.docs.fulfillmentLabel[0].shippingText}
                                      </span>
                                    ) : ". . ."
                                }
                                {productInfo.docs.shippingOption?.shipPrice && (
                                    <span>
                                        {`- $${productInfo.docs.shippingOption?.shipPrice}`}
                                    </span>
                                )}
                            </p>
                            <p>
                                <span>From</span>

                                <span> {productInfo.docs.location?.city || ". . ."} </span>

                                <span>via</span>

                                <span className='mx-1'>
                                    {productInfo.docs.fulfillmentLabel ? (
                                        cleanString(
                                            productInfo.docs.fulfillmentLabel[0].fulfillmentMethod?.toLowerCase())
                                        ) : ". . ."
                                    }
                                </span>
                            </p>
                            <p>
                                <span>Estimated delivery on</span>
                                <span className='mx-1 italic font-medium'>
                                    {productInfo.docs.shippingOption?.deliveryDate?.slice(0, 10) || ". . ."}
                                </span>
                                <span className='capitalize italic font-medium'>
                                    {cleanString(productInfo.docs.shippingOption?.slaTier)}
                                </span>
                            </p>
                        </div>
                    </div>
                    <button className='w-full pt-3.5 pb-4 border-t text-left border-gray-300'>
                        <span className='mr-5 font-bold'>Service</span>
                        <span className='opacity-70'>75-day Buyer Protection</span>
                        <FiChevronRight className='inline-block w-[6%] h-[6%] float-right opacity-50' />
                    </button>
                </section>

                <section className='p-[3%] text-clamp-sm text-white bg-black'>
                    <div className='absolute h-max w-max rounded-full bg-white'>
                        <FiShoppingBag className='w-[10vw] h-[10vw] max-w-[64px] max-h-[64px] m-[clamp(0px,0.6vw,3.840px)] px-[12%] rounded-full border border-gray-300 text-gray-400' />
                    </div>
                    <div className='w-2/3 mx-auto'>
                        <p className='font-bold'>{productInfo.docs.sellerName || ". . ."}</p>
                        <div className='grid grid-rows-2 grid-flow-col gap-x-[16%] my-2'>
                            <p className='font-bold'>{productInfo.docs.sellerAverageRating || 'Not avaliable'}</p>
                            <p>Positive Feedback</p>
                            <p className='font-bold'>{productInfo.docs.metadata?.storeModule.countryCompleteName}</p>
                            <p>Country From</p>
                        </div>
                        <a
                            className='relative left-1/2 -translate-x-1/2 inline-block w-[50vw] max-w-xs py-0.5 rounded-full text-center text-black bg-white'
                            href={productInfo.docs.metadata?.storeModule.storeURL}
                            aria-label={productInfo.docs.metadata?.storeModule.storeName}>
                            <span>Visit Store</span>
                        </a>
                    </div>
                </section>

                <section className='h-full w-full bg-white' ref={infiniteSectionRef}>

                    <InfiniteProducts />

                </section>

            </main>

            {!(specsModal || descModal || showExtraButtons) && (
                <div className='fixed bottom-0 w-full max-w-[640px] h-14 pt-1.5 text-white font-bold text-center bg-white z-30'>
                    <button className='w-[42%] p-2.5 rounded-l-full bg-gradient-to-r from-yellow-400 to-orange-500'>
                        Add to cart
                    </button>
                    <button className='w-[42%] p-2.5 rounded-r-full bg-gradient-to-r from-red-600 to-orange-500'>
                        Buy now
                    </button>
                </div>
            )}

            <InfoModal title="Product Details" state={specsModal} toggle={toggleSpecs} >
                {/* <table className='w-full h-max'>
                    <tbody>
                        {productInfo.docs.specs?.map((item, index) => (
                            <tr className='border-b border-gray-300' key={index}>
                                <th className='text-black/60 font-normal text-left'>{item.attrName}</th>
                                <td className='py-2'>{item.attrValue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                <React.Fragment>
                    <Markup content={productInfo.docs.detailedDescription} />
                </React.Fragment>
            </InfoModal>

            <InfoModal title="Description" state={descModal} toggle={toggleDesc} >
                <React.Fragment>
                    <Markup content={productInfo.docs.shortDescription} />
                </React.Fragment>
            </InfoModal>
        </>
    )
}

export default ProductViewPage;