import { setConfig } from '../actions/configActions'

const initialConfig = null

const configReducer = (state = initialConfig, action) => {
    switch (action.type) {
        case 'SET_CONFIG':
            return setConfig(action)
        default:
            return state
    }
}

export {
    initialConfig,
    configReducer
}