import React from 'react';


class ButtonX extends React.Component {

    handleClick = () => {
        this.props.buttonFunction();
    }

    render(){
        return(
            <button className="button buttonX" onClick={this.handleClick}>
             X
            </button>
        )
    }


}

export default ButtonX;