import axios from 'axios'

class ProductService {
    constructor() {
        this.URL = "http://localhost:3000"
    }

    getAllProducts(cb) {
        axios.get('http://localhost:3000/menu')
            .then(res => {
                cb(res.data)
            })
    }

    async addOrEditProduct(data) {
        await axios.post(`${this.URL}/admin/addproduct`, data)
    }

    async getSingleProduct(id) {
        const { data } = await axios.get(`${this.URL}/product/${id}`) 
        return data
    }

    async deleteProduct(id, cb) {
        await axios.delete(`${this.URL}/deleteproduct/${id}`)
        this.getAllProducts(cb)
    }

    async upload(image) {
        const { data } = await axios.post(this.URL + '/admin/imageupload', image)
        return data.url
    }
}

export default new ProductService()