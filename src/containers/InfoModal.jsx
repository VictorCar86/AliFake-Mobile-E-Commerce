import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi';
import spinnerIcon from '../assets/images/spinnerIcon.webp'

const InfoModal = ({ children, title, state, toggle }) => {
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

    const closeLogic = () => {
        setAnimate("translate-y-full duration-[400ms]");
        setBackground("bg-transparent");
        setTimeout(() => {
            toggle();
        }
        , 290)
    }

    const propsDirectory = children.props.children.props;

    return (
        <div className={`${state ? " visible" : " invisible"} ${background} transition-colors duration-500 min-h-screen max-w-[640px] w-full fixed top-0 text-clamp-base`}>
            <div className={`${animate} transition-transform h-3/4 w-full max-w-[640px] px-5 pb-5 absolute bottom-0 rounded-t-xl bg-white overflow-y-scroll overflow-x-hidden`}>
                <div className='fixed h-auto w-full max-w-[640px] -ml-5 rounded-t-xl bg-white'>
                    <p className='mt-2.5 mb-3 text-center font-medium'>{title}</p>
                    <button
                        className='absolute top-[26%] right-4 h-min w-[5%]'
                        onClick={closeLogic}
                        type='button'
                    >
                        <FiX className='w-full h-full opacity-60'/>
                    </button>
                </div>
                <section className='mt-[12%] italic'>
                    {propsDirectory.content ?
                        children :
                        (<img className='h-auto w-[10vw] max-w-[64px] mt-[16%] mx-auto text-center animate-spin' src={spinnerIcon} alt="Loading content..." />)
                    }
                </section>
            </div>
        </div>
    )
}

export default InfoModal