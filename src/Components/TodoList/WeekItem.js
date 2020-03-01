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

    constructor(props){
        super(props);

        const a  = new Date();
        const currentDay = a.getDay();
        const dayNumber = a.getDate();
        
        

        this.state = {
            day: currentDay
        }
       
    }
    render(){
        return(
            <WeekDiv>
              {Days.map((item,x) => (<Day key={x} letterDay={item} isTheDay={ this.state.day ==x ? '⬆' : ''} />))}
            </WeekDiv>
        )
    }


}

export default WeekItem;