
import axios from 'axios'
import * as actionTypes from './actionTypes'

// Goes For Get Method
export const fetchUsersRequest= () => {
    return {
        type: actionTypes.FETCH_USERS_REQUEST
        
    }
}

export const fetchUsersSuccess= (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure= (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAILURE,
        payload: error
    }
}

//export default FetchUsers
export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://rest-api-node.herokuapp.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            const errors = error.message
            dispatch(fetchUsersFailure(errors))
        })
    }
}





