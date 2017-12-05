import { FETCH_PROJECTS, FETCH_PROJECT } from '../actions/index';

const INITIAL_STATE = { all: [], project: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PROJECTS:
            return { ...state, all: action.payload.data };
        case FETCH_PROJECT:
            return { ...state, project: action.payload.data };
        default:
            return state;
    }
}