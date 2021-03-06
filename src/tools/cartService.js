import axios from 'axios'
import { toast } from 'react-toastify'

class CartService {
    constructor() {
        this.URL = `${process.env.REACT_APP_API_URL}`
        this.localStoragePath = 'currentCart'
    }

    toLocalStorage(product) {
        const hasCurrentCart = localStorage.currentCart
        if (!hasCurrentCart) return localStorage.setItem(this.localStoragePath, JSON.stringify([{product: product, qty: 1}]))

        const productList = JSON.parse(localStorage.currentCart)
        const existentProduct = productList.find(e => e.product._id === product._id)

        if (existentProduct) {
            productList.map(e => {
                if (e.product._id === product._id) {
                    ++e.qty
                }
                return e
            })
            localStorage.setItem(this.localStoragePath, JSON.stringify([...productList]))     
            return
        }

        localStorage.setItem(this.localStoragePath, JSON.stringify([...productList, { product: product, qty: 1 }]))    
    }

    removeCartFromLocalStorage() {
        localStorage.removeItem(this.localStoragePath)
    }

    removeElementFromCart(productIndex) {
        const productListUpdated = JSON.parse(localStorage.currentCart).filter((elem, idx) => idx !== productIndex)
        localStorage.setItem(this.localStoragePath, JSON.stringify([...productListUpdated]))
    }

    addOrderToLocalStorage(order) {
        const hasCurrentUser = JSON.parse(localStorage.currentUser)
        if (!hasCurrentUser) return
        const updatedUser = {...hasCurrentUser, orders: [...hasCurrentUser.orders, order]}

        localStorage.setItem('currentUser', JSON.stringify(updatedUser))
    }


    async sendCart(cart, clientId, totalAmount, email) {
        const body = {
            client: clientId || null,
            products: cart,
            amount: totalAmount,
            email: email || null
        }
        const response = await axios.post(`${this.URL}/generateorder`, body)
        this.removeCartFromLocalStorage()
        switch (response.status) {
            case 200:
                toast.success(
                    'Pedido realizado con éxito.',
                    {autoClose: 2000}
                    )
                return response.data
            default:
                toast.error(
                    'Error al realizar el pedido',
                    {autoClose: 1500}
                    )
                break;
        }
    }
}

export default new CartService()