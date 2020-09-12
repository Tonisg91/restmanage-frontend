import { createStore, combineReducers } from 'redux'

import { userReducer } from './reducers/userReducer'
import { configReducer } from './reducers/configReducer'
import { productsReducer } from './reducers/productsReducer'
import { cartReducers } from './reducers/cartReducers'

const allReducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducers,
    config: configReducer
})

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {
    store
}