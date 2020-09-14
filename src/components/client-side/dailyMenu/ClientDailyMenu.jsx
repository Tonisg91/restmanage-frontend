import React from 'react'
import Header from '../../common/Header'
import LoadingPage from '../../common/LoadingPage'
import { StyledClientDailyMenu } from '../../styled-components/client-side'

function ClientDailyMenu({dailyMenu}) {
    
    if (dailyMenu) {
        const { starters, mains, desserts, price } = dailyMenu
        const displayProducts = arr => arr
                                        .split(',')
                                        .map(elem => (
                                            <p key={elem}>{elem}</p>
                                        ))
        return (
            <StyledClientDailyMenu >
                <Header text="Menú del día"/>
                <div id="DM-container" className="blackboard-bg">
                        <div className="field">
                            <h2>Primeros</h2>
                            {displayProducts(starters)}
                        </div>
                        <div className="field">
                            <h2>Segundos</h2>
                            {displayProducts(mains)}
                        </div>
                        <div className="field">
                            <h2 >Postres</h2>
                            {displayProducts(desserts)}
                        </div>
                        <div className="field">
                            <h2>{price} €</h2>
                            <p>Bebida y Postre o Café incluidos.</p>
                        </div>
                </div>
            </StyledClientDailyMenu>
        )
    }

    return (
        <LoadingPage />
    )
}

export default ClientDailyMenu
