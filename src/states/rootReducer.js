import {combineReducers} from 'redux';
import generalReducer from './reducers/generalReducer';
export default combineReducers({
    general: generalReducer,
});
