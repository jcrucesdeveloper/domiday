import React from 'react';
import Days from '../Helpers';
import Day from './Day';


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
            <div className="weekItem">
              {Days.map((item,x) => (<Day key={x} letterDay={item} isTheDay={ this.state.day ==x ? '⬆' : ''} />))}
            </div>
        )
    }


}

export default WeekItem;