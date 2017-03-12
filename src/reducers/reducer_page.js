import { FETCH_PAGE } from '../actions/index';

const INITIAL_STATE = { pages: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PAGE:
            return { ...state, pages: action.payload.data };
        default:
            return state;
    }
}