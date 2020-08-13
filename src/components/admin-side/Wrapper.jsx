import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Wrapper(props) {
    console.log(props)
    let history = useHistory()
    const {user} = useSelector(state => state.user)

    if (!user) {
        history.push('/login')
    }

    if (!user.adminPermissions) {
        return (
            <div>
                No tienes permisos para acceder a esta ruta.
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

export default Wrapper