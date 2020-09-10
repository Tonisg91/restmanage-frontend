import React from 'react'
import { useSelector } from 'react-redux'
import { StyledClientProfile } from '../../styled-components/client-side'
import ProfileForm from './ProfileForm'
import CurrentOrders from './CurrentOrders'

function Profile() {
    const user = useSelector(state => state.user)
    

    return (
        <StyledClientProfile>
            <h1 className="title super-text">Mi cuenta</h1>
            <div className="inside-container blackboard-bg field">
                <ProfileForm user={user}/>
            </div>
            <div className="field blackboard-bg">
                <CurrentOrders orders={user.orders}/>
            </div>
        </StyledClientProfile>
    )
}

export default Profile