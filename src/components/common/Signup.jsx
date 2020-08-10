import React, { useState } from 'react'
import { isAdminRoute } from '../../tools/pathFunctions'
import auth from '../../tools/auth'

function Signup(props) {
    const path = props.match.path

    const initialState = {
        email: '',
        password: '',
        rootPassword: ''
    }

    const [form, setForm] = useState(initialState)
    const [user, setUser] = useState({})

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e, data = form) => {
        e.preventDefault()
        auth.signup(data, setUser, isAdminRoute(path))
    }


    if (isAdminRoute(path)) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleChange}/>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" onChange={handleChange}/>
                    <label htmlFor="rootPassword">Contraseña Root</label>
                    <input type="password" name="rootPassword" onChange={handleChange}/>
                    <input type="submit" value="CREAR CUENTA"/>
                </form>
            </div>
        )
    }

    return (
        <div>
            <div>
                <form onSubmit={(e) => handleSubmit(e, {email: form.email, password: form.password})}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleChange} />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" onChange={handleChange} />
                    <input type="submit" value="CREAR CUENTA" />
                </form>
            </div>
        </div>
    )
}


export default Signup