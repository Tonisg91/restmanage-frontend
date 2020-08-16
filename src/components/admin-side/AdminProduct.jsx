import React from 'react'
import { StyledAdminProduct } from '../styled-components/admin-side'

function AdminProduct({product}) {
    return (
        <StyledAdminProduct key={product._id} className="container">
            <h4>{product.name}</h4>
            <div className="btn-container">
                <button id="edit-button" className="btn btn-blue">Editar</button>
                <button id="delete-button" className="btn btn-red">Borrar</button>
            </div>
        </StyledAdminProduct>
    )
}

export default AdminProduct