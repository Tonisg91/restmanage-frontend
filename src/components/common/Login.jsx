import React, { useState } from 'react'
import auth from '../../tools/auth'

function Login(props) {

    const initialState = {
        email: '',
        password: ''
    }

    const [loginForm, setLoginForm] = useState(initialState);
    const [user, setUser] = useState({})

    const handleChange = ({target}) => {
        setLoginForm({
            ...loginForm,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        auth.login(loginForm, setUser)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange}/>
                <input type="submit" value="LOGIN"/>
            </form>
        </div>
    )
}

export default Login