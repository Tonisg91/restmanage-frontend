import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import productService from  '../../../tools/productService'
import { StyledClientProductDetails } from '../../styled-components/client-side'
import { useState, useEffect } from 'react'
import Header from '../../common/Header'

function ProductDetails({match}) {
    const {id: currentProductId} = match.params
    const history = useHistory()

    const useSelectedProduct = (productId = currentProductId) => {
        const products = useSelector(state => state.products)
        const productSelected = products.length ? products.find(({ _id }) => _id === productId) : []
        const [currentProduct, setCurrentProduct] = useState(productSelected)
        const hasStoredProduct = currentProduct.length

        useEffect(() => {
            if (!hasStoredProduct) productService.getSingleProduct(currentProductId).then(setCurrentProduct)
        }, [hasStoredProduct])

        return currentProduct
    }

    const goBack = () => history.goBack()

    const {name, description, price, ingredients} = useSelectedProduct()

    const displayIngredients = () => {
        if (ingredients) return ingredients.map(elem => <li key={elem}>{elem}</li>)
        return null
    }


    return (
        <StyledClientProductDetails>
            <Header text={"Detalles"}/>
            <div id="product-container">
                <div id="product-info" className="blackboard-bg">
                    <h1>{name}</h1>
                    <p id="description">{description}</p>
                    <ul>
                        {displayIngredients()}
                    </ul>
                    <div id="action-container" >
                        <h2 id="price">{price} €</h2>
                        <button 
                            className="btn btn-blue"
                            onClick={goBack}
                            >Volver</button>
                    </div>
                </div>
            </div>
        </StyledClientProductDetails>
    )
}

export default ProductDetails