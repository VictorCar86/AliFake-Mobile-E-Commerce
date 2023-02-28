import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { errorSearch, requestNewSearch, requestNextPageSearch, resultSearch, searchState } from '../context/sliceSearch';
import useIntersection from '../hooks/useIntersection';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import BestSalesPreview from '../components/BestSalesPreview';
import AliexpressBagIcon from '../utils/icons/AliexpressBagIcon';
import BackButton from '../components/BackButton';
import Searcher from '../components/Searcher';
import spinnerIcon from '../assets/images/spinnerIcon.webp';
const axios = require("axios");

const SearchPage = () => {
    const searchData = useSelector(searchState);
    const { search } = useLocation();
    const dispatch = useDispatch();

    const querySearch = search.slice(3);

    const [infiniteLoading, setInfiniteLoading] = useState(searchData.fetching);
    const [skeletonLoading, setSkeletonLoading] = useState(true);

    const scrollStopRef = useRef(null);

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

    const fetchSearch = (pageNum = 1) => {
        const alreadyFetching = searchData.fetching;
        const envKey = process.env.WALMART_KEY;

        if (alreadyFetching || !envKey){
            return;
        }

        const options = {
            method: 'GET',
            url: 'https://walmart.p.rapidapi.com/products/v2/list',
            params: {cat_id: '0', sort: 'best_seller', page: pageNum, query: querySearch},
            headers: {
                'X-RapidAPI-Key': envKey,
                'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
            }
        };

        if (querySearch !== searchData.query){
            dispatch( requestNewSearch(querySearch) );
        } else {
            dispatch( requestNextPageSearch() );
        }

        axios.request(options)
            .then((response) => {
                dispatch( resultSearch(response.data) );
                setInfiniteLoading(false);
            })
            .catch((error) => {
                dispatch( errorSearch() );
                setInfiniteLoading(false);
                console.error(error);
            });
    };

    const scrollPagination = (newFetch = false) => {
        setInfiniteLoading(true);

        if (searchData.page !== 0 && searchData.hasNextPage && !newFetch){
            fetchSearch(searchData.nextPage);
        }
        else {
            fetchSearch();
        }
    }

    useEffect(() => {
        if (querySearch !== searchData.query && searchData.docs.length > 0){
            window.scrollTo(0,0);
            setSkeletonLoading(true);
            scrollPagination(true);
        }
    }, [search]);

    const useEffectFirstCall = useRef(false);

    useEffect(() => {
        if (useEffectFirstCall.current !== true){
            if (!searchData.fetching && searchData.page === 0){
                window.scrollTo(0,0);
                scrollPagination();
            }
        }
        return () => useEffectFirstCall.current = true;
    }, []);

    useEffect(() => {
        if (querySearch && !searchData.page <= 0 && searchData.hasNextPage && !infiniteLoading && !searchData.fetching){
            useIntersection(
                () => {
                    scrollPagination();
                }
            ).observe(scrollStopRef.current);
        }
    }
    , [infiniteLoading]);

    return (
        <>
            <header className='fixed flex items-center h-[12.8vw] max-h-[82px] w-full max-w-screen-sm bg-white z-30'>
                <BackButton />
                <Searcher className='ml-[clamp(0px,9vw,57px)]'/>
            </header>
            <main className='min-h-screen w-full pt-[12.8%] px-3 pb-[13%]'>
                {!querySearch && (
                  <>
                    <AliexpressBagIcon className='w-2/4 h-min mx-auto'/>
                    <p className='w-3/4 mx-auto text-center text-clamp-base font-medium'>Discover endless shopping possibilities with AliFake.</p>
                  </>
                )}

                {querySearch && (
                  <>
                    <ul className='h-full w-full min-h-screen grid grid-cols-2 gap-1.5 overflow-hidden'>
                        {skeletonLoading && (
                            [...Array(8).keys()].map(key => (
                                <li key={key}>
                                    <SkeletonPreviewProduct error={searchData.errorFetch} />
                                </li>
                            ))
                        )}

                        { renderProducts(searchData.docs) }
                    </ul>

                    {infiniteLoading && (
                        <div className='w-full h-max py-4 text-center'>
                            <img className='inline-block h-10 w-10 animate-spin' src={spinnerIcon} alt='Spin loader image' />
                        </div>
                    )}
                    {!infiniteLoading && (
                        <span className='h-0 w-full' onClick={scrollPagination} ref={scrollStopRef} />
                    )}
                  </>
                )}
            </main>
        </>
    )
}

export default SearchPage;