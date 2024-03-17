import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='flex items-center flex-col '>
            <Image 
            src="/payment.gif"
            alt="payment"
            width={150}
            height={1500}/>
            <h1 className='text-center text-3xl font-bold text-gray-900'>Payment  Successful!</h1>
            <p className='text-gray-500 mt-3'>Payment has been completed. An email will be sent with the purchases</p>
            <Link className='bg-primary hover:bg-hoverPrim p-2 rounded-md text-white mt-5' href='/'>Go To  Home</Link>
        </div>
    );
}

export default Page;
