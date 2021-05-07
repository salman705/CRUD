
import axios from 'axios'
import * as actionTypes from './PostTypes'

// Goes For Get Method
export const makePostRequest= () => {
    return {
        type: actionTypes.MAKE_POST_REQUEST
        
    }
}

export const makePostSuccess= (post) => {
    return {
        type: actionTypes.MAKE_POST_SUCCESS,
        payload: {...post}
    }
}

export const makePostFailure= (error) => {
    return {
        type: actionTypes.MAKE_POST_FAILURE,
        payload: {error}
    }
}

//export default FetchUsers
export const fetchPost = (obj) => {
    return dispatch => {
        dispatch(makePostRequest())
        axios.post('https://rest-api-node.herokuapp.com/users/create', {
        obj})
        .then(res => {
            console.log(res)
            dispatch(makePostSuccess(res.data))
        })
        .catch(err =>{
            dispatch(makePostFailure(err.message))
        })

    }
}
