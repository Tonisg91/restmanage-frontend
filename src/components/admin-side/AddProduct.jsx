import React from 'react'
import { StyledAddProductForm } from '../styled-components/admin-side'

function AddProduct({updateList, form, setForm, initialState, productService}) {

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleImageUrl = async ({target}) => {
        //TODO: Cambiar alerts por algo mas bonito.
        alert('Cargando imagen, por favor espere.')
        const imageToUpload = new FormData()
        imageToUpload.append('image', target.files[0])
        const imageUrl = await productService.upload(imageToUpload)
        setForm({
            ...form,
            [target.name]: imageUrl
        })
        alert('Imagen Cargada')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await productService.addOrEditProduct({...form})
        // updateList()
        setForm(initialState)
    }

    const { name, description, category, price } = form 

    return (
        <StyledAddProductForm>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                <label htmlFor="description">Descripción</label>
                <textarea name="description" value={description} cols="30" rows="10" onChange={handleChange}></textarea>
                <label htmlFor="category">Categoría</label>
                <input type="text" name="category" value={category} onChange={handleChange}/>
                <label htmlFor="price">Precio</label>
                <input type="number" min="0" step="0.01" name="price" value={price} onChange={handleChange}/>
                <label htmlFor="image">Imagen</label>
                <input type="file" name="image" onChange={handleImageUrl}/>
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
