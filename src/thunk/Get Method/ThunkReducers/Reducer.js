import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../ThunkActions/actionTypes"



const initialState = {
    loading: false,
    users:[],
    error:''
}

const getReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                laoding:false,
                users: '',
                error: action.payload.error
            }
            default:
                return state
    }
}

export default getReducer