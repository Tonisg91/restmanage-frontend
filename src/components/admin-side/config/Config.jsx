import React from 'react'
import ConfigForm from './ConfigForm'
import { useSelector } from 'react-redux'
import { StyledAdminConfig } from '../../styled-components/admin-side'
import LoadingPage from '../../common/LoadingPage'

function Config() {
    const config = useSelector(state => state.config)

    if (!config) {
        return (
            <LoadingPage />
        )
    }

    return (
        <StyledAdminConfig>
            <ConfigForm configData={config}/>
        </StyledAdminConfig>
    )
}

export default Config
