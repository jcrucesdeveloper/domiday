import React from 'react'


class DomiItem extends React.Component {
    render(){
        return(
            <li className="domi_item">
               <div>{this.props.hour} </div>
               <div>{this.props.activity} </div> 
            </li>
        )
    }


}

export default DomiItem;