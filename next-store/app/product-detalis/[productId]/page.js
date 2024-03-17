'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb  from "../../_components/breadcrumb"
import ProductImg from "../_components/productImg"
import ProductInfo from "../_components/productInfo"
import ProductList from "../../_components/productList"
import ProductApis from "../../_utils/ProductApis"

function productDetalis({ params }) {
    const path = usePathname();

    const  [productDetalis, setProductDetalis] = useState({})
    const  [productSimilarList, setProductSimilarList] = useState([])
    useEffect(() => {
        getProductById_();
        getProductsByCategorey();
    }, [params?.productId])

    const getProductById_ = () => {
        ProductApis.getProductById(params?.productId).then((res) => {
            setProductDetalis(res.data.data)
            getProductsByCategorey(res.data.data)
        })
    }
    const getProductsByCategorey=(product)=>{
        ProductApis.getProductsByCategorey(product?.attributes?.catogery).then((res)=>{
            console.log(res.data.data);
            setProductSimilarList(res.data.data)
        })
    }
    return (
        <div className='px-10 py-8 md:px-28'>
            <Breadcrumb path={path}/>
            <div className='grid grid-cols-1 gap-5 lg:gap-0 md:grid-cols-2 mt-10 justify-around'>
                <ProductImg  product={productDetalis}/>
                <ProductInfo product={productDetalis}/>
            </div>
            <div>
                <h2 className=' mt-24 mb-8 text-[22px]'>Similar products</h2>
                <ProductList productList={productSimilarList}/>
            </div>
        </div>
    );
}

export default productDetalis;
