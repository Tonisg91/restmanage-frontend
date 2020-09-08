import React, { useState, useEffect } from 'react'
import orderService from '../../../tools/ordersService'

function AdminHome() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (!orders.length) orderService.getAllOrders().then(setOrders)
    }, [])

    const normalizedData = orders.flatMap(order => {
        const product = order.productList.map(({ product, qty }) => {
            return {
                name: product.name,
                qty: qty
            }
        })
        return product
    })

    const quantities = (data = normalizedData) => {
        const dataReduced = []
        if (data.length) {
            data.forEach(product => {
                if (!dataReduced.find(prod => prod.name === product.name)) {
                    return dataReduced.push({name: product.name, qty: product.qty})
                }
                const existentProduct = dataReduced.find(prod => prod.name === product.name)

                existentProduct.qty += product.qty
            })
        }
        return dataReduced
    }

    console.log(quantities())
    return (
        <div>
            <h1>admin home</h1>
        </div>
    )
}

export default AdminHome
