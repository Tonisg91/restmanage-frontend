import React from 'react'
import { StyledDailyMenu } from '../../styled-components/admin-side'
import DailyMenuForm from './DailyMenuForm'

function DailyMenu() {
    return (
        <StyledDailyMenu>
            <div id="header">
                <h1 className="super-text">DailyMenu</h1>
            </div>
            <div 
                id="form-container"
                className="blackboard-bg field">
                <DailyMenuForm />
            </div>
        </StyledDailyMenu>
    )
}

export default DailyMenu
