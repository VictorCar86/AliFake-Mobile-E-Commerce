import React from 'react'
import Searcher from '../components/Searcher'
import AlifakelogoImg from '../assets/images/alifake_logo.webp'

const Header = () => {
  return (
    <header className='flow-root h-auto w-full max-w-[640px] fixed z-10 bg-white'>
        <img className='h-min w-32 my-3 mx-auto' src={AlifakelogoImg} alt="Alifake banner" />
        <Searcher className='mb-3 mx-auto'/>
    </header>
  )
}

export default Header;