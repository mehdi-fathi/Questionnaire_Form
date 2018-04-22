import React, { Component } from 'react';
import Form  from "./Form";

import {steps}  from "../Steps/list_steps/list_steps";
import {required}  from "../Validator/validation.js";

class Multi_Form extends Component {
    render() {
        return (
            <Form steps={steps} required={required}>
            </Form>
        );
    }
}

export default Multi_Form;
