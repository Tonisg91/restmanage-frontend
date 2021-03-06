import React, {useState, useEffect} from 'react'
import GenericTable from '../../common/GenericTable'
import CartElement from './CartElement'
import { useSelector, useDispatch } from 'react-redux'
import { StyledClientCart } from '../../styled-components/client-side'
import cartService from '../../../tools/cartService'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Cart() { 
    const currentCart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const [clientEmail, setClientEmail] = useState('')
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

    function addOrderToUser(data) {
        cartService.addOrderToLocalStorage(data)
        dispatch({
            type: 'ADD_ORDER',
            payload: data
        })
    }
    
    const sendOrder = async (cart, id) => {
        if (!user) {
            await cartService.sendCart(cart, id, totalAmount, clientEmail)
            return emptyCart()
        }
        if (cart.length) {
            const newOrder = await cartService.sendCart(cart, id, totalAmount)
            
            addOrderToUser(newOrder)
            return emptyCart()
        }
        
        return toast.error('No tienes productos en el carrito.', {autoClose: 1500})
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
        

    const userEmail = () => {
        if (!user) {
            return (
                <div id="email-container">
                    <label htmlFor="email">Escribe tu email para recibir el ticket</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                        value={clientEmail}
                        onChange={({ target }) => setClientEmail(target.value)}
                    />
                </div>
            )
        }
        return null
    }


    const hasCartContent = currentCart.length ? (
        <>
        <GenericTable content={renderCartElement} />
        <div id="action-container">
            <div id="amount-container">
                <h2>Total</h2>
                <p>{totalAmount} €</p>
            </div>
                {userEmail()}
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
