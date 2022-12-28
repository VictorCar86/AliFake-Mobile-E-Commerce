import React, { useState } from 'react'
// import { AppContext } from '../context/AppProvider';
import Header from '../containers/Header'
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import InfiniteProducts from '../containers/InfiniteProducts';

const MainPage = () => {
  // const { state, callNewBestSalesData, callNewOffersData } = useContext(AppContext);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  const renderProducts = (data, deal = false) => {
    // console.log(state)
    if (data.length !== 0){

        setSkeletonLoading(false);

        return data.map((e, index) => (
            <li key={index}>
                <PreviewProduct data={e} deal={deal} />
            </li>
        ))
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className='px-3 pt-[108px]'>
          <p className='my-[1.8vh] text-[4.8vw] font-medium'>Most recent offers</p>
          <ul className='h-full max-h-[450px] flex gap-3 overflow-x-scroll overflow-y-hidden'>
            {!!skeletonLoading && (
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
            {/* {renderProducts(newOffersData)} */}
          </ul>
        </section>
        <InfiniteProducts />
      </main>
    </>
  )
}

export default MainPage