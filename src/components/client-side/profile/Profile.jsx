import React from 'react'
import { useSelector } from 'react-redux'
import { StyledClientProfile } from '../../styled-components/client-side'
import ProfileForm from './ProfileForm'
import CurrentOrders from './CurrentOrders'
import { useState } from 'react'

function Profile() {
    const user = useSelector(state => state.user)
    const [displayForm, setDisplayForm] = useState(false)
    const [displayOrders, setDisplayOrders] = useState(false)

    const renderOrders = <CurrentOrders orders={user.orders} cb={setDisplayOrders}/>
    const renderForm = <ProfileForm user={user} cb={setDisplayForm}/>

    const selectedField = () => {
        if (displayForm) {
            return (
                <div 
                    id="form-container"
                    className="inside-container blackboard-bg field">
                    <ProfileForm user={user} cb={setDisplayForm} />
                </div>
            )
        }
            
        if (displayOrders) {
            return (
                <div>
                    <div
                        id="orders-container"
                        className="inside-container field">
                        <CurrentOrders orders={user.orders} />
                    </div>
                    <div
                        id="return-container"
                        >
                        <button
                            id="return-button"
                            className="btn btn-red"
                            onClick={() => setDisplayOrders(false)}
                        >
                            Volver
            </button>
                    </div>
                </div>
                
            )
        }

        return (
            <div
                id="pre-select-container"
                className="inside-container blackboard-bg field">
                <button 
                    className="btn btn-blue"
                    onClick={() => setDisplayOrders(true)}
                    >Mostrar Pedidos
                </button>
                <button
                    className="btn btn-blue"
                    onClick={() => setDisplayForm(true)}
                    >Mostrar mi perfil
                </button>
            </div>
        )
    }

    return (
        <StyledClientProfile>
            <h1 className="title super-text">Mi cuenta</h1>            
            {selectedField()}
        </StyledClientProfile>
    )
}

export default Profile