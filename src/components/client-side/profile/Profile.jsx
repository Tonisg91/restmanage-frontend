import React from 'react'
import { useSelector } from 'react-redux'
import { StyledClientProfile } from '../../styled-components/client-side'
import ProfileForm from './ProfileForm'

function Profile() {
    const user = useSelector(state => state.user)
    console.log(user)

    return (
        <StyledClientProfile>
            <h1 className="title super-text">Mi cuenta</h1>
            <div className="inside-container blackboard-bg">
                <ProfileForm user={user}/>
            </div>
        </StyledClientProfile>
    )
}

export default Profile