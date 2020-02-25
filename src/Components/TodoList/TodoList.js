import React from 'react';
import ButtonAdd from '../Utilities/ButtonAdd';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
    render(){
        return(
            <div className="todoDiv">
                    <div className="tittle"> 
                        <span className="tittleType">To Do list </span>
                        <ButtonAdd buttonFunction={this.props.addTodoItemValue}></ButtonAdd>
                    </div>


                <ul className="listContainer">
                    {this.props.todoList.map((item) => (<TodoItem 
                    key={item.id}
                    id={item.id}
                    info={item.info}
                    deleteTodoItemValue={this.props.deleteTodoItemValue}
                    changeTodoItemValue={this.props.changeTodoItemValue}

                    />))}
                
                </ul>
            </div>
        )
    }


}

export default TodoList;