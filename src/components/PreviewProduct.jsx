import React from 'react'
import { Link } from 'react-router-dom';

const PreviewProduct = ({ data, deal = false}) => {
    const discount = Math.round(
        ((data.original_price - data.sale_price) / data.original_price) * 100
    );

    return (
        <article className={`${deal ? "w-[calc(37.45318vw_-_11.98502px)]" : "w-full"} h-min rounded-xl`}>
            <Link to={`/product/${data.product_id}`}>
                <img className='border-gray-300 border-4 rounded-xl' src={data.product_main_image_url} alt={data.product_title} />
                <span className='text-xs font-medium'>{data.sale_price_currency}</span>
                <span className='mx-1 text-xl font-medium'>{data.sale_price}</span>
                {discount >= 20 && (
                <>
                    <span className='mr-1 opacity-75 line-through'>{data.original_price}</span>
                    <span className='inline-block w-max px-1 pb-0.5 bg-red-600 text-white font-medium rounded-tl-lg rounded-br-xl'>
                        Save {discount + "%"}
                    </span>
                </>
                )}
                {!deal && (
                <>
                    <p className='h-6 mr-3 whitespace-nowrap overflow-hidden relative after:content-["..."] after:pl-0.5 after:absolute after:top-0 after:right-0 after:bg-white'>
                        {data.product_title}
                    </p>
                </>
                )}
                <p className='opacity-75'>Sold {data.lastest_volume}</p>
            </Link>
        </article>
    )
}

export default PreviewProduct