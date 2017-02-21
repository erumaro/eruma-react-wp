import { combineReducers } from 'redux';
import BlogReducer from './reducer_blog';

const rootReducer = combineReducers({
    posts: BlogReducer
});

export default rootReducer;