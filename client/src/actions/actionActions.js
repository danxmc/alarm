import axios from 'axios';
import { GET_ACTIONS, ADD_ACTION, DELETE_ACTION, ACTIONS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getActions = () => dispatch => {
    dispatch(setActionsLoading());
    axios
    .get('/api/actions')
    .then(res => {
        dispatch({
            type: GET_ACTIONS,
            payload: res.data
        })
    }).catch(err => {
        dispatch(
            returnErrors(err.response.data, err.response.status)
        );
    });
}

export const addAction = action => (dispatch, getState) => {
    axios
    .post('/api/actions', action, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: ADD_ACTION,
            payload: res.data
        })
    }).catch(err => {
        dispatch(
            returnErrors(err.response.data, err.response.status)
        );
    });
}

export const deleteAction = id => (dispatch, getState) => {
    axios
    .delete(`/api/actions/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_ACTION,
            payload: id
        })
    }).catch(err => {
        dispatch(
            returnErrors(err.response.data, err.response.status)
        );
    });
}


export const setActionsLoading = () => {
    return {
        type: ACTIONS_LOADING
    }
}