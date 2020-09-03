import React from 'react'
import OrdersTable from './OrdersTable'

function IncomingOrders({orders, cb}) {
    const tableHeads = ['Pedido', 'H.Entrada']

    const currentOrders = orders.map(({easyId, createdAt, _id}) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>{cb.getTime(createdAt)}</td>
            <td>
                <button
                    className="btn btn-blue"
                    onClick={() => cb.redirectToDetails(_id)}
                >Ver Detalles
                </button>
            </td>
        </tr>
    ))

        return (
            <OrdersTable tableheads={tableHeads} tbody={currentOrders}/>
        )
}

export default IncomingOrders
