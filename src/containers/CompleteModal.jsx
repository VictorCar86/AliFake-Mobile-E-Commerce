import React from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton'

const CompleteModal = ({ children, title = "", Icon = null, linkTo = "#" }) => {
  return (
    <>
      <header className='fixed top-0 flex items-center gap-[4vw] h-[12.8vw] w-full text-white bg-black'>
        <BackButton />
        <span className='text-[4.8vw]'>{title}</span>
        {Icon && (
          <Link className='ml-auto mr-[5vw]' to={linkTo}>
            <Icon className='w-[6vw] h-max' />
          </Link>
        )}
      </header>
      <main className='h-[80vh] pt-[12.8vw]'>
        { children }
      </main>
    </>
  )
}

export default CompleteModal