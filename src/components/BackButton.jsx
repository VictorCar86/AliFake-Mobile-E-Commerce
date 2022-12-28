import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button type='button' className='inline-block mx-3' onClick={() => navigate(-1)} aria-label="Go back">
            <FiChevronLeft className='w-[6.83vw] h-auto scale-125'/>
        </button>
    )
}

export default BackButton