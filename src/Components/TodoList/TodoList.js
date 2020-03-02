import React from 'react';
import ButtonAdd from '../Utilities/ButtonAdd';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import TitleDiv from '../ReusableComponents/TitleDiv';
import {Droppable} from 'react-beautiful-dnd';

const TodoDiv = styled.div`
    width: 100%;
    background: #dde1e7;
    border-radius: 5px;
    box-shadow: -1px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);
             
`;

const TodoListContainer = styled.ul`
    margin: 0;
    padding: 1em;
    padding-top: 0.5em;
    overflow-y: scroll;
    height: 50vh;

`;


class TodoList extends React.Component {
    render(){
        return(
             
                 <TodoDiv>
                        <TitleDiv> 
                            <span className="tittleType">To Do list </span>
                            <ButtonAdd></ButtonAdd>
                        </TitleDiv>


                <Droppable droppableId="todoList">                    
               {provided => ( 
                        <TodoListContainer
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                        >

                                    
                                    </TodoListContainer>)}
                    </Droppable>

                </TodoDiv>)
            }
        }
        
    
export default TodoList;