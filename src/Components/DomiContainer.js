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
        return(
            <ul className="domi_container">
                <DomiItem />
                <DomiItem />
                <DomiItem />
                <DomiItem />
            </ul>
        )
    }


}

export default DomiContainer;