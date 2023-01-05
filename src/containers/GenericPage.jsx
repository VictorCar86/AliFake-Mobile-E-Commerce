import React from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton'

const GenericPage = ({ children, title = "", Icon = null, linkTo = "#" }) => {
  return (
    <>
      <header className='fixed top-0 flex items-center gap-[4%] max-h-[81.906px] h-[12.8vw] w-full max-w-[640px] text-white bg-black'>
        <BackButton />
        <span className='text-clamp-base'>{title}</span>
        {Icon && (
          <Link className='ml-auto mr-[5%]' to={linkTo}>
            <Icon className='max-w-[38.38px] w-[6vw] h-max' />
          </Link>
        )}
      </header>
      <main className='h-[80vh] pt-[12.8vw]'>
        { children }
      </main>
    </>
  )
}

export default GenericPage;