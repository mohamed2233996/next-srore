import React, { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import Link from 'next/link';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    return (
        <div className='absolute w-[300px] h-[300px] rounded-md bg-gray-100 overflow-auto
        shadow-md z-10 border mx-10 right-10 top-12 p-5'>
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart.map((item) => (
                        <li className="flex items-center gap-4">
                            <img
                                src={item.product.attributes.img.data.attributes.url}
                                alt=""
                                className="size-16 rounded object-cover"
                            />

                            <div>
                                <h2 className="text-sm text-gray-900">{item.product.attributes.title}</h2>

                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">catogery:</dt>
                                        <dd className="inline">{item.product.attributes.catogery}</dd>
                                    </div>

                                    <div>
                                        <dt className="inline">price:</dt>
                                        <dd className="inline">{item.product.attributes.price}$</dd>
                                    </div>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-4 text-center mt-4">
                <Link
                    href="/cart"
                    className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                >
                    View my cart {cart.length}
                </Link>

                <Link
                    href="/"
                    className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                    Continue shopping
                </Link>
            </div>
        </div>
    );
}

export default Cart;
