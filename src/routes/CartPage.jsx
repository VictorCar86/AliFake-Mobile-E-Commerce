import React, { useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from 'react-icons/fa';
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
    console.log(selectedItems);
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

  function priceReducer(array){
    const reducedNumber = array.reduce((accumulator, item) => {

      const alreadySelected = selectedItems.findIndex(p => p.id === item.id);

      if (alreadySelected === -1){
        return accumulator;
      }

      const amountProduct = alreadySelected >= 0 ? selectedItems[alreadySelected].amount : false;

      const newPrice = Number(item.price.slice(1)) * (amountProduct || 1);

      return accumulator + newPrice;
    }
    , 0);

    const stringyNumber = `$${reducedNumber}`;

    return stringyNumber.includes('.') ? stringyNumber : stringyNumber + '.00';
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
            USD {selectedItems.length > 0 ? priceReducer(shoppingCart) : '$0.00'}
          </span>
          <button className='py-[1.5%] px-[3%] rounded-full text-white bg-rose-600' type='button'>
            Checkout ({selectedItems.length})
          </button>
        </div>
      </main>
    </>
  )
}

export default CartPage;