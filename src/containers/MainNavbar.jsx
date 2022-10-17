import React from 'react'
import { useLocation } from 'react-router-dom'
import { FiUser, FiShoppingCart, FiGrid, FiHome } from 'react-icons/fi'

const MainNavbar = () => {

  const svgStyles = "w-6 h-6 mx-auto";

  const location = useLocation();

  return (
    <nav className='w-full max-w-md rounded-t-lg pt-1.5 fixed bottom-0 left-1/2 -translate-x-1/2 bg-gray-100'>
        <ul className='flex justify-around gap-3' >
            <li className={`${location.pathname === "/" ? "text-red-600" : "text-black"}`}>
              <FiHome className={svgStyles} />
              <span>Home</span>
            </li>
            <li>
              <FiGrid className={svgStyles} />
              <span>Categories</span>
            </li>
            <li>
              <FiShoppingCart className={svgStyles} />
              <span>Cart</span>
            </li>
            <li>
              <FiUser className={svgStyles} />
              <span>Account</span>
            </li>
        </ul>
    </nav>
  )
}

export default MainNavbar