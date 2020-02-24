import React from 'react';
import BoxItem from './BoxItem';
import ButtonAdd  from '../Utilities/ButtonAdd';


class BoxProgress extends React.Component {
    render(){
        const { name, list} = this.props.info;
        const handleCreateItem = () => {
            this.props.createItem(name);
        }
 
        return(
            <div className="box">
                <div className="tittle"> 
                    <span>{name}  {this.props.icon}</span>
                    <ButtonAdd buttonFunction={handleCreateItem}></ButtonAdd>
                </div>

            <ul className="boxprogress_container">
                {list.map((item) => 
                    <BoxItem 
                    key={item.id} 
                    id={item.id} 
                    deleteItem={this.props.deleteItem}
                    category={name}
                    info={item.info}
                    changeItemValue={this.props.changeItemValue}
                    
                    />)}
            </ul>
      
            </div>
        )
    }


}

export default BoxProgress;