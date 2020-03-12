import React from 'react'
import DomiItem from './DomiItem';
import {connect} from 'react-redux';
import styled from 'styled-components';





class DomiContainer extends React.Component {
    render(){
        return this.props.domi.map(domi => (
            <DomiItem hour={domi.hour} key={`domi-${domi.hour}`}>
            </DomiItem>))
    }


}
const mapStateToProps = state => ({
    domi: state.day.domi

});

export default connect(mapStateToProps,null)(DomiContainer);