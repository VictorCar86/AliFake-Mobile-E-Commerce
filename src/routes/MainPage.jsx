import React from 'react';
import Header from '../containers/Header';
import NewOffers from '../containers/NewOffers';
import InfiniteProducts from '../containers/InfiniteProducts';

const MainPage = () => {
  return (
    <>
      <Header />

      <main className='min-h-screen text-base'>

        <NewOffers />

        <InfiniteProducts />

      </main>
    </>
  )
}

export default MainPage;