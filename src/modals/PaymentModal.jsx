import React, { useRef, useState } from 'react';
import { FaRegCircle, FaRegCreditCard, FaRegDotCircle } from 'react-icons/fa';
import { RiShieldCheckLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import InfoModal from '../containers/InfoModal';
import VisaCardIcon from '../utils/icons/VisaCardIcon';
import MasterCardIcon from '../utils/icons/MasterCardIcon';
import JcbCardIcon from '../utils/icons/JcbCardIcon';
import AmericanCardIcon from '../utils/icons/AmericanCardIcon';
import BankIcon from '../utils/icons/BankIcon';
import WesternIcon from '../utils/icons/WesternIcon';
import IsoImage from '../assets/images/iso-27001.webp';
import SslImage from '../assets/images/SSL-Secure-Connection.webp';

const PaymentModal = ({ state, toggle }) => {
    const closeModal = useRef(() => {});

    const [selectedOption, setSelectedOption] = useState('');

    return (
        <InfoModal title='Select Payment Method' state={state} toggle={toggle} closeModal={closeModal}>
            <section className='min-h-[64vh] bg-gray-200/70 pb-[25%]'>
                <ul>
                    <li className='w-full pt-[2%] px-[2%]'>
                        <button
                            className='w-full py-[1.5%] px-[2.5%] rounded-lg bg-white'
                            onClick={() => setSelectedOption('card')}
                            disabled={selectedOption === 'card'}
                            type='button'
                        >
                            <div className='flex gap-[5%] items-center'>
                                <i>
                                    {selectedOption === 'card' ? (
                                        <FaRegDotCircle className='max-w-[39px] w-[6vw] h-min rounded-full border-2 border-transparent fill-white bg-rose-600' />
                                    ) : (
                                        <FaRegCircle className='max-w-[39px] w-[6vw] h-min fill-gray-400' />
                                    )}
                                </i>
                                <i>
                                    <FaRegCreditCard className='max-w-[58px] w-[9vw] h-min fill-rose-600' />
                                </i>
                                <span>Add a new card</span>
                            </div>
                            {selectedOption === 'card' && (
                                <section className='text-left'>
                                    <span className='block mb-2'>
                                        <i>
                                            <VisaCardIcon className='inline-block w-[10%] h-min ml-2'/>
                                        </i>
                                        <i>
                                            <MasterCardIcon className='inline-block w-[10%] h-min ml-2'/>
                                        </i>
                                        <i>
                                            <JcbCardIcon className='inline-block w-[10%] h-min ml-2'/>
                                        </i>
                                        <i>
                                            <AmericanCardIcon className='inline-block w-[10%] h-min ml-2'/>
                                        </i>
                                    </span>

                                    <form action="#">
                                        <input className='w-full p-2 mb-2 border border-gray-300 rounded-md outline-black' type="number" placeholder="Card number"/>
                                        <input className='w-full p-2 mb-2 border border-gray-300 rounded-md outline-black' type="text" placeholder="Cardholder Name"/>
                                        <input className='w-full p-2 mb-2 border border-gray-300 rounded-md outline-black' type="text" placeholder="MM/YY"/>
                                        <input className='w-full p-2 mb-2 border border-gray-300 rounded-md outline-black' type="number" placeholder="CVV"/>
                                    </form>

                                    <p className='mb-2 text-left'>
                                        <i>
                                            <AiOutlineInfoCircle className='inline-block max-w-[32px] w-[5vw] h-min fill-blue-500' />
                                        </i>
                                        <span className='ml-2 text-clamp-xs text-gray-500'>
                                            Your order will be processed in USD
                                        </span>
                                    </p>
                                </section>
                            )}
                        </button>
                    </li>
                    <li className='w-full pt-[2%] px-[2%]'>
                        <button
                            className='w-full py-[1.5%] px-[2.5%] rounded-lg bg-white'
                            onClick={() => setSelectedOption('wire_transfer')}
                            disabled={selectedOption === 'wire_transfer'}
                            type='button'
                        >
                            <div className='flex gap-[5%] justify-start items-start'>
                                <i className='mt-[1.75%]'>
                                    {selectedOption === 'wire_transfer' ? (
                                        <FaRegDotCircle className='max-w-[39px] w-[6vw] h-min rounded-full border-2 border-transparent fill-white bg-rose-600' />
                                    ) : (
                                        <FaRegCircle className='max-w-[39px] w-[6vw] h-min fill-gray-400' />
                                    )}
                                </i>
                                <div className='w-full'>
                                    <div className='flex items-center gap-[5%]'>
                                        <i>
                                            <BankIcon className='inline-block max-w-[58px] w-[9vw] h-min fill-orange-400' />
                                        </i>
                                        <span>Wire Transfer</span>
                                    </div>
                                    {selectedOption === 'wire_transfer' && (
                                      <em className='block pb-[4%] not-italic leading-[clamp(0px,4vw,26px)] text-clamp-xs text-gray-500'>
                                          <p className='flex items-center gap-[3%] mt-3 text-left'>
                                              <i>
                                                  <AiOutlineInfoCircle className='inline-block max-w-[32px] w-[5vw] h-min fill-blue-500' />
                                              </i>
                                              <span>
                                                  Your order will be processed in USD
                                              </span>
                                          </p>
                                          <p className='flex items-center gap-[3%] mt-1.5 text-left'>
                                              <i>
                                                  <AiOutlineInfoCircle className='inline-block max-w-[32px] w-[5vw] h-min fill-blue-500' />
                                              </i>
                                              <span>
                                                  To pay by wire transfer using your bank account, you need to visit your nearest bank branch with the wire transfer information.
                                                  Your payment will be completed 7 business days after you have finished the money transfer.
                                               </span>
                                          </p>
                                      </em>
                                    )}
                                </div>
                            </div>
                        </button>
                    </li>
                    <li className='w-full pt-[2%] px-[2%]'>
                        <button
                            className='w-full py-[1.5%] px-[2.5%] rounded-lg bg-white'
                            onClick={() => setSelectedOption('west_union')}
                            disabled={selectedOption === 'west_union'}
                            type='button'
                        >
                            <div className='flex gap-[5%] justify-start items-start'>
                                <i className='mt-[1.75%]'>
                                    {selectedOption === 'west_union' ? (
                                        <FaRegDotCircle className='max-w-[39px] w-[6vw] h-min rounded-full border-2 border-transparent fill-white bg-rose-600' />
                                    ) : (
                                        <FaRegCircle className='max-w-[39px] w-[6vw] h-min fill-gray-400' />
                                    )}
                                </i>
                                <div className='w-full'>
                                    <div className='flex items-center gap-[5%]'>
                                        <i>
                                            <WesternIcon className='inline-block max-w-[58px] w-[9vw] h-min' />
                                        </i>
                                        <span>West Union</span>
                                    </div>
                                    {selectedOption === 'west_union' && (
                                      <em className='block pb-[4%] not-italic leading-[clamp(0px,4vw,26px)] text-clamp-xs text-gray-500'>
                                          <p className='flex items-center gap-[3%] mt-1.5 text-left'>
                                              <i>
                                                  <AiOutlineInfoCircle className='inline-block max-w-[32px] w-[5vw] h-min fill-blue-500' />
                                              </i>
                                              <span>
                                                  Your order will be processed in USD
                                              </span>
                                          </p>
                                          <p className='flex items-center gap-[3%] mt-1.5 text-left'>
                                              <i>
                                                  <AiOutlineInfoCircle className='inline-block max-w-[32px] w-[5vw] h-min fill-blue-500' />
                                              </i>
                                              <span>
                                                  To pay by Western Union, you need to visit your nearest Western Union agent with the money transfer information.
                                                  Your payment will be completed in 1-3 business days after you have transferred the money.
                                               </span>
                                          </p>
                                      </em>
                                    )}
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>

                <div className='w-11/12 h-0.5 my-[10%] mx-auto mb-[1%] bg-gray-300' />

                <div className='text-center not-italic'>
                    <span>100% secure payment with</span>
                    <img className='inline-block w-[12%] ml-2.5' src={SslImage} alt="SSL protocol security" />
                    <img className='inline-block w-[7%] ml-2.5' src={IsoImage} alt="ISO 27001 protocol security" />
                </div>
            </section>

            <div className='fixed bottom-0 max-w-screen-sm w-full -ml-5 px-[clamp(0px,3vw,20px)] pb-[clamp(0px,2vw,13px)] bg-white z-30'>
                <div className='w-max mt-1 mx-auto mb-2'>
                    <RiShieldCheckLine className='inline-block' />
                    <span className='ml-1 text-clamp-xs'>
                        Your payment information is safe with us
                    </span>
                </div>
                <button
                    className='block w-full py-[1.5%] rounded-full text-white font-bold bg-gradient-to-r from-red-600 to-orange-500'
                    onClick={() => closeModal.current()}
                    type='button'
                >
                    Confirm
                </button>
            </div>
        </InfoModal>
    )
}

export default PaymentModal;