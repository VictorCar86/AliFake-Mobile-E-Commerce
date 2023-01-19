import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa';
import { FiShoppingCart, FiHeart, FiCheck } from 'react-icons/fi'
import { useSelector } from 'react-redux';
import { localStorageState } from '../utils/sliceLocalState';
import ItemWishList from '../components/ItemWishList';
import GenericPage from '../containers/GenericPage';

const WishListPage = () => {
  const currentStateOfStorage = useSelector(localStorageState);
  const { wishList } = currentStateOfStorage;

  const [editMode, setEditMode] = useState(false);

  console.log(currentStateOfStorage)

  return (
    <GenericPage title='Wish List' Icon={FiShoppingCart} linkTo="/cart">
      <div className='fixed max-h-[82px] h-[12.8vw] w-full max-w-[640px] flex justify-between items-center px-[clamp(0px,1vw,8px)] border-b-[3px] border-gray-300 bg-white'>
        <select className='text-clamp-base' name="zzz" id="loszzz">
          <option value="zzz1">
            ALL PRODUCTS
          </option>
          <option value="zzz2">
            LOW PRICE PRODUCTS
          </option>
        </select>

        {!editMode && (
          <button
            onClick={() => setEditMode(!editMode)}
            className='w-[5vw] max-w-[32px] h-min p-3 box-content'
            type='button'
          >
            <FaPen className='w-full max-w-[32px] h-min'/>
          </button>
        )}
        {editMode && (
          <button
            onClick={() => setEditMode(!editMode)}
            className='w-[6vw] max-w-[32px] h-min p-3 box-content'
            type='button'
          >
            <FiCheck className='w-full max-w-[32px] h-min'/>
          </button>
        )}
      </div>

      {wishList.length === 0 && (
        <section className='absolute top-[clamp(0px,12.8vw,82px)] bottom-0 w-full bg-gray-200/70'>
          <FiHeart className='w-1/6 h-min mx-auto fill-gray-300 stroke-gray-300 mt-[18%] mb-[3%]'/>
          <p className='text-clamp-sm text-center text-gray-400'>
            You haven't added any items to your Wish List yet.
          </p>
        </section>
      )}

      {wishList.length > 0 && (
        <section className='pt-[12.8%]'>
          <ul className='overflow-hidden'>
            {wishList.map((product, index) => (
              <ItemWishList data={product} key={index} />
            ))}
          </ul>
        </section>
      )}

    </GenericPage>
  )
}

export default WishListPage;