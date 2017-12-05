import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_CATS = 'FETCH_CATS';
export const FETCH_CAT = 'FETCH_CAT';
export const FETCH_PAGE = 'FETCH_PAGE';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';

const ROOT_URL = `${wpglobals.rootURL}wp/v2`;

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?&_embed=true`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}?&_embed=true`);
    
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function fetchCats(){
    const request = axios.get(`${ROOT_URL}/categories`);
    
    return {
        type: FETCH_CATS,
        payload: request
    }
}

export function fetchCat(id){
    const request = axios.get(`${ROOT_URL}/posts?categories=${id}&_embed=true`);
    
    return {
        type: FETCH_CAT,
        payload: request
    }
}

export function fetchPage(id){
    const request = axios.get(`${ROOT_URL}/pages/${id}?&_embed=true`);
    
    return {
        type: FETCH_PAGE,
        payload: request
    }
}

export function fetchProjects() {
    const request = axios.get(`${ROOT_URL}/projects?&_embed=true`);
    
    return {
        type: FETCH_PROJECTS,
        payload: request
    };
}

export function fetchProject(id) {
    const request = axios.get(`${ROOT_URL}/projects/${id}?&_embed=true`);
    
    return {
        type: FETCH_PROJECT,
        payload: request
    }
}