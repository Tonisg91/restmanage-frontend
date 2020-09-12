const logUser = (action) => action.payload

const addOrder = (state, action) => {
    return {
        ...state,
        orders: [...state.orders, action.payload]
    }
}

export {
    logUser,
    addOrder
}