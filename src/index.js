import React from 'react';

import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import App from './Components/index.js';
import registerServiceWorker from './registerServiceWorker';
import store from "./Services/Redux/store/index";

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
