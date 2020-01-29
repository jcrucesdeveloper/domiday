import React from 'react'
import DomiItem from './DomiItem';

class DomiContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = [
            {dola: 2}
        ]
    }
    render(){
        return this.props.activities.map((activity)  =>(<DomiItem activities={activity}/>
            )
        );
    }


}

export default DomiContainer;