import React from 'react'
import ConfigForm from './ConfigForm'
import { useSelector } from 'react-redux'

function Config() {
    const config = useSelector(state => state.config)

    if (!config) {
        return (
            <div>
                <h1>Cargando configuración</h1>
            </div>
        )
    }

    return (
        <div>
            <ConfigForm configData={config}/>
        </div>
    )
}

export default Config
