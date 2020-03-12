import React from 'react'
import {Draggable} from 'react-beautiful-dnd';
import ButtonIcon from '../Utilities/ButtonIcon';
import styled from 'styled-components';
import BoxDiv from '../ReusableComponents/BoxDiv';
import {connect} from 'react-redux';

import {editContentDomi} from '../../actions/domiActions';




const BoxDivEdditable = styled(BoxDiv)`
    
`;

const ContentP = styled.p`
margin :0;
padding: 0.2em;
`;


class BoxItem extends React.Component {
    
 
    state = {
        typing : true
    };

 
    handleEnter = (e) => {
        if(e.keyCode === 13){
            const value = e.target.value;
            
            this.props.editContentDomi(this.props.id,value);
            this.setState({typing: false});
        }
    }


    render(){ 
     
        return(
            <Draggable draggableId={this.props.id} index={this.props.index} >
                {provided => (
                    <BoxDivEdditable
                        
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}>

                      
                        {
                           this.state.typing === true ? <input onKeyDown={this.handleEnter}></input> : <ContentP>{this.props.domiItem.content}</ContentP>
                        }
                    <ButtonIcon></ButtonIcon>
                </BoxDivEdditable>
                )}
                
            </Draggable>
        )
    }


}

const mapStateToProps = (state,ownProps) => ({
    domiItem: state.domiItems[ownProps.id]
  

});

export default connect(mapStateToProps, {editContentDomi})(BoxItem);