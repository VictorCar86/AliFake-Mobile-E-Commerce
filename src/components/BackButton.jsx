import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const BackButton = ({ onClick }) => {
    const navigate = useNavigate();

    return (
        <button type='button' className='inline-block mx-3' onClick={typeof onClick === 'function' ? onClick : (() => navigate(-1))} aria-label="Go back">
            <FiChevronLeft className='w-[6.83vw] max-w-[43.703px] h-auto scale-125'/>
        </button>
    )
}

export default BackButton;