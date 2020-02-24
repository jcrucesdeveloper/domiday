import React from 'react';



class Day extends React.Component {

    render(){
        return(
         <div>
             
             <p>{this.props.letterDay}</p>
             {this.props.isTheDay}
             
         </div>
        )
    }


}

export default Day;