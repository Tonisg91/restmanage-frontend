import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function ClientProduct({product}) {
    const history = useHistory()
    const location = useLocation()

    const { image, name, description, _id, price } = product
    const redirectToDetails = () => {
        history.push(`/menu/product/${_id}`)
    }

    const showPrice = location.pathname.includes('product') ? <p>{price} €</p> : null


    window.scrollTo(0,0)
    return (
        <div className="food-container border" onClick={redirectToDetails}>
            <div className="food-image" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container">
                <h4>{name}</h4>
                <p>{description}</p>
                {showPrice}
            </div>
        </div>
    )
}

export default ClientProduct