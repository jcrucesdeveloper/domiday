import React from 'react';
import styled from 'styled-components';
import {ArrowUp} from '../ReusableComponents/Icons';


const WeekDiv = styled.div`
    margin: 0;
    padding: 0;
    p{
        margin: 0.3em;
        padding: 0;
    }
    p:first-child{
        font-size: 0.8em;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`;




class Day extends React.Component {

    render(){
        return(
         <WeekDiv>
             <p>{this.props.day}</p>
             <p>{this.props.letter}</p>
             {this.props.isTheDay ? <ArrowUp></ArrowUp> : null}
         </WeekDiv>
        )
    }


}

export default Day;