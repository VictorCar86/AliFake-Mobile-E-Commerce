import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

export const sliceProductInfo = createSlice({
    name: 'productInfo',
    initialState: {
        fetching: false,
        docs: {
            product_id: 0,
            product_small_image_urls: ['../assets/images/skeleton.webp'],
            feedBackRating: {},
        },
    },
    reducers: {
        requestProductInfo: (state) => {
            state.fetching = true;
            state.docs = [];
        },
        resultProductInfo: (state, action) => {
            state.fetching = false;
            state.docs = [...action.payload];
        },
    }
})

export const productInfoState = (state) => state.sliceProductInfo;
export const fetchingProductInfo = (state) => state.sliceProductInfo.fetching;
const { requestProductInfo, resultProductInfo } = sliceProductInfo.actions;

export const fetchProductInfo = (dispatch, selector) => (productId = 0) => {
    const alreadyFetching = selector(fetchingProductInfo);
    const envKey = process.env.NEWRAPIDAPI_KEY;

    if (alreadyFetching || !envKey){
        return;
    }

    const options = {
        method: 'GET',
        url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${productId}`,
        params: {lg: 'en', targetCurrency: 'USD'},
        headers: {
            'X-RapidAPI-Key': envKey,
            'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
        }
    };

    dispatch( requestProductInfo() );

    axios
        .request(options)
        .then((response) => {
            console.log("fetchProductInfo", response);
            dispatch( resultProductInfo(response) );
        }).catch((error) => {
            console.error(error);
        });
}

export default sliceProductInfo.reducer;