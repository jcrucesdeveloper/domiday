import React from 'react';
import TimeDay from './TimeDay';
import DomiContainer from './DomiContainer';
import '../ComponentsCss/middlecore.css';


class MiddleCore extends React.Component {
    render(){
        return(
            <div className="container">
                <TimeDay/>
                <DomiContainer/>                
            </div>
        )
    }


}

export default MiddleCore;