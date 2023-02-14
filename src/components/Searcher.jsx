import React, { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import placeholderSamples from '../utils/items/placeholderSamples';

const products = placeholderSamples;

const Searcher = ({ className = "" }) => {
  const navigate = useNavigate();

  const [placeholder, setPlaceholder] = useState(products[Math.floor(Math.random() * products.length)]);

  const textRef = useRef(null);

  function submitText(event) {
    event.preventDefault();

    const inputText = textRef.current.value;

    if (inputText){
      navigate(`/search?i=${inputText}`);
    }
    else {
      navigate(`/search?i=${placeholder}`);
    }
    // console.log(inputText);
  }

  useEffect(() => {
    const inter = setInterval(() => {
      setPlaceholder(products[Math.floor(Math.random() * products.length)]);
    }, 6000);

    return () => clearInterval(inter);
  }, []);

  return (
    <form className={`flex justify-evenly items-center h-[7vw] min-h-[34px] max-h-[45px] w-3/5 pl-[1.5%] rounded-3xl bg-gray-300 focus-within:ring-2 ring-red-500 ${className}`} onSubmit={submitText}>
      <input className='h-4/5 w-3/4 text-clamp-sm bg-transparent focus-visible:outline-none' type="text" placeholder={placeholder} ref={textRef}/>
      <button className='h-4/5 w-1/5 rounded-3xl bg-black' type="submit" aria-label='Search product'>
          <FiSearch className='h-max w-1/3 min-w-[16px] mx-auto stroke-white'/>
      </button>
    </form>
  )
}

export default Searcher;