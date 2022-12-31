import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import InfiniteProducts from '../containers/InfiniteProducts';
import BackButton from '../components/BackButton';

const CartPage = () => {
  return (
    <>
      <header className='h-[12.8vw] flex justify-between items-center bg-white'>
        <div className='flex'>
          {/* <FiChevronLeft className='inline-block w-[5vw] h-auto scale-150 opacity-75' /> */}
          <BackButton />
          <span className='text-[5.5vw] font-bold'>Cart(2)</span>
        </div>

        <div>
          <button className='mr-[5vw]' type='button' aria-label='Delete selected items'>
            <FaRegTrashAlt className='w-[6vw] h-auto opacity-75' />
          </button>
        </div>
      </header>

      <main className='bg-gray-200/70'>
        <section className=''>
          <GiShoppingCart className='w-2/5 h-max mx-auto fill-gray-400/60' />
          <p className='pb-[6%] text-center text-gray-500 text-[4vw]'>No items added to cart yet</p>
        </section>

        <InfiniteProducts />

      </main>
    </>
  )
}

export default CartPage