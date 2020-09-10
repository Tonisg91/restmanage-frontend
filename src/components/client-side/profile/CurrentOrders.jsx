import React, { useState, useEffect } from 'react'
import ordersService from '../../../tools/ordersService'

function CurrentOrders({orders}) {
    const [userOrders, setUserOrders] = useState([])
    

    const getUserOrders = () => {
        const ordersArr = []
        orders.forEach(id => ordersService.getSingleOrder(id).then(data => {
            ordersArr.push(data)
        }))
        setUserOrders(ordersArr)
    }

    useEffect(getUserOrders, [])
    
    console.log(orders)


    const displayOrders = userOrders.map(({easyId}) => (
        <div>
            <h3>{easyId}</h3>
        </div>
    ))


    return (
        <div>
            <div>
                {displayOrders}
            </div>
        </div>
    )
}

export default CurrentOrders
