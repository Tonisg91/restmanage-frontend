import React from 'react'
import GenericTable from '../../common/GenericTable'
import { useSelector } from 'react-redux'
import { StyledClientCart } from '../../styled-components/client-side'

function Cart() {
    const cart = useSelector(state => state.cart)

    return (
        <StyledClientCart>
            <h1>Cart</h1>
            
        </StyledClientCart>
    )
}


export default Cart