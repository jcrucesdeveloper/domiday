import React, { Component } from 'react'
import {connect} from 'react-redux';
import Core from './Components/Core';
import API from './Components/backendConnection/api';
import {getDomiItemsDB} from './actions/domiItemsActions';
import styled from 'styled-components';

const DivLoading = styled.div`
background-color: #000;
width: 200px;
height: 200px;
`;



class DomiDay extends Component {

    componentDidMount(){
       this.props.getDomiItemsDB();
    }



    render() {
        return (
            this.props.loading === true ? <DivLoading></DivLoading> : <Core></Core>
        )
    }
}

const mapStateToProps = (state) => ({
    accessToken: state.user.accessToken,
    loading: state.user.loading
});

export default connect(mapStateToProps,{getDomiItemsDB})(DomiDay);