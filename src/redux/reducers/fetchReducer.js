import FetchActions from '../actions/fetchActionTypes'

const initialState = {
    loading: false,
    error: ''
}

const fetchReducer = (state = initialState, { type , payload }) => {
    switch(type){
        case FetchActions.FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FetchActions.FETCH_SUCCESS:
            return {
                loading: false,
                error: ''
            }
        case FetchActions.FETCH_FAILURE:
            return {
                loading: false,
                error: payload
            }
        default: 
            return state
    }
}

export default fetchReducer