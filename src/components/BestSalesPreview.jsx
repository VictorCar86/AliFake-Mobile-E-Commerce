import React from 'react';
import { Link } from 'react-router-dom';

const BestSalesPreview = ({ data }) => {
    // const discount = Math.round(
    //     ((data.original_price - data.sale_price) / data.original_price) * 100
    // );

    const dataCurrentPrice = data.priceInfo.currentPrice?.priceString;
    const dataPriceRange = data.priceInfo.priceRange?.priceString;
    const dataAverageRating = String(data.averageRating);

    return (
        <article className='max-w-[295px] w-[46vw] mx-auto rounded-xl'>
            <Link to={`/product/${data.usItemId}`}>
                <img className='max-w-[295px] w-[46vw] max-h-[295px] h-[46vw] border-gray-300 border-4 rounded-xl bg-white' src={data.imageInfo.thumbnailUrl} alt={data.name} />
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

                {/* {discount >= 20 && (
                <>
                    <span className='mr-1 opacity-75 line-through'>{data.priceInfo.currentPrice.price}</span>
                    <span className='inline-block w-max px-1 pb-0.5 bg-red-600 text-white font-medium rounded-tl-lg rounded-br-xl'>
                        Save {discount + "%"}
                    </span>
                </>
                )} */}

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