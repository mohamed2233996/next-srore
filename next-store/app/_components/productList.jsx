import React from 'react';
import ProductItem from './productItem';

function ProductList({productList}) {
    console.log(productList);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {productList.map(item => (
                <ProductItem product={item} key={item.id}/>
            )
            )}
        </div>
    );
}

export default ProductList;
