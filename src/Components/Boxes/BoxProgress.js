import React from 'react';
import BoxItem from './BoxItem';
import ButtonAdd  from '../Utilities/ButtonAdd';
import {Droppable} from 'react-beautiful-dnd';
import styled from  'styled-components';
import TitleDiv from '../ReusableComponents/TitleDiv';
import {connect} from 'react-redux';



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
    render(){
        return(
            <BoxDiv>
                <TitleDiv> 
                    <span></span>
                    <ButtonAdd></ButtonAdd>
                </TitleDiv>

                <Droppable>
                    {(provided) => (
                        <ProgressContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                        


                        {provided.placeholder}
                    </ProgressContainer>


                    )}
                </Droppable>
            </BoxDiv>

        )
    }


}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps,null)(BoxProgress);