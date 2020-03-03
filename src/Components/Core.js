import React from 'react';

import ContainerTodo from './TodoList/ContainerTodo';
import ContainerDomi from './DomiPrincipal/ContainerDomi';
import ContainerBoxes from './Boxes/ContainerBoxes';

import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';

import {connect} from 'react-redux';
import {dragSameBox} from '../actions/boxesActions';




const CoreDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;

`;



class Core extends React.Component {

 
    onDragEnd = result => {
        // 5 Cases : 

        const {destination, source, draggableId} = result;

        // 1 - No destination
        if(!destination){ return;}

        // 2 - Same destination
        if( source.droppableId ===  destination.droppableId && source.index == destination.index) {return;}
        
        // 3 - Same column
        if(source.droppableId ===  destination.droppableId && source.index !== destination.index){
            console.log(this.props.state);
            dragSameBox(destination.droppableId,source.index, destination.index);
           
            

        }
        
    }
    
    render(){
    return(
       
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <CoreDiv>
                   
                        <ContainerBoxes />
                        <ContainerDomi  />
                        <ContainerTodo  />
                    </CoreDiv>
                </DragDropContext>
         
        )
    }


}
const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps,{dragSameBox})(Core);