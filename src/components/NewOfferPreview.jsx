import React from 'react';
import { Link } from 'react-router-dom';

const NewOfferPreview = ({ data }) => {
    const dataCurrentPrice = data.priceInfo.currentPrice?.priceString;
    const dataPriceRange = data.priceInfo.priceRange?.priceString;
    const dataAverageRating = String(data.averageRating);

    return (
        <article className='max-w-[220px] w-[35vw] h-min rounded-xl text-clamp-sm'>
            <Link to={`/product/${data.usItemId}`}>
                <img className='max-w-[220px] w-[35vw] max-h-[220px] h-[35vw] border-gray-300 border-4 rounded-xl' src={data.imageInfo.thumbnailUrl} alt={data.name} />
                {dataPriceRange && (
                    <p className='h-[5vw] max-h-8 mt-[2%]'>
                      <span className='font-medium'>{dataPriceRange || dataCurrentPrice}</span>
                      <span className='mx-1 font-medium'>{data.currencyCode}</span>
                    </p>
                )}
                {!dataPriceRange && (
                    <p className='h-[5vw] max-h-8 mt-[2%]'>
                      <span className='font-medium'>{data.currencyCode}</span>
                      <span className='mx-1 font-medium'>{dataCurrentPrice}</span>
                    </p>
                )}

                {data.averageRating && (
                    <span className='inline-block mr-[3%] font-medium'>
                        ⭐
                        {dataAverageRating.length === 1 ? dataAverageRating + ".0" : dataAverageRating}
                    </span>
                )}
                {data.numberOfReviews && (
                    <span className='inline-block opacity-75'>Reviews {data.numberOfReviews}</span>
                )}
            </Link>
        </article>
    )
}

export default NewOfferPreview;