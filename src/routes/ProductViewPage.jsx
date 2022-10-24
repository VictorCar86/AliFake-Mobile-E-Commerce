import React, { useContext, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom'
import Searcher from '../components/Searcher';
import { AppContext } from '../context/AppProvider';

const ProductViewPage = () => {
    const pageInfo = useParams();
    const navigate = useNavigate();

    const { state, productDescription } = useContext(AppContext);
    const { productInfo } = state;


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
                    <FiChevronLeft className='w-8 h-8' />
                </button>
                <Searcher />
            </header>
            <main className='min-h-screen pb-14'>
                <section className='text-[3.5vw]'>
                    <div className='flex overscroll-x-contain snap-x snap-mandatory overflow-x-scroll overflow-y-hidden'>
                        {displayImages()}
                    </div>
                    <div className='p-[3%]'>
                        <div className='flex gap-2 items-center'>
                            <span className='text-[5.5vw] font-bold'>{`${productInfo.sale_price_currency} ${productInfo.sale_price}`}</span>
                            <span className='line-through opacity-70'>{`${productInfo.sale_price_currency} ${productInfo.original_price}`}</span>
                            <span className='text-red-600'>{`-${productInfo.discount}`}</span>
                        </div>
                        <p className='my-2'>{productInfo.product_title}</p>
                        <span className='mr-2'>⭐⭐⭐⭐⭐</span>
                        <span className='mr-2'>{productInfo.feedBackRating.averageStar}</span>
                        <span className='mr-2'>{`${productInfo.lastest_volume} orders`}</span>
                        <button className='w-full mt-4 py-3.5 border-t border-gray-300' type='button'>
                            <span className='float-left font-bold'>Specifications</span>
                            <FiChevronRight className='inline-block w-[6%] h-[6%] float-right opacity-50' />
                        </button>
                    </div>
                    <div>
                        <button type='button' onClick={() => productDescription(pageInfo.id)}>product</button>
                        <button type='button' onClick={() => console.log(state)}>state</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductViewPage