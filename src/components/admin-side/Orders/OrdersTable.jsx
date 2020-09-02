import React from 'react'
import { useHistory } from 'react-router-dom'

function OrdersTable({orders, orderState}) {
    const history = useHistory()

    const redirectToDetails = (orderId) => history.push(`/admin/orders/${orderId}`)
    const getDate = (orderTimestamp) => new Date(orderTimestamp).toLocaleDateString()

    const currentOrders = orders.map(({easyId, createdAt, _id}) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>Pendiente</td>
            <td>{getDate(createdAt)}</td>
            <td>
                <button 
                    className="btn btn-blue" 
                    onClick={() => redirectToDetails(_id)}
                    >Ver Detalles
                </button>
            </td>
        </tr>
    ))

    const finishedOrders = orders.map(({ easyId, createdAt, _id }) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>Finalizado</td>
            <td>{getDate(createdAt)}</td>
            <td><button className="btn btn-blue" onClick={() => redirectToDetails(_id)}>Ver Detalles</button></td>
        </tr>
    ))

    const allOrders = orders.map(({ easyId, isFinished, createdAt, _id }) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>{isFinished ? 'Finalizado' : 'Pendiente'}</td>
            <td>{getDate(createdAt)}</td>
            <td><button className="btn btn-blue" onClick={() => redirectToDetails(_id)}>Ver Detalles</button></td>
        </tr>
    ))

    const determineOrderKindToDisplay = (stateFromProps = orderState) => {
        switch (stateFromProps) {
            case 'pending':
                return currentOrders
            case 'finished':
                return finishedOrders
            default:
                return allOrders
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Pedido</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {determineOrderKindToDisplay()}
            </tbody>
        </table>
    )
}

export default OrdersTable