import axios from 'axios'

class CartService {
    constructor() {
        this.URL = "http://localhost:3000"
        this.localStoragePath = 'currentCart'
    }

    toLocalStorage(productId) {
        const hasCurrentCart = localStorage.currentCart

        if (!hasCurrentCart) return localStorage.setItem(this.localStoragePath, JSON.stringify([{id: productId, qty: 1}]))

        const productList = JSON.parse(localStorage.currentCart)

        const existentProduct = productList.find(e => e.id === productId)

        if (existentProduct) {
            productList.find(e => {
                if (e.id === productId) {
                    e.qty += 1
                }
                return e
            })
            localStorage.setItem(this.localStoragePath, JSON.stringify([...productList,]))     
            return
        }

        localStorage.setItem(this.localStoragePath, JSON.stringify([...productList, { id: productId, qty: 1 }]))    
    }

    removeCartFromLocalStorage() {
        localStorage.removeItem(this.localStoragePath)
    }
}

export default new CartService()