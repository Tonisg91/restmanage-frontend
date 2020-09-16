import React, {useState} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios';
import { useSelector } from 'react-redux'

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: 'white',
            fontWeight: 600,
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: '#fce883',
            },
            '::placeholder': {
                color: '#FFF',
            },
        },
        invalid: {
            iconColor: '#FFC7EE',
            color: 'red',
        },
    }
};

function CheckoutForm({amount}) {
    const config = useSelector(state => state.config)
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    // Handle real-time validation errors from the card Element.
    const handleChange = (event) => {
        if (event.error) {
            setError(event.error.message);
        } else {
            setError(null);
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error) {
            const { id } = paymentMethod
            const { data } = await axios.post('http://localhost:5000/api/checkout', {
                id,
                amount: amount * 100,
                description: `Pedido ${config.name}`
            })
        }


    }
    // Handle form submission.
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const card = elements.getElement(CardElement);
    //     const result = await stripe.createToken(card)
    //     if (result.error) {
    //         // Inform the user if there was an error.
    //         setError(result.error.message);
    //     } else {
    //         setError(null);
    //         // Send the token to your server.
    //         //stripeTokenHandler(result.token);
    //     }
    // };



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <CardElement
                    id="card-element"
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChange}
                />
                <div className="card-errors" role="alert">{error}</div>
            </div>
            <button
                className="btn btn-blue"
                type="submit"
            >Realizar Pedido
                </button>
        </form>
    );
}

export default CheckoutForm
