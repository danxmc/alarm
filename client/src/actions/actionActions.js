import axios from 'axios';
import { GET_ACTIONS, ADD_ACTION, DELETE_ACTION, ACTIONS_LOADING } from './types';

export const getActions = () => dispatch => {
    dispatch(setActionsLoading());
    axios
    .get('/api/actions')
    .then(res => {
        dispatch({
            type: GET_ACTIONS,
            payload: res.data
        })
    });
}

export const addAction = action => dispatch => {
    axios
    .post('/api/actions', action)
    .then(res => {
        dispatch({
            type: ADD_ACTION,
            payload: res.data
        })
    });
}

export const deleteAction = id => dispatch => {
    axios
    .delete(`/api/actions/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_ACTION,
            payload: id
        })
    });
}


export const setActionsLoading = () => {
    return {
        type: ACTIONS_LOADING
    }
}