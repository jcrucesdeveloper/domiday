
import {ADD_DOMI_TO_BOX, TEST_CHANGE, DRAG_SAME_BOX} from './types';
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

export const dragSameBox = (dragId,sourceIndex,destinationIndex,dropId) =>{
    return {
        type: DRAG_SAME_BOX,
        dragId: dragId,
        sourceIndex: sourceIndex,
        destinationIndex: destinationIndex,
        boxId: dropId
    }
}