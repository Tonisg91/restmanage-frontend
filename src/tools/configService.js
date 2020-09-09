import axios from 'axios'

class ConfigService {
    constructor() {
        this.URL = "http://localhost:3000/admin"
    }

    async getConfig(cb) {
        const config = await axios.get(`${this.URL}/getconfig`)
        return cb(config.data)
    }

    async sendConfig(data) {
        await axios.post(`${this.URL}/updateconfig`, data)
    }
}

export default new ConfigService()