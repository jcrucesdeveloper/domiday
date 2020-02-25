import React from 'react';



class TimeDay extends React.Component {
   
    render(){

        const {monthText,dayNumber,year,dayText} = this.props
        
        return(
            <div className="timeday">
                    <div><button ><i class="fas fa-chevron-left  "></i></button></div>
                        <div>
                                <p>{monthText} {dayNumber}, {year}</p>
                                <p>{dayText}</p>     
                        </div>
                    <div><button><i class="fas fa-chevron-right"></i></button></div>
            </div>
        )
    }


}

export default TimeDay;