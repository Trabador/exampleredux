import React from 'react'
import { connect } from 'react-redux'
import { addTitular, addSubstitue } from '../../redux/index'
import './TeamList.css'

const TeamList = ({ players, addTitular, addSubstitute }) => {
    return (
        <div>
            <h2>Players</h2>
            {
                players.map(player => {
                    return (
                        <article key={player.id} className='Player'>
                            <img className='PlayerPhoto' src={player.photo} alt={player.name}/>
                            <h3>{player.name}</h3>
                            <div>
                                <button onClick={ () => addTitular(player) }>Titulars</button>
                                <button onClick={ () => addSubstitute(player) }>Substitutes</button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.player.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTitular : (player) => {
            dispatch(addTitular(player))
        },
        addSubstitute: (player) => {
            dispatch(addSubstitue(player))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList)
