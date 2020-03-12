import React from 'react'
import BoxProgress from './BoxProgress';
import Container from '../ReusableComponents/Container';
import {connect} from 'react-redux';


class ContainerBoxes extends React.Component {
  
   

    render(){
        //Props state: -> boxes [{}] - boxesIds:[ids]
        const {infoBoxes} = this.props;

        return(
            <Container>
                {
                    this.props.infoBoxes.map(idBox => {

                        const currentBox = this.props.boxes[idBox];
                        return <BoxProgress data={currentBox} key={currentBox.id}></BoxProgress>
                    })
                }
            </Container>
        )
    }


}

const mapStateToProps = state => ({
    boxes: state.boxes,
    infoBoxes: state.user.boxIds
    
});

export default connect(mapStateToProps,null)(ContainerBoxes);