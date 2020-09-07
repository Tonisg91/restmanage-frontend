import React from 'react'
import { StyledClientProfile } from '../../styled-components/client-side'
import ProfileForm from './ProfileForm'

function Profile() {

    return (
        <StyledClientProfile>
            <h1 className="title super-text">Mi cuenta</h1>
            <div className="inside-container blackboard-bg">
                <ProfileForm />
            </div>
        </StyledClientProfile>
    )
}

export default Profile