import axios from 'axios'

class Auth {
    constructor (){
        this.isLogged = false
        this.isAdmin = false
    }

    login(data, cb) {
        axios.post('http://localhost:3000/login', data)
        .then(res => {
            const isAdmin = res.status === 200 && res.data.adminPermissions
            if (isAdmin) {
                this.logAdmin()
                cb(res.data)
                return
            }
            cb(res.data)
            this.isLogged = true
        })
    }

    logAdmin() {
        this.isLogged = true
        this.isAdmin = true
    }

    logout() {
        this.isLogged = false
        this.isAdmin = false
    }

    signup(data, cb, isAdminRoute) {
        //hacer peticion a la api y crear una cuenta. Cambiar a loggedin cuando acabe.
        const body = {
            ...data,
            isAdmin: isAdminRoute
        }

            axios.post("http://localhost:3000/signup", body).then(res => {
                const adminCreated = res.status === 200 && res.data.adminPermissions;
                if (adminCreated) {
                    this.logAdmin();
                    cb(res.data);
                    return;
                }
                cb(res.data);
                this.isLogged = true;
            });
    }
}

export default new Auth()