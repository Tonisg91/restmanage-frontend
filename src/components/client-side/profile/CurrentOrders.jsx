import React from 'react'
import { useHistory } from 'react-router-dom'
import dateService from '../../../tools/dateService'

function CurrentOrders({orders}) {
    const history = useHistory()
    const redirectToOrderDetails = (id) => history.push(`/order/${id}`)

    const displayOrders = orders.map(order => (
        <div className="order-element blackboard-bg field" key={order.easyId}>
            <h2>Pedido {order.easyId}</h2>
            <h4>Fecha: {dateService.getDate(order.createdAt)}</h4>
            <h4>Importe: {order.amount}€</h4>
            <button 
                onClick={() => redirectToOrderDetails(order._id)}
                className="btn btn-blue"
                >Ver detalles
            </button>
        </div>
    )).reverse()

    return (
        <div id="orders-container">
            {displayOrders}
        </div>
    )
}

export default CurrentOrders
