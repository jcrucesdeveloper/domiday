
import {UPDATE_DOMI_IDS} from '../actions/types';
const initialState= {};

export default function (user= initialState,action){

  switch(action.type){

    case UPDATE_DOMI_IDS:
      const newDomiIds = Array.from(user.domiIds);
      newDomiIds.push(action.id);
      return Object.assign({},user, {domiIds: newDomiIds});
    default:
      return  user;
  }
  

}