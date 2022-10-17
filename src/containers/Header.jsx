import React from 'react'
import Searcher from '../components/Searcher'

const Header = () => {
  return (
    <header className='flow-root w-full fixed bg-white'>
        <img className='w-32 my-3 mx-auto' src="https://ae01.alicdn.com/kf/S46f745032e6e4f3da94f1a3df564f238K/398x92.png" alt="Alifake banner" />
        <Searcher />
    </header>
  )
}

export default Header