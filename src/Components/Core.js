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
    

    //draggableId, type, source, destination
    onDragEnd = result => { 
        const {source,destination,draggableId} = result;
        if(result.destination === null) return;
        if(source.index === destination.index && source.draggableId === destination.draggableId) return;

        if(source.index !== destination.index && source.draggableId === destination.draggableId){
            //Dragableid, indexStart, indexEnd, droppableId
            this.props.dragSameBox(draggableId,source.index,destination.index,source.droppableId);
            
            
        }
        //Drag same box
        console.log(result);
    
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
    info: state
});

export default connect(mapStateToProps,{dragSameBox})(Core);