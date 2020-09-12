import { addProduct, qtyUp, qtyDwn, removeProduct } from '../actions/cartActions'

const initialCart = JSON.parse(localStorage.getItem('currentCart')) || []

const cartReducers = (state = initialCart, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return addProduct(state, action)
        case 'QTY_UP':
            return qtyUp(state, action)
        case 'QTY_DWN':
            return qtyDwn(state, action)
        case 'REMOVE_PRODUCT':
            return removeProduct(state, action)
        case 'EMPTY_CART':
            return []
        default:
            return state
    }
}

export {
    initialCart,
    cartReducers
}