import { setDailyMenu } from '../actions/dailyMenuActions'
import { initialConfig } from './configReducer'

const initialDailyMenu = null

const dailyMenuReducer = (state = initialConfig, action) => {
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