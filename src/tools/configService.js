import axios from 'axios'
import { toast } from 'react-toastify'
class ConfigService {
    constructor() {
        this.URL = "http://localhost:3000/admin"
    }

    async getConfig(cb) {
        const config = await axios.get(`${this.URL}/getconfig`)
        return cb(config.data)
    }

    async sendConfig(data, cb) {
        try {
            const updatedConfig = await axios.post(`${this.URL}/updateconfig`, data)
            cb(updatedConfig.data)
            toast.success('Configuración cargada con éxito.', {
                autoClose: 2000
            })
        } catch (error) {
            toast.error('Error al cargar la configuración.', {
                autoClose: 2000
            })
        }
    }
}

export default new ConfigService()