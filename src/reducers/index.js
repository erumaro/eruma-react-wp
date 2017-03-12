import { combineReducers } from 'redux';
import BlogReducer from './reducer_blog';
import CatsReducer from './reducer_cats';
import PageReducer from './reducer_page';

const rootReducer = combineReducers({
    posts: BlogReducer,
    cats: CatsReducer,
    page: PageReducer
});

export default rootReducer;