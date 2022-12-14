import { createSlice } from "@reduxjs/toolkit";

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
            state.docs = [...state.docs, ...payload.docs];
            state.hasNextPage = payload.hasNextPage;
            state.nextPage = payload.nextPage;
            state.page = payload.page;
        },
    }
})

export const bestSalesState = (state) => state.sliceBestSales;
export const { requestBestSales, resultBestSales } = sliceBestSales.actions;

// export const fetchBestSales = (dispatch, selector) => (pageNum = 1) => {
//     const alreadyFetching = selector();
//     const envKey = process.env.NEWRAPIDAPI_KEY;

//     if (alreadyFetching || !envKey){
//         return;
//     }

//     const options = {
//         method: 'GET',
//         url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products',
//         params: {page: pageNum, priceMax: '30', priceMin: '5', sort: 'EVALUATE_RATE_ASC'},
//         headers: {
//             'X-RapidAPI-Key': envKey,
//             'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
//         }
//     };

//     dispatch( requestBestSales() );

//     axios.request(options)
//         .then((response) => {
//             console.log("fetchBestSales", response);
//             dispatch( resultBestSales(response) );
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

export default sliceBestSales.reducer;