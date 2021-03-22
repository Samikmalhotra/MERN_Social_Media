import { SET_ALERT, REMOVE_ALERT } from './types';
import {v4} from 'uuid';

export const setAlert = (msg, alertType) => dispatch => {
    const uuid = v4();
    const id = uuid;;
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    });
}
