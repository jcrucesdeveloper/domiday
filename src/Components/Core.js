import React from 'react';

import ContainerTodo from './TodoList/ContainerTodo';
import ContainerDomi from './DomiPrincipal/ContainerDomi';
import ContainerBoxes from './Boxes/ContainerBoxes';

import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';

import {connect} from 'react-redux';

import {dragSameBox,dragDifferentBox} from '../actions/boxesActions';
import {dragSameTodo} from '../actions/todoActions';
import {dragToDomi} from '../actions/domiActions';






const CoreDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;

`;



class Core extends React.Component {   
    

    //draggableId, type, source, destination
    onDragEnd = result => { 
  
        const {source,destination,draggableId} = result;
        if(result.destination === null) return;
        if(source.index === destination.index && source.droppableId === destination.droppableId) return;

           //drag different box

        if(source.droppableId !== destination.droppableId && destination.droppableId.includes('domi')){
            this.props.dragToDomi(draggableId,destination.droppableId);
            return;
        }
        if( source.droppableId !== destination.droppableId && source.droppableId !== "todoList" && destination.droppableId !=="todoList"){
            this.props.dragDifferentBox(draggableId, source.index ,destination.index ,source.droppableId ,destination.droppableId);   
            
        }
        //box same box
        if((source.index !== destination.index) && ( source.droppableId === destination.droppableId) && (source.droppableId !== "todoList")){
            //Dragableid, indexStart, indexEnd, droppableId
            this.props.dragSameBox(draggableId,source.index,destination.index,source.droppableId);
            
            
        }

     

        //drag same todoList
        if((source.index !== destination.index) && ( source.draggableId === destination.draggableId) && (source.droppableId === "todoList")){
            this.props.dragSameTodo(draggableId, source.index,destination.index);
        }
        return;

        //Drag same box

    
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

export default connect(mapStateToProps,{dragSameBox,dragSameTodo,dragDifferentBox,dragToDomi})(Core);