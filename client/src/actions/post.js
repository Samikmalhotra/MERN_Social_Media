import axios from 'axios';
import {setAlert} from './alert';
import {
    ADD_POST,
    DELETE_POSTS,
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

// Add Likes
export const addLike = (id) => async dispatch =>{
    try {
        const res = await axios.put('/api/posts/like/'+id);

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

// Remove Likes
export const removeLike = (id) => async dispatch =>{
    try {
        const res = await axios.put('/api/posts/unlike/'+id);

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

// Delete Posts
export const deletePost = (id) => async dispatch =>{
    try {
        await axios.delete('/api/posts/'+id);

        dispatch({
            type: DELETE_POSTS,
            payload: id
        });

        dispatch(setAlert('Post Removed', 'success'))
    } catch (e) {
        dispatch({
            type: POSTS_ERROR,
            payload:  {msg: e.response.statusText, status: e.response.status}
        });        
    }
};

// Add Posts
export const addPost = (formData) => async dispatch =>{
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/posts', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });

        dispatch(setAlert('Post Created', 'success'))
    } catch (e) {
        dispatch({
            type: POSTS_ERROR,
            payload:  {msg: e.response.statusText, status: e.response.status}
        });        
    }
};