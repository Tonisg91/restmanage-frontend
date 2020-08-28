import React, {useEffect, useState} from 'react'
import GenericTable from '../../common/GenericTable'
import CartElement from './CartElement'
import { useSelector } from 'react-redux'
import { StyledClientCart } from '../../styled-components/client-side'
import productService from '../../../tools/productService'

function Cart() { 
    
    const useCurrentCart = () => {
        const currentCart = useSelector(state => state.cart)
        const products = useSelector(state => state.products)

        const productsFullData = products.length ? currentCart.map(id => {
            return products.find(({_id}) => _id === id)
        }) : []

        const [currentProductsArr, setCurrentProductsArr] = useState(productsFullData)
        const hasStoredProducts = productsFullData.length 

        useEffect(() => {
            if (!hasStoredProducts) {
                currentCart.map(productId => 
                    productService.getSingleProduct(productId)
                        .then(res => setCurrentProductsArr([...currentProductsArr, res]))
                    )
            }

        }, [hasStoredProducts])

        return currentProductsArr
    }

    console.log(useCurrentCart())
    
    

    return (
        <StyledClientCart>
            <h1>Cart</h1>

        </StyledClientCart>
    )
}


export default Cart
