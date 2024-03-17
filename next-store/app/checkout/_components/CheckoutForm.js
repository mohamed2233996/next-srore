import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import OrderApis from "../../_utils/OrderApis"
import CartApis from '../../_utils/CartApis';

const CheckoutForm = ({amount}) => {
    const {cart, setCart}=useContext(CartContext)
    const{user} =useUser()

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);

    const handleError = (error) => {
        setLoading(false);
        setErrorMessage(error.message);
    }

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        createOrder();
        sendEmail();

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError);
            return;
        }

        const res = await fetch("/api/create-intent", {
            method: "POST",
            body: JSON.stringify({
                amount: amount,
            }),
        })

        const clientSecret = await res.json();
        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: "http://localhost:3000/payment-confirm",
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };


    const createOrder=()=>{
        let productId=[]
        cart.forEach(item=>{
            productId.push(item.product.id)
        })
        const data={
            data:{
                username: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                amount,
                products: productId
            }
        }
        OrderApis.CreateOrder(data).then((res=>{
            if (res) {
                cart.forEach(item=>{
                    CartApis.deleteCartItem(item.id).then(result=>{

                    })
                })
            }
        }))
    }

    const sendEmail = async()=>{
        const res = await fetch("/api/send-email", {
            method: "POST",
        })
        const clientSecret = await res.json();
        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: "http://localhost:3000/payment-confirm",
            },
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='mx-32 md:mx-[320px] mt-12'>
                <PaymentElement />
                <button disabled={!stripe} className='w-full bg-primary rounded-md p-2 border hover:bg-hoverPrim text-white mt-4'>Submit</button>
            </div>

        </form>
    );
};

export default CheckoutForm;