import React, { Component } from 'react';
import Form  from "./form";

import {steps}  from "../../Scenes/Steps/list_steps";
import {required}  from "../../Services/Validator/validation.js";

class FormContainer extends Component {
    render() {
        return (
            <Form steps={steps} required={required}>
            </Form>
        );
    }
}

export default FormContainer;
