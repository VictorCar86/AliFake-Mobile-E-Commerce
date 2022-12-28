import React from 'react'
import BackButton from '../components/BackButton'

const CompleteModal = ({ title = "", store = false }) => {
  return (
    <>
        <header className='flex h-12 text-white bg-black'>
            <div>
                <BackButton />
                <span>{title}</span>
            </div>
            {/* {store && ()} */}
        </header>
        <main>
            { children }
        </main>
    </>
  )
}

export default CompleteModal