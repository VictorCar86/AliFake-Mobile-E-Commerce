import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { FaRegTrashAlt } from 'react-icons/fa';
import InfiniteProducts from '../containers/InfiniteProducts';
import BackButton from '../components/BackButton';

const CartPage = () => {
  return (
    <>
      <header className='fixed h-[12.8vw] w-full flex justify-between items-center bg-white z-30'>
        <div className='flex'>
          <BackButton />
          <span className='text-[5.5vw] font-bold'>Cart(2)</span>
        </div>

        <button className='mr-[5vw]' type='button' aria-label='Delete selected items'>
          <FaRegTrashAlt className='w-[6vw] h-auto opacity-75' />
        </button>
      </header>

      <main className='pt-[12.8vw] bg-gray-200/70'>
        <section>
          <GiShoppingCart className='w-2/5 h-max pt-[6vw] mx-auto fill-gray-400/60' />
          <p className='pb-[6%] text-center text-gray-500 text-[4vw]'>No items added to cart yet</p>
        </section>

        <InfiniteProducts />

      </main>
    </>
  )
}

export default CartPage