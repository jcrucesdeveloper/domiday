import {ADD_DOMI_TO_TODO, DRAG_SAME_TODO} from './types';

export const addDomiToTodo = (id) => {
    return {
        type: ADD_DOMI_TO_TODO,
        id:id
    }
}

export const dragSameTodo = (id,sourceIndex, destinationIndex) => {
    return {
        type: DRAG_SAME_TODO,
        id: id,
        sourceIndex: sourceIndex,
        destinationIndex: destinationIndex
    }
}