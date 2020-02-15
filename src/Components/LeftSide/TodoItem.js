import React from 'react'
import ButtonX from '../ButtonX'

class TodoItem extends React.Component {

    handleDeleteItem = () => {
        this.props.deleteTodoItemValue(this.props.id);
    }

    handleChangeValue = (event) => {
        let newMessage = event.target.value;
        this.props.changeTodoItemValue(this.props.id,newMessage);
    }
    render(){
        return(
            <li className="boxItem todoItem">
                <input value={this.props.info} onChange={this.handleChangeValue}></input>
                <ButtonX buttonFunction={this.handleDeleteItem} />
            </li>
        )
    }


}

export default TodoItem;