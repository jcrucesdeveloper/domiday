import { CREATE_DOMI, EDIT_CONTENT_DOMI} from '../actions/types';

const initialState = {};

const defaultDomi = {content: '', color: 'default', important: false, icon: 'none', editing: true};
export default function(domiItems = initialState, action ){

    switch(action.type){
        case CREATE_DOMI:
            const edit_available = action.content === '' ? true : false;
            const newDomi = Object.assign({},defaultDomi,{id: action.id, content : action.content,editing: edit_available});
            return Object.assign({},domiItems,{[action.id] : newDomi});
        case EDIT_CONTENT_DOMI:
            const itemInfo = Object.assign({},domiItems[action.id]);
            const newItem = Object.assign({},itemInfo, {content: action.content, editing: false});            
            return Object.assign({},domiItems,{[action.id]: newItem});
        default: 
            return domiItems;
    }

 
}