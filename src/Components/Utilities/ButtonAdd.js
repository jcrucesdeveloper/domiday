import React from 'react';


class ButtonAdd extends React.Component {

    handleClick = () => {
        this.props.buttonFunction();
    }
    render(){ 
        return(
            <button className="button" onClick={this.handleClick}>
             +
            </button>
        )
    }


}

export default ButtonAdd;