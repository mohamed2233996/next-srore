import Image from 'next/image';
import React from 'react';

const ProductImg = ({product}) => {
    return (
        <div>
            {product?.attributes?.img?.data?.attributes?.url ?
            <Image
                src={product?.attributes?.img?.data?.attributes?.url}
                alt="product banner"
                width={400}
                height={350}
                className="rounded-lg"
            />
            :<div className='w-[400px] h-[225px] rounded-lg bg-slate-200 animate-pulse'></div>
            }
        </div>
    );
}

export default ProductImg;
