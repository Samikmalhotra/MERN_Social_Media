import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_POSTS,
    POSTS_ERROR
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