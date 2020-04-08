import {CREATE_DOMI, EDIT_CONTENT_DOMI} from './types';
import {updateDomiIds} from '../actions/userActions';
import {addDomiToBox} from '../actions/boxesActions';
import API from '../Components/backendConnection/api';

export const createDomi = (id,boxId) =>{
    console.log(id,boxId);
    return(dispatch,getState) =>{
       
       const {user} = getState();
       const accessToken = user.accessToken;
       const box_number = parseInt(boxId[4]);
       const box_content = '';

       const data_user = {
           "box_number": box_number,
           "content": box_content,
           "domi_id": id
       }

        const configToken = {
            headers: {
            Authorization: "Bearer " + accessToken
            }
        };


        API.post('/api/domi',data_user ,configToken).then(res => {
            return res.data;
        }).then(data => {
            if(data.status === true) {
                dispatch(createDomiItemSuccess(id,''));
                dispatch(updateDomiIds(id));
                dispatch(addDomiToBox(boxId,id));
            }
      
        }).catch(e => {
            console.log("Internal error");
        });



        
    }

}

export const getDomiItemsDB =  () => {
    return async (dispatch,getState) =>{

        const {user} = getState();
        const accessToken = user.accessToken;


        try {
            
            const configToken = {
                headers: {
                Authorization: "Bearer " + accessToken
                }
            };

            const query = await API.get('/api/domi',configToken);
            const {data} = query;

            // Render everything 
            if(data.status === true){
                const arrayDomiItems = data.domi_items;
                //content, domi_id, box_number 
                
                arrayDomiItems.forEach(item => {
                    const {content, domi_id, box_number } = item;
                    const box_id = `box-${box_number}`;
                    //Call the other actions

                    dispatch(createDomiItemSuccess(domi_id,content));
                    dispatch(updateDomiIds(domi_id));
                    dispatch(addDomiToBox(box_id,domi_id));
                    

                });
            }else{
                return;
            }
            

        }
        catch(e){
            alert(e);
        }
    }
}

const createDomiItemSuccess = (id,content) => ({
    type: CREATE_DOMI,
    content: content,
    id: id
});

export const editContentDomi = (id,content) => {
    return {
        type: EDIT_CONTENT_DOMI,
        id: id,
        content :content
    }
}