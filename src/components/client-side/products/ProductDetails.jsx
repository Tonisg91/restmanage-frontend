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
            if (!hasStoredProduct) productService.getSingleProduct(productId).then(setCurrentProduct)
        }, [hasStoredProduct])

        return currentProduct
    }

    const {name, description, image, price} = useSelectedProduct()

    return (
        <StyledClientProductDetails>
            <div
                id="image-container"
                style={{ backgroundImage: `url(${image})` }} 
            />
            <div id="product-info">
                <h1>{name}</h1>
                <p>{description}</p>
                <div id="action-container">
                    <p id="price">{price} €</p>
                    <button className="btn btn-blue">AÑADIR AL CARRITO</button>
                </div>
            </div>
        </StyledClientProductDetails>
    )
}

export default ProductDetails