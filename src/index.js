import React from 'react';
import ReactDOM from 'react-dom';
import Core from './Components/Core';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Core />, document.getElementById('root'));

serviceWorker.unregister();
