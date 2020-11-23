import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/index'
import SelectedTeam from '../SelectedTeam/SelectedTeam'
import TeamList from '../TeamList/TeamList'

function TeamManager({ loading, error, fetchUsers }) {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        loading ? (
            <h2>Loading ...</h2>
        ) : error ? (
            <h2>Error {error}</h2>
        ) : (
            <div>
                <TeamList />
                <SelectedTeam />
            </div>
        )
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.fetch.loading,
        error: state.fetch.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamManager)
