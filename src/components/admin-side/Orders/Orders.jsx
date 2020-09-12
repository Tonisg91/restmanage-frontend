import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ordersService from '../../../tools/ordersService'
import { StyledAdminOrders } from '../../styled-components/admin-side'
import InProgress from './Tables/InProgress'
import IncomingOrders from './Tables/IncomingOrders'
import AllOrders from './Tables/AllOrders'
import dateService from '../../../tools/dateService'

function Orders() {
    const history = useHistory()
    const [allOrders, setAllOrders] = useState([])
    const [incomingOrders, setIncomingOrders] = useState([])
    const [ordersInProgress, setOrdersInProgress] = useState([])

    const ordersCb = {
        redirectToDetails: (orderId) => history.push(`/admin/orders/${orderId}`),
        getTime: (timestamp) => dateService.getTime(timestamp),
        getDate: (timestamp) => dateService.getDate(timestamp)
    }

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
                <h1 className="super-text">Pedidos</h1>
            </div>
            <div className="field" id="pending-orders">
                <h2>Pedidos Entrantes</h2>
                <div>
                    <IncomingOrders orders={incomingOrders} cb={ordersCb}/>
                </div>
            </div>
            <div className="field" id="completed-orders">
                <h2>Pedidos En Curso</h2>
                <div>
                    <InProgress orders={ordersInProgress} cb={ordersCb}/>
                </div>
            </div>
            <div className="field" id="order-list">
                <h2 id="list-title">Todos los Pedidos</h2>
                <div>
                    <AllOrders orders={allOrders} cb={ordersCb}/>
                </div>
            </div>
        </StyledAdminOrders>
        
    )
}

export default Orders
