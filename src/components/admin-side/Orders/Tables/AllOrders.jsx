import React from 'react'
import OrdersTable from './OrdersTable'

function AllOrders({orders, cb}) {
    const tableHeads = ['Pedido', 'Fecha', 'Estado']

    const currentOrders = orders.map(({easyId, createdAt, _id, isFinished, inProgress}) => {
        const displayStatus = (st1 = isFinished, st2 = inProgress) => {
            if (!st1 && !st2) return "Pedido Entrante"
            if (!st1 && st2) return "En Curso"
            if (st1) return "Finalizado"
        }
        return (
            <tr key={easyId}>
                <th>{easyId}</th>
                <td>{cb.getDate(createdAt)}</td>
                <th>{displayStatus()}</th>
                <td>
                    <button
                        className="btn btn-blue"
                        onClick={() => cb.redirectToDetails(_id)}
                    >Ver Detalles
                </button>
                </td>
            </tr>
        )
    })

    return (
        <OrdersTable tableheads={tableHeads} tbody={currentOrders}/>
    )
}

export default AllOrders