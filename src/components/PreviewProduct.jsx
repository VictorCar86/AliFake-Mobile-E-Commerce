import React from 'react'

const PreviewProduct = ({ data, deal = false}) => {
    const discount = Math.round(
        ((data.original_price - data.sale_price) / data.original_price) * 100
    );

    return (
        <article className='h-min w-full rounded-xl '>
            <img className='border-gray-300 border-4 rounded-xl' src={data.product_main_image_url} alt={data.product_title} />
            <span className='text-xs font-medium'>{data.sale_price_currency}</span>
            <span className='mx-1 text-lg font-medium'>{data.sale_price}</span>
            {discount >= 20 && (
              <>
                  <span className='opacity-75 line-through'>{data.original_price}</span>
                  <p className='w-max px-1 pb-0.5 bg-red-600 text-white font-medium rounded-tl-lg rounded-br-xl'>
                      Save {discount + "%"}
                  </p>
              </>
            )}
            {!deal && (
              <>
                  <p className='h-6 mr-3 whitespace-nowrap overflow-hidden relative after:content-["..."] after:pl-0.5 after:absolute after:top-0 after:right-0 after:bg-white'>
                    {data.product_title}
                  </p>
              </>
            )}
            <p>Sold {data.lastest_volume}</p>
        </article>
    )
}

export default PreviewProduct