import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import cartService from '../../../tools/cartService'

function ClientProduct({product}) {
    const dispatch = useDispatch()
    const currentCart = useSelector(state => state.cart)

    const { image, name, _id, price } = product

    const addToCart = (product) => {
        cartService.toLocalStorage(product)
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }

    const increaseQty = (product) => {
        cartService.toLocalStorage(product)
        dispatch({
            type: 'QTY_UP',
            payload: product
        })
    }

    const cartAction = (prod) => currentCart.find(e => e.product._id === prod._id) ? increaseQty(prod) : addToCart(prod)


    
    return (
        <div className="food-container border">
            <div className="food-image" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container">
                <h2>{name}</h2>
                <p>{price}€</p>
                <div >
                    <Link to={`/menu/product/${_id}`}>Ver detalles</Link>
                    <i className="fas fa-cart-arrow-down" onClick={() => cartAction(product)}/>
                </div>
            </div>
        </div>
    )
}

export default ClientProduct