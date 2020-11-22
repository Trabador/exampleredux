import React from 'react'
import { connect } from 'react-redux'
import { removeSubstitute } from '../../redux/index'
import './Substitutes.css'

const Substitutes = ({ substitutes, removeSubstitute }) => {
    return (
        <div>
            <h2>Substitutes</h2>
            {
                substitutes.map(substitute => {
                    return (
                        <article key={substitute.id} className='Substitute'>
                            <div>
                                <img className='SubstitutePhoto' src={substitute.photo} alt={substitute.name}/>
                                <button onClick={ () => removeSubstitute(substitute) }>X</button>
                            </div>
                            <p>{substitute.name}</p>
                        </article>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        substitutes: state.player.substitutes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeSubstitute: (player) => {
            dispatch(removeSubstitute(player))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes)