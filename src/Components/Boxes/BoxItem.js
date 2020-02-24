import React from 'react'
import ButtonX from '../Utilities/ButtonX';


class BoxItem extends React.Component {


    handleDeleteItem = () =>{
        const {category,id} = this.props;
        this.props.deleteItem(category,id);
    }

    handleChangeItemValue = (event) => {
        let newValue = event.target.value;
        const {category,id} = this.props;
        this.props.changeItemValue(category,id,newValue)
        
        
    }


    render(){ 
        return(
            <li className="boxItem">
                <input value={this.props.info} onChange={this.handleChangeItemValue}></input>
                <ButtonX buttonFunction={this.handleDeleteItem}/>
            </li>
        )
    }


}

export default BoxItem;