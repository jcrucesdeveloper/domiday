import React, { Component } from 'react'
import {connect} from 'react-redux';
import DomiDay from './DomiDay';
import ContainerAuth from './Components/authenticationComponents/ContainerAuth';

import {updateAccessToken} from './actions/userActions';
import API from './Components/backendConnection/api';


class Comprobation extends Component {

    // Create a comprobation
      async componentDidMount(){
        const accessToken = localStorage.getItem('accessToken') || null;

        if(accessToken !== null){  
        const yourConfig = {
            headers: {
               Authorization: "Bearer " + accessToken
            }
         }; 

            try{
                const query = await API.post('/api/users/protected',null ,yourConfig);
                const {status} = query.data;
                if(status === true){
                    this.props.updateAccessToken(accessToken);
                }     
            }catch(e){
                
                localStorage.removeItem('accessToken');
            }
            
         
        }

        
    }


    render() {
        return (
            <div>
                {this.props.user.enter === false ? <ContainerAuth></ContainerAuth>: <DomiDay></DomiDay>}     
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user : state.user

});

export default connect(mapStateToProps,{updateAccessToken})(Comprobation);
