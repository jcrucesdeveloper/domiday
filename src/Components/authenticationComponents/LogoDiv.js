import React, { Component } from 'react'
import styled from 'styled-components';
import {DomiDayLogo} from '../ReusableComponents/Icons';

const LogoContainer = styled.div`
text-align: center;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
margin-top: -2vh;

`;

const DivLogo = styled.div`

width: 100%;

p{
    margin: 0;
    padding: 0;
}

`;

export default class Logo extends Component {
    render() {
        return (
            <LogoContainer>
              
                   <DivLogo>
                        <DomiDayLogo width="8em" height="9em"></DomiDayLogo>

                   </DivLogo>
                   <p>Welcome back!</p> 
             
            </LogoContainer>
        )
    }
}
