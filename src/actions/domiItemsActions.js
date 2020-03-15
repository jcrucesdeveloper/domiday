import {CREATE_DOMI, EDIT_CONTENT_DOMI} from './types';


export const createDomi = (id) =>{
    return {
        type: CREATE_DOMI,
        id: id
    }
}

export const editContentDomi = (id,content) => {
    return {
        type: EDIT_CONTENT_DOMI,
        id: id,
        content :content
    }
}