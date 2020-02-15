import React from 'react';
import WeekItem from './WeekItem';


class UserItem extends React.Component {
    render(){
        return(
            <div className="userItem">
                <div className="userConfig">
                    <p>Welcome back {this.props.userInfo.firstName}</p>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-cog"></i>
                </div>
                <WeekItem></WeekItem>
            </div>
        )
    }


}

export default UserItem;