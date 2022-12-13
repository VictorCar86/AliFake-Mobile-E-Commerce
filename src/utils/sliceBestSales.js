import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const axios = require("axios");
const dispatch = useDispatch();

export const bestSalesSlice = createSlice({
    name: 'bestSalesData',
    initialState: {
        fetching: false,
        docs: [],
        hasNextPage: false,
        nextPage: 1,
        page: 0,
    },
    reducers: {
        requestBestSales: (state) => {
            state.fetching = true;
            state.docs = [];
            // state.hasNextPage = false;
            // state.nextPage = 1;
            // state.page = 0;
        },
        resultBestSales: (state, action) => {
            state.fetching = false;
            state.docs = [...action.payload];
        },
    }
})

export const bestSalesState = (state) => state.bestSalesData;
export const fetchState = (state) => state.bestSalesData.fetching;
const { requestBestSales, resultBestSales } = bestSalesSlice.actions;

export const fetchBestSales = (pageNum = 1) => {
    const alreadyFetching = useSelector(fetchState);

    if (alreadyFetching){
        return;
    }

    const options = {
        method: 'GET',
        url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products',
        params: {page: pageNum, priceMax: '30', priceMin: '5', sort: 'EVALUATE_RATE_ASC'},
        headers: {
            'X-RapidAPI-Key': process.env.NEWRAPIDAPI_KEY,
            'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
        }
    };

    dispatch( requestBestSales() );

    axios.request(options)
        .then((response) => {
            console.log("fetchBestSales", response);
            dispatch( resultBestSales(response) );
        })
        .catch((error) => {
            console.error(error);
        });
}

export default bestSalesSlice.reducer;