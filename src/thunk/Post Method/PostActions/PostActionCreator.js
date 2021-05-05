
import axios from 'axios'
import * as actionTypes from './PostTypes'

// Goes For Get Method
export const fetchPostRequest= () => {
    return {
        type: actionTypes.MAKE_POST_REQUEST
        
    }
}

export const fetchPostSuccess= (posts) => {
    return {
        type: actionTypes.MAKE_POST_SUCCESS,
        payload: posts
    }
}

export const fetchPostFailure= (error) => {
    return {
        type: actionTypes.MAKE_POST_FAILURE,
        payload: error
    }
}

//export default FetchUsers
export const fetchPost = () => {
    return function (dispatch) {
        dispatch(fetchPostRequest())
        axios.post('https://rest-api-node.herokuapp.com/users/create',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response => {
             const posts =response
            dispatch(fetchPostSuccess(posts))
        })
        .catch(error => {
            const errors = error.message
            dispatch(fetchPostFailure(errors))
        })
    }
}





