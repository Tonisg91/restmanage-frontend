import React, {useState} from 'react'
import GenericTable from '../../common/GenericTable'
import CartElement from './CartElement'
import { useSelector } from 'react-redux'
import { StyledClientCart } from '../../styled-components/client-side'
import cartService from '../../../tools/cartService'

function Cart() { 
    const currentCart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const [totalAmount, setTotalAmount] = useState(getTotalAmount)

    function getTotalAmount() {
        let total = 0
        currentCart.forEach(e => total += e.product.price * e.qty)
        return total
    }

    const renderCartElement = currentCart.map(e => (
        <CartElement element={e.product} qty={e.qty} key={e.product._id}/>
    ))

    const sendOrder = (cart, id) => cartService.sendCart(cart, id)

    return (
        <StyledClientCart>
            <h1>Cart</h1>
            <GenericTable content={renderCartElement}/>
            <div>
                <h3>Total</h3>
                <p>{totalAmount} €</p>
                <button 
                    className="btn btn-blue"
                    onClick={() => sendOrder(currentCart, user._id || null)}
                    >REALIZAR PEDIDO
                </button>
            </div>
        </StyledClientCart>
    )
}


export default Cart
