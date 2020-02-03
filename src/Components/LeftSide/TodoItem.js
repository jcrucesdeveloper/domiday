import React from 'react'
import ButtonX from '../ButtonX'

class TodoItem extends React.Component {
    render(){
        return(
            <li className="boxItem todoItem">
                <input ></input>
                <ButtonX />
            </li>
        )
    }


}

export default TodoItem;