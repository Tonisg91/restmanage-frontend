import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyledConfigForm } from '../../styled-components/admin-side'
import { toast } from 'react-toastify'
import productService from '../../../tools/productService'
import configService from '../../../tools/configService'

function ConfigForm({configData}) {
    const [currentConfig, setCurrentConfig] = useState(configData)
    const dispatch = useDispatch()

    const sendConfigToRedux = data => dispatch({
        type: "SET_CONFIG",
        payload: data
    })

    const handleChange = ({target}) => {
        setCurrentConfig({
            ...currentConfig,
            [target.name]: target.value
        })
    }

    const handleImageUrl = ({ target }) => {
        toast.info('Cargando imagen, por favor espere la confirmación.', { autoClose: 1500 })
        const imageToUpload = new FormData()
        imageToUpload.append('image', target.files[0])
        productService.upload(imageToUpload)
            .then(res => {
                setCurrentConfig({
                    ...currentConfig,
                    [target.name]: res
                })
                toast.success('Imagen Cargada', { autoClose: 1500 })
            })
            .catch(() => toast.error('Error al cargar la imagen.', { autoClose: 1500 }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        configService.sendConfig(currentConfig, sendConfigToRedux)
    }

    const {name, phone, city, street, email, number} = currentConfig

    return (
        <StyledConfigForm>
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
                    <label htmlFor="logo">Logo Principal</label>
                    <input
                        type="file"
                        name="logo"
                        onChange={handleImageUrl} />
                    <label htmlFor="ticketLogo">Logo Ticket</label>
                    <input 
                        type="file" 
                        name="ticketLogo"
                        onChange={handleImageUrl}
                    />
                    <input type="submit" value="CARGAR CONFIGURACIÓN" className="btn btn-blue" />
                </form>
        </StyledConfigForm>
    )
}

export default ConfigForm
