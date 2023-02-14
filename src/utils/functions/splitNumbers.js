export default function splitNumbers(number) {
    let stringyNumber = String(number);

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