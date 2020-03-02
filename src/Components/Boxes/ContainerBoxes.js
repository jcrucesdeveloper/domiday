import React from 'react'
import BoxProgress from './BoxProgress';
import Container from '../ReusableComponents/Container';
import {connect} from 'react-redux';


class ContainerBoxes extends React.Component {
    render(){
        return(
            <Container>
              {console.log(this.props.boxes)}
            </Container>
        )
    }


}

const mapStateToProps = state => ({
    boxes: state
});

export default connect(mapStateToProps,null)(ContainerBoxes);