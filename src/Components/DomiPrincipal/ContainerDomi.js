import React from 'react';
import TimeDay from './TimeDay';
import DomiContainer from './DomiContainer';
import {MonthToText, DayToText} from '../Utilities/Helpers';
import Container from '../ReusableComponents/Container';
import styled from 'styled-components';

const ContainerDomi = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DomiUl = styled.ul`
    width: 95%;
    margin: 1em;
    padding:1.4em;
    height: 70vh;
    overflow-y: scroll;
    border-radius: 5px;
    box-shadow: inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692);

`;


class MiddleCore extends React.Component {

    constructor(props){
        super(props);

        const clock = new Date();  
        let dayN = clock.getDate(); 
        let dayT = DayToText(clock.getDay());
        let monthN = clock.getMonth();
        let monthT = MonthToText(monthN);
        let yearN = clock.getFullYear();
        let real_hour = clock.getHours();
       
        let scrollDefaultValue = (real_hour*10) +10 ;



        this.state = {
            scrollValue : scrollDefaultValue,
            dayNumber: dayN,
            dayText: dayT,
            month: monthN,
            monthText: monthT,
            year: yearN,
            hour: real_hour,
            mouseOn: false
        }
        window.addEventListener('wheel',this.handleScroll);
        
    }

   

 

    render(){
        return(
            <ContainerDomi>
                <TimeDay
                        dayNumber={this.state.dayNumber}
                        dayText ={this.state.dayText}
                        month = {this.state.month}
                        monthText={this.state.monthText}
                        year = {this.state.year}
                />
                <DomiUl>
                    <DomiContainer 
                    activities={this.props.activities}
                    changeActivityValue={this.props.changeActivityValue}
                    scrollValue={this.state.scrollValue}
                    currentHour={this.state.hour}
                    />       
                       
                </DomiUl> 
            </ContainerDomi>
        )
    }


}

export default MiddleCore;