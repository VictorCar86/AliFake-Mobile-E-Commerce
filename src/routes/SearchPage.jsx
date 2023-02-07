import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { errorSearch, requestSearch, resultSearch, searchState } from '../utils/redux/sliceSearch';
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

    console.log(searchData, search);

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
            params: {cat_id: '0', sort: 'best_seller', page: pageNum, query: search.slice(3)},
            headers: {
                'X-RapidAPI-Key': envKey,
                'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
            }
        };

        dispatch( requestSearch() );

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

    const scrollPagination = () => {
        setInfiniteLoading(true);

        if (searchData.page !== 0 && searchData.hasNextPage){
            fetchSearch(searchData.nextPage);
        }
        else {
            fetchSearch();
        }
    }

    const useEffectFirstCall = useRef(false);

    useEffect(() => {
        if (useEffectFirstCall.current !== true){
            if (!searchData.fetching && searchData.page === 0){
                scrollPagination();
            }
        }
        return () => useEffectFirstCall.current = true;
    }, []);

    return (
        <>
            <header className='fixed flex items-center h-[12.8vw] max-h-[82px] w-full max-w-screen-sm bg-white z-30'>
                <BackButton />
                <Searcher className='ml-[11%] mb-0 mx-0' main='true'/>
            </header>
            <main className='min-h-screen w-full pt-[12.8%] px-3 pb-[13%]'>
                {!search && (
                  <>
                    <AliexpressBagIcon className='w-2/4 h-min mx-auto'/>
                    <p className='w-3/4 mx-auto text-center text-clamp-base font-medium'>Discover endless shopping possibilities with AliFake.</p>
                  </>
                )}

                {search && (
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

                    <button onClick={() => console.log(searchData)}>Click Here</button>

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