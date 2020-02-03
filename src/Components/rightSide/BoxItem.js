import React from 'react'


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
                <button onClick={this.handleDeleteItem}>x</button>
            </li>
        )
    }


}

export default BoxItem;