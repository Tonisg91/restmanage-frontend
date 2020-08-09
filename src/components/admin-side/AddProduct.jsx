import React, { useState } from 'react'
import axios from 'axios'

function AddProduct() {

    const initialState = {
        name: '',
        description: '',
        category: '',
        price: 0,
    }

    const [form, setForm] = useState(initialState)

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        axios.post('http://localhost:3000/admin/addproduct', {...form})
            .then(res => {
                alert('Producto guardado con exito', res)
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
                <input type="submit" value="GUARDAR"/>
            </form>
        </div>
    )
}

export default AddProduct
