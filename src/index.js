import React from 'react';

import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import App from './Questionnaire/index.js';
import registerServiceWorker from './registerServiceWorker';
import store from "./Questionnaire/js/store/index";
import { addSteps } from "./Questionnaire/js/actions/index";

import index from "./Questionnaire/js/index";




ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
