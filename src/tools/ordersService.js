import axios from 'axios'

class OrdersService {
    constructor() {
        this.URL = "http://localhost:3000"
    }

    async getAllOrders() {
        const orders = await axios.get(`${this.URL}/getallorders`)
        return orders.data
    }

    async getOrdersInProgress() {
        const orders = await axios.get(`${this.URL}/getordersinprogress`)
        return orders.data
    }

    async getIncomingOrders() {
        const orders = await axios.get(`${this.URL}/getincomingorders`)
        return orders.data
    }

    async getSingleOrder(id) {
        const singleOrder = await axios.get(`${this.URL}/getsingleorder/${id}`)
        return singleOrder.data
    }

    startOrder(id) {
        axios.post(`${this.URL}/startorder/${id}`)
    }

    finishOrder(id) {
        axios.post(`${this.URL}/finishorder/${id}`)
    }

}

export default new OrdersService()