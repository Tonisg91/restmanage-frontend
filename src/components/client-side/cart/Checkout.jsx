import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(
        'pk_test_51HNwPTE4ezT0qiZJkis2gL9oIGFlelSCntvvSZEZANRvWtsUNJ5fFuAsBRcNdV6mlVnSCkTaKcZNW1TbXwfviQFX00HRIwIans',
        {locale: 'es'}
    )

function Checkout({amount}) {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount}/>
        </Elements>
    )
}

export default Checkout
