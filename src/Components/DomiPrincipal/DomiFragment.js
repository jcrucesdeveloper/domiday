import React, { Component } from 'react'
import {Draggable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import {slideInLeft} from 'react-animations';

import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${slideInLeft}`;
const FragmentDiv = styled.div`

animation: 1s ${bounceAnimation};
background: #f2f6fc;
box-shadow:  5px 2px 4px #a0a2a6, 
             -5px -2px 3px #ffffff;
             
    border: 1px solid #D8D8D8;
    
    height:auto;
    font-size: 1.4 em;
    margin: 0.4em;
    display:flex;
    justify-content: space-between;
    align-items: center;

  
    width: 90%;
    p{
        margin: 0;
        padding: 0;
        font-weight: bold;
        font-family: 'Titillium Web', sans-serif;
    }

`;

const NumberDiv = styled.div`
background-color:#fff;
padding: 0.3em;
`;

class DomiFragment extends Component {
    render() {
        return (
            <Draggable draggableId={`${this.props.containerId}-${this.props.id}`} index={this.props.index}>
        {provided => (<FragmentDiv 
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
    >
                    <p> {this.props.domiInfo.content}</p>
                    <NumberDiv>{this.props.index}</NumberDiv>
                </FragmentDiv>)  }
            </Draggable>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    domiInfo : state.domiItems[ownProps.id]
});

export default connect(mapStateToProps,null)(DomiFragment);