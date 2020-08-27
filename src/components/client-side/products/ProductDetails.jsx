import React from 'react'
import { useSelector } from 'react-redux'
import productService from  '../../../tools/productService'
import { StyledClientProductDetails } from '../../styled-components/client-side'
import { useState, useEffect } from 'react'

function ProductDetails({match}) {
    const {id: currentProductId} = match.params

    const useSelectedProduct = (productId = currentProductId) => {
        const products = useSelector(state => state.products)
        const productSelected = products.length ? products.find(({ _id }) => _id === productId) : []
        const [currentProduct, setCurrentProduct] = useState(productSelected)
        const hasStoredProduct = currentProduct.length

        useEffect(() => {
            if (!hasStoredProduct) {
                productService.getSingleProduct(productId).then(setCurrentProduct)
            }
        }, [hasStoredProduct])

        return currentProduct
    }

    const {name} = useSelectedProduct()

    return (
        <StyledClientProductDetails>
            <h1>{name}</h1>
        </StyledClientProductDetails>
    )
}

export default ProductDetails