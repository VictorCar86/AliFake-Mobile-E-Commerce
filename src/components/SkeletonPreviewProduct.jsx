import React from 'react';;
import SkeletonImg from '../assets/images/skeleton.webp';
import NotFoundImg from '../assets/images/not_found.webp';

const SkeletonPreviewProduct = ({ deal = false, error = false }) => {
  return (
    <article className={`${deal ? "max-w-[220px] w-[35vw]" : "max-w-[295px] w-[46vw] mx-auto"} rounded-xl ${!error && 'animate-pulse'} bg-white`}>
        <img className={`${deal ? 'max-w-[220px] w-[35vw] max-h-[220px] h-[35vw]' : 'max-w-[295px] w-[46vw] max-h-[295px] h-[46vw]'} border-gray-300 border-4 rounded-xl bg-gray-300`} src={error ? NotFoundImg : SkeletonImg} alt="Image loading soon" />
        <div className='h-5 w-24 my-1 rounded-md bg-gray-300' />
        <div className='h-5 w-full my-1 rounded-md bg-gray-300' />
    </article>
  )
}

export default SkeletonPreviewProduct;