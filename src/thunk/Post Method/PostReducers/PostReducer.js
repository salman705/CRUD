import * as actionCreator from "../PostActions/PostTypes"



const initialState = {
    loading: false,
    posts:[],
    error:''
}

const postReducer = (state = initialState,action) => {
    switch(action.type){
        case actionCreator.MAKE_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionCreator.MAKE_POST_SUCCESS:
            return{
                ...state,
                loading: false,
                posts: [...state.posts, action.payload],
                error: ''
            }
        case actionCreator.MAKE_POST_FAILURE:
            return {
                laoding:false,
                posts: '',
                error: action.payload.error
            }
            default:
                return state
    }
}

export default postReducer

