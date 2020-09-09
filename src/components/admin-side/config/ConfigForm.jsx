import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function ConfigForm({configData}) {
    const [currentConfig, setCurrentConfig] = useState(configData)

    const handleChange = ({target}) => {
        setCurrentConfig({
            ...currentConfig,
            [target.name]: target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(currentConfig)
    }

    const {name, phone, city, street, email, number, logo, ticketLogo} = currentConfig

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre del Restaurante</label>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={handleChange}
            />
            <label htmlFor="phone">Numero de teléfono</label>
            <input 
                type="text" 
                name="phone" 
                value={phone}
                onChange={handleChange}
            />
            <label htmlFor="city">Ciudad</label>
            <input 
                type="text" 
                name="city" 
                value={city}
                onChange={handleChange}
            />
            <label htmlFor="street">Calle</label>
            <input 
                type="text" 
                name="street" 
                value={street}
                onChange={handleChange}
            />
            <label htmlFor="number">Número de edificio</label>
            <input 
                type="text" 
                name="number" 
                value={number}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                value={email}
                onChange={handleChange}
            />
            <label htmlFor=""></label>
            <input type="text"/>
            <label htmlFor=""></label>
            <input type="text"/>
        </form>
    )
}

export default ConfigForm
