import {combineReducers} from 'redux';
import dayReducer from './dayReducer';
import boxesReducer from './boxesReducer';
import userReducer from './userReducer';

export default combineReducers({
    day: dayReducer,
    boxes: boxesReducer,
    user: userReducer,
});