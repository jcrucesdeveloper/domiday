import styled from 'styled-components';

const BoxDiv = styled.div`
    border-radius: 4px;
    background: #ffffff;
    box-shadow: inset 1px 2px 1px #cfcfcf, 
                inset -5px -5px 3px #ffffff;
    margin: 0.4em;
    height:auto;
    font-size: 1em;
    display: grid;
    grid-template-columns: 4fr 1fr ;
    max-width: 100%;

      

    input {
        border-radius: 4px;
        background: #ffffff;
        box-shadow: inset 1px 2px 1px #cfcfcf, 
                    inset -5px -5px 3px #ffffff;
        text-align: center;
        font-family: inherit;
        width: 80%;
        border: 0;
        margin: 0;
        padding: 0.3em;
       
    }
  

`;

export default BoxDiv;