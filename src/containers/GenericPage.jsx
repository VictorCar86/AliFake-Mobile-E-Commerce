import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const GenericPage = ({ children, title = "", Icon = null, linkTo = "#" }) => {
  return (
    <>
      <header className='fixed top-0 flex items-center gap-[4%] max-h-[82px] h-[12.8vw] w-full max-w-[640px] text-white bg-black z-20'>
        <BackButton />
        <span className='text-clamp-base'>{title}</span>
        {Icon && (
          <Link className='ml-auto mr-[3%]' to={linkTo}>
            <Icon className='max-w-[38.38px] w-[6vw] h-max' />
          </Link>
        )}
      </header>
      <main className='relative min-h-screen pt-[clamp(0px,12.8vw,82px)]'>
        { children }
      </main>
    </>
  )
}

export default GenericPage;