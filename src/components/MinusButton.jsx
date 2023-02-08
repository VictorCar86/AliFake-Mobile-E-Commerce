import React from 'react';
import { FaMinus } from 'react-icons/fa';

const MinusButton = ({ className = "", disabled = false, onClick }) => {
  return (
    <button
        className={`rounded-full bg-gray-200 ${className}`}
        disabled={disabled}
        onClick={onClick}
        aria-label='Reduce amount of items'
        type='button'
    >
        <FaMinus className='scale-75 fill-gray-600' />
    </button>
  )
}

export default MinusButton