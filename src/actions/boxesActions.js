
import {ADD_DOMI_TO_BOX, TEST_CHANGE, DRAG_SAME_BOX, DRAG_DIFFERENT_BOX} from './types';
//Connection with the server here

export const addDomiToBox = (boxId,domiId) => {
    return {
      type: ADD_DOMI_TO_BOX,
      boxId: boxId,
      domiId: domiId
    }
}

export const testChange = () => {
    return {
        type: TEST_CHANGE
    }
}

export const dragSameBox = (draggableId,sourceIndex,destinationIndex,dropId) =>{
    return {
        type: DRAG_SAME_BOX,
        draggableId: draggableId,
        sourceIndex: sourceIndex,
        destinationIndex: destinationIndex,
        boxId: dropId
    }
}

export const dragDifferentBox =  (draggableId,sourceIndex,destinationIndex,sourceId, destinationId) =>{
    return {
        type: DRAG_DIFFERENT_BOX,
        draggableId: draggableId,
        sourceIndex: sourceIndex,
        destinationIndex: destinationIndex,
        sourceId: sourceId,
        destinationId: destinationId
        
    }
} 