import React from 'react'
import { useHistory } from 'react-router-dom'
import { StyledNoMatch } from '../styled-components/common-side'
function NoMatch() {
    const history = useHistory()
    
    const goHome = () => history.push('/')

    return (
        <StyledNoMatch>
            <h2 className="super-text">Ups!</h2>
            <h2 className="super-text"> Parece que la ruta no existe!</h2>
            <button 
                className="btn btn-blue"
                onClick={goHome}
                >Volver a la página principal</button>
        </StyledNoMatch>
    )
}

export default NoMatch
