import React from 'react';
import Days from '../Utilities/Helpers';
import Day from './Day';
import styled from 'styled-components';

const WeekDiv = styled.div`
    padding: 0.5em;
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;

`;



class WeekItem extends React.Component {

    render(){
        return(
            <WeekDiv>
              
            </WeekDiv>
        )
    }


}

export default WeekItem;