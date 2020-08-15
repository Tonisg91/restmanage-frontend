import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { isAdminRoute } from  '../../tools/pathFunctions'
import { useSelector } from 'react-redux'
import { StyledClientNav } from '../styled-components/client-side'

function NavBar() {
    const {pathname} = useLocation()
    const {user} = useSelector(state => state.user)

    const isClientHome = pathname === '/'

    const loginButtonOnNav = (
            <NavLink to="/login">
                <div className="nav-element">
                    <i className="fas fa-sign-in-alt"></i>
                    <p>Login</p>
                </div>
            </NavLink>
    )

    const profileButtonOnNav = (
        <NavLink to="/profile">
            <div className="nav-element">
                <i className="fas fa-user"></i>
                <p>Mi Cuenta</p>
            </div>
        </NavLink>
    )

    const userLogged = user ? profileButtonOnNav : loginButtonOnNav

    if (isAdminRoute(pathname)) {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/admin">Home Administrador</NavLink>
                <NavLink to="/admin/menu">Carta</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        )
    }

    if (isClientHome) {
        return null
    }

    return (
        <StyledClientNav>
            <NavLink exact to="/">
                <div className="nav-element">
                    <i className="fas fa-home"></i>
                    <p>Inicio</p>
                </div>
            </NavLink>
            <NavLink to="/menu">
                <div className="nav-element">
                    <i className="fas fa-book-open"></i>
                    <p>Menu</p>
                </div>
            </NavLink>
            {userLogged}
        </StyledClientNav>
    )

    
}

export default NavBar