import { combineReducers } from 'redux';
import actionReducer from './actionReducer';

export default combineReducers({
    action: actionReducer
})