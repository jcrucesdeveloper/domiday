import {combineReducers} from 'redux';
import dayReducer from './dayReducer';
import boxesReducer from './boxesReducer';
import userReducer from './userReducer';
import domiItemsReducer from './domiItemsReducer';
import testReducer from './testReducer';

export default combineReducers({
    test : testReducer,
    domiItems: domiItemsReducer,
    day: dayReducer,
    boxes: boxesReducer,
    user: userReducer,
});