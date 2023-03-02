import React from 'react';
import GenericNavbar from '../containers/GenericNavbar';
import categoriesList from '../utils/items/categoriesList';

const CategoriesPage = () => {
  return (
    <>
      <GenericNavbar />
      <main className='pt-[clamp(0px,12.8vw,82px)] px-[2%] pb-[clamp(0px,17vw,90px)] text-clamp-base'>
        <ul className='grid grid-cols-2 gap-3 pt-4 leading-[clamp(0px,5vw,32px)]'>
          {categoriesList.map((category, index) => (
            <li key={index}>
              <button
                className='flex h-full w-full rounded-md border-2 border-gray-300'
                aria-label={`Go to ${category.name}`}
                type='button'
              >
                <figure>
                  <img
                    className={`${category.extraStyle || ""} w-11/12 mt-2.5 mx-auto rounded-full bg-white`}
                    src={category.imageSrc}
                    alt={category.name}
                  />
                  <figcaption className='my-2.5 font-bold'>
                    {category.name}
                  </figcaption>
                </figure>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default CategoriesPage;