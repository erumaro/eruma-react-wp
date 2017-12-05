import { combineReducers } from 'redux';
import BlogReducer from './reducer_blog';
import CatsReducer from './reducer_cats';
import PageReducer from './reducer_page';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
    posts: BlogReducer,
    cats: CatsReducer,
    page: PageReducer,
    projects: ProjectsReducer
});

export default rootReducer;