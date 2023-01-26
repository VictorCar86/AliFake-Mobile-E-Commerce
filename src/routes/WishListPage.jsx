import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa';
import { FiShoppingCart, FiHeart, FiCheck } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { wishListState, putWishList } from '../utils/sliceWishList';
import ItemWishList from '../components/ItemWishList';
import GenericPage from '../containers/GenericPage';

const WishListPage = () => {
  const { wishList } = useSelector(wishListState);
  const dispatcher = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const deleteItemsFromStorage = () => {
    if (editMode && selectedItems.length > 0){
      const listFiltered = wishList.filter(initialItem => {
        return !selectedItems.some(toDelete => toDelete === initialItem.id);
      });

      dispatcher(putWishList(listFiltered));
      setEditMode(false);
    }
  };

  useEffect(() => {
    if (!editMode){
      setSelectedItems([])
    }
  }, [editMode]);

  return (
    <GenericPage title='Wish List' Icon={FiShoppingCart} linkTo="/cart">

      {wishList.length === 0 && (
        <section className='absolute top-[clamp(0px,12.8vw,82px)] bottom-0 w-full bg-gray-200/70'>
          <FiHeart className='w-1/6 h-min mx-auto fill-gray-300 stroke-gray-300 mt-[18%] mb-[3%]'/>
          <p className='text-clamp-sm text-center text-gray-400'>
            You haven't added any items to your Wish List yet.
          </p>
        </section>
      )}

      {wishList.length > 0 && (
        <>
          <div className='fixed max-h-[82px] h-[12.8vw] w-full max-w-screen-sm flex justify-between items-center pl-[clamp(0px,1vw,8px)] pr-[clamp(0px,2vw,16px)] border-b-[3px] border-gray-300 bg-white z-20'>
            <select className='p-[2%] text-clamp-base bg-transparent' name="productsOrder" id="productsOrder">
              <option value="allProducts">
                ALL PRODUCTS
              </option>
              <option value="lowPriceProd">
                LOW PRICE PRODUCTS
              </option>
            </select>

            <button
              onClick={() => setEditMode(!editMode)}
              className='w-[5vw] max-w-[32px] h-min p-3 box-content active:bg-gray-200'
              type='button'
            >
              {!editMode && (
                <FaPen className='w-full max-w-[32px] h-min'/>
              )}
              {editMode && (
                <FiCheck className='w-full max-w-[32px] h-min scale-[1.40]'/>
              )}
            </button>

          </div>

          <section className={`pt-[12.8%] ${editMode && 'pb-[clamp(0px,12.8vw,82px)]'}`}>
            <ul className='overflow-hidden'>

              {wishList.map((product, index) => (
                <ItemWishList
                  data={product}
                  selectedItems={selectedItems}
                  updater={setSelectedItems}
                  editMode={editMode}
                  key={index} />
              ))}

            </ul>
          </section>
        </>
      )}

      {editMode && (
        <div className='fixed bottom-0 max-h-[82px] h-[12.8vw] w-full max-w-screen-sm flex flex-row-reverse justify-between items-center px-[5%] bg-white z-20'>
          <button
            onClick={deleteItemsFromStorage}
            className='h-max w-max py-1.5 px-[8%] rounded text-clamp-base text-white shadow-lg bg-red-600'
            type='button'
          >
            DELETE({selectedItems.length})
          </button>
        </div>
      )}

    </GenericPage>
  )
}

export default WishListPage;