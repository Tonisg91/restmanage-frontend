import React from 'react'
import { useLocation } from 'react-router-dom'
import { isAdminRoute } from '../../tools/pathFunctions'

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
        <div>
            <h1>Home cliente</h1>
        </div>
    )

}

export default Home