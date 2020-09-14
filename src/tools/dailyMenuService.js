import axios from 'axios'
import { toast } from 'react-toastify'
class DailyMenuService {
    constructor() {
        this.URL = `${process.env.REACT_APP_API_URL}/admin`
    }

    async getDailyMenu(cb) {
        const { data } = await axios.get(`${this.URL}/getdailymenu`)

        const { starters, mains, desserts, price, withBread, withCoffee, _id } = data

        const unifyArray = (arr) => arr.join(',')

        if (data) {
            const normalizedData = {
                _id,
                starters: unifyArray(starters),
                mains: unifyArray(mains),
                desserts: unifyArray(desserts),
                price,
                withBread,
                withCoffee
            }
            return cb(normalizedData)
        }
    }

    async sendDailyMenu(data, cb, updateForm) {
        try {
            const {_id, starters, mains, desserts, price, withBread, withCoffee } = data

            const normalizeArrays = (string) => string.split(',').map(word => word.trim())

            const body = {
                _id,
                starters: normalizeArrays(starters),
                mains: normalizeArrays(mains),
                desserts: normalizeArrays(desserts),
                price,
                withBread,
                withCoffee
            }

            const updatedDailyMenu = await axios.post(`${this.URL}/updatedailymenu`, body)
            cb(updatedDailyMenu.data)
            toast.success('Menú diario actualizado con éxito.', {
                autoClose: 2000
            })
        } catch (error) {
            toast.error('Error al cargar el menú.', {
                autoClose: 2000
            })
        }
    }
}

export default new DailyMenuService()