import React, { Component } from 'react';
import styled from 'styled-components';
import API from '../backendConnection/api';
import {connect} from 'react-redux';

import {updateAccessToken} from '../../actions/userActions';


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

const CheckBoxDiv = styled.div`
display: flex; 
flex-direction: row;
font-size: 0.6em;
align-items: center;
padding: 0em;
p{
    margin: 0;
    padding: 0;
}
`;

 class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.keepMeValue = React.createRef();
    }

    state = {
        error: false,
        errorMessage: ''
    }

    validateLogin = (email, password) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase())){
            let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
            if(re.test(password)) {
                return {
                    status: true, errorMessage:''
                }
            }else{
                return {
                    status: false, errorMessage: "Please enter a valid password"
                       }
            }
            
        }
        else{
            return {
                status: false,
                errorMessage: "Please enter a valid email"
            };
        }
    } 

    handleRegister = async (e) => {
        
        e.preventDefault();
        this.setState({
            error: false
        });
        const currentEmail = this.emailInput.current.value;
        const currentPassword = this.passwordInput.current.value;
        const validateObject = this.validateLogin(currentEmail,currentPassword);

        if(validateObject.status === true){
            const query = await API.post('/api/users/login', {"email" : currentEmail, "user_password" : currentPassword});
            const {status,accessToken} = query.data;
    
            //Cool user save the token
            if(status === true){
                //Save the token only if they want us to login 
                if(this.keepMeValue.current.checked){
                    localStorage.setItem('accessToken',accessToken);
                }
                
                this.props.updateAccessToken(accessToken);

                
            }else{
                this.setState({
                    error:true,
                    errorMessage: "Password or email incorrect"
                })
            }
            
            
        }else{
            this.setState({
                error: true,
                errorMessage: validateObject.errorMessage
            })
        }

        }

    render() {
        return (
            <ContainerLoginDiv>
                <ContainerForm>
                    <InputDiv>
                        <InputLogin type="email" placeholder="Your Email" ref={this.emailInput}></InputLogin>
                    </InputDiv>
                    <InputDiv>
                        <InputLogin type="password" placeholder="Password" ref={this.passwordInput}></InputLogin>
                    </InputDiv>
                    <CheckBoxDiv>
                        <input type="checkbox" ref={this.keepMeValue}></input><p>Keep me logged in </p>
                    </CheckBoxDiv>
                    <LoginButton onClick={this.handleRegister}>Log In</LoginButton>
                    {this.state.error === true ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage> : null}

                </ContainerForm>
            </ContainerLoginDiv>
        )
    }
}

export default connect(null,{updateAccessToken})(LoginComponent);