import React, { useState } from 'react';
import {
    FiChevronLeft,
    FiGrid,
    FiHeart,
    FiHome,
    FiMoreHorizontal,
    FiSearch,
    FiShoppingCart,
    FiUser,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Searcher from '../components/Searcher';
import AlifakelogoImg from '../assets/images/alifake_logo.webp';

const initial= {
    navbarVanilla: true,
    specsModal: false,
    descModal: false,
};

const GenericNavbar = ({ headerRef = null }) => {

    const [extraOptions, setExtraOptions] = useState(false);
    const [navbarVanilla, setNavbarVanilla] = useState(true);

    const toggleOptions = () => setExtraOptions(prev => !prev);
    const toggleNavbar = () => setNavbarVanilla(prev => !prev);

    return (
        <header className='fixed w-full bg-white shadow-sm z-10' ref={headerRef}>
            {navbarVanilla === true && (
                <nav className='h-12 flex justify-between items-center'>
                    <div className='flex items-center'>
                        {/* <button type='button' className='inline-block mx-4' onClick={() => navigate(-1)} aria-label="Go back">
                            <FiChevronLeft className='scale-[2]'/>
                        </button> */}
                        <BackButton />
                        <Link className='inline-block' to={"/"} aria-label="Go to home page">
                            <FiHome className='inline-block h-6 w-6 mr-4' />
                            <img className='inline-block h-1/2 w-24' src={AlifakelogoImg} alt="Alifake banner" />
                        </Link>
                    </div>
                    <div className='flex gap-5 mr-4'>
                        <button onClick={toggleNavbar} type='button' aria-label="Search for a product">
                            <FiSearch className='h-6 w-6' />
                        </button>
                        <Link to={"/cart"} aria-label="Go to your shopping cart">
                            <FiShoppingCart className='h-6 w-6' />
                        </Link>
                        <button type='button' onClick={toggleOptions} aria-label="Show more options">
                            <FiMoreHorizontal className='h-6 w-6' />
                        </button>
                    </div>
                </nav>
            )}

            {navbarVanilla === false && (
                <nav className='relative h-12 flex justify-center items-center'>
                    <button type='button' className='inline-block mx-4 absolute left-0 top-1/3' onClick={toggleNavbar}>
                        <FiChevronLeft className='scale-[2]'/>
                    </button>
                    <Searcher />
                </nav>
            )}

            <div className={`absolute h-screen w-full top-0 left-0 ${extraOptions ? "scale-100" : "scale-0 -translate-y-[43vh] translate-x-[50vw]"} transition`} onClick={toggleOptions}>
                <nav className='absolute top-12 right-0 w-max p-3 rounded-xl bg-white shadow-2xl'>
                    <ul className='grid gap-2'>
                        <li>
                            <Link to={"/categories"} aria-label="Go to categories">
                                <FiGrid className='inline-block max-w-[26px] w-[6vw] h-full mr-2' />
                                <span>Categories</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/account"} aria-label="Go to your wish list">
                                <FiHeart className='inline-block max-w-[26px] w-[6vw] h-full mr-2' />
                                <span>Wish List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/account"} aria-label="Go to your account">
                                <FiUser className='inline-block max-w-[26px] w-[6vw] h-full mr-2' />
                                <span>Account</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default GenericNavbar