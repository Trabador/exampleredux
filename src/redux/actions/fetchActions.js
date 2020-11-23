import FetchActions from './fetchActionTypes'
import  { populatePlayers } from './Actions'
import axios from 'axios'

export const fetchRequest = () => {
    return {
        type: FetchActions.FETCH_REQUEST
    }
}

export const fetchSuccess = (users) => {
    return {
        type: FetchActions.FETCH_SUCCESS,
        payload: users
    }
}

export const fetchFailure = (error) => {
    return {
        type: FetchActions.FETCH_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        console.log(process.env)
        axios.get(process.env.REACT_APP_API_URL)
            .then(response => {
                const users = response.data
                dispatch(fetchSuccess())
                dispatch(populatePlayers(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchFailure(errorMsg))
            })
    }
}