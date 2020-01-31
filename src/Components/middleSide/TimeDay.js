import React from 'react';
import {MonthToText, DayToText} from '../Helpers';


class TimeDay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dayText : '',
            dayNumber: 0,
            month: 0,
            monthText: '',
            year: 2020
        }
    }


    componentDidMount(){
        const clock = new Date();  

        //Variables for date
        let dayN = clock.getDate();
        
        let dayT = DayToText(clock.getDay());
        let monthN = clock.getMonth();
        let monthT = MonthToText(monthN);
        let yearN = clock.getFullYear();
     
        
        //Set State
        this.setState({
            dayNumber: dayN,
            dayText: dayT,
            month: monthN,
            monthText: monthT,
            year: yearN
        });
        
        
    }
    render(){
        return(
            <div className="timeday">
                <p>{this.state.monthText} {this.state.dayNumber}, {this.state.year}</p>
                <p>{this.state.dayText}</p>
            </div>
        )
    }


}

export default TimeDay;