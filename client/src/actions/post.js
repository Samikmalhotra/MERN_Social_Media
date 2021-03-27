import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_POSTS,
    POSTS_ERROR,
    UPDATE_LIKES
} from './types'

// Get Posts
export const getPosts = () => async dispatch =>{
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload:res.data
        });
    } catch (e) {
        dispatch({
            type: POSTS_ERROR,
            payload:  {msg: e.response.statusText, status: e.response.status}
        });        
    }
};

// Add posts
export const addLike = (postId) => async dispatch =>{
    try {
        const res = await axios.put('/api/posts/like'+postId);

        dispatch({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        });
    } catch (e) {
        dispatch({
            type: POSTS_ERROR,
            payload:  {msg: e.response.statusText, status: e.response.status}
        });        
    }
};

// Add posts
export const removeLike = (postId) => async dispatch =>{
    try {
        const res = await axios.put('/api/posts/unlike'+postId);

        dispatch({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        });
    } catch (e) {
        dispatch({
            type: POSTS_ERROR,
            payload:  {msg: e.response.statusText, status: e.response.status}
        });        
    }
};