import React from 'react';
import styled from 'styled-components';
import {EditPencil} from '../ReusableComponents/Icons';

const Button = styled.button`

border-left: 1px solid #D8D8D8;
border-radius: 4px;


`;



class ButtonIcon extends React.Component {

    handleClick = () => {
        this.props.buttonFunction();
    }

    render(){
        return(
            <Button>
             <EditPencil></EditPencil>
            </Button>
        )
    }


}

export default ButtonIcon;