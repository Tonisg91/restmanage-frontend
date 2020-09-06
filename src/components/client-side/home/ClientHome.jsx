import React from 'react'
import { Link } from 'react-router-dom'
import { StyledClientHome } from '../../styled-components/client-side'

function ClientHome() {
    return (
        //TODO: SACAR NAV EN OTRO COMPONENTE
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
                        <img src="https://res.cloudinary.com/dkejgwlha/image/upload/v1599414338/RestManager/image_glu29s.png" alt="Restaurant logo" />
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

export default ClientHome