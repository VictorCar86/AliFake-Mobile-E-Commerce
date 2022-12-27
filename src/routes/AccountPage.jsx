import React from 'react'
import { FaBox, FaCalendarCheck, FaSearchDollar, FaTruck, FaWallet } from 'react-icons/fa';
import { FiHeart, FiClock, FiChevronRight } from 'react-icons/fi';
import { IoPersonCircleSharp } from 'react-icons/io5';

const AccountPage = () => {
  return (
    <>
      <header className='px-3 text-[4vw] bg-gray-100'>
        <aside className='h-12'>
        </aside>

        <div className='flex gap-[4%]'>
          <IoPersonCircleSharp className='w-[16%] h-max rounded-full fill-gray-100 bg-gray-400/75 shadow-xl' />
          <h1 className='text-[5.5vw] font-medium'>Username</h1>
        </div>

        <nav className='py-3 px-[20%]'>
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
      <main className='px-3 text-[4vw] bg-gray-100'>
        <section className='p-3 pb-0 rounded-lg bg-white'>
          <span className='text-[4.8vw] font-medium'>Orders</span>
          <button className='float-right' type='button' aria-label='View all'>
            <span className='inline-block font-medium'>View all</span>
            <FiChevronRight className='inline-block h-full w-[4vw] ml-1 -translate-y-px opacity-25'/>
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
            <FiChevronRight className='inline-block h-full w-[4vw] ml-auto translate-y-0.5 opacity-25'/>
          </button>
        </section>
      </main>
    </>
  )
}

export default AccountPage;