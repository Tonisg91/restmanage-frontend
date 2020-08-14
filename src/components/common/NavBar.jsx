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
        height: 3rem;
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #000000;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        border-radius: 10px 10px 0 0;
        i {
            color: #ffff;
            font-size: 1.5em;
        }
        .active {
            font-size: 1.8em;
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
                <NavLink to="/admin/signup">Signup Administrador</NavLink>
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
            <NavLink to="/login"><i className="fas fa-sign-in-alt"></i></NavLink>
            <NavLink to="/signup"><i className="fas fa-user-plus"></i></NavLink>
        </ClientStyledNav>
    )

    
}

export default NavBar