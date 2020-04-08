import React, { Component } from 'react'
import styled from 'styled-components';
import backgroundSvg from '../Svg/backgroundLogin.svg';

const PromotionCenterDiv = styled.div`
background-color: #F0F8FF;
background-image: url(${backgroundSvg});
background-position: center;
background-size: 70% 70%;
background-repeat: no-repeat;
width: 100%;
height: 100%;
text-align: center;

`;
const MantraP = styled.p`
font-size: 2em;
margin-top: 3em;
`;

const SpanColor = styled.span`
color:  ${props => props.color || "inherit"};
`;

class PromotionDiv extends Component {
    render() {
        return (
            <PromotionCenterDiv>
                <MantraP><SpanColor color="#4563e7">D</SpanColor>omain your time, <SpanColor  color="#ffa500">d</SpanColor>omain your life.</MantraP>
            </PromotionCenterDiv>
        )
    }
}

export default PromotionDiv;