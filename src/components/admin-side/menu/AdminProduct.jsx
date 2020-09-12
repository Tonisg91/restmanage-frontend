import React from 'react'
import GenericTable from '../../common/GenericTable'
import { StyledAdminProduct } from '../../styled-components/admin-side'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminProduct({products, dispatch, productService, setEditForm, goEdit}) {
    const history = useHistory()
    const editProduct = (productToEdit) => {
        goEdit(true)
        setEditForm(productToEdit)
        toast.info("Editando Producto.", {autoClose: 1500})
    }

    const deleteProduct = (id, cb = dispatch) => {
        productService.deleteProduct(id, cb)
        toast.error('Producto eliminado.', {autoClose: 1500})
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