import React, { useState } from 'react';
import {
    FiClock,
    FiGrid,
    FiHeart,
    FiHome,
    FiMoreHorizontal,
    FiSearch,
    FiShoppingCart,
    FiUser,
} from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Searcher from '../components/Searcher';
import AlifakelogoImg from '../assets/images/alifake_logo.webp';
import { shoppingCartState } from '../utils/redux/sliceShoppingCart';


const GenericNavbar = ({ headerRef = null }) => {
    const { shoppingCart } = useSelector(shoppingCartState);

    const [extraOptions, setExtraOptions] = useState(false);
    const [navbarVanilla, setNavbarVanilla] = useState(true);

    const toggleOptions = () => setExtraOptions(prev => !prev);
    const toggleNavbar = () => setNavbarVanilla(prev => !prev);

    return (
        <header className='fixed h-max w-full max-w-[640px] bg-white shadow-sm z-10' ref={headerRef}>
            {navbarVanilla === true && (
                <nav
                    className='h-[12.8vw] max-h-[81.906px] w-full flex justify-between items-center'
                >
                    <div className='flex items-center gap-[clamp(0px,1vw,6px)]'>

                        <BackButton />

                        <Link
                            className='inline-block'
                            to={"/"}
                            aria-label="Go to home page"
                        >
                            <FiHome className='inline-block h-min w-[5vw] max-w-[32px] mr-[clamp(0px,5vw,32px)] scale-125' />
                            <img
                                className='inline-block h-min w-[26vw] max-w-[166px]'
                                src={AlifakelogoImg}
                                alt="Alifake banner"
                            />
                        </Link>

                    </div>
                    <div className='flex gap-[clamp(0px,5vw,30px)] h-auto w-max mr-[4%]'>
                        <button
                            onClick={toggleNavbar}
                            type='button'
                            aria-label="Search for a product"
                        >
                            <FiSearch className='h-min w-[5vw] max-w-[32px] scale-125' />
                        </button>

                        <Link
                            className='relative'
                            to={"/cart"}
                            aria-label="Go to your shopping cart"
                        >
                            <FiShoppingCart className='h-min w-[5vw] max-w-[32px] scale-125' />
                            {shoppingCart.length > 0 && (
                                <span className='absolute -top-1/3 -right-1/2 w-[95%] h-max rounded-full text-clamp-xs text-white font-medium text-center dark-box-shadow bg-red-600'>
                                    {shoppingCart.length}
                                </span>
                            )}
                        </Link>

                        <button
                            type='button'
                            onClick={toggleOptions}
                            aria-label="Show more options"
                        >
                            <FiMoreHorizontal className='h-min w-[5vw] max-w-[32px] scale-125' />
                        </button>
                    </div>
                </nav>
            )}

            {navbarVanilla === false && (
                <nav className='relative h-[12.8vw] max-h-[81.906px] flex justify-start items-center'>
                    <BackButton onClick={toggleNavbar} />
                    <Searcher />
                </nav>
            )}

            <div
                className={`absolute h-screen w-full top-0 left-0 ${extraOptions ? "scale-100" : "scale-0 -translate-y-[45%] translate-x-[50%]"} transition`}
                onClick={toggleOptions}
            >
                <nav className='absolute top-[clamp(0px,12.8vw,81.906px)] right-0 w-max p-3 rounded-xl bg-white shadow-2xl'>
                    <ul className='grid gap-2'>
                        <li>
                            <Link
                                className='inline-block w-full h-max'
                                to={"/categories"}
                                aria-label="Go to categories"
                            >
                                <FiGrid className='inline-block max-w-[34px] w-[6vw] h-full mr-2' />
                                <span className='text-[2.8vw align-middle'>Categories</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='inline-block w-full h-max'
                                to={"/account/wishlist"}
                                aria-label="Go to your wish list"
                            >
                                <FiHeart className='inline-block max-w-[34px] w-[6vw] h-full mr-2' />
                                <span className='text-[2.8vw align-middle'>Wish List</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='inline-block w-full h-max'
                                to={"/account/viewed"}
                                aria-label="Go to viewed products"
                            >
                                <FiClock className='inline-block max-w-[34px] w-[6vw] h-full mr-2' />
                                <span className='text-[2.8vw align-middle'>Viewed</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='inline-block w-full h-max'
                                to={"/account"}
                                aria-label="Go to your account"
                            >
                                <FiUser className='inline-block max-w-[34px] w-[6vw] h-full mr-2' />
                                <span className='text-[2.8vw align-middle'>Account</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default GenericNavbar;