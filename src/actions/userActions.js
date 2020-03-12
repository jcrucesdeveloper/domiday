import {UPDATE_DOMI_IDS} from './types';

export const updateDomiIds = (id) =>{
    return{
        type: UPDATE_DOMI_IDS,
        id:id
    }
}