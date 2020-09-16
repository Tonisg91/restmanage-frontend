import { setDailyMenu } from '../actions/dailyMenuActions'

const initialDailyMenu = null

const dailyMenuReducer = (state = initialDailyMenu, action) => {
    switch (action.type) {
        case "SET_DMENU":
            return setDailyMenu(action)
        default:
            return state
    }
}

export {
    dailyMenuReducer
}