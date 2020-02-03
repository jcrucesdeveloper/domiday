import React from 'react';
import TimeDay from './TimeDay';
import DomiContainer from './DomiContainer';
import {MonthToText, DayToText} from '../Helpers';
import './midCss/middlecore.css';


class MiddleCore extends React.Component {

    constructor(props){
        super(props);

        const clock = new Date();  

        //Variables for date
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
            hour: real_hour
        }
        window.addEventListener('wheel',this.handleScroll);
        
    }

   

    handleScroll = (event) => {
        let new_y  = this.state.scrollValue;
        let cursor = event.wheelDeltaY;

        if (cursor > 0) new_y = new_y - 5;
        else new_y = new_y + 5;


        this.setState({
            scrollValue : new_y
        });
        
        
    }
 

    render(){
        return(
            <div className="container">
                <TimeDay
                        dayNumber={this.state.dayNumber}
                        dayText ={this.state.dayText}
                        month = {this.state.month}
                        monthText={this.state.monthText}
                        year = {this.state.year}
                />
                

          
                <ul className="domi_container" >
                 
                    <DomiContainer 
                    activities={this.props.activities}
                    changeActivityValue={this.props.changeActivityValue}
                    scrollValue={this.state.scrollValue}
                    currentHour={this.state.hour}
                    />       
                       
                </ul> 
            </div>
        )
    }


}

export default MiddleCore;