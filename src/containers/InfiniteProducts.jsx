import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import useIntersection from '../hooks/useIntersection';
import PreviewProduct from '../components/PreviewProduct';
import SpinnerIcon from '../assets/images/spinnerIcon.webp'

const InfiniteProducts = ({ data, callData }) => {

    const [infiniteLoading, setInfiniteLoading] = useState(false);
    const [skeletonLoading, setSkeletonLoading] = useState(true);

    const scrollStopRef = useRef(null);

    const { pathname } = useLocation();

    const renderProducts = (docs) => {
        if (docs.length !== 0){

            if (skeletonLoading === true){
                setSkeletonLoading(false);
            }

            return docs.map((e, index) => (
                <li key={index}>
                    <PreviewProduct data={e} />
                </li>
            ))
        }
    }

    const scrollPagination = () => {
        setInfiniteLoading(true);

        if (data.hasNextPage){
            callData(data.nextPage);
        }
        else {
            setTimeout(() => callData(), 2000);
        }
    }

    useEffect(() => {
        setInfiniteLoading(false);
    },
    [data]);

    useEffect(() => {
        if (scrollStopRef.current !== null && data.hasNextPage){
            useIntersection(
                () => scrollPagination()
            ).observe(scrollStopRef.current);
        }
    }
    , [infiniteLoading]);

    return (
        <section className={`table-cell w-full h-full px-3 ${!infiniteLoading ? "pb-12" : ""} text-base bg-white`}>
            <p className={`my-4 text-lg ${pathname !== "/" ? "text-[4vw] font-bold" : "font-medium"} font-medium`}>More to love</p>
            <ul className='h-full w-full min-h-screen  grid grid-cols-2 gap-3 overflow-hidden'>
            {!!skeletonLoading && (
                <>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                    <li>
                        <SkeletonPreviewProduct />
                    </li>
                </>
            )}
            {renderProducts(data.docs)}
            </ul>
            {!!infiniteLoading && (
                <div className='w-full h-max py-4 text-center'>
                    <img className='inline-block h-10 w-10 animate-spin' src={SpinnerIcon} alt="Spin loader image" />
                </div>
            )}
            {!infiniteLoading && (
                <button onClick={scrollPagination} ref={scrollStopRef}>more</button>
            )}
        </section>
    )
}

export default InfiniteProducts