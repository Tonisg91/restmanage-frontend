import React, { useState, useEffect } from 'react'
import orderService from '../../../tools/ordersService'
import { StyledAdminHome } from '../../styled-components/admin-side'
import MostSelledChart from './MostSelledChart'
import Last30DaysChart from './Last30DaysChart'
import LoadingPage from '../../common/LoadingPage'

function AdminHome() {
    const [mostSelled, setMostSelled] = useState([])
    const [last30Days, setLast30Days] = useState([])

    useEffect(() => {
        if (!mostSelled.length && !last30Days.length) {
            orderService.mostSelledProducts().then(setMostSelled)
            orderService.getLast30Days().then(setLast30Days)
        }
    }, [])

    if (mostSelled.length && last30Days.length) {
        return (
            <StyledAdminHome>
                <h1 className="super-text">Estadísticas</h1>
                <div className="field">
                    <h2>Productos más vendidos</h2>
                    <MostSelledChart data={mostSelled}/>
                </div>
                <div className="field">
                    <h2>Ventas de los últimos 5 días</h2>
                    <Last30DaysChart data={last30Days} />
                </div>
            </StyledAdminHome>
        )
    }

    return (
        <LoadingPage />
    )
}

export default AdminHome
