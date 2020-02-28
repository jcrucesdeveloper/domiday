import React from 'react'
import BoxProgress from './BoxProgress';
import Container from '../ReusableComponents/Container';

class RightCore extends React.Component {
    render(){
        return(
            <Container>
                <BoxProgress 
                    info={this.props.habits}
                    createItem={this.props.createItem}
                    deleteItem={this.props.deleteItem}
                    changeItemValue={this.props.changeItemValue}
                    icon={<i className="far fa-check-square"></i>}
                />
                <BoxProgress
                    info={this.props.objectives} 
                    createItem={this.props.createItem}
                    deleteItem={this.props.deleteItem}
                    changeItemValue={this.props.changeItemValue}
                    icon={<i className="fas fa-award"></i>}
                  
                    />
                <BoxProgress 
                    info={this.props.goals}
                    createItem={this.props.createItem}
                    deleteItem={this.props.deleteItem}
                    changeItemValue={this.props.changeItemValue}
                    icon={<i className="far fa-star"></i>}
                    />
                
            </Container>
        )
    }


}

export default RightCore;