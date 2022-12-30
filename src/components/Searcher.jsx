import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Searcher = ({ placeholder = "microphones", main = false }) => {
  return (
    <div className={`w-3/5 h-max pl-3 rounded-3xl bg-gray-300 ${main ? "mb-3 mx-auto" : "inline-block"}`}>
        <input className='w-3/4 h-7 -mt-2 align-middle bg-transparent' type="text" placeholder={placeholder} />
        <button className='w-1/5 h-7 m-1 rounded-3xl bg-black' type="button" aria-label='Search product'>
            <FiSearch className='text-white mx-auto' />
        </button>
    </div>
  )
}

export default Searcher