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
        padding: 0.25em 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: var(--navbar);  /* fallback for old browsers */
        border-radius: 10px 10px 0 0;
        i {
            color: #ffff;
            font-size: 1.5em;
            padding: 0.5em;
            width: 50px;
            text-align: center;
        }
        .active {
            background-color: white;
            border-radius: 25px;
            & i {
                color: #35A7FF;
            }
        }
    `

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
        <ClientStyledNav>
            <NavLink exact to="/"><i className="fas fa-home"></i></NavLink>
            <NavLink to="/menu"><i className="fas fa-book-open"></i></NavLink>
            <NavLink to="/login"><i className="fas fa-user"></i></NavLink>
        </ClientStyledNav>
    )

    
}

export default NavBar