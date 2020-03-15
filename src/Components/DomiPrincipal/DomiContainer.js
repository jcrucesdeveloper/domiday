import React from 'react'
import DomiItem from './DomiItem';
import {connect} from 'react-redux';
import styled from 'styled-components';





class DomiContainer extends React.Component {
    render(){

        return (
        this.props.domiIds.map(domiId => {
            const currentDomi = this.props.domi[domiId];
            return <DomiItem data={currentDomi} key={currentDomi.id} id={currentDomi.id}></DomiItem>;
            
        })
        )
    }


}
const mapStateToProps = state => ({
    domiIds: state.user.domiDivIds,
    domi: state.domi

});

export default connect(mapStateToProps,null)(DomiContainer);