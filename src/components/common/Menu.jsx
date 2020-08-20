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

function Menu(props) {
    const initialState = {
        name: '',
        description: '',
        category: '',
        price: 0,
        image: '',
    }

    const [form, setForm] = useState(initialState)
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
                productService={productService}
                updateList={getProductsAndDispatch}
                setForm={setForm}
                form={form}
                initialState={initialState}
            /> :
            <h1>Estas editando</h1>

    const uniqueCategories = [...new Set(products.map(e => e.category))]

    if (isAdminRoute(props.match.path)) {
        return (
            <StyledAdminMenu>
                <h1>La carta</h1>
                <div id="content">
                    <div>
                        <div className="field">
                            <h2>Categorías</h2>
                            <CategoryList categories={uniqueCategories}/>
                        </div>
                        <div id="add-product" className="field">
                            <h2>Agregar Producto</h2>
                            {actionForm}
                        </div>
                    </div>
                    <div className="field">
                        <h2>Listado de Productos</h2>
                        <ul>
                            <AdminProduct
                                products={products}
                                dispatch={sendDataToRedux}
                                productService={productService}
                                setForm={setForm}
                                goEdit={setIsEditing}
                            />
                        </ul>
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
