import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";

const [shoppingCartStorage, setShoppingCartStorage] = useLocalStorage('shoppingCart');

export const sliceShoppingCart = createSlice({
    name: 'shoppingCartState',
    initialState: {
        shoppingCart: shoppingCartStorage || [],
    },
    reducers: {
        addShoppingCart: (state, action) => {
            const data = action.payload;

            if (typeof data !== 'object' || Array.isArray(data)) {
                console.error('It is only valid to use objects to save data');
                return;
            }
            if (data === undefined) {
                console.error('Make sure that you are providing the correct data');
                return;
            }

            const existsIndex = state.shoppingCart.findIndex(item => item.id === data.usItemId);

            if (existsIndex === -1) {
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
                    name: data.name,
                    amount: data.amount,
                    minAmount: data.orderMinLimit,
                    maxAmount: data.orderLimit,
                    price: finalPrice,
                    currency: finalCurrency,
                    image: data.imageInfo.thumbnailUrl,
                    manufacturer: data.manufacturerName,
                };

                const newState = [...state.shoppingCart, {...newItem}];

                setShoppingCartStorage(newState);
                state.shoppingCart = newState;
            }
            else {
                if (state.shoppingCart[existsIndex].amount !== data.amount){
                    state.shoppingCart[existsIndex].amount = data.amount;
                    setShoppingCartStorage([...state.shoppingCart]);
                }
            }
        },
        deleteShoppingCart: (state, action) => {
            if (typeof action.payload !== 'string'){
                console.error('It is only valid to use IDs within strings');
            }

            const filteredArray = state.shoppingCart.filter(e => e.id !== action.payload);
            setShoppingCartStorage(filteredArray);
            state.shoppingCart = filteredArray;
        },
    }
})

export const shoppingCartState = (state) => state.sliceShoppingCart;
export const { addShoppingCart, deleteShoppingCart } = sliceShoppingCart.actions;

export default sliceShoppingCart.reducer;