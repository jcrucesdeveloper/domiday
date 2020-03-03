import {ADD_BOX_ITEM,DELETE_BOX_ITEM,EDIT_BOX_ITEM,GET_BOX_ITEMS, DRAG_SAME_BOX} from './types';

//Connection with the server here

export const addBoxItem = (newItem,newIndex,category) => {
   return{
        type: ADD_BOX_ITEM,
        item: newItem,
        index: newIndex,
        category: category

    
    };
}

export const changeInfoBoxItem = (newInfo, category,newId) => {
    return {
        type: EDIT_BOX_ITEM,
        info : newInfo,
        category: category,
        id: newId
    };
}

export const dragSameBox = (category,sourceIndex,destinationIndex) => {
    return{
        type: DRAG_SAME_BOX,
        category: category,
        source: sourceIndex,
        destination: destinationIndex
    }
}