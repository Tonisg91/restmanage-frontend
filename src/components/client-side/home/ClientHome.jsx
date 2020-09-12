import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledClientHome } from '../../styled-components/client-side'
import { useEffect } from 'react'
import LoadingPage from '../../common/LoadingPage'

function ClientHome() {
    const config = useSelector(state => state.config)

    if (config) {
        const {logo, name} = config

        return (
            <StyledClientHome>
                <header >
                    <div id="head-img">
                        <div id="header-locations">
                            <Link to="/places">
                                <i className="fas fa-map-marker-alt"></i>
                            LOCALIZACIONES
                        </Link>
                        </div>
                        <div id="head-logo">
                            <img src={logo} alt={`${name} logo`} />     
                        </div>
                        <nav>
                            <div>
                                <Link to="/menu">Carta</Link>
                                <Link to="/dailymenu">Menú Diario</Link>
                                <Link to="/places">Localizaciones</Link>
                            </div>
                            <div>
                                <Link to="/about">Sobre Nosotros</Link>
                            </div>
                        </nav>
                    </div>
                </header>
            </StyledClientHome>
        )
    }

    return (
        <LoadingPage />
    )
}

export default ClientHome