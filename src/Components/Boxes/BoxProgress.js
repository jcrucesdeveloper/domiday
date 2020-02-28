import React from 'react';
import BoxItem from './BoxItem';
import ButtonAdd  from '../Utilities/ButtonAdd';
import {Droppable} from 'react-beautiful-dnd';
import styled from  'styled-components';
import TitleDiv from '../ReusableComponents/TitleDiv';



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
        const { name, list} = this.props.info;
        const handleCreateItem = () => {
            this.props.createItem(name);
        }
 
        return(
           

               
                    <BoxDiv>
                        <TitleDiv> 
                            <span>{name}  {this.props.icon}</span>
                           
                            <ButtonAdd buttonFunction={handleCreateItem}></ButtonAdd>
                        </TitleDiv>

                <Droppable
                    droppableId={name}
                    >
                        {(provided) => (
                             <ProgressContainer
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                >
                             {list.map((item, index) => 
                                 <BoxItem 
                                 key={item.id} 
                                 index={index}
                                 id={item.id} 
                                 deleteItem={this.props.deleteItem}
                                 category={name}
                                 info={item.info}
                                 changeItemValue={this.props.changeItemValue}
                                 idDraggable={`element-${index}`}
                                 
                                 />)}
                                 {provided.placeholder}
                          </ProgressContainer>


                        )}

               

                </Droppable>
                </BoxDiv>

                
                
            
          
        )
    }


}

export default BoxProgress;