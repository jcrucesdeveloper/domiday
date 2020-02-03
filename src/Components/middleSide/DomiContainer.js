import React from 'react'
import DomiItem from './DomiItem';

class DomiContainer extends React.Component {

   


    render(){
        return this.props.activities.map((activity)  =>(
            <DomiItem 
            key={activity.id} 
            id={activity.id}
            activities={activity}
            changeActivityValue={this.props.changeActivityValue}
            scrollValue={this.props.scrollValue}
            currentHour={this.props.currentHour}
            
            />
            )
        );
    }


}

export default DomiContainer;