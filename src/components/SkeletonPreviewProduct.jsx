import React from 'react'
import SkeletonImg from '../assets/images/skeleton.webp'

const SkeletonPreviewProduct = () => {
  return (
    <article className='h-min w-full rounded-xl '>
        <img className='border-gray-300 border-4 animate-pulse rounded-xl' src={SkeletonImg} alt="Image loading soon" />
        <div className='h-5 w-24 my-1 rounded-md animate-pulse bg-gray-300' />
        <div className='h-5 w-full my-1 rounded-md animate-pulse bg-gray-300' />
        <div className='h-5 w-14 my-1 rounded-md animate-pulse bg-gray-300' />
        <div />
    </article>
  )
}

export default SkeletonPreviewProduct