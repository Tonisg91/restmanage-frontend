import axios from 'axios'

class OrdersService {
    constructor() {
        this.URL = "http://localhost:3000"
    }

    async getAllOrders() {
        const orders = await axios.get(`${this.URL}/getallorders`)
        return orders.data
    }

    async getFinishedOrders() {
        const orders = await axios.get(`${this.URL}/getfinishedorders`)
        return orders.data
    }

    async getActiveOrders() {
        const orders = await axios.get(`${this.URL}/getactiveorders`)
        return orders.data
    }

    finishOrder(id) {
        axios.post(`${this.URL}/finishorder/${id}`)
    }

}

export default new OrdersService()