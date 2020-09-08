import React, { useEffect} from 'react'
import { isAdminRoute } from '../../tools/pathFunctions'
import { useSelector, useDispatch } from 'react-redux'
import productService from '../../tools/productService'
import ClientMenu from '../client-side/menu/ClientMenu'
import AdminMenu from '../admin-side/menu/AdminMenu'

function Menu(props) {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const sendDataToRedux = data => dispatch({
        type: 'SET_PRODUCTS',
        payload: data
    })
    const getProductsAndDispatch = (cb = sendDataToRedux, forceUpdate = false) => {
        if (!products.length) productService.getAllProducts(cb)
        if (forceUpdate) productService.getAllProducts(cb)
        return
    }
    
    useEffect(getProductsAndDispatch, [])

    const uniqueCategories = [...new Set(products.map(e => e.category))]

    if (isAdminRoute(props.match.path)) {
        return (
            <AdminMenu 
                cb={getProductsAndDispatch} 
                uniqueCategories={uniqueCategories} 
                products={products} 
                dispatch={sendDataToRedux}
            />
        )    
    }

    return (
        <ClientMenu 
            products={products} 
            categories={uniqueCategories}
        />
    )
}

export default Menu
