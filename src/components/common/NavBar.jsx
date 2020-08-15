import React, {useState, useEffect} from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { isAdminRoute } from  '../../tools/pathFunctions'
import { useSelector } from 'react-redux'
import { StyledClientNav } from '../styled-components/client-side'
import { StyledAdminNav } from  '../styled-components/admin-side'

function NavBar() {
    const {pathname} = useLocation()
    const {user} = useSelector(state => state.user)
    const [showSidenav, setShowSidenav] = useState(false)

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

    const rotateIcon = ({target}) => {
        setShowSidenav(state => !state)
        const action = (show) => target.style.transform = `rotate(${90 * show}deg)`
        !showSidenav ? action(1) : action(-1)
    }

    if (isAdminRoute(pathname)) {
        return (
            <StyledAdminNav >
                <div className="default-nav">
                    <i 
                        className="fas fa-chevron-circle-down" 
                        id="button-sidenav"
                        onClick={rotateIcon}
                        >
                    </i>
                    <Link to="/">Vista Cliente</Link>
                </div>
                <div className="sidenav">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/admin">Home Administrador</NavLink>
                    <NavLink to="/admin/menu">Carta</NavLink>
                    {userLogged}
                </div>
            </StyledAdminNav>
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