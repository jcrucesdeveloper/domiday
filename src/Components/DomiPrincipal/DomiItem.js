import React from 'react'
import styled from 'styled-components';

const DomiItemLi = styled.li`
    font-size: 1.1em;
    margin: 1em;

    display: flex;
    justify-content: space-between;
    border: 2px solid #D8D8D8 ;
    height: 10vh;
    background: #dde1e7;
    border-radius: 5px;
    box-shadow: -0px -1px 7px #ffffffb2, 2px 2px 5px rgba(94, 104, 121, 0.945);
`;



class DomiItem extends React.Component {
     

    render(){      
        return(
            <DomiItemLi>
                <div></div>
                <div></div>
            </DomiItemLi>
        )
    }


}

export default DomiItem;