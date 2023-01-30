import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";

const [viewedStorage, setViewedStorage] = useLocalStorage('viewedItems');

export const sliceViewedItems = createSlice({
    name: 'viewedItemsState',
    initialState: {
        viewedItems: viewedStorage || [],
    },
    reducers: {
        addViewedItem: (state, action) => {
            const data = action.payload;

            if (typeof data !== 'object' || Array.isArray(data)) {
                console.error('It is only valid to use objects to save data');
            }
            if (state.viewedItems.some(i => i.id === data.usItemId)){
                return;
            }

            const currentDate = new Date();
            const month = currentDate.toLocaleString('default', {month: 'long'});
            const day = currentDate.getDate();
            const year = currentDate.getFullYear();

            const finalDate = `${month} ${day}, ${year}`;
            const finalImage = data.imageInfo.allImages[0].url;
            let finalCurrency;
            let finalPrice;

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
                date: finalDate,
                image: finalImage,
                currency: finalCurrency,
                price: finalPrice,
            };

            const newState = [{...newItem}, ...state.viewedItems];
            console.log(newState);

            setViewedStorage(newState);
            state.viewedItems = newState;
        },
    }
});

export const viewedItemsState = (state) => state.sliceViewedItems;
export const { addViewedItem } = sliceViewedItems.actions;

export default sliceViewedItems.reducer;