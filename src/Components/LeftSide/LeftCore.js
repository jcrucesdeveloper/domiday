import React from 'react';
import UserItem from './UserItem';
import TodoList from './TodoList';
import './leftCss/leftcss.css';


class LeftCore extends React.Component {
    render(){
        return(
            <div className="container leftCore">
                <UserItem userInfo={this.props.userInfo}/>
                <TodoList 
                todoList={this.props.todoList}
                addTodoItemValue={this.props.addTodoItemValue}
                deleteTodoItemValue={this.props.deleteTodoItemValue}
                changeTodoItemValue={this.props.changeTodoItemValue}
                
                />
            </div>
        )
    }


}

export default LeftCore;