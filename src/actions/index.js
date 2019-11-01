import axios from 'axios';
import config from '../config';
import {
    FETCH_USERS,
    FETCH_USER
} from './types';

export const fetchUsers = () => async dispatch => {
    const response = await axios.get(config.url);
    const all_users = response.data;
    dispatch({
        type: FETCH_USERS,
        payload: all_users
    });
}

export const fetchUser = (user_id) => async dispatch => {
    const response = await axios.get(`${config.url}/${user_id}`);
    const user = response.data;
    dispatch({
        type: FETCH_USER,
        payload: user
    });
}

