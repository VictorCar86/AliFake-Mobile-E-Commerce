import React, { useEffect, useRef, useState } from 'react'
import { FiChevronRight, FiMapPin, FiShoppingBag } from 'react-icons/fi';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import GenericNavbar from '../containers/GenericNavbar';
import HeartButton from '../components/HeartButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { productInfoState, requestProductInfo, resultProductInfo, errorProductInfo } from '../context/sliceProductInfo';
import { addViewedItem } from '../context/sliceViewedItems';
import { addShoppingCart } from '../context/sliceShoppingCart';
import { addPurchaseID } from '../context/slicePurchase';
import ProductDetailsModal from '../modals/ProductDetailsModal';
import ProductDescriptionModal from '../modals/ProductDescriptionModal';
import AddToCartModal from '../modals/AddToCartModal';
import InfiniteProducts from '../containers/InfiniteProducts';
const axios = require("axios");


const ProductViewPage = () => {
    const productInfo = useSelector(productInfoState);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const pageInfo = useParams();
    const navigate = useNavigate();

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
                dispatch( resultProductInfo(response.data) );
            })
            .catch((error) => {
                const requestUrl = error.request.responseURL;
                if (!requestUrl.includes(productInfo.docs.usItemId)){
                    dispatch( errorProductInfo() );
                    console.error(error.response.data.message);
                }
            });
    }

    useEffect(() => {
        if (productInfo.docs.usItemId !== "0"){
            dispatch( addViewedItem(productInfo.docs) );
        }
    }, [productInfo.docs])

    useEffect(() => {
        if (pathname.includes(`/product/${pageInfo.id}`) && productInfo.docs.usItemId !== pageInfo.id){
            window.scrollTo(0, 0);
            fetchProductInfo(pageInfo.id);
        }
    }, [pathname]);

    const [cartModal, setCartModal] = useState(false);
    const [specsModal, setSpecsModal] = useState(false);
    const [descModal, setDescModal] = useState(false);

    const toggleCart = () => setCartModal(prev => !prev);
    const toggleSpecs = () => setSpecsModal(prev => !prev);
    const toggleDesc = () => setDescModal(prev => !prev);

    const imagesLocation = productInfo.docs.imageInfo?.allImages;

    const displayImages = (imagesArray) => {
        if (Array.isArray(imagesArray)){
            return imagesArray.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        className={`max-h-[640px] h-[100vw] w-screen max-w-screen-sm object-contain object-center ${productInfo.docs.imageInfo.loading && 'animate-pulse'}`}
                        src={image.url}
                        alt={productInfo.docs.name}
                    />
                </SwiperSlide>
            ));
        }
    }

    const starsPercentage = Math.round((productInfo.reviews?.roundedAverageOverallRating / 5) * 100) || 0;

    const [currentSlide, setCurrentSlide] = useState(1);

    const buyNowProduct = () => {
        const productID = productInfo.docs.usItemId;

        dispatch(addShoppingCart({...productInfo.docs, amount: 1}))
        dispatch(addPurchaseID(productID));

        navigate('/cart/confirm');
    }

    // Show and disappear buttons

    const headerRef = useRef(null);
    const infiniteSectionRef = useRef(null);
    const [showExtraButtons, setShowExtraButtons] = useState(false);

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
            <GenericNavbar headerRef={headerRef} />

            <main className='relative min-h-screen pt-[clamp(0px,12.8vw,81.906px);] text-clamp-base bg-gray-300'>
                <section className='mb-[2%] bg-white'>

                    <Swiper
                        className='z-0'
                        slidesPerView={1}
                        onSlideChange={(slide) => setCurrentSlide(slide.activeIndex + 1)}
                        lazy={true}
                    >
                        { displayImages(imagesLocation) }

                        {!productInfo.docs.imageInfo?.loading && (
                            <>
                                <aside className='absolute bottom-[5%] left-[5%] rounded-2xl px-[2%] text-white bg-gray-500/75 z-10'>
                                    <span>{currentSlide} / </span>
                                    <span>{imagesLocation?.length}</span>
                                </aside>

                                <HeartButton data={productInfo.docs} absolute="true" />
                            </>
                        )}
                    </Swiper>

                    <div className='px-[3%] pt-[3%]'>
                        {typeof productInfo.docs.priceInfo === 'object' && (
                            <>
                                <div className='flex gap-2 justify-start items-center'>
                                    {productInfo.docs.priceInfo?.currentPrice !== null && (
                                        <span className='text-clamp-xl font-bold'>
                                            {`${productInfo.docs.priceInfo.currentPrice?.currencyUnit} ${productInfo.docs.priceInfo.currentPrice?.priceString}`}
                                        </span>
                                    )}

                                    {productInfo.docs.priceInfo?.currentPrice === null && (
                                        <span className='text-clamp-xl font-bold'>
                                            {`${productInfo.docs.priceInfo.priceRange?.currencyUnit} ${productInfo.docs.priceInfo.priceRange?.priceString}`}
                                        </span>
                                    )}

                                    {/* 134785881
                                    {productInfo.docs.discounts?.discountedValue && (
                                        <>
                                          <span className='line-through opacity-70'>
                                            {`${productInfo.docs.priceInfo.currentPrice.currencyUnit} ${productInfo.docs.priceInfo.currentPrice.priceString}`}
                                          </span>
                                          <span className='text-red-600'>{`-${productInfo.docs.discounts.discountedValue.priceString}`}</span>
                                        </>
                                    )} */}
                                </div>

                                {productInfo.docs.shippingOption?.shipPrice && (
                                    <div className='mt-1.5 mb-3.5 text-clamp-xs opacity-70'>
                                        <span>Shipping price shown before tax, </span>
                                        <span>{productInfo.docs.shippingOption?.shipPrice.priceString}</span>
                                    </div>
                                )}

                                <p className='my-2'>
                                    {productInfo.docs.name}
                                </p>
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
                        <div className={`whitespace-nowrap overflow-hidden text-ellipsis ${!productInfo.reviews && 'blur-[1px]'}`}>
                            <span className={`mr-2 relative text-gray-300 before:content-["★★★★★"] before:absolute before:w-[${starsPercentage}%] before:text-yellow-400 before:drop-shadow-md before:overflow-hidden`}>
                                ★★★★★
                            </span>
                            <span className='pr-[3%] mr-[2.5%] border-r-2 border-gray-300'>{productInfo.reviews?.roundedAverageOverallRating || "0.0"}</span>
                            <span className='pr-[3%] mr-[2.5%] border-r-2 border-gray-300'>{`${productInfo.reviews?.totalReviewCount || "No"} reviews`}</span>
                            <span className='italic'>{productInfo.docs.primaryShelf || ""}</span>
                        </div>
                        <button
                            className='w-full mt-4 py-3.5 border-t border-gray-300'
                            disabled={productInfo.fetching}
                            onClick={toggleSpecs}
                            type='button'
                        >
                            <span className='float-left font-bold'>Specifications</span>
                            <FiChevronRight className='inline-block w-[6%] h-[6%] float-right opacity-50' />
                        </button>
                        <button
                            className='w-full py-3.5 border-t border-gray-300'
                            disabled={productInfo.fetching}
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

                    <div className='mb-3'>
                        <span className='font-bold'>Delivery</span>
                        <span className={`float-right flex items-center gap-1 ${!productInfo.docs.fulfillmentLabel && 'blur-[1px]'}`}>
                        {productInfo.docs.fulfillmentType !== "DIGITAL" && (
                            <>
                              <FiMapPin className='inline-block' />
                              {productInfo.docs.fulfillmentLabel ? (
                                `To ${productInfo.docs.fulfillmentLabel[0].locationText}`
                              ) : ". . ."}
                            </>
                        )}
                        </span>
                        <div className={`mt-1.5 text-clamp-sm ${!productInfo.docs.shippingOption && 'blur-[1px]'}`}>
                            <p className='font-medium'>
                                <span className='font-normal'>Method avaliable: </span>
                                {productInfo.docs.fulfillmentLabel ? (
                                      <span className='capitalize'>
                                        {productInfo.docs.fulfillmentLabel[0].shippingText ||
                                         productInfo.docs.fulfillmentLabel[0].fulfillmentType?.toLowerCase()}
                                      </span>
                                    ) : ". . ."
                                }
                                {productInfo.docs.shippingOption?.shipPrice?.price > 0 && (
                                    <span>
                                        {`- ${productInfo.docs.shippingOption?.shipPrice.priceString}`}
                                    </span>
                                )}
                            </p>
                            {productInfo.docs.fulfillmentLabel && (
                                productInfo.docs.fulfillmentLabel[0].checkStoreAvailability && (
                                  <>
                                    <p>{productInfo.docs.fulfillmentLabel[0].checkStoreAvailability}</p>
                                    <p>{productInfo.docs.fulfillmentLabel[0].message}</p>
                                  </>
                                )
                            )}
                            {productInfo.docs.fulfillmentType !== "DIGITAL" && (
                                <p>
                                    <span>Date product avaliable: </span>
                                    <span className='italic font-medium capitalize'>
                                        {productInfo.docs.fulfillmentLabel ? (
                                            productInfo.docs.fulfillmentLabel[0].fulfillmentText || "Not Avaliable Yet"
                                        ) : "Not Avaliable Yet"}
                                    </span>
                                </p>
                            )}
                            {productInfo.docs.fulfillmentType === "DIGITAL" && (
                                <p>{productInfo.docs.fulfillmentLabel[0].message}</p>
                            )}
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
                    <div className='w-5/6 ml-auto'>
                        <p className='font-bold'>{productInfo.docs.sellerName || ". . ."}</p>
                        <div className='grid grid-rows-2 grid-flow-col gap-x-[3%] my-2'>
                            <p className='font-bold overflow-hidden text-ellipsis whitespace-nowrap'>{productInfo.docs.sellerAverageRating?.toString().slice(0,3) || 'Not avaliable'}</p>
                            <p>Positive Feedback</p>
                            <p className='font-bold overflow-hidden text-ellipsis whitespace-nowrap'>{productInfo.docs.manufacturerName || 'Not avaliable'}</p>
                            <p>Manufacturer</p>
                        </div>
                        <a
                          className='inline-block w-[50vw] max-w-xs ml-[10%] py-0.5 rounded-full text-center text-black bg-white'
                          href='#'
                          aria-label='Example button'
                        >
                            <span>Visit Store</span>
                        </a>
                    </div>
                </section>

                <section className='h-full w-full bg-white' ref={infiniteSectionRef}>

                    <InfiniteProducts componentRef={infiniteSectionRef} />

                </section>

            </main>

            {!(specsModal || descModal || cartModal || showExtraButtons) && (
                <div className='fixed bottom-0 w-full max-w-screen-sm h-14 pt-1.5 text-white font-bold text-center bg-white z-30'>
                    <button
                        className='w-[42%] p-2.5 rounded-l-full bg-gradient-to-r from-yellow-400 to-orange-500'
                        disabled={productInfo.fetching}
                        onClick={toggleCart}
                    >
                        Add to cart
                    </button>
                    <button
                        className='w-[42%] p-2.5 rounded-r-full bg-gradient-to-r from-red-600 to-orange-500'
                        disabled={productInfo.fetching}
                        onClick={buyNowProduct}
                        aria-label='Buy product now'
                        type='button'
                    >
                        Buy now
                    </button>
                </div>
            )}

            <AddToCartModal productData={productInfo.docs} state={cartModal} toggle={toggleCart} />

            <ProductDetailsModal productData={productInfo.docs} state={specsModal} toggle={toggleSpecs} />

            <ProductDescriptionModal productData={productInfo.docs} state={descModal} toggle={toggleDesc} />
        </>
    )
}

export default ProductViewPage;