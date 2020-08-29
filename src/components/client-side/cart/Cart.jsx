import React, {useEffect, useState} from 'react'
import GenericTable from '../../common/GenericTable'
import CartElement from './CartElement'
import { useSelector } from 'react-redux'
import { StyledClientCart } from '../../styled-components/client-side'

function Cart() { 
    // const useTransformCartElements = () => {
    //     const currentCart = useSelector(state => state.cart)
    //     return currentCart
    // }
    
    //console.log(useTransformCartElements())

    return (
        <StyledClientCart>
            <h1>Cart</h1>

        </StyledClientCart>
    )
}


export default Cart
