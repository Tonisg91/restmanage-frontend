import axios from 'axios'

class CartService {
    constructor() {
        this.URL = "http://localhost:3000"
        this.localStoragePath = 'currentCart'
    }

    toLocalStorage(productId) {
        const hasCurrentCart = localStorage.currentCart

        if (!hasCurrentCart) return localStorage.setItem(this.localStoragePath, JSON.stringify([productId]))

        const productList = JSON.parse(localStorage.currentCart)
        localStorage.setItem(this.localStoragePath, JSON.stringify([...productList, productId]))    
    }

    removeCartFromLocalStorage() {
        localStorage.removeItem(this.localStoragePath)
    }
}

export default new CartService()