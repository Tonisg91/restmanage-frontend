import React from 'react'
import { useHistory } from 'react-router-dom'

function IncomingOrders({orders}) {
    const history = useHistory()

    const redirectToDetails = (orderId) => history.push(`/admin/orders/${orderId}`)
    const getTime = (orderTimestamp) => new Date(orderTimestamp).toLocaleTimeString()

    const currentOrders = orders.map(({easyId, createdAt, _id}) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>{getTime(createdAt)}</td>
            <td>
                <button
                    className="btn btn-blue"
                    onClick={() => redirectToDetails(_id)}
                >Ver Detalles
                </button>
            </td>
        </tr>
    ))


    return (
        <table>
            <thead>
                <tr>
                    <th>Pedido</th>
                    <th>H.Entrada</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {currentOrders}
            </tbody>
        </table>
    )
}

export default IncomingOrders
