import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import dailyMenuService from '../../../tools/dailyMenuService'
import { StyledFormDailyMenu } from '../../styled-components/admin-side'

function DailyMenuForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const dailyMenu = useSelector(state => state.dailyMenu)
    const initialForm = {
        _id: '',
        starters: '',
        mains: '',
        desserts: '',
        withCoffee: false,
        withBread: false,
        price: 0
    }
    const [formData, setFormData] = useState(dailyMenu ? dailyMenu : initialForm)

    const dataFromDB = () => dailyMenuService.getDailyMenu(setFormData)

    const sendDataToRedux = data => dispatch({
        type: "SET_DMENU",
        payload: data
    })

    useEffect(() => {
        if (!dailyMenu) dataFromDB()
    }, [])

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dailyMenuService.sendDailyMenu(formData, sendDataToRedux)
    }

    const { starters, mains, desserts, price} = formData
    return (
        <StyledFormDailyMenu onSubmit={handleSubmit}>
            <div>
                <label htmlFor="starters">Primeros</label>
                <input
                    type="text"
                    name="starters"
                    placeholder="Ensalada, Paella, Melón con Jamón..."
                    value={starters}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="mains">Segundos</label>
                <input
                    type="text"
                    name="mains"
                    value={mains}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="desserts">Postres</label>
                <input
                    type="text"
                    name="desserts"
                    value={desserts}
                    onChange={handleChange}
                />
            </div>
            <p className="disabled">Separa todos los platos con una coma ","</p>
            <div id="price-container">
                <label htmlFor="price">Precio</label>
                <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={handleChange}
                />
            </div>
            <div id="button-container">
                <input
                    className="btn btn-blue"
                    type="submit"
                    value="ACTUALIZAR"
                />
            </div>
        </StyledFormDailyMenu>
    )
}

export default DailyMenuForm
