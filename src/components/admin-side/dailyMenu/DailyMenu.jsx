import React from 'react'
import { useSelector } from 'react-redux'
import { StyledDailyMenu } from '../../styled-components/admin-side'
import DailyMenuForm from './DailyMenuForm'

function DailyMenu() {
    const dailyMenu = useSelector(state => state.dailyMenu)
    return (
        <StyledDailyMenu>
            <div id="header">
                <h1 className="super-text">DailyMenu</h1>
            </div>
            <div 
                id="form-container"
                className="blackboard-bg field">
                <DailyMenuForm dailyMenu={dailyMenu}/>
            </div>
        </StyledDailyMenu>
    )
}

export default DailyMenu
