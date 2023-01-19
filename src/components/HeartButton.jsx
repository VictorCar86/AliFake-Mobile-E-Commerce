import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageState, addWishList, deleteWishList } from '../utils/sliceLocalState';

const HeartButton = ({ data = undefined, absolute = false, wishedCount = 0 }) => {
    const localStoreState = useSelector(localStorageState);
    const existItemOnStorage = localStoreState.wishList.some(item => item.id === data.usItemId);

    const [fill, setFill] = useState(existItemOnStorage);
    const dispatcher = useDispatch();

    useEffect(() => {
        if (fill){
            dispatcher(addWishList(data));
        } else {
            dispatcher(deleteWishList(data.usItemId));
        }
    }
    ,[fill])

    return (
        <button
            className={`${absolute && "absolute right-[5%] bottom-[5%]"} h-min p-1.5 flex items-center gap-1 rounded-full font-medium bg-gray-500/75 z-10`}
            onClick={() => setFill(!fill)}
            type='button'
        >
            <FiHeart className={`${fill && "fill-red-700"} stroke-white`} />

            {typeof wishedCount === 'number' && wishedCount > 0 && (
                <span>{wishedCount}</span>
            )}
        </button>
    )
}

export default HeartButton