
import axios from 'axios'
import * as actionTypes from './PostTypes'

// Goes For Get Method
export const makePostRequest= () => {
    return {
        type: actionTypes.MAKE_POST_REQUEST
        
    }
}

export const makePostSuccess= (posts) => {
    return {
        type: actionTypes.MAKE_POST_SUCCESS,
        payload: posts
    }
}

export const makePostFailure= (error) => {
    return {
        type: actionTypes.MAKE_POST_FAILURE,
        payload: error
    }
}

//export default FetchUsers
export const fetchPost = () => {
    return function (dispatch) {
        dispatch(makePostRequest())
        axios.post('https://rest-api-node.herokuapp.com/users/create',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response => {
             const posts =response
            dispatch(makePostSuccess(posts))
        })
        .catch(error => {
            const errors = error.message
            dispatch(makePostFailure(errors))
        })
    }
}





