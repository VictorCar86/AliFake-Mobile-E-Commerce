import { useState } from 'react';

function useLocalStorage(key) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });

  function setValueInLocalStorage(newValue) {
    try {
      const serializedValue = JSON.stringify(newValue);
      window.localStorage.setItem(key, serializedValue);
      setValue(newValue);
    } catch (error) {
      console.error(error);
    }
  }

  return [value, setValueInLocalStorage];
}

export default useLocalStorage;