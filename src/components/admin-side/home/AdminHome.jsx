import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import orderService from '../../../tools/ordersService'

function AdminHome() {
    const [mostSelled, setMostSelled] = useState([])

    useEffect(() => {
        if (!mostSelled.length) orderService.mostSelledProducts().then(setMostSelled)
    }, [])


    if (mostSelled.length) {
        return (
            <div>
                <Chart data={mostSelled} chartName="Productos más vendidos"/>
            </div>
        )
    }

    return (
        <div>
            <h1>Cargando datos</h1>
        </div>
    )
}

export default AdminHome
