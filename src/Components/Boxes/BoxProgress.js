import React from 'react';
import BoxItem from './BoxItem';
import ButtonAdd  from '../Utilities/ButtonAdd';
import {Droppable} from 'react-beautiful-dnd';
import styled from  'styled-components';
import TitleDiv from '../ReusableComponents/TitleDiv';
import {connect} from 'react-redux';
import {addBoxItem} from '../../actions/boxesActions';



const BoxDiv = styled.div`
    border-radius: 16px;
    background: #dde1e7;
    border-radius: 5px;
    box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);
    margin: 1em;
`;



const ProgressContainer = styled.ul`
    margin: 0;
    padding: 0.5em;
    overflow-y: scroll;
    height: 20vh;
`;




class BoxProgress extends React.Component {

    handleAddItem = () => {

        const newId = this.props.items.boxItemsIds.length;
        const newIndex = `${this.props.category}-${newId}`;
    
        const newItem = {
                id: newId,
                info: '',
                color: '#fffff'
            
        }
    
        this.props.addBoxItem(newItem,newIndex,this.props.category);
    }

    render(){
        return(
            <BoxDiv>
                <TitleDiv> 
                    <span>{this.props.category}</span>
                    
                    <ButtonAdd buttonFunction={this.handleAddItem}></ButtonAdd>
                </TitleDiv>

                <Droppable droppableId={this.props.category} >
                    {(provided) => (
                        <ProgressContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                       
                        >
                        

                   
                        {
                            this.props.items.boxItemsIds.map((boxids,index) => {
                                const boxItem = this.props.items.boxItems[boxids];
                                return <BoxItem 
                                        category={this.props.category} 
                                        key={boxItem.id}
                                        id={boxids}
                                        index={index}
                                
                                ></BoxItem>
                                
                                })
                        }

                        {provided.placeholder}
                    </ProgressContainer>


                    )}
                </Droppable>
            </BoxDiv>

        )
    }


}

const mapStateToProps = (state, ownProps) => ({
    items:  state.boxes.find(box => box.category === ownProps.category)
});



export default connect(mapStateToProps,{addBoxItem})(BoxProgress);