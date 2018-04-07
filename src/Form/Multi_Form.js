import React, { Component } from 'react';
import Step_1  from "../Steps/Step_1";
import Step_2  from "../Steps/Step_2";
import Form  from "../Form/Form";

import {steps}  from "../Steps/list_steps/list_steps";

const element=<h1>Welcome to React</h1>;

console.log(steps)

class App extends Component {
    render() {
        return (
            <Form steps={steps}>
            </Form>
        );
    }
}

export default App;
