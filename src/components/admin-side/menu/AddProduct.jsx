import React from 'react'
import { StyledAddProductForm } from '../../styled-components/admin-side'
import productService from '../../../tools/productService'
import { toast } from 'react-toastify'

function AddProduct({updateList, form, setForm, initialState}) {

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleImageUrl = ({target}) => {
        toast.info('Cargando imagen, por favor espere la confirmación.', { autoClose: 1500 })
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
            .catch(() => toast.error('Error al cargar la imagen.', {autoClose: 1500}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        productService.addProduct({...form})
            .then(() => {
                updateList()
                setForm(initialState)
                toast.success("Producto guardado con éxito.", {autoClose: 1500})
            })
            .catch(() => 
                toast.error(
                    "Error al guardar el producto.", 
                    {autoClose: 1500}
                ))
    }

    const { name, description, category, price } = form 

    return (
        <StyledAddProductForm>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={handleChange}
                />
                <label htmlFor="description">Descripción</label>
                <textarea name="description" value={description} cols="30" rows="5" onChange={handleChange}></textarea>
                <label htmlFor="category">Categoría</label>
                <input 
                    type="text" 
                    name="category" 
                    value={category}
                    onChange={handleChange}
                />
                <label htmlFor="price">Precio</label>
                <input type="number" min="0" step="0.01" name="price" value={price} onChange={handleChange}/>
                <label htmlFor="image">Imagen</label>
                <input 
                    type="file" 
                    name="image" 
                    id="image"
                    onChange={handleImageUrl}/>
                <input 
                    type="submit" 
                    value="GUARDAR PRODUCTO" 
                    className="btn btn-blue"
                    id="submit"
                />
            </form>
        </StyledAddProductForm>
    )
}

export default AddProduct
