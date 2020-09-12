import axios from 'axios'

class ProductService {
    constructor() {
        this.URL = "http://localhost:3000"
    }

    getAllProducts(cb) {
        axios.get('http://localhost:3000/menu')
            .then(res => {
                if (cb) return cb(res.data)

                return res.data
            })
    }
    
    async getCategory(currentCategory) {
        const { data } = await axios.get(`${this.URL}/category/${currentCategory}`)
        return data
    }

    async addProduct(data) {
        await axios.post(`${this.URL}/admin/addproduct`, data)
    }

    async editProduct(data) {
        await axios.post(`${this.URL}/admin/editproduct`, data)
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