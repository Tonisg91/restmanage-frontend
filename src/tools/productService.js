import axios from 'axios'

class ProductService {
    
    async upload(image) {
        const {data} = await axios.post('http://localhost:3000/admin/imageupload', image)
        return data.url
    }
}

export default new ProductService()