import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATS = 'FETCH_CATS';
export const FETCH_CAT = 'FETCH_CAT';

const ROOT_URL = 'http://www.tobiasarud.se/wp-json/wp/v2';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?&_embed=true`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchCats(){
    const request = axios.get(`${ROOT_URL}/categories`);
    
    return {
        type: FETCH_CATS,
        payload: request
    }
}

export function fetchCat(id){
    const request = axios.get(`${ROOT_URL}/categories/${id}`);
    
    return {
        type: FETCH_CAT,
        payload: request
    }
}