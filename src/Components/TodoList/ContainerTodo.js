import React from 'react';
import UserItem from './UserItem';
import TodoList from './TodoList';
import styled from 'styled-components';
import Container from '../ReusableComponents/Container';


const TodoContainerDiv = styled(Container)`
    display: grid;
    grid-template-rows: 2fr 5fr;

`;



class LeftCore extends React.Component {
    render(){
        return(
            <TodoContainerDiv>
                <UserItem />
                <TodoList />
            </TodoContainerDiv>
        )
    }


}

export default LeftCore;