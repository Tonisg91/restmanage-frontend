import React, { useState } from 'react'
import userAuth from '../../tools/userAuth'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Login(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { user } = useSelector(state => state.user)
    
    const initialState = {
        email: '',
        password: ''
    }

    const [loginForm, setLoginForm] = useState(initialState);

    const handleChange = ({target}) => {
        setLoginForm({
            ...loginForm,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const authCB = data => dispatch({
            type: 'LOG_USER',
            payload: data
        })

        const hasAdminPermissions = await userAuth.login(loginForm, authCB)

        hasAdminPermissions ? history.push('/admin') : history.push('/')
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