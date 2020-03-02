import React from 'react';
import TimeDay from './TimeDay';
import DomiContainer from './DomiContainer';
import {MonthToText, DayToText} from '../Utilities/Helpers';
import Container from '../ReusableComponents/Container';
import styled from 'styled-components';

const ContainerDomi = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DomiUl = styled.ul`
    width: 95%;
    margin: 1em;
    padding:1.4em;
    height: 70vh;
    overflow-y: scroll;
    border-radius: 5px;
    box-shadow: inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692);

`;


class MiddleCore extends React.Component {
    render(){
        return(
            <ContainerDomi>
                <TimeDay/>
                <DomiUl>
                    <DomiContainer/>       
                </DomiUl> 
            </ContainerDomi>
        )
    }


}

export default MiddleCore;