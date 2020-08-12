import axios from 'axios'


class Auth {
    constructor (){
        this.isLogged = false
        this.isAdmin = false
    }

    login(data, cb) {
        axios.post('http://localhost:3000/login', data)
        .then(res => {
            if (res.status === 200) {
                const isAdmin = res.status === 200 && res.data.adminPermissions
                if (isAdmin) {
                    this.logAdmin(res.data)
                    cb(res.data)
                    return
                }
                this.toLocalStorage(res.data)
                cb(res.data)
                this.isLogged = true
                return
            }
        }
        )
    }

    logAdmin(data) {
        this.isLogged = true
        this.isAdmin = true
        this.toLocalStorage(data)
    }

    toLocalStorage(data) {
        localStorage.setItem('currentUser', JSON.stringify(data))
    }
    logout() {
        this.isLogged = false
        this.isAdmin = false
    }

    signup(data, cb, isAdminRoute) {
        const body = {
            ...data,
            isAdmin: isAdminRoute
        }
            axios.post("http://localhost:3000/signup", body).then(res => {
                //adminCreated evalua si la respuesta es OK y si el usuario devuelto tiene permisos
                const adminCreated = res.status === 200 && res.data.adminPermissions;
                if (adminCreated) {
                    this.logAdmin(res.data);
                    cb(res.data);
                    return;
                }
                this.toLocalStorage(res.data)
                cb(res.data);
                this.isLogged = true;
                
            });
    }
}

export default new Auth()