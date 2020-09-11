import React, { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { StyledAdminSingleOrder } from '../../styled-components/admin-side'
import GenericTable from '../../common/GenericTable'
import Header from '../../common/Header'
import ordersService from '../../../tools/ordersService'
import dateService from '../../../tools/dateService'
import LoadingPage from '../../common/LoadingPage'

function OrderDetails({match}) {
    const { params: { id } } = match
    const [orderData, setOrderData] = useState(null)
    const config = useSelector(state => state.config)
    
    const getOrderData = (orderId = id) => {ordersService.getSingleOrder(orderId).then(setOrderData)}

    useEffect(getOrderData, [])

    if (orderData && config) {
        const { easyId, createdAt, productList, amount } = orderData
        const {name, phone, email, street, number, city, ticketLogo} = config
        const displayProductList = productList.map(({ product: { name, price }, qty }) => (
            <li key={name}>
                <div
                    className="list-element"
                >
                    <p>{qty} X</p>
                    <p>{name} | {price}€</p>
                </div>
            </li>
        ))
        return  (
            < StyledAdminSingleOrder >
                <Header text={`Pedido ${easyId}`} />
                <div id="ticket">
                    <div id="restaurant-logo">
                        <img src={ticketLogo} alt={`${name} logo`} id="ticket-logo" />
                        <h1>{name}</h1>
                    </div>
                    <div id="order-info">
                        <div id="id-&-date">
                            <h2>Pedido {easyId}</h2>
                            <p>{dateService.getDate(createdAt)} {dateService.getTime(createdAt)}</p>
                        </div>
                        <div id="product-list-container" className="container">
                            <GenericTable content={displayProductList} id="product-list" />
                        </div>
                        <div id="amount-container" className="container">
                            <h3>Total {amount}€</h3>
                        </div>
                    </div>
                    <div id="restaurant-info">
                        <p>{phone}</p>
                        <p>{email}</p>
                        <p>c/{street} {number}</p>
                        <p>{city}</p>
                    </div>
                </div>
                <div id="action-container" className="container">
                    <div>
                        <button className="btn btn-blue">Pedir de nuevo</button>
                    </div>
                </div>
            </StyledAdminSingleOrder >
        )
    }
    
    return (
        <LoadingPage />
    )
}

export default OrderDetails
