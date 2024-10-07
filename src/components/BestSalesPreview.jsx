import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../assets/images/not_found.webp';

const BestSalesPreview = ({ data }) => {
    const dataCurrentPrice = data.priceInfo?.currentPrice?.priceString;
    const dataPriceRange = data.priceInfo?.priceRange?.priceString;
    const dataAverageRating = String(data.averageRating);

    return (
        <article className={`max-w-[295px] w-[46vw] mx-auto rounded-xl ${!data.usItemId && 'pointer-events-none'}`}>
            <Link to={`/product/${data.usItemId}`}>
                <img
                    className='max-w-[295px] w-[46vw] max-h-[295px] h-[46vw] border-gray-300 border-4 rounded-xl bg-white'
                    src={data.imageInfo?.thumbnailUrl ?? NotFoundImg}
                    alt={data.name}
                />
                {dataPriceRange && (
                    <>
                      <span className='text-xl font-medium'>{dataPriceRange || dataCurrentPrice || 'Price not avaliable'}</span>
                      <span className='mx-1 text-xs font-medium'>{data.currencyCode}</span>
                    </>
                )}
                {!dataPriceRange && (
                    <>
                      <span className='text-xs font-medium'>{data.currencyCode}</span>
                      <span className='mx-1 text-xl font-medium'>{dataCurrentPrice || 'Price not avaliable'}</span>
                    </>
                )}

                <p className='h-6 mr-3 whitespace-nowrap overflow-hidden text-ellipsis'>
                    {data.name}
                </p>

                {data.averageRating && (
                    <span className='mr-[3%] font-medium'>
                        ⭐
                        {dataAverageRating.length === 1 ? dataAverageRating + ".0" : dataAverageRating}
                    </span>
                )}
                {data.numberOfReviews && (
                    <span className='opacity-75'>Reviews {data.numberOfReviews}</span>
                )}
            </Link>
        </article>
    )
}

export default BestSalesPreview;