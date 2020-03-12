import React from 'react'
import styled from 'styled-components';

const DomiItemInfo = styled.li`
    font-size: 1.1em;

    border: 2px solid #D8D8D8 ;
    height: 10vh;
    background: #dde1e7;
    border-radius: 5px;
    box-shadow: -0px -1px 7px #ffffffb2, 2px 2px 5px rgba(94, 104, 121, 0.945);
    display: flex;
    justify-content: space-between;
    width: 95%;


`;

const DomiItemText = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
`;


const DomiHour = styled.div`
    background-color: #ffff;
    width: 12%;
    border-radius: 2px;
    text-align: center;
    display: flex;  
    align-items: center;
    justify-content: center;
    font-family: 'Titillium Web', sans-serif;




`;



class DomiInfo extends React.Component {
     

    render(){      
        return(
            <DomiItemInfo>
                <DomiHour>{this.props.hour}:00</DomiHour>
                <DomiItemText>
                    What are you going to do a this hour?
                </DomiItemText>
            </DomiItemInfo>
        )
    }


}

export default DomiInfo;