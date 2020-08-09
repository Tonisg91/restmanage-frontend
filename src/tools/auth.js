class Auth{
    constructor {
        this.isLogged = false
        this.isAdmin = false
    }

    login(cb) {
        //recibir datos de axios y cambiar islogged
    }

    logout() {
        //cambiar islogged a false
    }

    signup() {
        //hacer peticion a la api y crear una cuenta. Cambiar a loggedin cuando acabe.
    }
}

export default Auth()