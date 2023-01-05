import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { FaRegTrashAlt } from 'react-icons/fa';
import InfiniteProducts from '../containers/InfiniteProducts';
import BackButton from '../components/BackButton';

const CartPage = () => {
  return (
    <>
      <header className='fixed h-[12.8vw] max-h-[81.906px] w-full max-w-[640px] flex justify-between items-center bg-white z-30'>
        <div className='flex'>
          <BackButton />
          <span className='text-clamp-xl font-bold'>Cart(2)</span>
        </div>

        <button className='mr-[5%]' type='button' aria-label='Delete selected items'>
          <FaRegTrashAlt className='w-[6vw] max-w-[43.703px] h-auto opacity-75' />
        </button>
      </header>

      <main className='pt-[12.8%] bg-gray-200/70'>
        <section>
          <GiShoppingCart className='w-2/5 h-max pt-[6%] mx-auto fill-gray-400/60' />
          <p className='pb-[6%] text-center text-gray-500 text-clamp-base'>No items added to cart yet</p>
        </section>

        <InfiniteProducts />

      </main>
    </>
  )
}

export default CartPage