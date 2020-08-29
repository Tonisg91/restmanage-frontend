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

    async sendCart(cart, clientId) {
        const body = {
            client: clientId || null,
            products: cart
        }
        console.log(body)
        await axios.post(`${this.URL}/generateorder`, body)
    }
}

export default new CartService()