import React, { useEffect} from 'react'
import axios from 'axios'
import AddProduct from '../admin-side/AddProduct'
import {isAdminRoute} from '../../tools/pathFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { StyledClientMenu } from '../styled-components/client-side'

function Menu(props) {
    
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()


    const getProductsAndDispatch = (hasProducts = products) => {
        axios.get('http://localhost:3000/menu')
            .then(res => {
                dispatch({
                    type: 'SET_PRODUCTS',
                    payload: res.data
                })
            })
    }

    useEffect(getProductsAndDispatch, [])

    const renderProducts = products.length ? 
    products.map(product => (
        <div key={product._id} className="food-container border">
            <div className="food-image" style={{backgroundImage: `url(${product.image})`}}>
            </div>
            {/* <img src={product.image} alt={product.name} /> */}
            <div className="text-container">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
            </div>
        </div>
    )) : 
    null

    if (isAdminRoute(props.match.path)) {
        return (
            <div>
                <h1>menu vista administrador</h1>
                <div>
                    {renderProducts}
                </div>
                <div>
                    <AddProduct />
                </div>
            </div>
        )    
    }

    return (
        <StyledClientMenu>
            {renderProducts}
        </StyledClientMenu>
    )
    
}

export default Menu
