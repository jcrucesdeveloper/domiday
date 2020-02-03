import React from 'react';


class ButtonAdd extends React.Component {

    handleClick = () => {
        this.props.buttonFunction();
    }
    render(){ 
        return(
            <div className="button add" onClick={this.handleClick}>
                <div></div>
                <div></div>             
            </div>
        )
    }


}

export default ButtonAdd;