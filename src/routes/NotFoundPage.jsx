import React from 'react'
import { Link } from 'react-router-dom';
import NotExistGif from '../assets/images/not_exists.gif'
import GenericNavbar from '../containers/GenericNavbar';

const NotExistPage = () => {
  return (
    <>
        <GenericNavbar />
        <main className='flex flex-col justify-center items-center h-screen pt-12 pb-[26vw] text-[4vw] overflow-hidden'>
            <img className='w-1/3 mb-[3vw]' src={NotExistGif} alt="Cartoon coffee cup" />
            <h1 className='text-[5.5vw] font-bold'>Sorry, we did not find this page.</h1>
            <p className='text-gray-400'>But we have much more for you to discover ~</p>
            <Link className='p-3 mt-[3vw] rounded-lg text-white bg-red-600' to={"/"}>
                <span>Back to home page</span>
            </Link>
        </main>
    </>
  )
}

export default NotExistPage