import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi';

const InfoModal = ({ children, title = "", state, toggle, closeModal }) => {
    let [animate, setAnimate] = useState("translate-y-full duration-[400ms]");
    let [background, setBackground] = useState("bg-transparent");

    useEffect(() => {
        if (state){
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
            setAnimate("duration-500");
            setBackground("bg-gray-700/50");
        }
        else {
            document.getElementsByTagName('body')[0].style.overflow = "visible";
        }
    }, [state])

    function closeLogic(){
        setAnimate("translate-y-full duration-[400ms]");
        setBackground("bg-transparent");
        setTimeout(() => {
            toggle();
        }
        , 290);
    }

    useEffect(() => {
        if (closeModal !== undefined){
            closeModal.current = closeLogic;
        }
    }, []);

    return (
        <div className={`${state ? " visible" : " invisible"} ${background} transition-colors duration-500 min-h-screen max-w-[640px] w-full fixed top-0 text-clamp-base z-40`}>

            <div className='w-full h-screen' onClick={closeLogic}></div>

            <div className={`${animate} transition-transform h-3/4 w-full max-w-[640px] px-5 pb-5 absolute bottom-0 rounded-t-xl bg-white overflow-y-scroll overflow-x-hidden`}>
                <nav className='fixed h-auto w-full max-w-[640px] -ml-5 rounded-t-xl bg-white z-30'>
                    <p className='mt-2.5 mb-3 text-center font-medium'>{title}</p>
                    <button
                        className='absolute top-[26%] right-4 h-min w-[5%]'
                        onClick={closeLogic}
                        type='button'
                    >
                        <FiX className='w-full h-full opacity-60'/>
                    </button>
                </nav>
                <main className='relative min-h-[64vh] mt-[clamp(0px,13vw,64px)] italic'>
                    { children }
                </main>
            </div>
        </div>
    )
}

export default InfoModal