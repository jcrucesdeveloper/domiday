import React from 'react';
import ButtonAdd from '../Utilities/ButtonAdd';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import TitleDiv from '../ReusableComponents/TitleDiv';
import {Droppable} from 'react-beautiful-dnd';

import {connect} from 'react-redux';

import {createDomi} from '../../actions/domiItemsActions';
import {updateDomiIds} from '../../actions/userActions';
import {addDomiToTodo} from '../../actions/todoActions';

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

    handleAdd = () => {


        const numId = this.props.userInfo.domiIds.length;
        const newId = `domi-${numId}`;

        this.props.createDomi(newId);
        this.props.updateDomiIds(newId);
        this.props.addDomiToTodo(newId);
       
    
    
    }
    render(){
        return(
             
                 <TodoDiv>
                        <TitleDiv> 
                            <span className="tittleType">To Do list </span>
                            <ButtonAdd buttonFunction={this.handleAdd}></ButtonAdd>
                        </TitleDiv>


                <Droppable droppableId={this.props.todoList.id}>                    
               {provided => ( 
                        <TodoListContainer
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                        >
                            {this.props.todoList.todoIds.map((todoId,index) => {
                                const currentTodo = this.props.domiItems[todoId];
                                
                                return <TodoItem data={currentTodo} id={todoId} key={todoId} index={index}></TodoItem>;
                            })} 
                                     {provided.placeholder}
                                    </TodoListContainer>)}
                    </Droppable>

                </TodoDiv>)
            }
        }
 const mapStateToProps = (state, ownProps) => ({
    domiItems : state.domiItems,
    todoList: state.todoList,
    userInfo : state.user,
    


 });       
    
export default connect(mapStateToProps,{createDomi,updateDomiIds,addDomiToTodo})(TodoList);