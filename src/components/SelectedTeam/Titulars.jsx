import React from 'react'
import { connect } from 'react-redux'
import { removeTitular } from '../../redux/index'
import './Titulars.css'

const Titulars = ({ titulars, removeTitular }) => {
    return (
        <div>
            <h2>Titulars</h2>
            {
                titulars.map(titular => {
                    return (
                        <article key={titular.id} className='Titular'>
                            <div>
                                {/* <img className='TitularPhoto' src={titular.photo} alt={titular.name}/> */}
                                <button onClick={ () => removeTitular(titular) }>X</button>
                            </div>
                            <p>{titular.name}</p>
                        </article>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        titulars: state.player.titulars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTitular: (player) => {
            dispatch(removeTitular(player))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Titulars)