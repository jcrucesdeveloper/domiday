import React from 'react'
import DomiItem from './DomiItem';

class DomiContainer extends React.Component {

 
    render(){
        return this.props.activities.map((activity)  =>(<DomiItem key={activity.id} activities={activity}/>
            )
        );
    }


}

export default DomiContainer;