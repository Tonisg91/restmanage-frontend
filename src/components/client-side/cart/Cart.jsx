import React, {useState, useEffect} from 'react'
import GenericTable from '../../common/GenericTable'
import CartElement from './CartElement'
import { useSelector, useDispatch } from 'react-redux'
import { StyledClientCart } from '../../styled-components/client-side'
import cartService from '../../../tools/cartService'
import { Link } from 'react-router-dom'

function Cart() { 
    const currentCart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const [totalAmount, setTotalAmount] = useState(0)
    const dispatch = useDispatch()


    function getTotalAmount() {
        if (!currentCart.length) return 0
        const amount = currentCart
                            .flatMap(prod => prod.product.price * prod.qty)
                            .reduce((acc, elem) => acc + elem)
        return amount
    }

    function emptyCart() {
        cartService.removeCartFromLocalStorage()
        dispatch({
            type: 'EMPTY_CART'
        })
    }

    function removeProductFromCart(idx) {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: idx
        })
    }
    
    const sendOrder = async (cart, id) => {
        if (cart.length) {
            await cartService.sendCart(cart, id, totalAmount)
            return emptyCart()
        }
        return alert('No tienes productos en el carrito.')
    }

    useEffect(() => {
        setTotalAmount(getTotalAmount)
    }, [sendOrder])


    const removeElement = productToRemove => {
        const productIndex = currentCart.findIndex(elem => elem.product === productToRemove)
        removeProductFromCart(productIndex)
        cartService.removeElementFromCart(productIndex)
    }



    const renderCartElement = currentCart.map(e => (
        <CartElement element={e.product} qty={e.qty} key={e.product._id} removeElement={removeElement}/>
        ))
        
    const hasCartContent = currentCart.length ? (
        <>
        <GenericTable content={renderCartElement} />
        <div id="action-container">
            <div id="amount-container">
                <h2>Total</h2>
                <p>{totalAmount} €</p>
            </div>
            <div id="action-button">
                <button
                    className="btn btn-blue"
                    onClick={() => sendOrder(currentCart, user ? user._id : null)}
                >REALIZAR PEDIDO
                        </button>
            </div>
            <p
                id="empty-cart"
                onClick={emptyCart}
            >
                Vaciar carrito
                        </p>
        </div>
        </>
        ) : 
        (
            <div id="no-content">
                <p>No tienes ningun producto en tu carrito</p>
                <Link to="/menu">
                    Vamos a ver la carta!
                </Link>
            </div>
        )

    return (
        <StyledClientCart>
            <div id="title" className="super-text">
                <h1>Tu pedido</h1>
            </div>
            <div id="cart-container" className="blackboard-bg">
                {hasCartContent}
            </div>
        </StyledClientCart>
    )
}


export default Cart
