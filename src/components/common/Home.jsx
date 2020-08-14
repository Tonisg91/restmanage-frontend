import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { isAdminRoute } from '../../tools/pathFunctions'
import { StyledClientHome } from '../styled-components/client-side'

function Home() {
    const {pathname} = useLocation()

    if (isAdminRoute(pathname)) {
        return (
            <div>
                <h1>Home administrador</h1>
            </div>
        )
    }

    return (
        <StyledClientHome>
            <div className="title-container border">
                <h1 className="title">Hamburguesería Random</h1>
            </div>
            <div className="button-container">
                <Link to="/menu" className="border">Entrar</Link>
            </div>
        </StyledClientHome>
    )

}

export default Home