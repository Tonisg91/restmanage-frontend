import React from 'react'
import GenericTable from '../common/GenericTable'
import { StyledAdminProduct } from '../styled-components/admin-side'
import { useHistory } from 'react-router-dom'

function AdminProduct({products, dispatch, productService, setEditForm, goEdit}) {
    const history = useHistory()
    const editProduct = (product) => setEditForm(product)

    const deleteProduct = (id, cb = dispatch) => {
        productService.deleteProduct(id, cb)
    }

    const redirectToDetails = (productId) => history.push(`/menu/product/${productId}`)

    const productList = products.map(product => 
        <StyledAdminProduct key={product._id} className="container">
            <h4>{product.name}</h4>
            <div className="btn-container">
                <button
                    id="show-button"
                    className="btn btn-blue"
                    onClick={() => redirectToDetails(product._id)}
                >
                    Ver
                </button>
                <button
                    id="edit-button"
                    className="btn btn-blue"
                    onClick={() => {
                    goEdit(true)
                    editProduct(product)
                    }}
                >Editar
                    </button>
                <button
                    id="delete-button"
                    className="btn btn-red"
                    onClick={() => deleteProduct(product._id)}
                >Borrar</button>
            </div>
        </StyledAdminProduct>
    )


    return (
        <GenericTable content={productList} id="admin-product-list-container"/>
    )
}

export default AdminProduct