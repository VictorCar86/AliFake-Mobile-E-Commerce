import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const axios = require("axios");
const dispatch = useDispatch();

export const productInfoSlice = createSlice({
    name: 'productData',
    initialState: {
        fetching: false,
        docs: {
            product_id: 0,
            product_small_image_urls: ['../assets/images/skeleton.webp'],
            feedBackRating: {},
        },
    },
    reducers: {
        requestProductData: (state) => {
            state.fetching = true;
            state.docs = [];
        },
        resultProductData: (state, action) => {
            state.fetching = false;
            state.docs = [...action.payload];
        },
    }
})

export const bestSalesState = (state) => state.productData;
export const fetchState = (state) => state.productData.fetching;
const { requestProductData, resultProductData } = productInfoSlice.actions;

export const fetchProductInfo = (productId = 0) => {
    const alreadyFetching = useSelector(fetchState);

    if (alreadyFetching){
        return;
    }

    const options = {
        method: 'GET',
        url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${productId}`,
        params: {lg: 'en', targetCurrency: 'USD'},
        headers: {
            'X-RapidAPI-Key': process.env.NEWRAPIDAPI_KEY,
            'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
        }
    };

    dispatch( requestProductData() );

    axios
        .request(options)
        .then((response) => {
            console.log("fetchProductInfo", response);
            dispatch( resultProductData(response) );
        }).catch((error) => {
            console.error(error);
        });
}

export default productInfoSlice.reducer;