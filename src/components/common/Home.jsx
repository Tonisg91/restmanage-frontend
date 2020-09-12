import React from 'react'
import { useLocation } from 'react-router-dom'
import { isAdminRoute } from '../../tools/pathFunctions'
import ClientHome from '../client-side/home/ClientHome'
import AdminHome from '../admin-side/home/AdminHome'

function Home() {
    const {pathname} = useLocation()
    

    if (isAdminRoute(pathname)) {
        return (
            <AdminHome />
        )
    }

    return (
        <ClientHome />
    )

}

export default Home