import React from 'react'
import { useSelector } from 'react-redux'
import productService from  '../../../tools/productService'
import ClientProduct from './ClientProduct'
import { StyledClientSingleProduct } from '../../styled-components/client-side'

function ProductDetails({match}) {

    const productIdFromParams = match.params.id
    const { products }  = useSelector(state => state.products) || null

    const getDataFromRedux = (id = productIdFromParams) => [...products].find(product => product._id === id)
    
    const getDataFromAxios = async (id = productIdFromParams) => await productService.getSingleProduct(id)

    const singleProduct = !products.length ?  getDataFromAxios() : getDataFromRedux()

    return (
        <StyledClientSingleProduct>
            <ClientProduct product={singleProduct}/>
        </StyledClientSingleProduct>
    )
}

export default ProductDetails