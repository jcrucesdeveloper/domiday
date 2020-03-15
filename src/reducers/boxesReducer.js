import {ADD_DOMI_TO_BOX, TEST_CHANGE, DRAG_SAME_BOX, DRAG_DIFFERENT_BOX} from '../actions/types';
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
            const updatedBoxItemsIds = boxDrag.boxItemsIds;
            updatedBoxItemsIds.splice(action.sourceIndex,1);
            updatedBoxItemsIds.splice(action.destinationIndex,0,action.draggableId);
            return Object.assign({},boxes,{[action.boxId] : boxDrag});
        case DRAG_DIFFERENT_BOX: 
            const sourceBox = Object.assign({},boxes[action.sourceId]); 
            const destinationBox = Object.assign({},boxes[action.destinationId]);
            const sourceBoxIds = sourceBox.boxItemsIds;
            sourceBoxIds.splice(action.sourceIndex,1);
            const destinationBoxIds = destinationBox.boxItemsIds;
            destinationBoxIds.splice(action.destinationIndex,0,action.draggableId);
    
        return Object.assign({},boxes,{[action.sourceId] : sourceBox, [action.destinationId] : destinationBox});
        case TEST_CHANGE: 
            return boxes;

        default: 
            return boxes;
    }

}