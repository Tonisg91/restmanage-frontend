import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { isAdminRoute } from  '../../tools/pathFunctions'


function NavBar() {
    const {pathname} = useLocation()


    if (isAdminRoute(pathname)) {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/admin">Home Administrador</NavLink>
                <NavLink to="/admin/menu">Carta</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/admin/signup">Signup Administrador</NavLink>
            </nav>
        )
    }

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Carta</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </nav>
    )

    
}

export default NavBar