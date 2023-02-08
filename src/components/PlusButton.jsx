import React from 'react';
import { FaPlus } from 'react-icons/fa';

const PlusButton = ({ className = "", disabled = false, onClick }) => {
  return (
    <button
        className={`rounded-full bg-gray-200 ${className}`}
        disabled={disabled}
        onClick={onClick}
        aria-label='Increase amount of items'
        type='button'
    >
        <FaPlus className='scale-75 fill-gray-600' />
    </button>
  )
}

export default PlusButton