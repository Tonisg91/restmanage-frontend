import React from 'react'
import { useHistory } from 'react-router-dom'

function ClientProduct({product}) {
    const history = useHistory()

    const { image, name, _id, price } = product

    const redirectToDetails = () => history.push(`/menu/product/${_id}`)

    window.scrollTo(0,0)
    return (
        <div className="food-container border" onClick={redirectToDetails}>
            <div className="food-image" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container">
                <h3>{name}</h3>
                <div>
                    <p>{price}€</p>
                    <i className="fas fa-cart-arrow-down"></i>
                </div>
            </div>
        </div>
    )
}

export default ClientProduct