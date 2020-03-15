import {DRAG_TO_DOMI} from '../actions/types';

const initialState= {};

export default function (domi = initialState,action){
    switch(action.type){
        case DRAG_TO_DOMI:
        const newDomiIdsItems = Array.from(domi[action.containerId].domiIdItems);
        newDomiIdsItems.push(action.domiId);
        const newObject = Object.assign({},domi[action.containerId], {domiIdItems:newDomiIdsItems});
        return Object.assign({},domi,{[action.containerId] : newObject});
        
        default: 
        return domi;
    }


}