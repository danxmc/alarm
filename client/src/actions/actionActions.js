import { GET_ACTIONS, ADD_ACTION, DELETE_ACTION } from './types';

export const getActions = () => {
    return {
        type: GET_ACTIONS
    }
}

export const deleteAction = id => {
    return {
        type: DELETE_ACTION,
        payload: id
    }
}

export const addAction = action => {
    return {
        type: ADD_ACTION,
        payload: action
    }
}