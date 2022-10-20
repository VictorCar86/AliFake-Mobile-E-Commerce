import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppProvider';
import Header from '../containers/Header'
import PreviewProduct from '../components/PreviewProduct';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import SpinnerIcon from '../assets/images/spinnerIcon.webp'

const MainPage = () => {
  const [skeleton1Loading, setSkeleton1Loading] = useState(true);
  const [skeleton2Loading, setSkeleton2Loading] = useState(true);
  const [infiniteLoading, setInfiniteLoading] = useState(false);

  const { state, callNewBestSalesData, callNewOffersData } = useContext(AppContext)
  const { bestSalesData, newOffersData } = state;

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

  useEffect(() => {
    setInfiniteLoading(false)
  }, [bestSalesData])

  const scrollPagination = () => {
    setInfiniteLoading(true)
    // if (bestSalesData.hasNextPage){
    //   callNewBestSalesData(bestSalesData.nextPage)
    // }
    callNewOffersData(1)
    setTimeout(() => callNewBestSalesData(), 2000)
  }

  // window.addEventListener("scroll", () => {
  //     const {
  //       scrollTop,
  //       scrollHeight,
  //       clientHeight
  //     } = document.documentElement;

  //     const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);

  //     if (scrollIsBottom){
  //       callNewBestSalesData(bestSalesData.nextPage)
  //     }

  //     console.log(state)
  //   }
  // )

  return (
    <>
      <Header />
      <main>
        <section className='px-3 pt-[108px]'>
          <p className='my-4 text-lg font-medium'>Most recent offers</p>
          <ul className='h-full max-h-[450px] flex gap-3 overflow-x-scroll overflow-y-hidden'>
            {!!skeleton1Loading && (
              <>
                <li>
                  <SkeletonPreviewProduct deal="true" />
                </li>
                <li>
                  <SkeletonPreviewProduct deal="true" />
                </li>
                <li>
                  <SkeletonPreviewProduct deal="true" />
                </li>
                <li>
                  <SkeletonPreviewProduct deal="true" />
                </li>
              </>
            )}
            {renderProducts(newOffersData, true)}
          </ul>
        </section>
        <section className='px-3 pb-14'>
          <p className='my-4 text-lg font-medium'>More to love</p>
          <ul className='h-full w-full grid grid-cols-2 gap-3 overflow-hidden'>
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
            <img className='h-10 w-10 mx-auto my-4 animate-spin' src={SpinnerIcon} alt="Spin loader image" />
          )}
          <button onClick={scrollPagination}>more</button>
        </section>
      </main>
    </>
  )
}

export default MainPage