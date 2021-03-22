import { defaults } from 'request';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAILURE
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}   

function auth(state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state, 
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAILURE:
            localStorage.removeItem('token');
            return{
                ...state, 
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}

export default auth;