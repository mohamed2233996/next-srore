'use client'
import React, { useEffect, useState } from 'react';
import ProductList from './productList';
import ProductApis from '../_utils/ProductApis';

const ProductSction = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getlatestProdact_()
    }, [])

    const getlatestProdact_ = () => {
        ProductApis.getlatestProdact().then((res) => {
            console.log(res.data.data);
            setProductList(res.data.data);
        })
    }
    return (
        <div className='px-10 md:px-20'>
            <h2 className='my-4 text-xl'>Our Latest Products</h2>
            <ProductList  productList={productList} />
        </div>
    );
}

export default ProductSction;
