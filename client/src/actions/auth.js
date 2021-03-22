import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE    
} from './types';


// Register User    

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-type':'application/json',
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/users', body, config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            errors.forEach(error => error.dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAILURE
        })
    }
}