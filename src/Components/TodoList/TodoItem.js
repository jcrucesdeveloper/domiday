import React from 'react'
import ButtonX from '../Utilities/ButtonX';
import styled from 'styled-components';
import BoxDiv from '../ReusableComponents/BoxDiv';
import ButtonIcon from '../Utilities/ButtonIcon';

const TodoItemDiv = styled(BoxDiv)`
    height: 7%!important;
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
            this.props.changeTodoItemValue(this.props.id,newValue);
            this.setState({
                typing: false,
                padding: '0.3em'            
            });
        
        }
    }

    render(){
        return(
            <TodoItemDiv padding={this.state.padding} >

                    {
                        this.state.typing === true ? null : this.props.info
                    }
                {this.state.typing === true ? <input  
                        onKeyDown={this.handleEnter}
                        autoFocus/> : null }

               
                <ButtonIcon></ButtonIcon>
            </TodoItemDiv>
        )
    }


}

export default TodoItem;