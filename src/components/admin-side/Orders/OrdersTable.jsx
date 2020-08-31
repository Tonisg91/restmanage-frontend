import React from 'react'

function OrdersTable({orders}) {

    const tableContent = orders.map(order => (
        <tr>
            <th>{order.easyId}</th>
            <td>{order.amount}</td>
            <td>{order.isFinished ? 'Finalizada' : 'Pendiente'}</td>
        </tr>
    ))

    const test = orders.map(order => order.createdAt)
    console.log(test)

    return (
        <table>
            <thead>
                <tr>
                    <th>Pedido</th>
                    <th>Importe</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>
    )
}

export default OrdersTable