import {UPDATE_DOMI_IDS, UPDATE_ACCESS_TOKEN} from './types';

export const updateDomiIds = (id) =>{
    return{
        type: UPDATE_DOMI_IDS,
        id:id
    }
}

export const updateAccessToken = (token) => {
    return{
        type: UPDATE_ACCESS_TOKEN,
        accessToken : token
    }
}