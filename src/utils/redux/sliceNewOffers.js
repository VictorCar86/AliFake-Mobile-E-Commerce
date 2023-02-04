import { createSlice } from "@reduxjs/toolkit";

export const sliceNewOffers = createSlice({
    name: 'newOffers',
    initialState: {
        fetching: false,
        errorFetch: false,
        docs: [],
    },
    reducers: {
        requestNewOffers: (state) => {
            state.fetching = true;
            state.errorFetch = false;
            state.docs = [];
        },
        resultNewOffers: (state, action) => {
            const resultData = action.payload.data.search.searchResult;
            const dataDocs = resultData.itemStacks[0].items.slice(0, 10);

            // console.log(dataDocs);

            state.fetching = false;
            state.docs = dataDocs;
        },
        errorNewOffers: (state) => {
            state.errorFetch = true;
        }
    }
})

export const newOffersState = (state) => state.sliceNewOffers;
export const { requestNewOffers, resultNewOffers, errorNewOffers } = sliceNewOffers.actions;

export default sliceNewOffers.reducer;