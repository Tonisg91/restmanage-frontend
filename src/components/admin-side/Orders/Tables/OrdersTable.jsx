import React from 'react'

function OrdersTable({tableheads, tbody}) {

    const renderTableHeads = tableheads.map(elem => (
        <th key={elem}>{elem}</th>
    ))

    return (
        <table>
            <thead>
                <tr>
                    {renderTableHeads}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>
        </table>
    )
}

export default OrdersTable