import React from 'react'
import {Draggable} from 'react-beautiful-dnd';
import ButtonIcon from '../Utilities/ButtonIcon';
import styled from 'styled-components';
import BoxDiv from '../ReusableComponents/BoxDiv';

const BoxDivEdditable = styled(BoxDiv)`
    padding: ${props => props.padding || '0'}
`;


class BoxItem extends React.Component {
    

    state = {
        typing: true,
        padding: '0em'
    }

    handleDeleteItem = () =>{
        const {category,id} = this.props;
        this.props.deleteItem(category,id);
    }

   


    handleEnter = (e) => {
        if(e.keyCode === 13){
         
            const newValue = e.target.value;
            const {category,id} = this.props;
            this.props.changeItemValue(category,id,newValue);
            this.setState({
                typing: false,
                padding: '0.4em'            
            });
        
        }
    }


    render(){ 
        return(
            <Draggable
                draggableId={this.props.idDraggable}
                index={this.props.index}
            >
                {provided => (
                    <BoxDivEdditable
                    padding={this.state.padding} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    
                    >
                    {
                        this.state.type === true ? null : this.props.info
                    }

                    {this.state.typing === true ? <input  
                    onKeyDown={this.handleEnter}
                    autoFocus/> : null }
                
                    <ButtonIcon></ButtonIcon>
                    
                
                </BoxDivEdditable>
                )}
                
            </Draggable>
        )
    }


}

export default BoxItem;