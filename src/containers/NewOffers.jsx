import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorNewOffers, newOffersState, requestNewOffers, resultNewOffers } from '../context/sliceNewOffers';
import SkeletonPreviewProduct from '../components/SkeletonPreviewProduct';
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

            const excludedTypes = ["SponsoredVideoAd"];

            return data.map((d, index) => {
                if (!excludedTypes.includes(d.type)){
                    return (
                        <li key={index}>
                            <NewOfferPreview data={d}/>
                        </li>
                    )
                }
            })
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
            });
    };

    useEffect(() => {
        if (newOffersData.docs.length === 0){
            fetchNewOffers();
        }
    }, []);

    return (
        <section className='px-3 pt-[clamp(108px,22vw,130px)]'>
          <p className='mb-[3%] text-clamp-lg font-medium'>Most recent offers</p>
          <ul className='flex gap-1.5 h-full max-h-[450px] pb-[3%] overflow-x-scroll overflow-y-hidden'>
            {skeletonLoading && (
              <>
                {[...Array(4).keys()].map(key => (
                  <li key={key}>
                    <SkeletonPreviewProduct deal="true" error={newOffersData.error}/>
                  </li>
                ))}
              </>
            )}

            { renderProducts(newOffersData.docs) }

          </ul>
        </section>
    )
}

export default NewOffers;