import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Searcher = ({ placeholder = "microphones" }) => {
  return (
    <div className='w-max h-max pl-3 mb-3 mx-auto rounded-3xl bg-gray-300'>
        <input className='h-7 -mt-2 align-middle bg-transparent' type="text" placeholder={placeholder} />
        <button className='w-11 h-7 m-1 rounded-3xl bg-black' type="button">
            <FiSearch className='text-white mx-auto' />
        </button>
    </div>
  )
}

export default Searcher