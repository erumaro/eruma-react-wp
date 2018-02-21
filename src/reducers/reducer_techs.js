import { FETCH_TECHS, FETCH_TECH } from '../actions/index';

const INITIAL_STATE = { techall: [], tech: [] };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_TECHS:
            return { ...state, techall: action.payload.data };
        case FETCH_TECH:
            return { ...state, tech: action.payload.data };
        default:
            return state;
    }
}