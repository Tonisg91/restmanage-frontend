import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import userAuth from '../../tools/userAuth.js'

function Profile() {
    const history = useHistory()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [ userData, setUserData ] = useState(user)
    
    if (!user) history.push('/login')

    const handleChange = ({target}) => {
        setUserData({
            ...userData,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const authCB = data => dispatch({
            type: 'LOG_USER',
            payload: data
        })
        userAuth.updateUser(userData, authCB)
    }

    const logoutAndRedirectToHome = () => {
        userAuth.logout()
        history.push('/')
        history.go(0)
    }

    const {name, email, city, street, number, door} = userData

    return (
        <div>
            <h1>profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor="city">Ciudad</label>
                <input 
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="street">Calle</label>
                <input
                    type="text"
                    name="street"
                    value={street}
                    onChange={handleChange}
                />
                <label htmlFor="number">Numero</label>
                <input 
                    type="number"
                    name="number"
                    value={number}
                    onChange={handleChange}
                />
                <label htmlFor="door">Puerta</label>
                <input 
                    type="text"
                    name="door"
                    value={door}
                    onChange={handleChange}
                />
                <input 
                    type="submit" 
                    value="GUARDAR PERFIL"
                    className="btn btn-blue"    
                />
            </form>

            <button 
                className="btn btn-red"
                onClick={logoutAndRedirectToHome}>
                    CERRAR SESIÓN
            </button>
        </div>
    )
}

export default Profile