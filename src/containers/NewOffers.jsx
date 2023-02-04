import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorNewOffers, newOffersState, requestNewOffers, resultNewOffers } from '../utils/redux/sliceNewOffers';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
import PreviewProduct from '../components/BestSalesPreview';
import NewOfferPreview from '../components/NewOfferPreview';
const axios = require("axios");

const NewOffers = () => {
    const newOffersData = useSelector(newOffersState);
    const dispatch = useDispatch();

    const [skeletonLoading, setSkeletonLoading] = useState(true);

    const renderProducts = (data) => {
        if (data.length !== 0){

            if (skeletonLoading === true){
                setSkeletonLoading(false);
            }

            return data.map((e, index) => (
                <li key={index}>
                    <NewOfferPreview data={e}/>
                </li>
            ))
        }
      }

    const fetchNewOffers = () => {
        const alreadyFetching = newOffersData.fetching;
        const envKey = process.env.WALMART_KEY;

        if (alreadyFetching || !envKey){
            return;
        }

        const options = {
            method: 'GET',
            url: 'https://walmart.p.rapidapi.com/products/v2/list',
            params: {cat_id: '3944', sort: 'price_low', page: '1'},
            headers: {
                'X-RapidAPI-Key': envKey,
                'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
            }
        };

        dispatch( requestNewOffers() );

        axios.request(options)
            .then((response) => {
                dispatch( resultNewOffers(response.data) );
            })
            .catch((error) => {
                dispatch( errorNewOffers() );
                // console.error(error);
            });
    };

    useEffect(() => {
        if (newOffersData.docs.length === 0){
            fetchNewOffers();
        }
    }, []);

    return (
        <section className='px-3 pt-[108px]'>
          <p className='my-[1.8vh] text-clamp-lg font-medium'>Most recent offers</p>
          <ul className='flex gap-1.5 h-full max-h-[450px] pb-[3%] overflow-x-scroll overflow-y-hidden'>
            {skeletonLoading && (
              <>
                <li>
                  <SkeletonPreviewProduct deal="true" error={newOffersData.error}/>
                </li>
                <li>
                  <SkeletonPreviewProduct deal="true" error={newOffersData.error}/>
                </li>
                <li>
                  <SkeletonPreviewProduct deal="true" error={newOffersData.error}/>
                </li>
                <li>
                  <SkeletonPreviewProduct deal="true" error={newOffersData.error}/>
                </li>
              </>
            )}

            { renderProducts(newOffersData.docs) }

          </ul>
        </section>
    )
}

export default NewOffers;