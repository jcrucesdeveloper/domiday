import React from 'react';



class TimeDay extends React.Component {
   
    render(){

        const {monthText,dayNumber,year,dayText} = this.props
        
        return(
            <div className="timeday">
                <p>{monthText} {dayNumber}, {year}</p>
                <p>{dayText}</p>
            </div>
        )
    }


}

export default TimeDay;