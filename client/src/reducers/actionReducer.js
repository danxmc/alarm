import uuid from 'uuid';
import { GET_ACTIONS, ADD_ACTION, DELETE_ACTION } from '../actions/types'

const initialState = {
    actions: [
        {id: uuid(), type: 'activado'},
        {id: uuid(), type: 'desactivado'},
        {id: uuid(), type: 'activado'},
        {id: uuid(), type: 'desactivado'},
        {id: uuid(), type: 'test'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ACTIONS: return {
            ...state
        };
        default: return state;
    }
}