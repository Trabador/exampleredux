import Actions from './ActionTypes'

export const addTitular = (player) => {
    return {
        type: Actions.ADD_TITULAR,
        payload: player
    }
}

export const addSubstitue = (player) => {
    return {
        type: Actions.ADD_SUBSTITUTE,
        payload: player
    }
}

export const removeTitular = (player) => {
    return {
        type: Actions.REMOVE_TITULAR,
        payload: player
    }
}

export const removeSubstitute = (player) => {
    return {
        type: Actions.REMOVE_SUBSTITUTE,
        payload: player
    }
}