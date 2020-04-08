import React, { Component } from 'react'
import styled from 'styled-components';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import LogoDiv from './LogoDiv';

const BackgroundComponent = styled.div`
background-color: #fff;

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
border-left: 1px solid #D8D8D8;
overflow: scroll;

`;

const HelpDiv = styled.div`
margin: 0;
font-size: 0.8em;
padding: 2em;
p {
    cursor: pointer;
    border: 1px solid #D8D8D8;
    padding: 0.4em;
    margin :0.4em;
    text-align: center;
    
}
`;

const SpanColor = styled.span`
color:  ${props => props.color || "inherit"};
`;

export default class LoginDiv extends Component {

    state = {
        login: true
    }



    changeScreen = () => {
        this.setState({
            login: !this.state.login
        });
    }
    render() {
        return (
            <BackgroundComponent>
                <LogoDiv></LogoDiv>
                {this.state.login === true ? <LoginComponent></LoginComponent> : <RegisterComponent></RegisterComponent>}
              <HelpDiv>

                  {this.state.login === true ?<p onClick={this.changeScreen}>Don't you have an account? <SpanColor color="#4563e7">Register</SpanColor></p> :
                  <p onClick={this.changeScreen}>Have an account? <SpanColor color="#4563e7">Login</SpanColor></p>
                  
                  }
                  
                  <p>Forgot your <SpanColor color="#FFA500" onClick={this.handleLoginClick}>password? </SpanColor></p>
              </HelpDiv>
            </BackgroundComponent>
        )
    }
}
