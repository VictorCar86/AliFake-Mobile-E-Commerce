import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaCalendarCheck, FaSearchDollar, FaTruck, FaWallet } from 'react-icons/fa';
import { FiHeart, FiClock, FiChevronRight } from 'react-icons/fi';
import { IoPersonCircleSharp } from 'react-icons/io5';
import BackButton from '../components/BackButton';

const svgStyle = 'w-[7vw] max-w-[44px] h-max mx-auto mb-2 fill-orange-600';

const defaultButtonOptions = [
  {
    title: 'Unpaid',
    component: <FaWallet className={`${svgStyle}`}/>
  },
  {
    title: 'To be shipped',
    component: <FaBox className={`${svgStyle}`}/>
  },
  {
    title: 'Shipped',
    component: <FaTruck className={`${svgStyle} rotate-y-180`}/>
  },
  {
    title: 'To be reviewed',
    component: <FaCalendarCheck className={`${svgStyle}`}/>
  },
];

const AccountPage = () => {

  const displayOrderButtons = (optionsData) => {
    return optionsData.map((config, index) => (
      <li key={index}>
        <button className='flex flex-col justify-start items-center w-full h-full' type='button' aria-label={config.title}>
          {config.component}
          <span>{config.title}</span>
        </button>
      </li>
    ));
  }

  return (
    <>
      <div className='h-screen w-full text-clamp-base overflow-hidden'>
        <header className='bg-gray-100'>
          <nav className='flex items-center max-h-[81.906px] h-[12.8vw] w-full'>
            <BackButton />
          </nav>

          <div className='flex gap-[4%] px-3'>
            <IoPersonCircleSharp className='w-[16%] h-max rounded-full fill-gray-100 bg-gray-400/75 shadow-xl' />
            <div className='w-10/12'>
              <h1 className='text-clamp-xl font-bold'>Username</h1>
              <div className='relative inline-block max-h-[10px] h-[1.5vw] w-1/3 mr-[3.5%] mb-[3%] rounded-full bg-white after:absolute after:w-2/3 after:h-full after:bg-yellow-600 after:rounded-full'></div>
              <span className='text-clamp-sm align-super'>60/100</span>
            </div>
          </div>

          <nav className='pt-2 pb-4 px-[20%]'>
            <ul className='grid grid-cols-2 justify-items-center'>
              <li>
                <Link to={'/account/wishlist'}>
                  <FiHeart className='w-[6vw] max-w-[38px] h-max mx-auto' />
                  <span>Wish List</span>
                </Link>
              </li>
              <li>
                <Link to={'/account/viewed'}>
                  <FiClock className='w-[6vw] max-w-[38px] h-max mx-auto' />
                  <span>Viewed</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='h-screen px-3 bg-gray-100'>
          <section className='h-min w-full pt-3 rounded-lg bg-white'>
            <div className='px-3'>
              <span className='text-clamp-lg font-medium'>Orders</span>
              <button className='float-right' type='button' aria-label='View all'>
                <span className='inline-block font-medium'>View all</span>
                <FiChevronRight className='inline-block h-full w-[5vw] max-w-[32px] ml-1 -translate-y-px opacity-25'/>
              </button>
            </div>

            <div className='h-min w-full mt-2 pt-5 pb-2.5 border-t border-b border-gray-200'>
              <ul className='grid grid-cols-4 grid-rows-1 mx-3 text-center'>

              { displayOrderButtons(defaultButtonOptions) }

              </ul>
            </div>

            <button className='flex items-center w-full py-2 px-3 text-left' type='button' aria-label='In dispute'>
              <FaSearchDollar className='inline-block mr-3'/>
              <span>In dispute</span>
              <FiChevronRight className='inline-block h-full w-[5vw] max-w-[32px] ml-auto translate-y-0.5 opacity-25'/>
            </button>
          </section>
        </main>
      </div>
    </>
  )
}

export default AccountPage;