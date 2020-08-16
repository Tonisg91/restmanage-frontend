import React, { useEffect} from 'react'
import axios from 'axios'
import AddProduct from '../admin-side/AddProduct'
import {isAdminRoute} from '../../tools/pathFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { StyledClientMenu } from '../styled-components/client-side'
import { StyledAdminMenu } from '../styled-components/admin-side'
import Category from '../admin-side/Category'
import Product from '../admin-side/Product'
import GenericTable from './GenericTable'

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

    const renderProductsClientSide = products.length ? 
    products.map(product => (
        <div key={product._id} className="food-container border">
            <div className="food-image" style={{backgroundImage: `url(${product.image})`}}>
            </div>
            <div className="text-container">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
            </div>
        </div>
    )) : 
    null

    const renderProductsAdminSide = products.length ?
        products.map(product => (
            <tr>
                <Product product={product}/>
            </tr>
        )) :
    null

    const renderUniqueCategories = [...new Set(products.map(e => e.category))].map(category => (
        <tr>
            <Category text={category}/>
        </tr>
    ))

    if (isAdminRoute(props.match.path)) {
        return (
            <StyledAdminMenu>
                <h1>La carta</h1>
                <div id="content">
                    <div>
                        <div className="field">
                            <h2>Categorías</h2>
                            <GenericTable tr={renderUniqueCategories}/> 
                        </div>
                        <div id="add-product" className="field">
                            <h2>Agregar Producto</h2>
                            <AddProduct />
                        </div>
                    </div>
                    <div className="field">
                        <h2>Listado de Productos</h2>
                        <GenericTable tr={renderProductsAdminSide} id="product-table"/>
                    </div>
                </div>
            </StyledAdminMenu>
        )    
    }

    return (
        <StyledClientMenu>
            {renderProductsClientSide}
        </StyledClientMenu>
    )
    
}

export default Menu
