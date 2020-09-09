import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import orderService from '../../../tools/ordersService'
import { StyledAdminHome } from '../../styled-components/admin-side'

function AdminHome() {
    const [mostSelled, setMostSelled] = useState([])

    useEffect(() => {
        if (!mostSelled.length) orderService.mostSelledProducts().then(setMostSelled)
    }, [])


    if (mostSelled.length) {
        return (
            <StyledAdminHome>
                <h1 className="super-text">Estadísticas</h1>
                <div className="field">
                    <h2>Productos más vendidos</h2>
                    <Chart data={mostSelled}/>
                </div>
            </StyledAdminHome>
        )
    }

    return (
        <StyledAdminHome>
            <>
            </>
        </StyledAdminHome>
    )
}

export default AdminHome
