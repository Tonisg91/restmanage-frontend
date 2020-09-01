import React from 'react'

function OrdersTable({orders, orderState}) {

    const currentOrders = orders.map(({easyId, createdAt}) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>Pendiente</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td><button className="btn btn-red">Finalizar</button></td>
        </tr>
    ))

    const finishedOrders = orders.map(({ easyId, createdAt }) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>Finalizado</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td><button className="btn btn-blue">Ver Detalles</button></td>
        </tr>
    ))

    const allOrders = orders.map(({ easyId, isFinished, createdAt }) => (
        <tr key={easyId}>
            <th>{easyId}</th>
            <td>{isFinished ? 'Finalizada' : 'Pendiente'}</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td><button className="btn btn-blue">Ver Detalles</button></td>
        </tr>
    ))

    const determineOrderKindToShow = (stateFromProps = orderState) => {
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
                {determineOrderKindToShow()}
            </tbody>
        </table>
    )
}

export default OrdersTable