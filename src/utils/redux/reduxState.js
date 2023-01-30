import { configureStore } from '@reduxjs/toolkit';
import sliceBestSales from './sliceBestSales';
import sliceNewOffers from './sliceNewOffers';
import sliceProductInfo from './sliceProductInfo';
import sliceWishList from './sliceWishList';
import sliceViewedItems from './sliceViewedItems';
import sliceShoppingCart from './sliceShoppingCart';
import slicePurchase from './slicePurchase';

export const store = configureStore({
    reducer: {
        sliceBestSales,
        sliceNewOffers,
        sliceProductInfo,
        sliceWishList,
        sliceViewedItems,
        sliceShoppingCart,
        slicePurchase,
    },
});