import React, { Component } from 'react'
import styled from 'styled-components';
import PromotionDiv from './PromotionDiv';
import LoginDiv from './LoginDiv';

const CenterComponents = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const CenterDiv = styled.div`
    width: 90vw;
    height: 90vh;
    background-color: #F8F8FF;
    display: grid;
    grid-template-columns: 3fr 1fr;
    
    

`


 class ContainerAuth extends Component {
    render() {
        return (
            <CenterComponents>
                <CenterDiv>
                    <PromotionDiv></PromotionDiv>
                    <LoginDiv></LoginDiv>

                </CenterDiv>
            </CenterComponents>
        )
    }
}

export default ContainerAuth;