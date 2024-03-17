'use client'
import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import SkeletonProductInfo from './SkeletonProductInfo';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import CartApis from '../../_utils/CartApis'
import { CartContext } from '../../_context/CartContext';

const ProductInfo = ({ product }) => {
    const {cart,setCart}= useContext(CartContext)
    const { user } =useUser()
    const router =useRouter()
    const handelAddToCart =()=>{
        if (!user) {
            router.push('/sign-in')
        } else {
            const data = {
                data:{
                    username: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                    products:[product?.id]
                }
            }
            CartApis.addToCart(data).then(res=>{
                console.log("done")
                setCart(oldCart=>[
                    ...oldCart,
                    {
                        id:res.data.data.id,
                        product
                    }
                ])
            }).catch(error=>{
                console.log("error" ,error)
            })
        }
    }
    return (
        <div>
        {product?.id ?
            <div className='ms-4'>
            <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
            <h2 className='text-[10px] text-gray-400'>{product?.attributes?.catogery}</h2>
            <h2 className='text-[18px] mt-6'>{product?.attributes?.descripation}</h2>
            <h2 className=" text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
                {product?.attributes?.instantDelivery ? 
                <VscWorkspaceTrusted className='w-5 h-5 text-green-500' />
                :<VscWorkspaceTrusted className="w-5 h-5"/> }
                Eligible For Instant Delivery</h2>
            <h2 className='text-[32px] text-primary mt-3'>$ {product?.attributes?.price}</h2>
            <button onClick={()=> handelAddToCart()} className='flex justify-center items-center gap-2 bg-primary rounded p-2 text-gray-50 hover:bg-hoverPrim'><FaCartPlus /> Add to Cart</button>
        </div >
        :<SkeletonProductInfo />}
        </div>
    );
}

export default ProductInfo;
