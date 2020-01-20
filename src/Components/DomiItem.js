import React from 'react'


class DomiItem extends React.Component {
    render(){
        return(
            <li className="domi_item">
               <div>{this.props.activities.hour}</div>
               <input placeholder="What are you going to do at this hour?"></input>
            </li>
        )
    }


}

export default DomiItem;