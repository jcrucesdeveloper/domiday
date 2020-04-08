import React, { Component } from 'react'
import styled from 'styled-components';
import validateUser from './validateUser';


import {connect} from 'react-redux';
import testValidation from './testValidation';
import { updateAccessToken } from '../../actions/userActions';


const ContainerLoginDiv = styled.div`
padding: 0;
margin : 0;


`;

const ContainerForm = styled.form`
margin: 0;
box-sizing: border-box;
padding: 2em;
padding-bottom: 0;

`;
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;

`;

const InputLogin = styled.input`

    display: block;
    font-size: 1em;
    width: 100%;
    font-weight: lighter;
    border:0px;
    outline: none;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #4b545f;
    background: #fff;
    
    margin: 0.7em;
    margin-left: 0;


    border-bottom:1px solid #ddd;
  
 

`;

const LoginButton = styled.button`
    width: 100%;
    background-color: #fff;
    border: 1px solid #D8D8D8;
    height: 2em;
    color: #696969;
    margin: 0;
`;

const ErrorMessage = styled.p`
    color: #FF0000;
    font-size: 0.8em;
`;

const TinyInfo = styled.p`
    font-size: 0.6em;
    margin :0;
    padding: 0;
`;



class RegisterComponent extends Component {

    constructor(props){
        super(props);
        this.emailInput = React.createRef();
        this.usernameInput = React.createRef();
        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.confirmPasswordInput = React.createRef();
    }

    state = {
        errorMessage : '',
        error: false
    }

    promptError =  (message) => {
        this.setState({
            error: true,
            errorMessage : message
        });
    }
 

    handleRegister = async (e) => {
        //Reset error
        this.setState({
            error: false,
            errorMessage: ''
        });

        e.preventDefault();
        const email = this.emailInput.current.value.trim().toLowerCase();
        const username = this.usernameInput.current.value.trim().toLowerCase();
        const firstName = this.firstNameInput.current.value.trim().toLowerCase();
        const lastName = this.lastNameInput.current.value.trim().toLowerCase();
        const password = this.passwordInput.current.value.trim().toLowerCase();
        const confirmPassword = this.confirmPasswordInput.current.value.trim().toLowerCase();

        const userObject = {
            email,
            username,
            firstName,
            lastName,
            password,
            confirmPassword
        }
        //Validate everything and then use create a new user
        const validUser =  await validateUser(userObject);


        if(validUser.status === false){
            this.promptError(validUser.message);
            
        }else {

            localStorage.setItem('accessToken',validUser.accessToken);
            this.props.updateAccessToken(validUser.accessToken);
        }


       
    }

    handleTestValidation = (e) => {
        e.preventDefault();
        testValidation();
    }

    
    render() {
        return (
            <ContainerLoginDiv>
                <ContainerForm>
                    <InputDiv>
                        <InputLogin type="email" placeholder="Your Email" ref={this.emailInput}></InputLogin>
                    </InputDiv>
                    <InputDiv>
                        <InputLogin type="input" placeholder="Username (max 20 characters)" ref={this.usernameInput}></InputLogin>
                    </InputDiv>
                    <InputDiv>
                        <InputLogin type="input" placeholder="First name" ref={this.firstNameInput}></InputLogin>
                    </InputDiv>
                    <InputDiv>
                        <InputLogin type="input" placeholder="Last name" ref={this.lastNameInput}></InputLogin>
                    </InputDiv>
                    <InputDiv>
                        <InputLogin type="password" placeholder="Password" ref={this.passwordInput} ></InputLogin>
                        <TinyInfo> +5 length, one number, and one character required</TinyInfo>

                    </InputDiv>
                    <InputDiv>
                        <InputLogin type="password" placeholder="Confirm password"ref={this.confirmPasswordInput}></InputLogin>
                    </InputDiv>
                    {this.state.error === true ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage> : null}
                    <LoginButton onClick={this.handleRegister}>Register</LoginButton>
                </ContainerForm>
            </ContainerLoginDiv>
        )
    }
}


export default connect(null,{updateAccessToken})(RegisterComponent);