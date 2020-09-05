import React from 'react'
import { useLocation } from 'react-router-dom'
import { isAdminRoute } from '../../tools/pathFunctions'
import ClientHome from '../client-side/home/ClientHome'

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
        <ClientHome />
    )

}

export default Home