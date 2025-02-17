import React from 'react';
import styled from 'styled-components';
import {CheveronLeft, CheveronRight} from '../ReusableComponents/Icons';
import Button from '../ReusableComponents/Button';

import {connect} from 'react-redux';



const TimeDayDiv = styled.div`
    text-align: center;
    font-size: 1.2em;
    padding: 0.3em;
    margin: 0px;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #dde1e7;
    border-radius: 5px;
    box-shadow: inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692);

`;

const TimeDayButtonDiv = styled.div`

`;

const TimeDayP = styled.p`
    margin: 0.08em;
    font-size: 1.2em;

`;

const TimeDayButton = styled(Button)`
    
    box-shadow:  1px 3px 2px #b0b0b0, 
                -3px -2px 4px #ffffff;
    display: flex;
    border-radius: 3px;
    padding: 0.3em
  
`;

// Month String - Day Int - Year Int 
// Day String


class TimeDay extends React.Component {
    
    render(){

        const {currentDay,currentDayString, monthString,year} = this.props.dayInfo;

        return(
            
            <TimeDayDiv>
                    <TimeDayButtonDiv>
                        <TimeDayButton >
                          
                            <CheveronLeft width="1.5em" height="1em" ></CheveronLeft>
                            
                            </TimeDayButton>
                        </TimeDayButtonDiv>
                        <div>
                                <TimeDayP>{monthString} {currentDay}, {year}</TimeDayP>
                                <TimeDayP>{currentDayString}</TimeDayP>     
                        </div>
                    <TimeDayButtonDiv>
                            <TimeDayButton>
                                <CheveronRight width="1.5em" height="1em" />
                            </TimeDayButton>
                    </TimeDayButtonDiv>
            </TimeDayDiv>
        )
    }


}

const mapStateToProps = state => ({
    dayInfo: state.day
});

export default connect(mapStateToProps,null)(TimeDay);