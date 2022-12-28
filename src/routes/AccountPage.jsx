import React from 'react'
import { FaBox, FaCalendarCheck, FaSearchDollar, FaTruck, FaWallet } from 'react-icons/fa';
import { FiHeart, FiClock, FiChevronRight } from 'react-icons/fi';
import { IoPersonCircleSharp } from 'react-icons/io5';
import BackButton from '../components/BackButton';

const AccountPage = () => {
  return (
    <>
      <header className='text-[4vw] bg-gray-100'>
        <aside className='flex h-12'>
          <BackButton />
        </aside>

        <div className='flex gap-[4%] px-3'>
          <IoPersonCircleSharp className='w-[16%] h-max rounded-full fill-gray-100 bg-gray-400/75 shadow-xl' />
          <div className='w-10/12'>
            <h1 className='text-[5.5vw] font-bold'>Username</h1>
            <div className='relative inline-block h-[1.5vw] w-1/3 mr-[2.5vw] mb-[2vw] rounded-full bg-white after:absolute after:w-2/3 after:h-full after:bg-yellow-600 after:rounded-full'></div>
            <span className='text-[3.5vw] align-super'>60/100</span>
          </div>
        </div>

        <nav className='pt-2 pb-4 px-[20%]'>
          <ul className='grid grid-cols-2 justify-items-center'>
            <li>
              <FiHeart className='w-[6vw] h-max mx-auto' />
              <span>Wish List</span>
            </li>
            <li>
              <FiClock className='w-[6vw] h-max mx-auto' />
              <span>Viewed</span>
            </li>
          </ul>
        </nav>
      </header>
      <main className='h-screen px-3 text-[4vw] bg-gray-100'>
        <section className='p-3 pb-0 rounded-lg bg-white'>
          <span className='text-[4.8vw] font-medium'>Orders</span>
          <button className='float-right' type='button' aria-label='View all'>
            <span className='inline-block font-medium'>View all</span>
            <FiChevronRight className='inline-block h-full w-[5vw] ml-1 -translate-y-px opacity-25'/>
          </button>

          <div className='mt-2 pt-5 pb-2.5 border-t border-b border-gray-200'>
            <ul className='grid grid-cols-4 text-center'>
              <li>
                <button type='button' aria-label='unpaid'>
                  <FaWallet className='w-[7vw] h-max mx-auto mb-2 fill-orange-600' />
                  <span>Unpaid</span>
                </button>
              </li>
              <li>
                <button type='button' aria-label='to be shipped'>
                  <FaBox className='w-[7vw] h-max mx-auto mb-2 fill-orange-600' />
                  <span>To be shipped</span>
                </button>
              </li>
              <li>
                <button type='button' aria-label='shipped'>
                  <FaTruck className='w-[7vw] h-max mx-auto mb-2 rotate-y-180 fill-orange-600' />
                  <span>Shipped</span>
                </button>
              </li>
              <li>
                <button type='button' aria-label='to be reviewed'>
                  <FaCalendarCheck className='w-[7vw] h-max mx-auto mb-2 fill-orange-600' />
                  <span>To be reviewed</span>
                </button>
              </li>
            </ul>
          </div>

          <button className='flex items-center w-full py-2 text-left' type='button' aria-label='In dispute'>
            <FaSearchDollar className='inline-block mr-[3vw]'/>
            <span>In dispute</span>
            <FiChevronRight className='inline-block h-full w-[5vw] ml-auto translate-y-0.5 opacity-25'/>
          </button>
        </section>
      </main>
    </>
  )
}

export default AccountPage;