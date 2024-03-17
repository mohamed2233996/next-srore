import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaList } from "react-icons/fa";

const ProductItem = ({ product }) => {
    return (
        <Link href={`/product-detalis/${product.id}`} className='hover:border hover:shadow-md p-1 hover:cursor-pointer border-primary200 rounded-lg'>
            <Image src={product?.attributes?.img?.data?.attributes?.url}
                alt='banner-card'
                width={400}
                height={350}
                className='rounded-t-lg h-[170px] object-cover'
            />
            <div className='flex items-center justify-between p-1 rounded-b-lg bg-gray-50'>
                <div className='p-2'>
                    <h2 className='text-[16px] font-medium line-clamp-1'>{product?.attributes?.title}</h2>
                    <h4 className='text-[10px]] text-gray-400 flex gap-1 items-center'><FaList className='w-4 h-4'/>{product?.attributes?.catogery}</h4>
                </div>
                <h2>{product?.attributes?.price}</h2>
            </div>
        </Link>
    );
}

export default ProductItem;
