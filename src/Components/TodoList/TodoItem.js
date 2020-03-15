import React from 'react'
import ButtonX from '../Utilities/ButtonX';
import styled from 'styled-components';
import BoxDiv from '../ReusableComponents/BoxDiv';
import ButtonIcon from '../Utilities/ButtonIcon';
import {Draggable} from 'react-beautiful-dnd';

import {connect} from 'react-redux';

import {editContentDomi} from '../../actions/domiItemsActions';

const TodoItemDiv = styled(BoxDiv)`
  
    padding: ${props => props.padding || '0'};

    input {
        width: 100%;
    }
`;

const ContentP = styled.p`
margin :0;
padding: 0.2em;
`;


class TodoItem extends React.Component {

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

            <Draggable index={this.props.index} draggableId={this.props.id}>
                {provided => (
                    <TodoItemDiv 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    padding={this.state.padding}
                    ref={provided.innerRef} 
                    >
                        {
                           this.state.typing === true ? <input onKeyDown={this.handleEnter} autoFocus></input> : <ContentP>{this.props.domiItem.content}</ContentP>
                        }
                    <ButtonIcon></ButtonIcon>
                    </TodoItemDiv>                    




                )}
              

            </Draggable>
        )
    }


}

const mapStateToProps = (state, ownProps) => ({
    domiItem: state.domiItems[ownProps.id]

});

export default connect(mapStateToProps,{editContentDomi})(TodoItem);