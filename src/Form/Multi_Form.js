import React, { Component } from 'react';
import Form  from "../Form/Form";

import {steps}  from "../Steps/list_steps/list_steps";

class App extends Component {
    render() {
        return (
            <Form steps={steps}>
            </Form>
        );
    }
}

export default App;
