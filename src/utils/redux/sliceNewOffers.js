import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

export const sliceNewOffers = createSlice({
    name: 'newOffers',
    initialState: {
        fetching: false,
        docs: [],
    },
    reducers: {
        requestOffers: (state) => {
            state.fetching = true;
            state.docs = [];
        },
        resultOffers: (state, action) => {
            state.fetching = false;
            state.docs = [...action.payload];
        },
    }
})

export const newOffersState = (state) => state.sliceNewOffers;
export const fetchingNewOffers = (state) => state.sliceNewOffers.fetching;
const { requestOffers, resultOffers } = sliceNewOffers.actions;

export const fetchNewOffers = (dispatch, selector) => () => {
    const alreadyFetching = selector(fetchingNewOffers);
    const envKey = process.env.NEWRAPIDAPI_KEY;

    if (alreadyFetching || !envKey){
        return;
    }

    const options = {
        method: 'GET',
        url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/SortedByNewest',
        params: {limit: '10'},
        headers: {
            'X-RapidAPI-Key': envKey,
            'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
        }
    };

    dispatch( requestOffers() );

    axios
        .request(options)
        .then((response) => {
            console.log("fetchBestSales", response);
            dispatch( resultOffers(response) );
        })
        .catch((error) => {
            console.error(error);
        });
}

export default sliceNewOffers.reducer;