import axios from 'axios'
import moment from 'moment'

class OrdersService {
    constructor() {
        this.URL = `${process.env.REACT_APP_API_URL}`
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

    async mostSelledProducts() {
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

    async getLast30Days() {
        const dataFromDB = await this.getAllOrders()

        const ordersFilteredByDate = dataFromDB.filter(order => {
            const orderDate = moment(order.createdAt)
            const diff = moment().diff(orderDate, 'days')
            if (diff <= 30) return order
            }
        )
        const normalizedData = ordersFilteredByDate.map(order => {
            return {
                amount: order.amount,
                date: moment(order.createdAt).format('DD, MMM, YYYY')
            }
        }).sort((a,b) => b.date - a.date)


        const dataReduced = () => {
            const ordersArr = []
            normalizedData.forEach(order => {
                if (!ordersArr.find(el => el.date === order.date)) {
                    return ordersArr.push(order)
                }
                const existentDate = ordersArr.find(el => el.date === order.date)
                existentDate.amount += order.amount
            })
            return ordersArr
        }
        return dataReduced()
    }


}

export default new OrdersService()