import React, { useContext, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiHeart, FiX } from 'react-icons/fi';
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
            <main className='min-h-screen pb-14 text-[4vw]'>
                <section>
                    <div className='relative flex overscroll-x-contain snap-x snap-mandatory overflow-x-scroll overflow-y-hidden'>
                        {displayImages()}
                        <button className='sticky top-[90%] right-4 h-min px-1.5 flex items-center gap-1 rounded-2xl font-medium bg-gray-300' type='button'>
                            <FiHeart />
                            <span>{productInfo.wishedCount}</span>
                        </button>
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
                        <button
                            className='w-full mt-4 py-3.5 border-t border-gray-300'
                            onClick={toggleSpecs}
                            type='button'
                        >
                            <span className='float-left font-bold'>Specifications</span>
                            <FiChevronRight className='inline-block w-[6%] h-[6%] float-right opacity-50' />
                        </button>
                    </div>
                    <div>
                        {/* {productInfo.metadata.descriptionModule.descriptionUrl} */}
                    </div>
                    <div>
                        <button type='button' onClick={() => productDescription(pageInfo.id)}>product</button>
                        <button type='button' onClick={() => console.log(state)}>state</button>
                    </div>
                </section>
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
                    <table className='w-full h-full mt-[12%]'>
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