import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../hooks/useLocalStorage";

const [wishListStorage, setWishListStorage] = useLocalStorage('wishList');

export const sliceWishList = createSlice({
    name: 'wishListState',
    initialState: {
        wishList: wishListStorage || [],
    },
    reducers: {
        addWishList: (state, action) => {
            const data = action.payload;

            if (typeof data !== 'object' || Array.isArray(data)) {
                console.error('It is only valid to use objects to save data');
                return;
            }
            if (data === undefined) {
                console.error('Make sure that you are providing the correct data');
                return;
            }

            const alreadyExist = state.wishList.some(item => item.id === data.usItemId)

            if (alreadyExist){
                return;
            }

            let finalPrice;
            let finalCurrency;

            if (data.priceInfo.currentPrice !== null){
                finalPrice = data.priceInfo.currentPrice.priceString;
                finalCurrency = data.priceInfo.currentPrice.currencyUnit;
            }
            else {
                finalPrice = data.priceInfo.priceRange.priceString;
                finalCurrency = data.priceInfo.priceRange.currencyUnit;
            }

            const newItem = {
                id: data.usItemId,
                image: data.imageInfo.thumbnailUrl,
                name: data.name,
                price: finalPrice,
                currency: finalCurrency,
            };

            const newState = [...state.wishList, {...newItem}];

            setWishListStorage(newState);
            state.wishList = newState;
        },

        putWishList: (state, action) => {
            if (!Array.isArray(action.payload)){
                console.error('It is only valid to save your state within arrays');
            }

            setWishListStorage(action.payload);
            state.wishList = action.payload;
        },

        deleteWishList: (state, action) => {
            if (typeof action.payload !== 'string'){
                console.error('It is only valid to use IDs within strings');
            }

            const filteredArray = state.wishList.filter(e => e.id !== action.payload);
            setWishListStorage(filteredArray);
            state.wishList = filteredArray;
        },
    }
});

export const wishListState = (state) => state.sliceWishList;
export const { addWishList, putWishList, deleteWishList } = sliceWishList.actions;

export default sliceWishList.reducer;