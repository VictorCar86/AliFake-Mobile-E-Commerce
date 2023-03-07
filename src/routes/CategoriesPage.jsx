import React from 'react';
import { useNavigate } from 'react-router-dom';
import GenericNavbar from '../containers/GenericNavbar';
import categoriesList from '../utils/items/categoriesList';

const CategoriesPage = () => {
  const navigate = useNavigate();

  function goToCategory(event, categoryData){
    event.preventDefault();

    const goingTo = categoryData.deptId ? `deptId${categoryData.deptId}` : categoryData.name;

    navigate(`/search?i=${goingTo}`);
  }

  return (
    <>
      <GenericNavbar />
      <main className='pt-[clamp(0px,12.8vw,82px)] px-[2%] pb-[clamp(0px,17vw,90px)] text-clamp-base'>
        <ul className='grid grid-cols-2 gap-3 pt-4 text-center leading-[clamp(0px,5vw,32px)]'>
          {categoriesList.map((category, index) => (
            <li key={index}>
              <a
                className='flex h-full w-full rounded-md border-2 border-gray-300 shadow-[0px_0px_3px_#cacaca] transition-all cursor-pointer active:scale-95'
                aria-label={`Go to ${category.name}`}
                onClick={(event) => goToCategory(event, category)}
              >
                <figure className='grid justify-center w-full'>
                  <img
                    className={`${category.extraStyle || ""} max-w-[275px] w-[43vw] max-h-[275px] h-[43vw] mt-2.5 mx-auto bg-white`}
                    src={category.imageSrc}
                    alt={category.name}
                    draggable='false'
                  />
                  <figcaption className='my-2.5 font-bold'>
                    {category.name}
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default CategoriesPage;