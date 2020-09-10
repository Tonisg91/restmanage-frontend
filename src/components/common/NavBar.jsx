import React, {useState} from 'react'
import { NavLink, useLocation, Link,useHistory } from 'react-router-dom'
import { isAdminRoute } from  '../../tools/pathFunctions'
import { useSelector } from 'react-redux'
import { StyledClientNav } from '../styled-components/client-side'
import { StyledAdminNav } from  '../styled-components/admin-side'
import userAuth from '../../tools/userAuth'

function NavBar() {
    const {pathname} = useLocation()
    const history = useHistory()
    const user = useSelector(state => state.user)
    const [showSidenav, setShowSidenav] = useState(false)

    const isClientHome = pathname === '/'

    const loginButtonOnNav = (
            <NavLink to="/login">
                <div className="nav-element">
                    <i className="fas fa-sign-in-alt"></i>
                    <p>Iniciar Sesión</p>
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

    const adminButtonOnNav = (
        <NavLink to="/admin">
            <div className="nav-element">
                <i className="fas fa-user"></i>
                <p>Zona Administrador</p>
            </div>
        </NavLink>
    )

    const displayLastNavButton = () => {
        if (user) {
            if (user.adminPermissions) return adminButtonOnNav
            return profileButtonOnNav
        }
        return loginButtonOnNav
    }

    const userLogged = user ?
        adminButtonOnNav :
        user ?
        profileButtonOnNav :
        loginButtonOnNav

    const openNav = (isOpen = showSidenav) =>  document.getElementById("sidenav").style.width = isOpen ? "0" : "250px"

    const rotateIcon = () => {
        setShowSidenav(state => !state)
        const action = (degrees) => document.getElementById('button-sidenav').style.transform = `rotate(${degrees}deg)`
        !showSidenav ? action(90) : action(0)
        openNav()
    }

    const logoutAndRedirectToHome = () => {
        userAuth.logout()
        history.push('/')
        history.go(0)
    }

    if (isAdminRoute(pathname)) {
        return (
            <StyledAdminNav >
                <div className="default-nav">
                    <i 
                        className="fas fa-bars" 
                        id="button-sidenav"
                        onClick={rotateIcon}
                        >
                    </i>
                    <Link to="/">Vista Cliente</Link>
                </div>
                <div id="sidenav">
                    <NavLink  exact to="/admin" onClick={rotateIcon}>Home Administrador</NavLink>
                    <NavLink to="/admin/menu" onClick={rotateIcon}>Carta</NavLink>
                    <NavLink to="/admin/orders" onClick={rotateIcon}>Pedidos</NavLink>
                    <NavLink to="/admin/config" onClick={rotateIcon}>Configuración</NavLink>
                    <a
                        onClick={logoutAndRedirectToHome}>
                        Cerrar sesión
                    </a>
                </div>
            </StyledAdminNav>
        )
    }

    if (isClientHome) {
        return null
    }

    return (
        <StyledClientNav className="blackboard-bg">
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
            <NavLink to="/cart">
                <div className="nav-element">
                    <i className="fas fa-shopping-cart"></i>
                    <p>Carrito</p>
                </div>
            </NavLink>
            {displayLastNavButton()}
        </StyledClientNav>
    )

    
}

export default NavBar