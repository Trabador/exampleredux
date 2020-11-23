import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import playerReducer from './reducers/playersReducer'
import fetchReducer from './reducers/fetchReducer'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    player: playerReducer,
    fetch: fetchReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store