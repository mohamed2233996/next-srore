"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import { IoCartOutline } from "react-icons/io5";import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import Cart from "../_components/cart"

const Header = () => {
    const { user } = useUser();
    const[isLoggedin,  setIsloggedIn] = useState(false);
    const {cart ,setCart} =useContext(CartContext)
    useEffect (()=>{
        setIsloggedIn(window.location.href.includes('sign-in'))
    },[])

    useEffect(()=>{
        user && getCartItems()
    },[user])

    const [openCart , setOpenCart ]= useState(false)

    const getCartItems =()=>{
        CartApis.getUserCart(user.primaryEmailAddress.emailAddress).then(res=>{
            console.log(res.data.data)
            res.data.data.forEach(citem=>{
                setCart(oldCart=>[
                ...oldCart,
                    {
                        id:citem.id,
                        product:citem.attributes.products.data[0]
                    }
                ])
            })
        })
    }


    return !isLoggedin && (
        <header className="bg-white dark:bg-gray-900">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
                <Image src="/logo.svg" alt='logo' width={50} height={50}/>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Explore
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Contact Us
                                </a>
                            </li>

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        {!user ?
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-hoverPrim dark:hover:bg-teal-500"
                                href="/sign-in"
                            >
                                Login
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-hoverPrim sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                href="/sign-up"
                            >
                                Register
                            </a>
                        </div>
                        :<div className='flex justify-center items-center'>
                            <div className='mr-6 flex justify-center items-center'>
                                <IoCartOutline onClick={()=>setOpenCart(!openCart)} className='text-[30px] text-primary cursor-pointer'/>
                                <h2 className='text-[20px]'>({cart.length})</h2>
                            </div>
                            <UserButton afterSignOutUrl='/'/>
                            {openCart && <Cart />}
                        </div>}
                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
