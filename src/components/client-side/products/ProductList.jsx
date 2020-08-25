import React from 'react'
import ClientProduct from './ClientProduct'
import { useSelector } from 'react-redux'
import { StyledClientMenu } from '../../styled-components/client-side'

function ProductList({match}) {

    const products = useSelector(state => state.products)
    const categoryFinded = match.params.category

    const productsMatchWithCategory = products.filter(product => product.category === categoryFinded)

    const renderProducts = productsMatchWithCategory.map(product => <ClientProduct product={product} key={product._id} />)

    return (
        <StyledClientMenu>
            {renderProducts}
        </StyledClientMenu>
    )
}

export default ProductList