import { createSlice } from "@reduxjs/toolkit";
import uniqueObjectsReducer from "../utils/functions/uniqueObjectsReducer";

export const sliceSearch = createSlice({
    name: 'searchState',
    initialState: {
        query: "",
        fetching: false,
        errorFetch: false,
        docs: [],
        hasNextPage: true,
        nextPage: 1,
        page: 0,
    },
    reducers: {
        requestNewSearch: (state, action) => {
            if (typeof action.payload !== 'string'){
                console.error('It is only valid to save your search query into strings');
                return;
            }

            state.docs = [];
            state.query = action.payload;
            state.fetching = true;
        },

        requestNextPageSearch: (state) => {
            state.fetching = true;
        },

        resultSearch: (state, action) => {
            const resultData = action.payload.data.search.searchResult;
            const dataDocs = resultData.itemStacks[0].items;
            const dataPagination = resultData.paginationV2;

            state.fetching = false;
            state.docs = dataDocs.reduce(uniqueObjectsReducer, [...state.docs]);
            state.hasNextPage = dataPagination.maxPage > dataPagination.currentPage;
            state.nextPage = dataPagination.currentPage + 1;
            state.page = dataPagination.currentPage;
        },

        errorSearch: (state) => {
            state.errorFetch = true;
        }
    }
})

export const searchState = (state) => state.sliceSearch;
export const { requestNewSearch, requestNextPageSearch, resultSearch, errorSearch } = sliceSearch.actions;

export default sliceSearch.reducer;