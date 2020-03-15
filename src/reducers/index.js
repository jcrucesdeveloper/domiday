import {combineReducers} from 'redux';
import dayReducer from './dayReducer';
import boxesReducer from './boxesReducer';
import userReducer from './userReducer';
import domiItemsReducer from './domiItemsReducer';
import testReducer from './testReducer';
import todoListReducer from './todoListReducer';
import domiReducer from './domiReducer';


export default combineReducers({
    domi: domiReducer,
    todoList: todoListReducer,
    test : testReducer,
    domiItems: domiItemsReducer,
    day: dayReducer,
    boxes: boxesReducer,
    user: userReducer,
});