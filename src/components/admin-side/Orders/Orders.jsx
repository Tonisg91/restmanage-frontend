import React, { useState, useEffect } from 'react'
import ordersService from '../../../tools/ordersService'
import { StyledAdminOrders } from '../../styled-components/admin-side'
import OrdersTable from './OrdersTable'

function Orders() {
    const [allOrders, setAllOrders] = useState([])

    const getAllOrders = () => ordersService.getAllOrders().then(setAllOrders)

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
                <OrdersTable orders={allOrders}/>
            </div>
            <div id="completed-orders" className="field">
                <h2>Pedidos finalizados</h2>
            </div>
            <h2 id="list-title">Listado de Pedidos</h2>
            <div className="field" id="order-list">
                {/* <GenericTable content/> */}
            </div>
        </StyledAdminOrders>
        
    )
}

export default Orders