import React from 'react'
import { StyledFormDailyMenu } from '../../styled-components/admin-side'
function DailyMenuForm() {



    return (
        <StyledFormDailyMenu>
            <label htmlFor="starters">Primeros</label>
            <input type="text" name="starters"/>
            <label htmlFor="mains">Segundos</label>
            <input type="text" name="mains"/>
            <label htmlFor="desserts">Postres</label>
            <input type="text" name="desserts"/>
            <label htmlFor="price">Precio</label>
            <input type="number" name="price"/>
            <label htmlFor="withCoffee">
                <input 
                    type="checkbox"
                    name="withCoffee"
                />
                Café incluido
            </label>
            <label htmlFor="withBread">
                <input
                    type="checkbox"
                    name="withBread"
                />
                Pan incluido
            </label>
            <input 
                className="btn btn-blue"
                type="submit" 
                value="ACTUALIZAR"
            />
        </StyledFormDailyMenu>
    )
}

export default DailyMenuForm
