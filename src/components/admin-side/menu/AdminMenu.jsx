import React, { useState} from 'react'
import { StyledAdminMenu } from '../../styled-components/admin-side'
import AddProduct from './AddProduct'
import CategoryList from './CategoryList'
import AdminProduct from './AdminProduct'
import EditProduct from './EditProduct'
import productService from '../../../tools/productService'

function AdminMenu({cb, uniqueCategories, products, dispatch}) {
    const addForminitialState = {
        name: '',
        description: '',
        category: '',
        ingredients: '',
        price: 0,
        image: undefined,
    }

    const editFormInitialState = {
        _id: '',
        name: '',
        description: '',
        category: '',
        ingredients: '',
        price: 0,
        image: undefined,
    }

    const [addForm, setAddForm] = useState(addForminitialState)
    const [editForm, setEditForm] = useState(editFormInitialState)
    const [isEditing, setIsEditing] = useState(false)


    const actionForm = !isEditing ?
        <AddProduct
            updateList={() => cb(dispatch, true)}
            setForm={setAddForm}
            form={addForm}
            initialState={addForminitialState}
            categoryList={uniqueCategories}
        /> :
        <EditProduct
            updateList={() => cb(dispatch, true)}
            setForm={setEditForm}
            form={editForm}
            initialState={editFormInitialState}
            setIsEditing={setIsEditing}
        />


    return (
        <StyledAdminMenu>
            <div id="header">
                <h1 className="super-text">La carta</h1>
            </div>
            <div className="field" id="categories">
                <h2>Categorías</h2>
                <CategoryList categories={uniqueCategories} />
            </div>
            <div id="add-product" className="field">
                {actionForm}
            </div>
            <h2 id="list-title">Listado de Productos</h2>
            <div className="field" id="product-list">
                <AdminProduct
                    products={products}
                    dispatch={dispatch}
                    productService={productService}
                    setEditForm={setEditForm}
                    goEdit={setIsEditing}
                />
            </div>
        </StyledAdminMenu>
    )
}

export default AdminMenu
