import React from 'react'
import BoxProgress from './BoxProgress';
import './rightCss/rightcore.css'


class RightCore extends React.Component {
    render(){
        return(
            <div className="container containerBox">
                <BoxProgress/>
                <BoxProgress/>
                <BoxProgress/>
            </div>
        )
    }


}

export default RightCore;