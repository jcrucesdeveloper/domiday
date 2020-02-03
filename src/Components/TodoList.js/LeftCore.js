import React from 'react';
import UserItem from './UserItem';
import TodoList from './TodoList';
import './leftCss/leftcss.css';


class LeftCore extends React.Component {
    render(){
        return(
            <div className="container leftCore">
                <UserItem/>
                <TodoList/>
            </div>
        )
    }


}

export default LeftCore;