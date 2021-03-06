import axios from 'axios'

class UserAuth {
    constructor() {
        this.URL = `${process.env.REACT_APP_API_URL}`
    }

    async login(body, cb) {
        const {data} = await axios.post(this.URL + '/login', body)
        this.toLocalStorage(data)
        cb(data)
        return data.adminPermissions
    }

    toLocalStorage(data) {
        localStorage.setItem('currentUser', JSON.stringify(data))
    }

    logout() {
        localStorage.removeItem('currentUser')
    }

    async signup(data, isAdminRoute) {
        const body = {
            ...data,
            isAdmin: isAdminRoute
        }
        try {
            const { data } = await axios.post(this.URL + "/signup", body)
            this.toLocalStorage(data)
        } catch (err) {
            console.error('Error al hacer signup.', err)
        }
    }

    async updateUser(userData, cb) {
        axios.post(`${this.URL}/updateuser`, userData)
            .then(res => {
                cb(res.data)
                this.toLocalStorage(res.data)
            })
            .catch(err => 
                console.error('Error al actualizar el usuario.', err)
            )
    }

    
}

export default new UserAuth()