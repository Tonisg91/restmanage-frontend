import axios from 'axios'

class UserAuth {
    constructor() {
        this.URL = 'http://localhost:3000'
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

    signup(data, cb, isAdminRoute) {
        const body = {
            ...data,
            isAdmin: isAdminRoute
        }
            axios.post(this.URL + "/signup", body).then(res => {
                this.toLocalStorage(res.data)
                cb(res.data)
                return
            }).catch(err => console.error('Error al hacer signup.', err))
    }
}

export default new UserAuth()