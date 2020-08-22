import React, { useState, useEffect} from 'react'
import AddProduct from '../admin-side/AddProduct'
import {isAdminRoute} from '../../tools/pathFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { StyledClientMenu } from '../styled-components/client-side'
import { StyledAdminMenu } from '../styled-components/admin-side'
import CategoryList from '../admin-side/CategoryList'
import AdminProduct  from '../admin-side/AdminProduct'
import ClientProduct from '../client-side/ClientProduct'
import productService from '../../tools/productService'
import EditProduct from '../admin-side/EditProduct'

function Menu(props) {
    const addForminitialState = {
        name: '',
        description: '',
        category: '',
        price: 0,
        image: '',
    }

    const editFormInitialState = {
        _id: '',
        name: '',
        description: '',
        category: '',
        price: 0,
        image: '',
    }

    const [addForm, setAddForm] = useState(addForminitialState)
    const [editForm, setEditForm] = useState(editFormInitialState)
    const [isEditing, setIsEditing] = useState(false)

    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()

    const sendDataToRedux = data => dispatch({
        type: 'SET_PRODUCTS',
        payload: data
    })

    const getProductsAndDispatch = (cb = sendDataToRedux) => {
        productService.getAllProducts(cb)
    }

    useEffect(getProductsAndDispatch, [])

    const renderProductsClientSide = products.length ? 
    products.map(product => (
        <ClientProduct product={product} key={product._id}/>
    )) : 
    null

    const actionForm = !isEditing ? 
            <AddProduct
                updateList={getProductsAndDispatch}
                setForm={setAddForm}
                form={addForm}
                initialState={addForminitialState}
            /> :
            <EditProduct 
                updateList={getProductsAndDispatch}
                setForm={setEditForm}
                form={editForm}
                initialState={editFormInitialState}
                setIsEditing={setIsEditing}
            />

    const uniqueCategories = [...new Set(products.map(e => e.category))]

    if (isAdminRoute(props.match.path)) {
        return (
            <StyledAdminMenu>
                <div id="header">
                    <h1>La carta</h1>
                </div>
                <div className="field" id="categories">
                    <h2>Categorías</h2>
                    <CategoryList categories={uniqueCategories}/>
                </div>
                <div id="add-product" className="field">
                    {actionForm}
                </div>
                    <h2 id="list-title">Listado de Productos</h2>
                <div className="field" id="product-list">
                        <AdminProduct
                            products={products}
                            dispatch={sendDataToRedux}
                            productService={productService}
                            setEditForm={setEditForm}
                            goEdit={setIsEditing}
                        />
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
