import React from 'react'
import BoxProgress from './BoxProgress';
import Container from '../ReusableComponents/Container';
import {connect} from 'react-redux';


class ContainerBoxes extends React.Component {
    render(){
        return(
            <Container>
              {this.props.boxes.map((item) => <BoxProgress category={item.category} key={item.category}></BoxProgress>)}
            </Container>
        )
    }


}

const mapStateToProps = state => ({
    boxes: state.boxes
});

export default connect(mapStateToProps,null)(ContainerBoxes);