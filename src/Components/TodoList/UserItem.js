import React from 'react';
import WeekItem from './WeekItem';
import styled from 'styled-components';


const UserDiv = styled.div`
    width: 100%;
    height: 90%;
    border-radius: 4px;
    background: #dde1e7;
    border-radius: 5px;
    box-shadow: -1px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);
`;

const UserConfigDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: 1.1em;
    align-items: center;
    background-color: #F5F5F5;
    border-bottom: 0.04em solid #D8D8D8;

`;



class UserItem extends React.Component {
    render(){
        return(
            <UserDiv>
                <UserConfigDiv >
                    <p>Welcome back {this.props.userInfo.firstName}</p>
                    
                    <i className="fas fa-cog"></i>
                </UserConfigDiv>
                <WeekItem></WeekItem>
            </UserDiv>
        )
    }


}

export default UserItem;