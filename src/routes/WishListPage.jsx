import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import GenericPage from '../containers/GenericPage';

const WishListPage = () => {
  return (
    <GenericPage title='Wish List' Icon={FiShoppingCart} linkTo="/cart">

    </GenericPage>
  )
}

export default WishListPage