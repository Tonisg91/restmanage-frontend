import axios from 'axios'
import { toast } from 'react-toastify'
class ConfigService {
    constructor() {
        this.URL = `${process.env.REACT_APP_API_URL}/admin`
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