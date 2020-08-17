import axios from 'axios'

class ProductService {
    constructor() {
        this.URL = "http://localhost:3000"
    }

    async getSingleProduct(id) {
        const { data } = await axios.get(`${this.URL}/product/${id}`) 
        return data
    }

    async upload(image) {
        const { data } = await axios.post(this.URL + '/admin/imageupload', image)
        return data.url
    }
}

export default new ProductService()