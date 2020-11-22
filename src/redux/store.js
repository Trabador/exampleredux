import { createStore } from 'redux'
import playerReducer from './reducers/playersReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    player: playerReducer
})

const store = createStore(rootReducer)

export default store