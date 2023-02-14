function useLocalStorage(key) {
  let value;
  try {
    const item = window.localStorage.getItem(key);
    value = item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error(error);
    value = undefined;
  }

  function setValueInLocalStorage(newValue) {
    try {
      const serializedValue = JSON.stringify(newValue);
      window.localStorage.setItem(key, serializedValue);
      value = newValue;
    } catch (error) {
      console.error(error);
    }
  }

  return [value, setValueInLocalStorage];
}

export default useLocalStorage;