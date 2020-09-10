import React from 'react'
import ConfigForm from './ConfigForm'
import { useSelector } from 'react-redux'
import { StyledAdminConfig } from '../../styled-components/admin-side'

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
        <StyledAdminConfig>
            <ConfigForm configData={config}/>
        </StyledAdminConfig>
    )
}

export default Config
