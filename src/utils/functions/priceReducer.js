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

    let stringyNumber = String(reducedNumber);

    const [beforeDot, afterDot] = stringyNumber.split('.');

    if (afterDot !== undefined){
        if (afterDot.length > 2){
        stringyNumber = `$${beforeDot}.${afterDot.slice(0, 2)}`
        }
        else {
        stringyNumber = `$${beforeDot}.${afterDot + '0'.repeat(2 - afterDot.length)}`
        }
    }
    else {
        stringyNumber = `$${beforeDot}.00`
    }

    return stringyNumber;
}