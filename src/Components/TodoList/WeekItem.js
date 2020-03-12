import React from 'react';
import Day from './Day';
import styled from 'styled-components';
import Days from '../Utilities/Helpers';
import {connect} from 'react-redux';


const WeekDiv = styled.div`
    padding: 0.5em;
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;

`;



class WeekItem extends React.Component {


    constructor(props){
        super(props);
   
        let newArrayDays = [];
        const dayOfTheWeek = this.props.infoWeek.dayOfTheWeek;
        let lastDayMonth = this.props.infoWeek.dayOfMonth;
        const lastDayPastMonth = this.props.infoWeek.dayOfPastMonth
        const currentDate = this.props.infoWeek.currentDay;
      

        let newValue = currentDate - dayOfTheWeek;
        if(newValue <= 0){
            newValue = (lastDayPastMonth - dayOfTheWeek) +1;
            lastDayMonth = lastDayPastMonth;
            console.log(lastDayMonth);
        }
        

        for(let i = 0; i < 7; i++){
           

            let isTheDay = false;

            if(newValue > lastDayMonth) newValue = 1;

            if(newValue === currentDate) isTheDay = true;
            let dayObject = {
                day: newValue,
                dayLetter: Days[i],
                isTheDay: isTheDay
            };
            newArrayDays.push(dayObject);
            newValue++;
        

        }
        this.state ={
            arrayOfDays: newArrayDays
        }
       
         
    }
  

    
    render(){
        return(
            
            <WeekDiv>
                {this.state.arrayOfDays.map(item =><Day 
                key={`day-${item.day}`}
                letter={item.dayLetter}
                day={item.day}
                isTheDay={item.isTheDay}
                
                ></Day>)}
            
    
            </WeekDiv>)
  
            }
        }

const mapStateToProps = state => ({
    infoWeek: state.day
});

export default connect(mapStateToProps, null)(WeekItem);