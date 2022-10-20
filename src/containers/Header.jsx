import React from 'react'
import Searcher from '../components/Searcher'
import AlifakelogoImg from '../assets/images/alifake_logo.webp'

const Header = () => {
  return (
    <header className='flow-root w-full fixed z-10 bg-white'>
        <img className='w-32 my-3 mx-auto' src={AlifakelogoImg} alt="Alifake banner" />
        <Searcher />
    </header>
  )
}

export default Header