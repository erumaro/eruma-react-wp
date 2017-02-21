import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://www.tobiasarud.se/wp-json/wp/v2';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}