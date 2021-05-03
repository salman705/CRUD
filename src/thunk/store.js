import {createStore} from 'redux'
import logger from 'redux-logger'
//import composeWithDevTools from 'redux-devtools-extension'
//import reducer from './thunk/Reducer'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../thunk/Get Method/ThunkReducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)))

export default store