import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../hooks/useLocalStorage";

const [shoppingCartStorage, setShoppingCartStorage] = useLocalStorage('shoppingCart');

export const sliceShoppingCart = createSlice({
    name: 'shoppingCartState',
    initialState: {
        shoppingCart: shoppingCartStorage || [],
    },
    reducers: {
        setShoppingCart: (state, action) => {
            if (typeof action !== 'object' || Array.isArray(action)) {
                console.error('It is only valid to use objects to save data');
            }

            setShoppingCartStorage(action);
            state.shoppingCart = action;
        },
    }
})

export const shoppingCartState = (state) => state.sliceShoppingCart;
export const { setShoppingCart } = sliceShoppingCart.actions;

export default sliceShoppingCart.reducer;