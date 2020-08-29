import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Category({category}) {
    const history = useHistory()
    const currentCategories = useSelector(state => state.products).find(product => product.category === category)

    const { image } = currentCategories

    const redirectToProductList = () => history.push(`/menu/${category}`)

    return (
        <div className="food-container border" onClick={redirectToProductList}>
            <div className="food-image" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container">
                <h2>{category}</h2>
            </div>
        </div>
    )
}

export default Category