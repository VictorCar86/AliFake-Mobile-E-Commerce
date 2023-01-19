import skeletonImage from '../assets/images/skeleton.webp';
import notFoundImage from '../assets/images/not_found.webp';
import { createSlice } from "@reduxjs/toolkit";

const initialDocs = {
    name: 'Loading image...',
    usItemId: "0",
    imageInfo: {
        allImages: [{url: skeletonImage}],
        loading: true,
    },
};

export const sliceProductInfo = createSlice({
    name: 'productInfo',
    initialState: {
        fetching: false,
        errorFetch: false,
        docs: initialDocs,
        idml: null,
        reviews: null,
    },
    reducers: {
        requestProductInfo: (state) => {
            state.fetching = true;
            state.errorFetch = false;
            state.docs = initialDocs;
            state.idml = null;
            state.reviews = null;
        },
        resultProductInfo: (state, action) => {
            const completeData = action.payload.data;

            console.log(completeData);

            state.fetching = false;
            state.errorFetch = false;
            state.docs = completeData.product;
            state.idml = completeData.idml;
            state.reviews = completeData.reviews;
        },
        errorProductInfo: (state) => {
            state.errorFetch = true;
            state.docs = {
                name: 'An error has ocurred, please reload the page or select another product',
                usItemId: "0",
                imageInfo: {
                    allImages: [{url: notFoundImage}],
                    loading: false,
                },
            };
            state.idml = null;
            state.reviews = null;
        },
    }
})

export const productInfoState = (state) => state.sliceProductInfo;
export const { requestProductInfo, resultProductInfo, errorProductInfo } = sliceProductInfo.actions;

export default sliceProductInfo.reducer;