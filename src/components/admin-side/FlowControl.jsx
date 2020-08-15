import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function FlowControl(props) {
    const {user} = useSelector(state => state.user)

    if (!user) {
        return <Redirect to="/login"/>
    }

    if (!user.adminPermissions) {
        return (
            <div>
                <p>No tienes permisos para acceder a esta ruta.</p>
                <Link to="/">Volver a la página principal</Link>
            </div>
        )
    }

    return (
        <>
            {props.children}
        </>
    )

}

export default FlowControl