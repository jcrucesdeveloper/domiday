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

    div{
        padding: 1em;
        background-color: #E8E8E8;
    }

    input {
        width: 100%;   
        font-size: .9em;
        text-align: center;
        border: 0;
        font-family: inherit;
        padding: 0;
        box-sizing: border-box;
        background: transparent;
    }
`;



class DomiItem extends React.Component {

    handleChangeActivityValue = (event) =>{
        let newValue = event.target.value;
        const id = this.props.id;
        this.props.changeActivityValue(id,newValue);
        
    }
    
 

    render(){

        const {hour, activity} = this.props.activities;
      
        return(
            <DomiItemLi>
               <div>{hour}</div>
               <input placeholder="What are you going to do at this hour?" 
               value={activity} 
               onChange={this.handleChangeActivityValue}
               disabled
               ></input>
            </DomiItemLi>
        )
    }


}

export default DomiItem;