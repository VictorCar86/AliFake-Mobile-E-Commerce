import skeletonImage from '../assets/images/skeleton.webp'
import { createSlice } from "@reduxjs/toolkit";

const missingProduct = "No product found in Aliexpress API, DB & Scrapping";

const initialDocs = () => ({
    product_id: 0,
    product_small_image_urls: {
        string: [skeletonImage, skeletonImage],
        loading: true,
    },
    feedBackRating: {},
})

export const sliceProductInfo = createSlice({
    name: 'productInfo',
    initialState: {
        fetching: false,
        docs: initialDocs(),
    },
    reducers: {
        requestProductInfo: (state) => {
            state.fetching = true;
            state.docs = initialDocs();
        },
        resultProductInfo: (state, action) => {
            const payload = action.payload;

            state.fetching = false;

            if (payload.name?.includes(missingProduct)) {
                state.docs = initialDocs();
            } else {
                state.docs = {...payload};
            }
        },
    }
})

export const productInfoState = (state) => state.sliceProductInfo;
export const { requestProductInfo, resultProductInfo } = sliceProductInfo.actions;

export default sliceProductInfo.reducer;