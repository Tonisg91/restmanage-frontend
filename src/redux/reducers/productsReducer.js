import { setProducts } from '../actions/productsActions'
const initialProducts = []

const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return setProducts(action)
        default:
            return state
    }
}

export {
    initialProducts,
    productsReducer
}