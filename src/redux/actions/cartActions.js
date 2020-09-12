const addProduct = (state, action) => [...state, {product: action.payload, qty: 1 }]

const qtyUp = (state, action) => {
    return Object.assign([], state.map(item => {
        const itemRequired = action.payload._id
        const existentItem = item.product._id
        const match = existentItem === itemRequired

        if (match) item.qty += 1

        return item
    }))
}

const qtyDwn = (state, action) => {
    return Object.assign([], state.map(item => {
        const itemRequired = action.payload._id
        const existentItem = item.product._id
        const match = existentItem === itemRequired

        if (match) item.qty -= 1

        return item
    }))
}

const removeProduct = (state, action) => state.filter((elem, idx) => idx !== action.payload)

export {
    addProduct,
    qtyUp,
    qtyDwn,
    removeProduct
}