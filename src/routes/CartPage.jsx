import React, { useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { FaRegTrashAlt } from 'react-icons/fa';
import InfiniteProducts from '../containers/InfiniteProducts';
import BackButton from '../components/BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteShoppingCart, shoppingCartState } from '../utils/sliceShoppingCart';
import ItemCart from '../components/ItemCart';
import { useEffect } from 'react';

const CartPage = () => {
  const { shoppingCart } = useSelector(shoppingCartState);
  const dispatch = useDispatch();

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(selectedItems)
    return () => {return}
  }
  , [selectedItems])

  function deleteSelectedItems(){
    if (!selectedItems.length <= 0){
      selectedItems.forEach(id => {
        dispatch(deleteShoppingCart(id));
      })
      setSelectedItems([]);
    }
  }

  return (
    <>
      <header className='fixed h-[12.8vw] max-h-[81.906px] w-full max-w-[640px] flex justify-between items-center bg-white z-30'>
        <div className='flex'>
          <BackButton />
          <span className='text-clamp-xl font-bold'>Cart({shoppingCart.length})</span>
        </div>
        <button className='mr-[5%]' type='button' aria-label='Delete selected items'>
          <FaRegTrashAlt
            className='w-[6vw] max-w-[43.703px] h-auto opacity-75'
            onClick={deleteSelectedItems}
          />
        </button>
      </header>

      <main className='min-h-screen pt-[12.8%] bg-gray-200/70'>

        {shoppingCart.length <= 0 && (
          <section>
            <GiShoppingCart className='w-2/5 h-max pt-[6%] mx-auto fill-gray-400/60' />
            <p className='pb-[6%] text-center text-gray-500 text-clamp-base'>No items added to cart yet</p>
          </section>
        )}

        {shoppingCart.length > 0 && (
          <section>
            <ul>
              {shoppingCart.map((item, index) => (
                <ItemCart
                  data={item}
                  selectedItems={selectedItems}
                  updater={setSelectedItems}
                  key={index}
                />
              ))}
            </ul>
          </section>
        )}

        <InfiniteProducts />

      </main>
    </>
  )
}

export default CartPage