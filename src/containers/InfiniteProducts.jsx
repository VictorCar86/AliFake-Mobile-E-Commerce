import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { bestSalesState, requestBestSales, resultBestSales, errorBestSales } from '../utils/redux/sliceBestSales';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import useIntersection from '../hooks/useIntersection';
import BestSalesPreview from '../components/BestSalesPreview';
import spinnerIcon from '../assets/images/spinnerIcon.webp';
const axios = require("axios");

const InfiniteProducts = ({ componentRef }) => {
    const bestSalesData = useSelector(bestSalesState);
    const dispatch = useDispatch();

    const [infiniteLoading, setInfiniteLoading] = useState(bestSalesData.fetching);
    const [skeletonLoading, setSkeletonLoading] = useState(true);

    const scrollStopRef = useRef(null);
    const useEffectFirstCall = useRef(false);

    const { pathname } = useLocation();

    const renderProducts = (docs) => {
        if (docs.length !== 0){

            if (skeletonLoading === true){
                setSkeletonLoading(false);
            }

            return docs.map((e, index) => (
                <li key={index}>
                    <BestSalesPreview data={e} />
                </li>
            ))
        }
    }

    // console.log(useSelector(bestSalesState));

    const fetchBestSales = (pageNum = 1) => {
        const alreadyFetching = bestSalesData.fetching;
        const envKey = process.env.WALMART_KEY;

        if (alreadyFetching || !envKey){
            return;
        }

        const options = {
            method: 'GET',
            url: 'https://walmart.p.rapidapi.com/products/v2/list',
            params: {cat_id: '0', sort: 'best_seller', page: pageNum},
            headers: {
                'X-RapidAPI-Key': envKey,
                'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
            }
        };

        dispatch( requestBestSales() );

        axios.request(options)
            .then((response) => {
                dispatch( resultBestSales(response.data) );
                setInfiniteLoading(false);
            })
            .catch((error) => {
                dispatch( errorBestSales() );
                setInfiniteLoading(false);
                // console.error(error);
            });
    };

    const scrollPagination = () => {
        setInfiniteLoading(true);

        if (bestSalesData.page !== 0 && bestSalesData.hasNextPage){
            fetchBestSales(bestSalesData.nextPage);
        }
        else {
            fetchBestSales()
        }
    }

    useEffect(() => {
        if (useEffectFirstCall.current !== true){
            if (!bestSalesData.fetching && bestSalesData.page === 0){
                scrollPagination();
            }
        }
        return () => useEffectFirstCall.current = true;
    }, []);

    useEffect(() => {
        // console.log(bestSalesData)

        if (!bestSalesData.errorFetch && !bestSalesData.page <= 0 && !infiniteLoading){
            // console.log(pathname)
            useIntersection(
                () => {
                    scrollPagination();
                }
            ).observe(scrollStopRef.current);
        }
    }
    , [infiniteLoading]);

    return (
        <section
            className={`relative table-cell w-full ${!infiniteLoading ? 'h-[calc(100%+48px)]' : 'h-full'} px-3 ${(pathname === '/' || pathname === '/cart/purchase-done') && 'pb-[13%]'} ${pathname === '/cart' && 'pb-[26%]'} text-base bg-transparent`}
            ref={componentRef}
        >
            <p className={`my-[1.8vh] ${pathname !== '/' ? 'text-clamp-base font-bold' : 'text-clamp-lg font-medium'}`}>More to love</p>

            <ul className='h-full w-full min-h-screen grid grid-cols-2 gap-1.5 overflow-hidden'>

                {skeletonLoading && (
                <>
                    {[...Array(8).keys()].map(key => (
                        <li key={key}>
                            <SkeletonPreviewProduct error={bestSalesData.errorFetch} />
                        </li>
                    ))}
                </>
                )}

                { renderProducts(bestSalesData.docs) }

            </ul>
            {infiniteLoading && (
                <div className='w-full h-max py-4 text-center'>
                    <img className='inline-block h-10 w-10 animate-spin' src={spinnerIcon} alt='Spin loader image' />
                </div>
            )}
            {!infiniteLoading && (
                <span className='h-0 w-full' onClick={scrollPagination} ref={scrollStopRef} />
            )}
        </section>
    )
}

export default InfiniteProducts;