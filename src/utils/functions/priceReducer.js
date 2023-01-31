import splitNumbers from "./splitNumbers";

export default function priceReducer(array, listItems){
    const reducedNumber = array.reduce((accumulator, item) => {

        const alreadySelected = listItems.findIndex(p => p.id === item.id);

        if (alreadySelected === -1){
            return accumulator;
        }

        const amountProduct = alreadySelected >= 0 ? listItems[alreadySelected].amount : false;

        const newPrice = Number(item.price.slice(1)) * (amountProduct || 1);

        return accumulator + newPrice;
    }
    , 0);

    return splitNumbers(reducedNumber);
}