import React, { Component } from 'react'
import {Provider} from 'react-redux';
import store from './store';
import Comprobation from './Comprobation';

class App extends Component {

    render() {
        return (
        <Provider store={store}>
            <Comprobation></Comprobation>
         </Provider>
        )
    }
}
export default App;
