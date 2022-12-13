import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const axios = require("axios");
const dispatch = useDispatch();

export const newOffersSlice = createSlice({
    name: 'newOffersData',
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

export const bestSalesState = (state) => state.newOffersData;
export const fetchState = (state) => state.newOffersData.fetching;
const { requestOffers, resultOffers } = newOffersSlice.actions;

export const fetchNewOffers  = () => {
    const alreadyFetching = useSelector(fetchState);

    if (alreadyFetching){
        return;
    }

    const options = {
        method: 'GET',
        url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/SortedByNewest',
        params: {limit: '10'},
        headers: {
            'X-RapidAPI-Key': process.env.NEWRAPIDAPI_KEY,
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

export default newOffersSlice.reducer;