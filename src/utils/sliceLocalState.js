import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../hooks/useLocalStorage";

const [viewedStorage, setViewedStorage] = useLocalStorage('viewed');
const [wishListStorage, setWishListStorage] = useLocalStorage('wishList');
const [shoppingCartStorage, setShoppingCartStorage] = useLocalStorage('shoppingCart');

export const sliceLocalState = createSlice({
    name: 'localStorageState',
    initialState: {
        viewed: viewedStorage || [],
        wishList: wishListStorage || [],
        shoppingCart: shoppingCartStorage || [],
    },
    reducers: {
      // Viewed
        setViewed: (state, action) => {
            if (typeof action !== 'object' || Array.isArray(action)) {
                console.error('It is only valid to use objects to save data');
            }

            const { docs, date } = action;

            if (docs === undefined && date === undefined) {
                console.error('Make sure that you are providing the correct data');
            }

            const newState = {
                product: {
                    image: docs.imageInfo.thumbnailUrl,
                    name: docs.name,
                },
                date: date
            };

            setViewedStorage(prev => [...prev, newState]);
            state.viewed = action;
        },

      // Wish List
        addWishList: (state, action) => {
            if (typeof action !== 'object' || Array.isArray(action)) {
                console.error('It is only valid to use objects to save data');
            }

            if (action.payload === undefined) {
                console.error('Make sure that you are providing the correct data');
            }

            const newState = {
                id: action.payload.id,
                image: action.payload.imageInfo.thumbnailUrl,
                name: action.payload.name,
                price: action.payload.productTypeId,
            };

            const concatArray = [...state.wishList];
            const alreadyExist = concatArray.some(item => item.id === newState.id)

            if (!alreadyExist){
                concatArray.push({...newState});
                setWishListStorage(concatArray);
                state.wishList = concatArray;
            }
        },
        deleteWishList: (state, action) => {
            state.wishList = [...state.wishList].filter(e => e.id !== action.payload);
        },

      // Shopping Cart
        setShoppingCart: (state, action) => {
            if (typeof action !== 'object' || Array.isArray(action)) {
                console.error('It is only valid to use objects to save data');
            }

            setShoppingCartStorage(action);
            state.shoppingCart = action;
        },
    }
})

export const localStorageState = (state) => state.sliceLocalState;
export const { setViewed, addWishList, deleteWishList, setShoppingCart } = sliceLocalState.actions;

export default sliceLocalState.reducer;