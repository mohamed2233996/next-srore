"use client"
import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY)

const Page = () => {
    const searchPrams =useSearchParams();
    const options = {
        // passing the client secret obtained from the server
        mode:'payment', 
        currency: 'usd',
        amount: Number(searchPrams.get("amount"))*100
    };
    return (
        <div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm amount={Number(searchPrams.get("amount"))} />
            </Elements>
        </div>
    );
}

export default Page;
