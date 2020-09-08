import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GenericTable from '../../common/GenericTable'
import ordersService from '../../../tools/ordersService'
import dateService from '../../../tools/dateService'
import { useEffect } from 'react'
import { StyledAdminSingleOrder } from '../../styled-components/admin-side'
import Header from '../../common/Header'
import { toast } from 'react-toastify'

function OrderDetails({match}) {
    const {params: { id}} = match
    const history = useHistory()

    const useOrderStored = (orderId = id) => {
        const [currentOrder, setCurrentOrder] = useState({})
        const getOrderData = () => {ordersService.getSingleOrder(orderId).then(setCurrentOrder)}
        useEffect(getOrderData, [])
        return currentOrder
    }

    const {amount, createdAt, easyId, inProgress, isFinished, productList, _id} = useOrderStored()

    const displayProductList = !productList 
            ? null 
            : productList.map(({product: {name, price}, qty}) => (
                <li key={name}>
                    <div 
                        className="list-element"
                        >
                        <p>{qty} X</p>
                        <p>{name} | {price}€</p>
                    </div>
                </li>
            ))

    const displayStatus = (st1 = isFinished, st2 = inProgress) => {
        if (!st1 && !st2) return "Pedido Entrante"
        if (!st1 && st2) return "En Curso"
        if (st1) return "Finalizado"
    }

    const actionFunctions = {
        startOrder: (id, easyId) => {
            ordersService.startOrder(id) 
            history.push('/admin/orders')
            toast.info(
                `El pedido ${easyId} se ha pasado a cocina.`,
                {
                    autoClose: 2200,
                    position: "top-center",
                    draggable: true
                }
            )
        },
        finishOrder: (id, easyId) => {
            ordersService.finishOrder(id) 
            history.push('/admin/orders')
            toast.success(
                `El pedido ${easyId} se ha finalizado.`,
                { 
                    autoClose: 2200,
                    position: "top-center",
                    draggable: true
                }
            )
        }
    }

    const displayActionButton = (st1 = isFinished, st2 = inProgress) => {        
        if (!st1 && !st2) return (
            <button 
                className="btn btn-blue" 
                onClick={() => actionFunctions.startOrder(_id, easyId)}
                >
                Pasar a Cocina
                </button>
            )
        if (!st1 && st2) return (
            <button 
                className="btn btn-red" 
                onClick={() => actionFunctions.finishOrder(_id, easyId)}
                >
                Finalizar pedido
                </button>
            )
            return null
    }

    return (
        <StyledAdminSingleOrder>
            <Header text={`Pedido ${easyId}`}/>
            <div id="ticket">
                <div id="restaurant-logo">
                    <i className="fas fa-utensils"></i>
                    <h1>Hamburguesería Random</h1>
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
                    <p>93123123</p>
                    <p>hamburgueseriarandom@gmail.com</p>
                    <p>c/ Barcelona 123</p>
                    <p>Barcelona</p>
                </div>
            </div>
                <div id="action-container" className="container">
                    <h2>Estado actual: {displayStatus()}</h2>
                    <div>
                        {displayActionButton()}
                    </div>

                </div>
        </StyledAdminSingleOrder>
    )
}

export default OrderDetails