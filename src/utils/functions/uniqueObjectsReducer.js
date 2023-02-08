function uniqueObjectsReducer (accumulator, currentValue){
    const existingObject = accumulator.find(
      (obj) => obj.id === currentValue.id
    );

    if (!existingObject) {
      accumulator.push(currentValue);
    }

    return accumulator;
}

export default uniqueObjectsReducer;