import { FETCH_CATS, FETCH_CAT } from '../actions/index';

const INITIAL_STATE = { all: [], cat: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_CATS:
            return { ...state, all: action.payload.data };
        case FETCH_CAT:
            return { ...state, cat: action.payload.data };
        default:
            return state;
    }
}