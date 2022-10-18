import React, { useContext, useEffect } from 'react'
import Header from '../containers/Header'
import PreviewProduct from '../components/PreviewProduct';
import { AppContext } from '../context/AppProvider';

const MainPage = () => {
  const { state } = useContext(AppContext)
  const { infiniteData } = state;

  const renderProducts = () => {
    // if (infiniteData.docs){
    //   return infiniteData.docs.map((e, index) => (
    //     <li key={index}>
    //       <PreviewProduct data={e} />
    //     </li>
    //   ))
    // }
    console.log(infiniteData)
  }
  useEffect(() => {
    renderProducts()
  },[infiniteData])

  return (
    <>
      <Header />
      <main>
        <section className='pt-[108px] pb-14'>
          <ul className='h-full w-full max-w-[490px] mx-auto px-3 grid grid-cols-2 gap-3 overflow-hidden'>
            {renderProducts()}
          </ul>
        </section>
      </main>
    </>
  )
}

export default MainPage