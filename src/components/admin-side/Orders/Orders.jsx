import React, { useState, useEffect } from 'react'
import ordersService from '../../../tools/ordersService'
import { StyledAdminOrders } from '../../styled-components/admin-side'
import OrdersTable from './OrdersTable'

function Orders() {
    const [allOrders, setAllOrders] = useState([])
    const [pendingOrders, setPendingOrders] = useState([])
    const [finishedOrders, setFinishedOrders] = useState([])

    const getAllOrders = () => {
        ordersService.getAllOrders().then(setAllOrders)
        ordersService.getActiveOrders().then(setPendingOrders)
        ordersService.getFinishedOrders().then(setFinishedOrders)
    }

    useEffect(() => {
        if (!allOrders.length) getAllOrders()
    }, [])

    // const renderAllOrders = !orders.length ? <p>Actualmente no tienes pedidos</p> : orders.map(order => console.log(order))

    return (
        <StyledAdminOrders>
            <div id="header">
                <h1>Pedidos</h1>
            </div>
            <div className="field" id="pending-orders">
                <h2>Pedidos pendientes</h2>
                <OrdersTable orders={pendingOrders} orderState="pending"/>
            </div>
            <div id="completed-orders" className="field">
                <h2>Pedidos finalizados</h2>
                <OrdersTable orders={finishedOrders} orderState="finished" />
            </div>
            <h2 id="list-title">Listado de Pedidos</h2>
            <div className="field" id="order-list">
                <OrdersTable orders={allOrders} orderState="all" />
            </div>
        </StyledAdminOrders>
        
    )
}

export default Orders