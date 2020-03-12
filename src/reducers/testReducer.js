import {TEST_CHANGE} from '../actions/types';

const initialTest = {value1: "godsila",
password: ""
};


export default function(state =initialTest, action){

    switch(action.type){
        case TEST_CHANGE:
            console.log(state);
            return Object.assign({},state,{values: ["lol","caca"]});
        default:
            return state;
    }
    
}