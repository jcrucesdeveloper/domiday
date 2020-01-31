import React from 'react'
import BoxProgress from './BoxProgress';
import './rightCss/rightcore.css'


class RightCore extends React.Component {
    render(){
        return(
            <div className="container containerBox">
                <BoxProgress info={this.props.habits}/>
                <BoxProgress info={this.props.objectives}/>
                <BoxProgress info={this.props.goals}/>
            </div>
        )
    }


}

export default RightCore;