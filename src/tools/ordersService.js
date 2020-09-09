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

    async mostSelledProducts(cb1, cb2) {
        const dataFromDB = await this.getAllOrders()
        
        const normalizedData = dataFromDB.flatMap(order => {
            const product = order.productList.map(({ product, qty }) => {
                return {
                    name: product.name,
                    qty: qty
                }
            })
            return product
        })

        const getQuantities = (data = normalizedData) => {
            const dataReduced = []
            if (data.length) {
                data.forEach(product => {
                    if (!dataReduced.find(prod => prod.name === product.name)) {
                        return dataReduced.push({ name: product.name, qty: product.qty })
                    }
                    const existentProduct = dataReduced.find(prod => prod.name === product.name)

                    existentProduct.qty += product.qty
                })
            }
            return dataReduced
        }

        return getQuantities()

    }

}

export default new OrdersService()