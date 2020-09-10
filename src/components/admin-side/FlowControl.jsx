import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StyledFlowControl } from '../styled-components/admin-side'

function FlowControl(props) {
    const user = useSelector(state => state.user)

    if (!user) {
        return <Redirect to="/login"/>
    }

    if (!user.adminPermissions) {
        return (
            <StyledFlowControl>
                <div>
                    <h2 className="super-text">No tienes permisos para acceder a esta ruta.</h2>
                    <Link to="/">Volver a la página principal</Link>
                </div>
            </StyledFlowControl>
        )
    }

    return (
        <>
            {props.children}
        </>
    )

}

export default FlowControl