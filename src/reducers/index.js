import { combineReducers } from 'redux';
import BlogReducer from './reducer_blog';
import CatsReducer from './reducer_cats';

const rootReducer = combineReducers({
    posts: BlogReducer,
    cats: CatsReducer
});

export default rootReducer;