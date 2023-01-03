import React from 'react';
import SkeletonImg from '../assets/images/skeleton.webp';
import NotFound from '../assets/images/not_found.webp';

const SkeletonPreviewProduct = ({ deal = false, error = false }) => {
  return (
    <article className={`${deal ? "w-[calc(37.45318vw_-_11.98502px)]" : "w-full"} h-min p-1 rounded-xl ${!error && 'animate-pulse'} bg-white`}>
        <img className={`h-min ${deal ? 'w-[38vw]' : 'w-full'} border-gray-300 border-4 rounded-xl`} src={error ? NotFound : SkeletonImg} alt="Image loading soon" />
        <div className='h-5 w-24 my-1 rounded-md bg-gray-300' />
        <div className='h-5 w-full my-1 rounded-md bg-gray-300' />
        <div className='h-5 w-14 my-1 rounded-md bg-gray-300' />
    </article>
  )
}

export default SkeletonPreviewProduct