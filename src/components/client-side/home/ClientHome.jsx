import React from 'react'
import { Link } from 'react-router-dom'
import { StyledClientHome } from '../../styled-components/client-side'

function ClientHome() {
    return (
        // <StyledClientHome>
        //     <div className="title-container border">
        //         <h1 className="title">Hamburguesería Random</h1>
        //     </div>
        //     <div className="button-container">
        //         <Link to="/menu" className="border">Entrar</Link>
        //     </div>
        // </StyledClientHome>

        //TODO: SACAR NAV EN OTRO COMPONENTE
        <StyledClientHome>
            <nav>
                <div id="logo-box">
                </div>
                <i class="fas fa-bars"></i>
            </nav>
            <section id="section-1">
                <div id="sec-1-img">

                </div>
            </section>
        </StyledClientHome>
    )
}

export default ClientHome