import React, {useState, useEffect} from 'react'
import GenericTable from '../../common/GenericTable'
import CartElement from './CartElement'
import { useSelector, useDispatch } from 'react-redux'
import { StyledClientCart } from '../../styled-components/client-side'
import cartService from '../../../tools/cartService'
import { useHistory } from 'react-router-dom'

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
        dispatch({
            type: 'EMPTY_CART'
        })
    }
    
    const sendOrder = async (cart, id ) => {
        if (cart.length) {
            await cartService.sendCart(cart, id, totalAmount)
            return emptyCart()
        }
        return alert('No tienes productos en el carrito.')
    }

    useEffect(() => {
        setTotalAmount(getTotalAmount)
    }, [sendOrder])

    
    const renderCartElement = currentCart.map(e => (
        <CartElement element={e.product} qty={e.qty} key={e.product._id}/>
        ))
        
    const hasCartContent = currentCart.length ? <GenericTable content={renderCartElement} /> : <p>No tienes ningun producto en tu carrito</p>



    return (
        <StyledClientCart>
            <h1>Cart</h1>
            {hasCartContent}
            <div>
                <h3>Total</h3>
                <p>{totalAmount} €</p>
                <button 
                    className="btn btn-blue"
                    onClick={() => sendOrder(currentCart, user._id || null)}
                    >REALIZAR PEDIDO
                </button>
                <button
                    className="btn btn-red"
                    onClick={emptyCart}
                >
                    VACIAR CARRITO
                </button>
            </div>
        </StyledClientCart>
    )
}


export default Cart
