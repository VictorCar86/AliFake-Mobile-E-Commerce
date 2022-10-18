import React from 'react'

const PreviewProduct = ({ data, deal = false}) => {
  return (
    <article className='h-min w-full bg-gray-300'>
        <img className='rounded-xl' src={data.product_main_image_url} alt={data.product_title} />
        <span>{data.sale_price_currency} {data.sale_price}</span>
        <p>Sold {data.lastest_volume}</p>
        {!deal && (
            <>
                <p>{data.product_title}</p>
                <span>
                    Save {Math.round(
                        ((data.original_price - data.sale_price) / data.original_price) * 100
                    )+"%"}
                </span>
            </>
        )}
    </article>
  )
}

export default PreviewProduct