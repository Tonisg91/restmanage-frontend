import React, { useState, useEffect } from 'react'
import ordersService from '../../../tools/ordersService'
import { StyledAdminOrders } from '../../styled-components/admin-side'
import OrdersTable from './OrdersTable'
import InProgress from './Tables/InProgress'
import IncomingOrders from './Tables/IncomingOrders'

function Orders() {
    const [allOrders, setAllOrders] = useState([])
    const [incomingOrders, setIncomingOrders] = useState([])
    const [ordersInProgress, setOrdersInProgress] = useState([])

    const getAllOrders = () => {
        ordersService.getAllOrders().then(setAllOrders)
        ordersService.getIncomingOrders().then(setIncomingOrders)
        ordersService.getOrdersInProgress().then(setOrdersInProgress)
    }

    useEffect(() => {
        if (!allOrders.length) getAllOrders()
    }, [])

    return (
        <StyledAdminOrders>
            <div id="header">
                <h1>Pedidos</h1>
            </div>
            <div className="field" id="pending-orders">
                <h2>Pedidos Entrantes</h2>
                <div>
                    <IncomingOrders orders={incomingOrders}/>
                </div>
            </div>
            <div id="completed-orders" className="field">
                <h2>Pedidos En Curso</h2>
                <div>
                    <InProgress orders={ordersInProgress}/>
                </div>
            </div>
            <div className="field" id="order-list">
                <h2 id="list-title">Todos los Pedidos</h2>
                <div>
                    {/* <OrdersTable orders={allOrders} orderState="all" /> */}
                </div>
            </div>
        </StyledAdminOrders>
        
    )
}

export default Orders
