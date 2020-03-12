import {ADD_DOMI_TO_BOX, TEST_CHANGE, DRAG_SAME_BOX} from '../actions/types';
const initialState = {};

export default function (boxes = initialState ,action){
    

    switch(action.type){   
        case ADD_DOMI_TO_BOX:
            const currentBox = Object.assign({}, boxes[action.boxId]);
            const newBoxItemsIds = currentBox.boxItemsIds;
            newBoxItemsIds.push(action.domiId);
            return Object.assign({},boxes, {[action.boxId]:currentBox});
        case DRAG_SAME_BOX: 
            const boxDrag = Object.assign({}, boxes[action.boxId]);
            const updatedBoxItemdsIds =boxDrag.boxItemsIds;
            updatedBoxItemdsIds.splice(action.sourceIndex,1);
            updatedBoxItemdsIds.splice(action.destinationIndex,0,action.dragId);
            return Object.assign({},boxes,{[action.boxId] : boxDrag});
        case TEST_CHANGE: 
            return boxes;

        default: 
            return boxes;
    }

}