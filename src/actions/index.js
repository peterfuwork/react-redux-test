import axios from 'axios';
import config from '../config';
import {
    FETCH_USERS,
} from './types';

export const fetchUsers = () => async dispatch => {
    const response = await axios.get(config.url);
    const users = response.data;
    console.log('action users', users)
    dispatch({
        type: FETCH_USERS,
        payload: users
    });
}
