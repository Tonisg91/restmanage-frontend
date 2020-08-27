import React, { useState, useEffect} from 'react'
import AddProduct from '../admin-side/AddProduct'
import {isAdminRoute} from '../../tools/pathFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { StyledClientMenu } from '../styled-components/client-side'
import { StyledAdminMenu } from '../styled-components/admin-side'
import CategoryList from '../admin-side/CategoryList'
import Category from '../client-side/products/Category'
import AdminProduct  from '../admin-side/AdminProduct'
import productService from '../../tools/productService'
import EditProduct from '../admin-side/EditProduct'

function Menu(props) {
    const addForminitialState = {
        name: '',
        description: '',
        category: '',
        price: 0,
        image: undefined,
    }

    const editFormInitialState = {
        _id: '',
        name: '',
        description: '',
        category: '',
        price: 0,
        image: undefined,
    }

    const [addForm, setAddForm] = useState(addForminitialState)
    const [editForm, setEditForm] = useState(editFormInitialState)
    const [isEditing, setIsEditing] = useState(false)

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const sendDataToRedux = data => dispatch({
        type: 'SET_PRODUCTS',
        payload: data
    })
    const getProductsAndDispatch = (cb = sendDataToRedux, forceWhenEdit = false) => {
        //TODO: Si ya hay productos, no repetir la llamada.
        if (!products.length) productService.getAllProducts(cb)
        if (forceWhenEdit) productService.getAllProducts(cb)
        return
    }
    
    useEffect(getProductsAndDispatch, [])

    const uniqueCategories = [...new Set(products.map(e => e.category))]

    const renderCategoriesClientSide = products.length ?
        uniqueCategories.map(category => (
            <Category category={category} key={category}/>
        )) : 
        null

    const actionForm = !isEditing ? 
            <AddProduct
                updateList={getProductsAndDispatch}
                setForm={setAddForm}
                form={addForm}
                initialState={addForminitialState}
                categoryList={uniqueCategories}
            /> :
            <EditProduct 
                updateList={() => getProductsAndDispatch(sendDataToRedux, true)}
                setForm={setEditForm}
                form={editForm}
                initialState={editFormInitialState}
                setIsEditing={setIsEditing}
            />

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
            {renderCategoriesClientSide}
        </StyledClientMenu>
    )
}

export default Menu
