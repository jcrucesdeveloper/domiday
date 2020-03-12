import { CREATE_DOMI, EDIT_CONTENT_DOMI} from '../actions/types';

const initialState = {};

const defaultDomi = {content: '', color: 'default', important: false, icon: 'none'};
export default function(domiItems = initialState, action ){

    switch(action.type){
        case CREATE_DOMI:
            const newDomi = Object.assign({},defaultDomi,{id: action.id});
            return Object.assign({},domiItems,{[action.id] : newDomi});
        case EDIT_CONTENT_DOMI:
            const itemInfo = Object.assign({},domiItems[action.id]);
            const newItem = Object.assign({},itemInfo, {content: action.content});            
            return Object.assign({},domiItems,{[action.id]: newItem});
        default: 
            return domiItems;
    }

 
}