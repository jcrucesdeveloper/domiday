import React from 'react';
import ButtonAdd from '../ButtonAdd';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
    render(){
        return(
            <div className="todoList">
                 <div className="tittle"> 
                    <span className="tittleType">To Do list</span>
                    <ButtonAdd></ButtonAdd>
                </div>
                <ul className="todoContainer">
                {this.props.todoList.map((item) => (<TodoItem key={item.id}/>))}
                

                </ul>
            </div>
        )
    }


}

export default TodoList;