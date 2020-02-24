import React from 'react'
import BoxProgress from './BoxProgress';
import '../CSS_components/boxes_CSS.css';


class RightCore extends React.Component {
    render(){
        return(
            <div className="container">
                <BoxProgress 
                    info={this.props.habits}
                    createItem={this.props.createItem}
                    deleteItem={this.props.deleteItem}
                    changeItemValue={this.props.changeItemValue}
                    icon={<i class="far fa-check-square"></i>}
                />
                <BoxProgress
                    info={this.props.objectives} 
                    createItem={this.props.createItem}
                    deleteItem={this.props.deleteItem}
                    changeItemValue={this.props.changeItemValue}
                    icon={<i class="fas fa-award"></i>}
                  
                    />
                <BoxProgress 
                    info={this.props.goals}
                    createItem={this.props.createItem}
                    deleteItem={this.props.deleteItem}
                    changeItemValue={this.props.changeItemValue}
                    icon={<i class="far fa-star"></i>}
                    />
                
            </div>
        )
    }


}

export default RightCore;