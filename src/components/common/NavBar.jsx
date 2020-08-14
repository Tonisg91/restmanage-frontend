import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { isAdminRoute } from  '../../tools/pathFunctions'
import styled from 'styled-components'

function NavBar() {
    const {pathname} = useLocation()
    const isClientHome = pathname === '/'

    const ClientStyledNav = styled.nav`
        position: fixed;
        bottom: 0;
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: space-between;
    `

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

    if (isClientHome) {
        return null
    }

    return (
        <ClientStyledNav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Carta</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </ClientStyledNav>
    )

    
}

export default NavBar