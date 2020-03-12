import React, { Component } from 'react'
import DomiInfo from './DomiInfo';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';

const DomiDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 1em;


`;
const DomiActivitiesContainer= styled.ul`
    background-color: white;
    min-height: 0.001em;
    width: 90%;
    margin: 0;
    padding: 0;
    border-radius: 2px;
`;


class DomiItem extends Component {
    render() {
        return (
            <DomiDiv>
                <DomiInfo hour={this.props.hour}></DomiInfo>
                <Droppable droppableId={`domi-${this.props.hour}`}>
              { (provided) =>( 
                    <DomiActivitiesContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >



                          {provided.placeholder}
                    </DomiActivitiesContainer>)
                    
                    }
                </Droppable>
            </DomiDiv>
        )
    }
}

export default DomiItem;    