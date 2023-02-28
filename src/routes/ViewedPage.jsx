import React from 'react';
import GenericPage from '../containers/GenericPage';
import { useSelector } from 'react-redux';
import { viewedItemsState } from '../context/sliceViewedItems';
import { Link } from 'react-router-dom';
import ItemViewedList from '../components/ItemViewedList';

const ViewedPage = () => {
  const { viewedItems } = useSelector(viewedItemsState);

  function filterItemsByDate(items) {
    const finalObject = {};

    if (!Array.isArray(items)){
      return finalObject;
    }

    items.forEach(item => {
      if (finalObject[item.date] === undefined){
          finalObject[item.date] = [{...item}];
      }
      else {
          finalObject[item.date] = [...finalObject[item.date], {...item}];
      }
    })

    return finalObject;
  }

  const filteredItems = filterItemsByDate(viewedItems);
  const keysOfFiltered = Object.keys(filteredItems);

  return (
    <GenericPage title='Viewed'>

      {keysOfFiltered.length <= 0 && (
        <section className='flex flex-col items-center justify-center gap-[2%] h-[85vh] w-full'>
          <p className='font-medium'>
            You haven't viewed any items in the past 30 days
          </p>
          <Link className='p-[2.5%] rounded-full text-white bg-red-600' to={'/'}>
            <span>
              Explore Now
            </span>
          </Link>
        </section>
      )}

      {keysOfFiltered.length > 0 && (
        keysOfFiltered.map((date, index) => (
          <section className={`pt-[2%] px-[3%] pb-[4%] ${index < keysOfFiltered.length - 1 && 'mb-[3%]'} text-clamp-base bg-white`} key={index}>
            <p className='pb-[2%]'>
              {date}
            </p>
            <ul className='grid grid-cols-3 auto-rows-fr gap-[3%] overflow-hidden whitespace-nowrap'>
            {filteredItems[date].map((item, index) => (
              <li key={index}>
                <ItemViewedList product={item} />
              </li>
            ))}
            </ul>
          </section>
        ))
      )}


    </GenericPage>
  )
}

export default ViewedPage;