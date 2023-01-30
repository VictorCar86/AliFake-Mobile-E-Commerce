import React from 'react';
import { BiStoreAlt } from 'react-icons/bi';

const ItemOrder = ({ data }) => {
  return (
    <section className='m-[3%] text-clamp-sm'>
        <i>
            <BiStoreAlt />
        </i>
        <p className='whitespace-nowrap text-ellipsis overflow-hidden'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores fugiat consectetur doloremque quia odio ducimus itaque, quis nisi dolores dolorum rerum corporis numquam cumque accusantium id a, similique asperiores?
        </p>

        <figure>
            <img src={data.image} alt={data.name} />
            <figcaption>
                <p>{data.name}</p>
                <span>{data.price}</span>
            </figcaption>
        </figure>
    </section>
  )
}

export default ItemOrder;