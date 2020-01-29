import React from 'react';
import TimeDay from './TimeDay';
import DomiContainer from './DomiContainer';
import './midCss/middlecore.css';


class MiddleCore extends React.Component {
    render(){
        return(
            <div className="container">
                <TimeDay/>
                <ul className="domi_container">
                <DomiContainer activities={this.props.activities}/>       
                </ul>
            </div>
        )
    }


}

export default MiddleCore;