import { createSlice } from "@reduxjs/toolkit";
import uniqueObjectsReducer from "../functions/uniqueObjectsReducer";

export const sliceBestSales = createSlice({
    name: 'bestSales',
    initialState: {
        fetching: false,
        errorFetch: false,
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
            const resultData = action.payload.data.search.searchResult;
            const dataDocs = resultData.itemStacks[0].items;
            const dataPagination = resultData.paginationV2;

            state.fetching = false;
            state.docs = dataDocs.reduce(uniqueObjectsReducer, [...state.docs]);
            state.hasNextPage = dataPagination.maxPage > dataPagination.currentPage;
            state.nextPage = dataPagination.currentPage + 1;
            state.page = dataPagination.currentPage;
        },
        errorBestSales: (state) => {
            state.errorFetch = true;
        }
    }
})

export const bestSalesState = (state) => state.sliceBestSales;
export const { requestBestSales, resultBestSales, errorBestSales } = sliceBestSales.actions;

export default sliceBestSales.reducer;