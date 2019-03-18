import {
    GET_ACTIONS,
    ADD_ACTION,
    DELETE_ACTION,
    ACTIONS_LOADING
} from '../actions/types'

const initialState = {
    actions: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ACTIONS:
            return {
                ...state,
                actions: action.payload,
                loading: false
            };
        case DELETE_ACTION:
            return {
                ...state,
                actions: state.actions.filter(actionUser => actionUser._id !== action.payload)
            };
        case ADD_ACTION:
            return {
                ...state,
                actions: [action.payload, ...state.actions]
            };
        case ACTIONS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}