import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context/AppProvider';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import useIntersection from '../hooks/useIntersection';
import PreviewProduct from '../components/PreviewProduct';
import SpinnerIcon from '../assets/images/spinnerIcon.webp'

const InfiniteProducts = () => {
    const { state, callNewBestSalesData, callNewOffersData } = useContext(AppContext);
    const { bestSalesData, newOffersData } = state;
    const [infiniteLoading, setInfiniteLoading] = useState(false);

    const bestSalesRef = useRef(null);

    const [skeleton1Loading, setSkeleton1Loading] = useState(true);
    const [skeleton2Loading, setSkeleton2Loading] = useState(true);

    const renderProducts = (data, deal = false) => {
        // console.log(state)
        if (data.length !== 0){

            if (!!deal){
                if (skeleton1Loading === true){
                    setSkeleton1Loading(false)
                }
            } else {
                if (skeleton2Loading === true){
                    setSkeleton2Loading(false)
                }
            }

            return data.map((e, index) => (
                <li key={index}>
                    <PreviewProduct data={e} deal={deal} />
                </li>
            ))
        }
    }

    const scrollPagination = () => {
        setInfiniteLoading(true);

        if (bestSalesData.hasNextPage){
            callNewBestSalesData(bestSalesData.nextPage);
        } else {
            // callNewOffersData();
            setTimeout(() => callNewBestSalesData(), 2000);
        }
    }

    useEffect(() => {
        setInfiniteLoading(false)
    }, [bestSalesData]);

    useEffect(() => {
        if (bestSalesRef.current !== null && bestSalesData.hasNextPage){
            useIntersection(
                () => scrollPagination()
            ).observe(bestSalesRef.current)
        }
    }
    , [infiniteLoading]);

    return (
        <section className={`table-cell w-full h-full px-3 ${!infiniteLoading ? "pb-32" : "pb-14"} bg-white`}>
            <p className='my-4 text-lg font-medium'>More to love</p>
            <ul className='h-full w-full min-h-screen  grid grid-cols-2 gap-3 overflow-hidden'>
            {!!skeleton2Loading && (
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
            {renderProducts(bestSalesData.docs)}
            </ul>
            {!!infiniteLoading && (
                <div className='w-full h-max py-4 text-center'>
                    <img className='inline-block h-10 w-10 animate-spin' src={SpinnerIcon} alt="Spin loader image" />
                </div>
            )}
            {!infiniteLoading && (
                <button onClick={scrollPagination} ref={bestSalesRef}>more</button>
            )}
        </section>
    )
}

export default InfiniteProducts