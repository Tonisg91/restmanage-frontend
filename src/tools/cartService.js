import axios from 'axios'

class CartService {
    constructor() {
        this.URL = "http://localhost:3000"
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
            localStorage.setItem(this.localStoragePath, JSON.stringify([...productList,]))     
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

    async sendCart(cart, clientId, totalAmount) {
        const body = {
            client: clientId || null,
            products: cart,
            amount: totalAmount
        }
        const response = await axios.post(`${this.URL}/generateorder`, body)
        this.removeCartFromLocalStorage()
        switch (response.status) {
            case 200:
                return alert('Pedido realizado con éxito.')
            default:
                alert('Error al realizar el pedido')
                break;
        }
    }
}

export default new CartService()