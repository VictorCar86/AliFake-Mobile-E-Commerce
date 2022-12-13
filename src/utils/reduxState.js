import { configureStore } from '@reduxjs/toolkit';
import sliceBestSales from './sliceBestSales';
import sliceNewOffers from './sliceNewOffers';
import sliceProductInfo from './sliceProductInfo';

export const store = configureStore({
    reducer: {
        sliceBestSales,
        sliceNewOffers,
        sliceProductInfo,
    },
});