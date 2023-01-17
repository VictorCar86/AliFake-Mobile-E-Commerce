import { configureStore } from '@reduxjs/toolkit';
import sliceBestSales from './sliceBestSales';
import sliceNewOffers from './sliceNewOffers';
import sliceProductInfo from './sliceProductInfo';
import sliceLocalState from './sliceLocalState';

export const store = configureStore({
    reducer: {
        sliceBestSales,
        sliceNewOffers,
        sliceProductInfo,
        sliceLocalState,
    },
});