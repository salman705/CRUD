import {combineReducers} from 'redux'
import postReducer from '../../Post Method/PostReducers/PostReducer'
import getReducer from './Reducer'


export  const rootReducer = combineReducers({
    user: getReducer,
    post: postReducer
})