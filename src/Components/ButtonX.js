import React from 'react';


class ButtonX extends React.Component {

    handleClick = () => {
        this.props.buttonFunction();
    }

    render(){
        return(
            <div className="buttonX button"  onClick={this.handleClick}>
                <div></div>
                <div></div>             
            </div>
        )
    }


}

export default ButtonX;