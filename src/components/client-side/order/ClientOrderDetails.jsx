import React, { useState, useEffect} from 'react'
import ordersService from '../../../tools/ordersService'
import dateService from '../../../tools/dateService'
import { StyledClientOrderDetails } from '../../styled-components/client-side'
import Header from '../../common/Header'

function OrderDetails({match}) {
    const { params: { id } } = match
    const [orderData, setOrderData] = useState(null)
    
    const getOrderData = (orderId = id) => {ordersService.getSingleOrder(orderId).then(setOrderData)}

    useEffect(getOrderData, [])

    console.log(orderData)

    if (orderData) {
        const { easyId, createdAt, productList, amount } = orderData
        const displayProducts = productList.map(({product, qty}) => (
            <p>{product.name} x {qty}</p>
        ))


        return (
            <StyledClientOrderDetails>
                <Header text="Detalles del pedido"/>
                <div 
                    id="content"
                    className="blackboard-bg"
                    >
                    <h1>Pedido {easyId}</h1>
                    <div>
                        <h4>Fecha {dateService.getDate(createdAt)}</h4>
                        <h4>Importe {amount} €</h4> 
                    </div>
                    <div>
                        {displayProducts}
                    </div>
                </div>
            </StyledClientOrderDetails>
        )
    }
    
    return (
        <h1>Cargando datos</h1>
    )
}

export default OrderDetails
