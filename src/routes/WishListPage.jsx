import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import CompleteModal from '../containers/CompleteModal';

const WishListPage = () => {
  return (
    <CompleteModal title='Wish List' Icon={FiShoppingCart} linkTo="/cart">

    </CompleteModal>
  )
}

export default WishListPage