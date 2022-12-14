import { createSlice } from "@reduxjs/toolkit";

const uniqueObjectsReducer = (accumulator, currentValue) => {
    const existingObject = accumulator.find(
      (obj) => obj.product_id === currentValue.product_id
    );

    if (!existingObject) {
      accumulator.push(currentValue);
    }

    return accumulator;
}

export const sliceBestSales = createSlice({
    name: 'bestSales',
    initialState: {
        fetching: false,
        docs: [],
        hasNextPage: true,
        nextPage: 1,
        page: 0,
    },
    reducers: {
        requestBestSales: (state) => {
            state.fetching = true;
        },
        resultBestSales: (state, action) => {
            const payload = action.payload;

            state.fetching = false;
            state.docs = payload.docs.reduce(uniqueObjectsReducer, [...state.docs]);
            state.hasNextPage = payload.hasNextPage;
            state.nextPage = payload.nextPage;
            state.page = payload.page;
        },
    }
})

export const bestSalesState = (state) => state.sliceBestSales;
export const { requestBestSales, resultBestSales } = sliceBestSales.actions;

export default sliceBestSales.reducer;