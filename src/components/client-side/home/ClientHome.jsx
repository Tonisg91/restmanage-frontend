import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledClientHome } from '../../styled-components/client-side'
import { useEffect } from 'react'

function ClientHome() {
    const config = useSelector(state => state.config)

    if (config) {
        const {logo, name} = config

        return (
            <StyledClientHome>
                <header >
                    <div id="head-img">
                        <div id="header-locations">
                            <Link >
                                <i class="fas fa-map-marker-alt"></i>
                            LOCALIZACIONES
                        </Link>
                        </div>
                        <div id="head-logo">
                            <img src={logo} alt={`${name} logo`} />     
                        </div>
                        <nav>
                            <div>
                                <Link to="/menu">Carta</Link>
                                <Link to="#">Reservas</Link>
                                <Link to="#">Localizaciones</Link>
                            </div>
                            <div>
                                <Link to="#">Sobre Nosotros</Link>
                            </div>
                        </nav>
                    </div>
                </header>
            </StyledClientHome>
        )
    }

    return (
        <h1>cargando</h1>
    )
}

export default ClientHome