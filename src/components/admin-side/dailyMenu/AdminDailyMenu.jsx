import React from 'react'
import { useHistory } from 'react-router-dom'
import { StyledDailyMenu } from '../../styled-components/admin-side'
import DailyMenuForm from './DailyMenuForm'

function AdminDailyMenu() {
    const history = useHistory()
    const redirectToDailyMenu = () => history.push('/dailymenu')

    return (
        <StyledDailyMenu>
            <div id="header">
                <h1 className="super-text">DailyMenu</h1>
            </div>
            <div 
                id="form-container"
                className="blackboard-bg field">
                <DailyMenuForm />
                <div id="button-container">
                    <button
                        onClick={redirectToDailyMenu}
                        className="btn btn-blue">
                        VER MENÚ
                    </button>
                </div>
            </div>
        </StyledDailyMenu>
    )
}

export default AdminDailyMenu
