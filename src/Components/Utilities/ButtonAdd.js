import React from 'react';
import Button from '../ReusableComponents/Button';


class ButtonAdd extends React.Component {

    handleClick = () => {
        this.props.buttonFunction();
    }
    render(){ 
        return(
            <Button onClick={this.handleClick}>
            +
            </Button>
        )
    }


}

export default ButtonAdd;