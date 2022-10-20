import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppProvider';
import Header from '../containers/Header'
import PreviewProduct from '../components/PreviewProduct';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import SpinnerIcon from '../assets/images/spinnerIcon.webp'

const MainPage = () => {
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const [infiniteLoading, setInfiniteLoading] = useState(false);

  const { state, callNewBestSalesData } = useContext(AppContext)
  const { bestSalesData } = state;

  const renderProducts = () => {
    console.log(state)
    if (bestSalesData.docs.length !== 0){
      if (skeletonLoading === true){
        setSkeletonLoading(false)
      }
      return bestSalesData.docs.map((e, index) => (
        <li key={index}>
          <PreviewProduct data={e} />
        </li>
      ))
    }
  }

  useEffect(() => {
    setInfiniteLoading(false)
  }, [bestSalesData])

  const scrollPagination = () => {
    setInfiniteLoading(true)
    if (bestSalesData.hasNextPage){
      callNewBestSalesData(bestSalesData.nextPage)
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className='max-w-[490px] mx-auto px-3 pt-[108px] pb-14'>
          <p className='my-4 mx-auto text-lg font-medium'>More to love</p>
          <ul className='h-full w-full grid grid-cols-2 gap-3 overflow-hidden'>
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
            {renderProducts()}
          </ul>
          {!!infiniteLoading && (
            <img className='h-10 w-10 mx-auto my-4 animate-spin' src={SpinnerIcon} alt="Spin loader image" />
          )}
          <button onClick={scrollPagination}>more</button>
        </section>
      </main>
    </>
  )
}

export default MainPage