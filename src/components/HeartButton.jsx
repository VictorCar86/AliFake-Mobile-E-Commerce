import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const HeartButton = ({ sticky = false, wishedCount }) => {
    const [fill, setFill] = useState(false);

    return (
        <button
            className={`${sticky && "sticky top-[90%] right-4"} h-min px-1.5 flex items-center gap-1 rounded-full font-medium bg-gray-300/80`}
            onClick={() => setFill(!fill)}
            type='button'
        >
            <FiHeart className={`${fill && "fill-black"}`} />
            <span>{wishedCount}</span>
        </button>
    )
}

export default HeartButton