import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import cartService from '../../../tools/cartService'
import { toast } from 'react-toastify'

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

    const cartAction = (prod) => {
        currentCart.find(e => e.product._id === prod._id) ? increaseQty(prod) : addToCart(prod)
        toast.info(`Has añadido ${prod.name} al carrito.`, {autoClose: 1500})
    }
    
    return (
        <div className="food-container border blackboard-bg">
            <div className="food-image" style={{ backgroundImage: `url(${image})` }}>
                <h2 className="super-text">{name}</h2>
            </div>
            <div className="text-container blackboard-bg">
                <p>{price}€</p>
                <div >
                    <Link 
                        to={`/menu/product/${_id}`}
                        >Ingredientes</Link>
                    <button
                        className="btn btn-blue"
                        onClick={() => cartAction(product)}
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClientProduct