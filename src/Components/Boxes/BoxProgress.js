import React from 'react';
import styled from  'styled-components';

import TitleDiv from '../ReusableComponents/TitleDiv';
import ButtonAdd  from '../Utilities/ButtonAdd';
import BoxItem from './BoxItem';

import {Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';


import {createDomi} from '../../actions/domiItemsActions';
import {updateDomiIds} from '../../actions/userActions';
import {addDomiToBox} from '../../actions/boxesActions';

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

        const numId = this.props.userInfo.domiIds.length;
        const newId = `domi-${numId}`;

        this.props.createDomi(newId);
        this.props.updateDomiIds(newId);
        this.props.addDomiToBox(this.props.data.id,newId);
        

    }

    render(){

       //Props state: -> box: {} - domiItems { {}}
     const {category,id} = this.props.data;

        return(
            <BoxDiv>
                <TitleDiv> 
                    <span>{category}</span>
                    
                    <ButtonAdd buttonFunction={this.handleAddItem}></ButtonAdd>
                </TitleDiv>

                <Droppable droppableId={id} >
                    {(provided) => (
                        <ProgressContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                  
                        {this.props.boxInfo.map((domiId,index) => {
                            return <BoxItem id={domiId} boxId={this.props.data.id} index={index} key={domiId}></BoxItem>;
                        }) }

                        {provided.placeholder}
                    </ProgressContainer>


                    )}
                </Droppable>
            </BoxDiv>

        )
    }


}

function mapStateToProps(state,ownProps){

    const {boxes} = state;
    
    return {
        boxInfo: boxes[ownProps.data.id].boxItemsIds,
        domiItems : state.domiItems,
        userInfo : state.user
    }
}



export default connect(mapStateToProps,{createDomi,updateDomiIds,addDomiToBox})(BoxProgress);