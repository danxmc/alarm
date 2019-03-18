import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    action: actionReducer,
    auth: authReducer,
    error: errorReducer
})