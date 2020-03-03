import React from 'react'
import Core from './Components/Core';
import {Provider} from 'react-redux';
import store from './store';


export default function App() {
    return (
        <Provider store={store}><Core></Core></Provider>
    )
}



