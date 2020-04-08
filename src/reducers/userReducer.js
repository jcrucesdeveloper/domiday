
import {UPDATE_DOMI_IDS, UPDATE_ACCESS_TOKEN} from '../actions/types';
const initialState= {};

export default function (user= initialState,action){

  switch(action.type){

    case UPDATE_DOMI_IDS:
      const newDomiIds = Array.from(user.domiIds);
      newDomiIds.push(action.id);
      return Object.assign({},user, {domiIds: newDomiIds});
    case UPDATE_ACCESS_TOKEN:
      return Object.assign({},user,{accessToken: action.accessToken, enter: true});
    return user;
    default:
      return  user;
  }
  

}