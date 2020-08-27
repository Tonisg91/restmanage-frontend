import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import cartService from '../../../tools/cartService'

function ClientProduct({product}) {
    const dispatch = useDispatch()

    const { image, name, _id, price } = product

    const addToCart = (product) => {
        cartService.toLocalStorage(product)
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }

    window.scrollTo(0,0)
    return (
        <div className="food-container border">
            <div className="food-image" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container">
                <h2>{name}</h2>
                <p>{price}€</p>
                <div >
                    <Link to={`/menu/product/${_id}`}>Ver detalles</Link>
                    <i className="fas fa-cart-arrow-down" onClick={() => addToCart(_id)}/>
                </div>
            </div>
        </div>
    )
}

export default ClientProduct