import React, { useState } from 'react'
import userAuth from '../../tools/userAuth'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import  { StyledLoginSignup } from '../styled-components/common-side'

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
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

        hasAdminPermissions ? history.push('/admin') : history.push('/menu')
    }
    
    const {email, password} = loginForm

    return (
        <StyledLoginSignup>
            <div className="inside-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={email} 
                        onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={handleChange}/>
                    <input className="submit" type="submit" value="LOGIN"/>
                </form>
                <div className="have-account">
                        <p>No tienes cuenta?
                        <Link to="/signup"> Haz click aquí</Link>
                        </p>
                </div>
            </div>  
        </StyledLoginSignup>
    )
}

export default Login