import { createSlice } from "@reduxjs/toolkit";

export const sliceSearch = createSlice({
    name: 'searchState',
    initialState: {
        fetching: false,
        errorFetch: false,
        docs: [],
        hasNextPage: true,
        nextPage: 1,
        page: 0,
    },
    reducers: {
        requestSearch: (state) => {
            state.fetching = true;
            state.docs = [];
        },
        resultSearch: (state, action) => {
            const resultData = action.payload.data.search.searchResult;
            const dataDocs = resultData.itemStacks[0].items;
            const dataPagination = resultData.paginationV2;

            state.fetching = false;
            state.docs = dataDocs;
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
export const { requestSearch, resultSearch, errorSearch } = sliceSearch.actions;

export default sliceSearch.reducer;