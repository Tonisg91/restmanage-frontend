import React, {useState} from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { isAdminRoute } from  '../../tools/pathFunctions'
import { useSelector } from 'react-redux'
import { StyledClientNav } from '../styled-components/client-side'
import { StyledAdminNav } from  '../styled-components/admin-side'

function NavBar() {
    const {pathname} = useLocation()
    const user = useSelector(state => state.user)
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

    const openNav = (isOpen = showSidenav) =>  document.getElementById("sidenav").style.width = isOpen ? "0" : "250px"

    const rotateIcon = ({target}) => {
        setShowSidenav(state => !state)
        const action = (degrees) => target.style.transform = `rotate(${degrees}deg)`
        !showSidenav ? action(90) : action(0)
        openNav()
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
                    <NavLink  exact to="/admin">Home Administrador</NavLink>
                    <NavLink to="/admin/menu">Carta</NavLink>
                    <NavLink to="/admin/profile">Mi Cuenta</NavLink>
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
            <NavLink to="/cart">
                <div className="nav-element">
                    <i className="fas fa-shopping-cart"></i>
                    <p>Carrito</p>
                </div>
            </NavLink>
            {userLogged}
        </StyledClientNav>
    )

    
}

export default NavBar