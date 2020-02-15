import React from 'react';



class TimeDay extends React.Component {
   
    render(){

        const {monthText,dayNumber,year,dayText} = this.props
        
        return(
            <div className="timeday">
                <div><i class="fas fa-chevron-left"></i></div>
                <div>
                    <p>{monthText} {dayNumber}, {year}</p>
                        <p>{dayText}</p>     
                </div>
                <div><i class="fas fa-chevron-right"></i></div>
            </div>
        )
    }


}

export default TimeDay;