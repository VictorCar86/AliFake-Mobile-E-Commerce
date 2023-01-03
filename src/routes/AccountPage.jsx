import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaCalendarCheck, FaSearchDollar, FaTruck, FaWallet } from 'react-icons/fa';
import { FiHeart, FiClock, FiChevronRight } from 'react-icons/fi';
import { IoPersonCircleSharp } from 'react-icons/io5';
import BackButton from '../components/BackButton';

const defaultButtonOptions = [
  {
    title: 'Unpaid',
    component: <FaWallet className='w-[7vw] h-max mx-auto mb-2 fill-orange-600' />
  },
  {
    title: 'To be shipped',
    component: <FaBox className='w-[7vw] h-max mx-auto mb-2 fill-orange-600' />
  },
  {
    title: 'Shipped',
    component: <FaTruck className='w-[7vw] h-max mx-auto mb-2 rotate-y-180 fill-orange-600' />
  },
  {
    title: 'To be reviewed',
    component: <FaCalendarCheck className='w-[7vw] h-max mx-auto mb-2 fill-orange-600' />
  },
];

const AccountPage = () => {

  const displayOrderButtons = (optionsData) => {
    return optionsData.map((config, index) => (
      <li key={index}>
        <button className='w-full h-[22vw] inline-grid' type='button' aria-label={config.title}>
          {config.component}
          <span>{config.title}</span>
        </button>
      </li>
    ));
  }

  return (
    <>
      <div className='h-screen overflow-hidden'>
        <header className='text-[4vw] bg-gray-100'>
          <nav className='flex items-center h-[12.8vw] w-full'>
            <BackButton />
          </nav>

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
                <Link to={'/account/wishlist'}>
                  <FiHeart className='w-[6vw] h-max mx-auto' />
                  <span>Wish List</span>
                </Link>
              </li>
              <li>
                <Link to={'/account/viewed'}>
                  <FiClock className='w-[6vw] h-max mx-auto' />
                  <span>Viewed</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='h-screen px-3 text-[4vw] bg-gray-100'>
          <section className='h-min w-full p-3 pb-0 rounded-lg bg-white'>
            <span className='text-[4.8vw] font-medium'>Orders</span>
            <button className='float-right' type='button' aria-label='View all'>
              <span className='inline-block font-medium'>View all</span>
              <FiChevronRight className='inline-block h-full w-[5vw] ml-1 -translate-y-px opacity-25'/>
            </button>

            <div className='h-min w-full mt-2 pt-5 pb-2.5 border-t border-b border-gray-200'>
              <ul className='grid grid-cols-4 text-center'>

              { displayOrderButtons(defaultButtonOptions) }

              </ul>
            </div>

            <button className='flex items-center w-full py-2 text-left' type='button' aria-label='In dispute'>
              <FaSearchDollar className='inline-block mr-[3vw]'/>
              <span>In dispute</span>
              <FiChevronRight className='inline-block h-full w-[5vw] ml-auto translate-y-0.5 opacity-25'/>
            </button>
          </section>
        </main>
      </div>
    </>
  )
}

export default AccountPage;