import skeletonImage from '../assets/images/skeleton.webp';
import { createSlice } from "@reduxjs/toolkit";

const initialDocs = {
    name: 'Loading image...',
    usItemId: 0,
    imagesInfo: {
        allImages: [{url: skeletonImage}, {url: skeletonImage}],
        loading: true,
    },
    feedBackRating: {},
};

export const sliceProductInfo = createSlice({
    name: 'productInfo',
    initialState: {
        fetching: false,
        errorFetch: false,
        docs: initialDocs,
        idml: undefined,
        reviews: undefined,
    },
    reducers: {
        requestProductInfo: (state) => {
            state.fetching = true;
            state.docs = initialDocs;
        },
        resultProductInfo: (state, action) => {
            const completeData = action.payload.data;

            console.log(completeData);

            state.fetching = false;
            state.docs = completeData.product;
            state.idml = completeData.idml;
            state.reviews = completeData.reviews;
        },
        errorProductInfo: (state) => {
            state.errorFetch = true;
        },
    }
})

export const productInfoState = (state) => state.sliceProductInfo;
export const { requestProductInfo, resultProductInfo, errorProductInfo } = sliceProductInfo.actions;

export default sliceProductInfo.reducer;