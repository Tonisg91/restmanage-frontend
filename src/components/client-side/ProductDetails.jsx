import React from 'react'
import { useSelector } from 'react-redux'

function ProductDetails({match}) {
    const productNameFromParams = match.params.productName

    const { products }  = useSelector(state => state.products) || null

    const getDataFromRedux = (name = productNameFromParams) => [...products].find(product => product.name === name)
    const getDataFromAxios = (name = productNameFromParams) => 'llamada a axios'

    const test = !products.length ?  getDataFromAxios() : getDataFromRedux()

    return (
        <h1>Product details</h1>
    )
}

export default ProductDetails