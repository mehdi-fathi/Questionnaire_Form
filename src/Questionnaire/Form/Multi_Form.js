import React, { Component } from 'react';
import Form  from "./Form";

import {steps}  from "../Steps/list_steps/list_steps";

class Multi_Form extends Component {
    render() {
        return (
            <Form steps={steps}>
            </Form>
        );
    }
}

export default Multi_Form;
