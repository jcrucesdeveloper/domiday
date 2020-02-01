import React from 'react'
import BoxProgress from './BoxProgress';
import './rightCss/rightcore.css'


class RightCore extends React.Component {
    render(){
        return(
            <div className="container containerBox">
                <BoxProgress info={this.props.habits} createItem={this.props.createItem}/>
                <BoxProgress info={this.props.objectives} createItem={this.props.createItem}/>
                <BoxProgress info={this.props.goals} createItem={this.props.createItem}/>
            </div>
        )
    }


}

export default RightCore;