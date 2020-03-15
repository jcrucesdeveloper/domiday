import {ADD_DOMI_TO_TODO, DRAG_SAME_TODO} from '../actions/types';

const initialState = {};

export default function(todoList = initialState,action ){
    switch(action.type){
        case ADD_DOMI_TO_TODO:
            const newTodoIds = Array.from(todoList.todoIds);
            newTodoIds.push(action.id);
            return Object.assign({},todoList,{todoIds: newTodoIds});
        case DRAG_SAME_TODO:
            const todoIds = Array.from(todoList.todoIds);
            todoIds.splice(action.sourceIndex,1);
            todoIds.splice(action.destinationIndex,0,action.id);
            return Object.assign({},todoList,{todoIds: todoIds});
        default: 
        return todoList;
    }
}