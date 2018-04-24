import React, { Component } from 'react';

class ProgressApp extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        console.log(this.props.steps);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    renderSteps() {
        return this.props.steps.map((s, i)=> (
            <li className={ this.props.currentStep >= i ? 'active' : ''} key={i} value={s}>
            </li>

        ));
    }

    render() {
        return (

            <ul id="progressbar">
                    {this.renderSteps()}
            </ul>
        );
    }
}

export default ProgressApp;
