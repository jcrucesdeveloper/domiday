import React from 'react';
import WeekItem from './WeekItem';
import styled from 'styled-components';
import {UserSquare, Menu,Calendar} from '../ReusableComponents/Icons';


const UserDiv = styled.div`
     width: 100%;
    height: 20vh;
    border-radius: 4px;
    background: #dde1e7;
    border-radius: 5px;
    box-shadow: -1px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);
`;

const UserConfigDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1em;
    height: 30%;
    background-color: #F5F5F5;
    border-bottom: 0.04em solid #D8D8D8;
 
  p{
      margin: 0;
    
  }
  div{
      diplay: flex;
      align-items: center;
      justify-content:center;
    img{
        margin: 0;
        padding : 0;
        font-size: 1.2em;
        margin-left: 0.5em;
        margin-top: 0.3em;
        
    }
  }

`;



class UserItem extends React.Component {
    render(){
        return(
            <UserDiv>
                <UserConfigDiv>
                    <p>Welcome back </p>
                    <div>
                        <UserSquare ></UserSquare>
                        <Calendar></Calendar>
                        <Menu></Menu>
                     
                      
                    </div>
                </UserConfigDiv>
                <WeekItem></WeekItem>
                
            </UserDiv>
        )
    }


}

export default UserItem;