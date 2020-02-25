import React from 'react';
import TimeDay from './TimeDay';
import DomiContainer from './DomiContainer';
import {MonthToText, DayToText} from '../Utilities/Helpers';
import '../CSS_components/domi_CSS.css';


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
            hour: real_hour,
            mouseOn: false
        }
        window.addEventListener('wheel',this.handleScroll);
        
    }

   

 

    render(){
        return(
            <div className="container domiDiv">
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