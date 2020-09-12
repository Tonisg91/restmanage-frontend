import { logUser, addOrder } from '../actions/userActions'

const initialUser = JSON.parse(localStorage.getItem('currentUser')) || null


const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case 'LOG_USER':
            return logUser(action)
        case 'ADD_ORDER':
            return addOrder(state, action)
        default:
            return state
    }
}

export {
    initialUser,
    userReducer
}