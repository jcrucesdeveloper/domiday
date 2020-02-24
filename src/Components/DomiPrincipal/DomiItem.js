import React from 'react'


class DomiItem extends React.Component {


    

    handleChangeActivityValue = (event) =>{
        let newValue = event.target.value;
        const id = this.props.id;
        this.props.changeActivityValue(id,newValue);
        
    }
    
 

    render(){

        const {hour, activity} = this.props.activities;
      
        return(
            <li className={ this.props.id >= this.props.currentHour ? 'domi_item ' : 'domi_item timepassed'} style={{bottom: `${this.props.scrollValue}vh`}}>
               <div>{hour}</div>
               <input placeholder="What are you going to do at this hour?" 
               value={activity} 
               onChange={this.handleChangeActivityValue}
               ></input>
            </li>
        )
    }


}

export default DomiItem;