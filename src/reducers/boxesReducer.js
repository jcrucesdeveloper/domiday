import {ADD_BOX_ITEM,DELETE_BOX_ITEM,EDIT_BOX_ITEM,GET_BOX_ITEMS} from '../actions/types';

/*
ADD_BOX_ITEM:
  item,
  index,
  category


*/


const initialState= [];

export default function (boxes = initialState ,action){

  switch(action.type){
    case ADD_BOX_ITEM:
      
    
      return boxes.map( box => (box.category === action.category ? {...box, boxItems: Object.assign({...box.boxItems},{[action.index]: action.item}), boxItemsIds: [...box.boxItemsIds, action.index]} : box))
      
    case EDIT_BOX_ITEM: 
    
      return 
    default:
      return boxes;




  }
 
  
   

}