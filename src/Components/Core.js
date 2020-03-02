import React from 'react';

import ContainerTodo from './TodoList/ContainerTodo';
import ContainerDomi from './DomiPrincipal/ContainerDomi';
import ContainerBoxes from './Boxes/ContainerBoxes';

import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';

import {Provider} from 'react-redux';
import store from '../store';




const CoreDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;

`;



class Core extends React.Component {

 
    onDragEnd = result => {
    //Todo: keep the state
    }
    
    render(){
    return(
        <Provider store={store}>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <CoreDiv>
                        <ContainerBoxes />
                        <ContainerDomi  />
                        <ContainerTodo  />
                    </CoreDiv>
                </DragDropContext>
            </Provider>
        )
    }


}

export default Core;