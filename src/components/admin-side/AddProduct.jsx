import React, { useState } from 'react'
import productService from '../../tools/productService'
import axios from 'axios'

function AddProduct() {

    const initialState = {
        name: '',
        description: '',
        category: '',
        price: 0,
        image: ''
    }

    const [form, setForm] = useState(initialState)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/admin/addproduct', {...form})
            .then(()=> {
                alert('Producto guardado con exito')
            })
            .catch(err => console.error(err))
    }

    const { name, description, category, price } = form 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                <label htmlFor="description"></label>
                <textarea name="description" value={description} cols="30" rows="10" onChange={handleChange}></textarea>
                <label htmlFor="category">Categoría</label>
                <input type="text" name="category" value={category} onChange={handleChange}/>
                <label htmlFor="price">Precio</label>
                <input type="number" min="0" step="0.01" name="price" value={price} onChange={handleChange}/>
                <label htmlFor="image">Imagen</label>
                <input type="file" name="image" onChange={handleImageUrl}/>
                <input type="submit" value="GUARDAR"/>
                
            </form>
        </div>
    )
}

export default AddProduct
