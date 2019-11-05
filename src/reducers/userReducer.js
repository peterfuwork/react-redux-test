import { 
    FETCH_USERS,
    FETCH_USER,
    REMOVE_PREV_USER
} from '../actions/types';

const initialState = {
    all_users: [],
    user: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                all_users: action.payload
            };
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            };
        case REMOVE_PREV_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}