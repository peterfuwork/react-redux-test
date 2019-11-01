import { 
    FETCH_USERS,
} from '../actions/types';

const users = [];

export default function(state = users, action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        default:
            return state;
    }
}