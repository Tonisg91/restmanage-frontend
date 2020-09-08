import React from 'react'
import { StyledAddProductForm } from '../../styled-components/admin-side'
import productService from '../../../tools/productService'
import { toast } from 'react-toastify'

function EditProduct({updateList, setForm, form, initialState, setIsEditing}) {

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleImageUrl = async ({ target }) => {
        toast.info('Cargando imagen, por favor espere la confirmación.', {autoClose: 1500})

        const imageToUpload = new FormData()
        imageToUpload.append('image', target.files[0])
        productService.upload(imageToUpload)
            .then(res => {
                setForm({
                    ...form,
                    [target.name]: res
                })
                toast.success('Imagen Cargada', { autoClose: 1500 })
            })
            .catch(() => toast.error('Error al cargar la imagen.', { autoClose: 1500 }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        productService.editProduct({...form }).then(() => {
            updateList()
            setForm(initialState)
            cancelEdit()
            toast.success('Producto actualizado con exito', {autoClose: 1500})
        }).catch(() => toast.error('Error al editar el producto.', {autoClose: 1500}))
        
    }

    const cancelEdit = () => {
        setIsEditing(false)
        setForm(initialState)
    }

    const { name, description, category, price, ingredients } = form

    return (
        <StyledAddProductForm>
            <form onSubmit={handleSubmit} id="edit-form">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <label htmlFor="description">Descripción</label>
                <textarea name="description" value={description} cols="30" rows="5" onChange={handleChange}></textarea>
                <label htmlFor="ingredients">Ingredientes</label>
                <p className="disabled">
                    Separa los ingredientes con una coma ","
                </p>
                <input
                    type="text"
                    name="ingredients"
                    value={ingredients}
                    onChange={handleChange}
                />
                <label htmlFor="category">Categoría</label>
                <input 
                    type="text" 
                    name="category" 
                    value={category} 
                    onChange={handleChange} 
                    />
                <label htmlFor="price">Precio</label>
                <input type="number" min="0" step="0.01" name="price" value={price} onChange={handleChange} />
                <label htmlFor="image">Imagen</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImageUrl} />
                <div className="button-container">
                    <button
                        type="submit"
                        form="edit-form"
                        className="btn btn-blue"
                        id="submit"
                        >
                        EDITAR PRODUCTO
                    </button>
                    <button 
                        id="cancel-btn"
                        className="btn btn-red"
                        onClick={cancelEdit}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            
        </StyledAddProductForm>
    )
}

export default EditProduct