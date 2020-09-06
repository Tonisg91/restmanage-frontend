import React from 'react'
import Category from '../../client-side/products/Category'
import { StyledClientMenu } from '../../styled-components/client-side'

function ClientMenu({products, categories}) {

    const renderCategoriesClientSide = products.length ?
        categories.map(category => (
            <Category category={category} key={category} />
        )) :
        null

    return (
        <StyledClientMenu>
            {renderCategoriesClientSide}
        </StyledClientMenu>
    )
}

export default ClientMenu