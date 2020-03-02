import React from 'react'
import ButtonX from '../Utilities/ButtonX';
import styled from 'styled-components';
import BoxDiv from '../ReusableComponents/BoxDiv';
import ButtonIcon from '../Utilities/ButtonIcon';
import {Draggable} from 'react-beautiful-dnd';

const TodoItemDiv = styled(BoxDiv)`
  
    padding: ${props => props.padding || '0'};

    input {
        width: 100%;
    }
`;


class TodoItem extends React.Component {

    state = {
        typing: true,   
        padding: '0em'
    }

    handleEnter = (e) => {
        if(e.keyCode === 13){
         
            const newValue = e.target.value;
        
            
            this.setState({
                typing: false,
                padding: '0.3em'            
            });
        
        }
    }



    render(){
        return(

            <Draggable>
                {provided => (
                    <TodoItemDiv 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    padding={this.state.padding}
                    ref={provided.innerRef} 
                    >
                    {
                        this.state.typing === true ? null : this.props.info
                    }
                    {   
                        this.state.typing === true ? <input  
                        onKeyDown={this.handleEnter}
                        autoFocus/> : null 
                    }
                    <ButtonIcon></ButtonIcon>
                    </TodoItemDiv>                    




                )}
              

            </Draggable>
        )
    }


}

export default TodoItem;