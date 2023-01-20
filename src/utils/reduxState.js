import { configureStore } from '@reduxjs/toolkit';
import sliceBestSales from './sliceBestSales';
import sliceNewOffers from './sliceNewOffers';
import sliceProductInfo from './sliceProductInfo';
import sliceWishList from './sliceWishList';
import sliceViewed from './sliceViewed';
import sliceShoppingCart from './sliceShoppingCart';

export const store = configureStore({
    reducer: {
        sliceBestSales,
        sliceNewOffers,
        sliceProductInfo,
        sliceWishList,
        sliceViewed,
        sliceShoppingCart,
    },
});