import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux'; 

import {Droppable} from 'react-beautiful-dnd';


import DomiInfo from './DomiInfo';
import DomiFragment from './DomiFragment';

const DomiDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 1em;
    font-family: 'Titillium Web', sans-serif;


`;
const DomiActivitiesContainer= styled.ul`
    background-color: #f2f6fc;
    min-height: 0.001em;
    width: 85%;
    margin: 0;
    padding: 0;
   
    display: flex;
    flex-direction: column;
    align-items: center;
`;



class DomiItem extends Component {
    render() {
        return (
            <DomiDiv>
                <DomiInfo hour={this.props.domiInfo.hour}></DomiInfo>
                <Droppable droppableId={this.props.domiInfo.id}>
              { (provided) =>( 
                    <DomiActivitiesContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                    
                      {this.props.domiInfo.domiIdItems.map((domiId,index) => {
                          const currentDomiFragment = this.props.domiItems[domiId];
                          return <DomiFragment index={index} id={currentDomiFragment.id} key={currentDomiFragment.id} containerId={this.props.id}></DomiFragment>


                      })}
                    
                      


                          {provided.placeholder}
                    </DomiActivitiesContainer>)
                    
                    }
                </Droppable>
            </DomiDiv>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    domiInfo : state.domi[ownProps.id],
    domiItems : state.domiItems,
    userInfo : state.user,
    
});

export default connect(mapStateToProps,null)(DomiItem);    