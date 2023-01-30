import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GiShoppingCart } from 'react-icons/gi';
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from 'react-icons/fa';
import { deleteShoppingCart, shoppingCartState } from '../utils/redux/sliceShoppingCart';
import BackButton from '../components/BackButton';
import ItemCart from '../components/ItemCart';
import priceReducer from '../utils/functions/priceReducer';
import InfiniteProducts from '../containers/InfiniteProducts';
import { useEffect } from 'react';
import { addPurchaseID } from '../utils/redux/slicePurchase';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { shoppingCart } = useSelector(shoppingCartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(selectedItems);
    console.log(shoppingCart);
    return () => {return}
  }
  , [selectedItems])

  function deleteSelectedItems(){
    if (!selectedItems.length <= 0){
      selectedItems.forEach(product => {
        dispatch(deleteShoppingCart(product.id));
      })
      setSelectedItems([]);
    }
  }

  function toggleSelectedItems(){
    if (selectedItems.length < shoppingCart.length){
      const everyProductSelected = shoppingCart.reduce((accumulator, product) => {
        return [...accumulator, {id: product.id, amount: product.amount}]
      }, []);
      setSelectedItems(everyProductSelected);
    }
    else {
      setSelectedItems([]);
    }
  }

  function sendToConfirmation(){
    selectedItems.forEach(item => {
      dispatch(addPurchaseID(item.id));
    });

    navigate('/cart/confirm');
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

        <div className='fixed bottom-0 flex items-center w-screen max-w-screen-sm h-[27vw] max-h-40 px-[clamp(0px,5vw,26px)] pb-[clamp(0px,15vw,77px)] text-clamp-base bg-white'>
          <button onClick={toggleSelectedItems} type='button'>
            {selectedItems.length === shoppingCart.length && (
                <FaCheckCircle
                    className='inline-block max-w-[32px] w-[5vw] h-min fill-rose-600'
                />
            )}
            {selectedItems.length < shoppingCart.length && (
                <FaRegCircle
                    className='inline-block max-w-[32px] w-[5vw] h-min fill-gray-400/75'
                />
            )}
            <span className='ml-2 align-middle' type='button'>All</span>
          </button>
          <span className='ml-auto mr-[3%] font-medium'>
            USD {priceReducer(shoppingCart, selectedItems)}
          </span>
          <button className='py-[1.5%] px-[3%] rounded-full text-white bg-rose-600' disabled={selectedItems.length <= 0} onClick={sendToConfirmation} type='button'>
            Checkout ({selectedItems.length})
          </button>
        </div>
      </main>
    </>
  )
}

export default CartPage;