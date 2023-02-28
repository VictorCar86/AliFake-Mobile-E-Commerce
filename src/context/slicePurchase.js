import { createSlice } from "@reduxjs/toolkit";

export const slicePurchase = createSlice({
    name: 'purchaseListState',
    initialState: {
        purchaseIDList: [],
    },
    reducers: {
        addPurchaseID: (state, action) => {
            const newId = action.payload;

            if (typeof newId !== 'string'){
                console.error('It is only valid to use IDs within strings');
                return;
            }

            const alreadyExist = state.purchaseIDList.includes(newId);

            if (alreadyExist){
                return;
            }

            state.purchaseIDList = [...state.purchaseIDList, newId];
        },

        putPurchaseID: (state, action) => {
            const arrayWithIDs = action.payload;

            if (!Array.isArray(arrayWithIDs)){
                console.error('It is only valid to use arrays to save data');
            }

            state.purchaseIDList = arrayWithIDs;
        },

        deletePurchaseID: (state, action) => {
            const idToDelete = action.payload;

            if (typeof idToDelete !== 'string'){
                console.error('It is only valid to use IDs within strings');
            }

            const filteredArray = state.purchaseIDList.filter(id => id !== idToDelete);

            state.purchaseIDList = filteredArray;
        },
    }
});

export const purchaseListState = (state) => state.slicePurchase;
export const { addPurchaseID, putPurchaseID, deletePurchaseID } = slicePurchase.actions;

export default slicePurchase.reducer;