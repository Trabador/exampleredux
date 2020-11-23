import Actions from '../actions/ActionTypes'

const initialState = {
    /* players: [
        {
            id: 1,
            name: 'RX 78 2',
            photo: 'https://i.redd.it/9se5il51xcy41.png'
        },
        {
            id: 2,
            name: 'Exia',
            photo: 'https://pbs.twimg.com/profile_images/1018282640875630592/A6_H4Wio_400x400.jpg'
        },
        {
            id: 3,
            name: 'Unicorn',
            photo: 'https://i.ebayimg.com/images/g/hMUAAOSwLs9aXHJT/s-l300.jpg'
        },
        
    ], */
    players: [],
    titulars: [],
    substitutes: []
}

const playersReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case Actions.ADD_TITULAR:
            return {
                ...state,
                titulars: [...state.titulars, payload],
                players: state.players.filter(players => players.id !== payload.id)
            }
        case Actions.ADD_SUBSTITUTE:
            return {
                ...state,
                substitutes: [...state.substitutes, payload],
                players: state.players.filter(player => player.id !== payload.id)
            }
        case Actions.REMOVE_TITULAR:
            return {
                ...state,
                players: [...state.players, payload],
                titulars: state.titulars.filter(titular => titular.id !== payload.id)
            }
        case Actions.REMOVE_SUBSTITUTE:
            return {
                ...state,
                players: [...state.players, payload],
                substitutes: state.substitutes.filter(substitute => substitute.id !== payload.id)
            }
        case Actions.POPULATE_PLAYERS:
            return {
                ...state,
                players: payload
            }
        default: 
            return state
    }
}

export default playersReducer