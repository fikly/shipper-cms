import {combineReducers} from 'redux';
import generalReducer from './reducers/generalReducer';
import usersReducer from './reducers/usersReducer';
export default combineReducers({
    general: generalReducer,
    users: usersReducer,
});
