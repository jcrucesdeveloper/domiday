import React from 'react'
import {Draggable} from 'react-beautiful-dnd';
import ButtonIcon from '../Utilities/ButtonIcon';
import styled from 'styled-components';
import BoxDiv from '../ReusableComponents/BoxDiv';
import {connect} from 'react-redux';
import {changeInfoBoxItem} from '../../actions/boxesActions';

const BoxDivEdditable = styled(BoxDiv)`
    padding: ${props => props.padding || '0'}
`;


class BoxItem extends React.Component {
    

    state = {
        typing: true,
        padding: '0em'
    }

    
    handleEnter = (e) => {
        if(e.keyCode === 13){
            const newValue = e.target.value;
      
            
  


            this.setState({
                typing: false,
                padding: '0.4em'            
            });
        
        }
    }


    render(){ 
        return(
            <Draggable
                draggableId={this.props.id}
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
                        
                        this.state.typing === true ? null : this.props.data.info
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

const mapStateToProps = (state,ownProps) => ({
    data : state.boxes.find(box => box.category === ownProps.category).boxItems[`${ownProps.category}-${ownProps.index}`]
});

export default connect(mapStateToProps, {changeInfoBoxItem})(BoxItem);